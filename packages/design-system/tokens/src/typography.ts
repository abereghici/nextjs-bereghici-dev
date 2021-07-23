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
  lineHeight: number | string;
}

export type FontTokens = {
  primaryFontFamily: string;
};

export const fontTokens: FontTokens = {
  primaryFontFamily:
    '"Roboto", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const monoFontFamily = '"Roboto Mono", "Lucida Console", Monaco, monospace';

// Allow design system consumers to access font settings but control how and
// where they load the font.
export const primaryFontUrl =
  'https://fonts.googleapis.com/css?family=Roboto:400,500,700,800,900&display=swap';

export const monoFontUrl =
  'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700,800,900&display=swap';

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

const font100 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '12px',
  fontWeight: 'normal' as const,
  lineHeight: '20px',
};
const font150 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '16px',
};
const font200 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '14px',
  fontWeight: 'normal' as const,
  lineHeight: '20px',
};
const font250 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '16px',
};
const font300 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '16px',
  fontWeight: 'normal' as const,
  lineHeight: '24px',
};
const font350 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '20px',
};
const font400 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '18px',
  fontWeight: 'normal' as const,
  lineHeight: '28px',
};
const font450 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '18px',
  fontWeight: 500,
  lineHeight: '24px',
};
const font550 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '20px',
  fontWeight: 500,
  lineHeight: '28px',
};
const font650 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '32px',
};
const font750 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '28px',
  fontWeight: 500,
  lineHeight: '36px',
};
const font850 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '40px',
};
const font950 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '36px',
  fontWeight: 500,
  lineHeight: '44px',
};
const font1050 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '40px',
  fontWeight: 500,
  lineHeight: '52px',
};
const font1150 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '36px',
  fontWeight: 500,
  lineHeight: '44px',
};
const font1250 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '44px',
  fontWeight: 500,
  lineHeight: '52px',
};
const font1350 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '52px',
  fontWeight: 500,
  lineHeight: '64px',
};
const font1450 = {
  fontFamily: fontTokens.primaryFontFamily,
  fontSize: '96px',
  fontWeight: 500,
  lineHeight: '112px',
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
