import styled from '@emotion/styled';

import { borders, Borders as BordersType } from './borders';

export default {
  title: 'Primitives/Borders',
};

const borderOptions = {
  options: Object.keys(borders).filter(key => key.startsWith('border')),
  control: {
    type: 'select',
  },
};

const radiusOptions = {
  options: Object.keys(borders).filter(key => key.startsWith('radius')),
  control: {
    type: 'select',
  },
};

const Box = styled.div<{
  borderColor: string;
  borderStyle: string;
  borderWidth: string;
  borderRadius: string;
}>(props => ({
  backgroundColor: '#f8cb9c',
  borderColor: props.borderColor,
  borderStyle: props.borderStyle,
  borderWidth: props.borderWidth,
  borderRadius: props.borderRadius,
  padding: '5rem',
  width: '30vh',
  height: '30vh',
}));

export const Borders = ({
  border,
  radius,
}: {
  border: keyof BordersType;
  radius: keyof BordersType;
}) => {
  const borderStyle = borders[border] as {
    borderColor: string;
    borderStyle: string;
    borderWidth: string;
  };
  const borderRadius = borders[radius] as string;

  return <Box {...{ ...borderStyle, borderRadius }} />;
};

Borders.argTypes = {
  border: borderOptions,
  radius: radiusOptions,
};

Borders.args = {
  border: 'border100',
  radius: 'radius100',
};
