import { mediaQueries } from './mediaQueries';
export interface Font {
  fontFamily: string;
  fontWeight:
    | number
    | '-moz-initial'
    | 'bold'
    | 'bolder'
    | 'inherit'
    | 'initial'
    | 'lighter'
    | 'normal'
    | 'revert'
    | 'unset';
  fontSize: string;
  fontStyle: string;
  lineHeight: number | string;
}

export type FontTokens = {
  primaryFontFamily: string;
};

export const fontTokens: FontTokens = {
  primaryFontFamily:
    '"Inter", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const monoFontFamily = '"Ubuntu Mono", "Lucida Console", Monaco, monospace';

export interface Typography {
  font100: Font;
  font150: Font;
  font200: Font;
  font250: Font;
  font300: Font;
  font350: Font;
  font400: Font;
  font450: Font;
  font550: Font;
  font650: Font;
  font750: Font;
  font850: Font;
  font950: Font;
  font1050: Font;
  font1150: Font;
  font1250: Font;
  font1350: Font;
  font1450: Font;

  ParagraphXSmall: Font;
  ParagraphSmall: Font;
  ParagraphMedium: Font;
  ParagraphLarge: Font;
  LabelXSmall: Font;
  LabelSmall: Font;
  LabelMedium: Font;
  LabelLarge: Font;
  HeadingXSmall: Font;
  HeadingSmall: Font;
  HeadingMedium: Font;
  HeadingLarge: Font;
  HeadingXLarge: Font;
  HeadingXXLarge: Font;
  DisplayXSmall: Font;
  DisplaySmall: Font;
  DisplayMedium: Font;
  DisplayLarge: Font;

  MonoParagraphXSmall: Font;
  MonoParagraphSmall: Font;
  MonoParagraphMedium: Font;
  MonoParagraphLarge: Font;
  MonoLabelXSmall: Font;
  MonoLabelSmall: Font;
  MonoLabelMedium: Font;
  MonoLabelLarge: Font;
  MonoHeadingXSmall: Font;
  MonoHeadingSmall: Font;
  MonoHeadingMedium: Font;
  MonoHeadingLarge: Font;
  MonoHeadingXLarge: Font;
  MonoHeadingXXLarge: Font;
  MonoDisplayXSmall: Font;
  MonoDisplaySmall: Font;
  MonoDisplayMedium: Font;
  MonoDisplayLarge: Font;
}

const font = {
  lineHeight: '120%',
  fontStyle: 'normal' as const,
  fontWeight: 'normal' as const,
};

const font100 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '12px',
  lineHeight: '200%',
};
const font150 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '200%',
};
const font200 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '14px',
  lineHeight: '200%',
};
const font250 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '14px',
  fontWeight: 500,
};
const font300 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '16px',
  lineHeight: '200%',
};
const font350 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '16px',
  fontWeight: 500,
};
const font400 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '18px',
  lineHeight: '200%',
};
const font450 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '18px',
  fontWeight: 500,
};
const font550 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '20px',
  fontWeight: 700,
};
const font650 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '24px',
  fontWeight: 700,
};
const font750 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '26px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '28px',
  },
};
const font850 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '28px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '32px',
  },
};

const font950 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '30px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '36px',
  },
};
const font1050 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '30px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '40px',
  },
};
const font1150 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '32px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '36px',
  },
};
const font1250 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '36px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '44px',
  },
};
const font1350 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '44px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '52px',
  },
};
const font1450 = {
  ...font,
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '72px',
  fontWeight: 700,
  [mediaQueries.tablet]: {
    fontSize: '96px',
  },
};
export const typography: Typography = {
  font100,
  font150,
  font200,
  font250,
  font300,
  font350,
  font400,
  font450,
  font550,
  font650,
  font750,
  font850,
  font950,
  font1050,
  font1150,
  font1250,
  font1350,
  font1450,

  ParagraphXSmall: font100,
  ParagraphSmall: font200,
  ParagraphMedium: font300,
  ParagraphLarge: font400,
  LabelXSmall: font150,
  LabelSmall: font250,
  LabelMedium: font350,
  LabelLarge: font450,
  HeadingXSmall: font550,
  HeadingSmall: font650,
  HeadingMedium: font750,
  HeadingLarge: font850,
  HeadingXLarge: font950,
  HeadingXXLarge: font1050,
  DisplayXSmall: font1150,
  DisplaySmall: font1250,
  DisplayMedium: font1350,
  DisplayLarge: font1450,

  MonoParagraphXSmall: { ...font100, fontFamily: monoFontFamily },
  MonoParagraphSmall: { ...font200, fontFamily: monoFontFamily },
  MonoParagraphMedium: { ...font300, fontFamily: monoFontFamily },
  MonoParagraphLarge: { ...font400, fontFamily: monoFontFamily },
  MonoLabelXSmall: { ...font150, fontFamily: monoFontFamily },
  MonoLabelSmall: { ...font250, fontFamily: monoFontFamily },
  MonoLabelMedium: { ...font350, fontFamily: monoFontFamily },
  MonoLabelLarge: { ...font450, fontFamily: monoFontFamily },
  MonoHeadingXSmall: { ...font550, fontFamily: monoFontFamily },
  MonoHeadingSmall: { ...font650, fontFamily: monoFontFamily },
  MonoHeadingMedium: { ...font750, fontFamily: monoFontFamily },
  MonoHeadingLarge: { ...font850, fontFamily: monoFontFamily },
  MonoHeadingXLarge: { ...font950, fontFamily: monoFontFamily },
  MonoHeadingXXLarge: { ...font1050, fontFamily: monoFontFamily },
  MonoDisplayXSmall: { ...font1150, fontFamily: monoFontFamily },
  MonoDisplaySmall: { ...font1250, fontFamily: monoFontFamily },
  MonoDisplayMedium: { ...font1350, fontFamily: monoFontFamily },
  MonoDisplayLarge: { ...font1450, fontFamily: monoFontFamily },
};
