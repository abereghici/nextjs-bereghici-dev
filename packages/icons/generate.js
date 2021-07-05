/* eslint-disable no-console */
import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import camelcase from 'camelcase';
import chalk from 'chalk';
import prettier from 'prettier';
import svgr from '@svgr/core';

const ASSETS_DIR = `assets`;
const DESTINATION_DIR = `src`;

const icons = glob.sync(`${ASSETS_DIR}/**.svg`);

let iconsData = [];

const iconComponentTemplate = (
  { template },
  _,
  { imports, componentName, jsx }
) =>
  template.smart({ plugins: ['typescript'] }).ast`
      ${imports}
      ${'\n'}
      const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
      ${'\n'}
      export default ${componentName};
  `;

const getComponentTemplate = ({ icon, componentName }) => {
  const svg = fs.readFileSync(icon, 'utf8');
  const componentCode = svgr.default.sync(
    svg,
    {
      template: iconComponentTemplate,
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      svgoConfig: {
        plugins: [{ convertColors: { currentColor: true } }],
      },
      svgProps: {
        height: '24px',
        width: '24px',
        viewBox: '0 0 24 24',
      },
    },
    { componentName }
  );

  return `
  ${'\n'}
  // WARNING: This file was automatically generated and should not be edited
  ${'\n'}
  ${componentCode}
  `;
};

const getIconsData = files => {
  const iconsObj = files.map(icon => {
    const iconName = path.parse(icon).name.toLowerCase();
    const componentName = camelcase(iconName, { pascalCase: true });
    const code = getComponentTemplate({ icon, componentName });
    return {
      iconName,
      componentName,
      code,
    };
  });

  return iconsObj;
};

const generateIndexTemplate = files => {
  const indexFile = `
  // WARNING: This file was automatically generated and should not be edited.
    export type IconName = ${files
      .map(({ iconName }) => `'${iconName}'`)
      .join('|')};
    `;

  fs.writeFileSync(
    `${DESTINATION_DIR}/index.d.ts`,
    prettier.format(indexFile, { parser: 'babel' })
  );
};

const generateIconFiles = files => {
  for (const { componentName, code } of files) {
    try {
      fs.writeFileSync(
        `${DESTINATION_DIR}/${componentName}.tsx`,
        prettier.format(code, { parser: 'babel' })
      );
      console.log(chalk.green(`${componentName}.tsx generated`));
    } catch (e) {
      console.log(`Error generating ${componentName}.tsx`);
    }
  }
};

try {
  console.log(chalk.cyan(`Preparing icon data...\n`));
  iconsData = getIconsData(icons);
} catch (e) {
  console.log('Error while preparing icon data');
  throw new Error(e);
}

fs.ensureDirSync(DESTINATION_DIR);

try {
  generateIndexTemplate(iconsData);
  console.log(chalk.green(`index.d.tsx generated`));
} catch (e) {
  console.log('Error generating icons.tsx');
  throw new Error(e);
}

try {
  generateIconFiles(iconsData);
  console.log(`\nIcons generated - ${chalk.gray(DESTINATION_DIR)}`);
} catch (e) {
  console.log('Error while generating icons');
  throw new Error(e);
}
