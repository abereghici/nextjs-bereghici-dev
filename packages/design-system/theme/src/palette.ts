export type Palette = {
  // Background
  backgroundPrimary: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundInversePrimary: string;
  backgroundInverseSecondary: string;
  backgroundStateDisabled: string;
  backgroundOverlayDark: string | null;
  backgroundOverlayLight: string | null;
  backgroundAccent: string;
  backgroundNegative: string;
  backgroundWarning: string;
  backgroundPositive: string;
  backgroundLightAccent: string;
  backgroundLightPositive: string;
  backgroundLightNegative: string;
  backgroundLightWarning: string;
  backgroundAlwaysDark: string;
  backgroundAlwaysLight: string;

  // Content
  contentPrimary: string;
  contentSecondary: string;
  contentTertiary: string;
  contentInversePrimary: string;
  contentInverseSecondary: string;
  contentInverseTertiary: string;
  contentStateDisabled: string;
  contentAccent: string;
  contentOnColor: string;
  contentOnColorInverse: string;
  contentNegative: string;
  contentWarning: string;
  contentPositive: string;

  // Border
  borderOpaque: string;
  borderTransparent: string | null;
  borderSelected: string;
  borderInverseOpaque: string;
  borderInverseTransparent: string | null;
  borderInverseSelected: string;
  borderStateDisabled: string;
  borderAccent: string;
  borderAccentLight: string;
  borderNegative: string;
  borderWarning: string;
  borderPositive: string;

  // Links
  linkText: string;
  linkVisited: string;
  linkHover: string;
  linkActive: string;

  // Buttons
  buttonPrimaryFill: string;
  buttonPrimaryText: string;
  buttonPrimaryHover: string;
  buttonPrimaryActive: string;
  buttonPrimarySelectedText: string;
  buttonPrimarySelectedFill: string;
  buttonPrimarySpinnerForeground: string;
  buttonPrimarySpinnerBackground: string;
  buttonSecondaryFill: string;
  buttonSecondaryText: string;
  buttonSecondaryHover: string;
  buttonSecondaryActive: string;
  buttonSecondarySelectedText: string;
  buttonSecondarySelectedFill: string;
  buttonSecondarySpinnerForeground: string;
  buttonSecondarySpinnerBackground: string;
  buttonTertiaryFill: string;
  buttonTertiaryText: string;
  buttonTertiaryHover: string;
  buttonTertiaryActive: string;
  buttonTertiarySelectedText: string;
  buttonTertiarySelectedFill: string;
  buttonTertiarySpinnerForeground: string;
  buttonTertiarySpinnerBackground: string;
  buttonMinimalFill: string;
  buttonMinimalText: string;
  buttonMinimalHover: string;
  buttonMinimalActive: string;
  buttonMinimalSelectedText: string;
  buttonMinimalSelectedFill: string;
  buttonMinimalSpinnerForeground: string;
  buttonMinimalSpinnerBackground: string;
  buttonDisabledFill: string;
  buttonDisabledText: string;
  buttonDisabledSpinnerForeground: string;
  buttonDisabledSpinnerBackground: string;

  // Header
  headerPrimaryBackground: string;
  headerPrimaryBackgroundInverse: string;
  headerSecondaryBackground: string;
  headerSecondaryBackgroundInverse: string;

  syntaxComment: string;
  syntaxVar: string;
  syntaxStr: string;
  syntaxAtrName: string;
  syntaxRegex: string;
  syntaxAtrValue: string;
  syntaxFunction: string;
  syntaxText: string;
};

export const palette: Palette = {
  // Background
  backgroundPrimary: `var(--backgroundPrimary)`,
  backgroundSecondary: `var(--backgroundSecondary)`,
  backgroundTertiary: `var(--backgroundTertiary)`,
  backgroundInversePrimary: `var(--backgroundInversePrimary)`,
  backgroundInverseSecondary: `var(--backgroundInverseSecondary)`,
  backgroundStateDisabled: `var(--backgroundStateDisabled)`,
  backgroundOverlayDark: `var(--backgroundOverlayDark)`,
  backgroundOverlayLight: `var(--backgroundOverlayLight)`,
  backgroundAccent: `var(--backgroundAccent)`,
  backgroundNegative: `var(--backgroundNegative)`,
  backgroundWarning: `var(--backgroundWarning)`,
  backgroundPositive: `var(--backgroundPositive)`,
  backgroundLightAccent: `var(--backgroundLightAccent)`,
  backgroundLightPositive: `var(--backgroundLightPositive)`,
  backgroundLightNegative: `var(--backgroundLightNegative)`,
  backgroundLightWarning: `var(--backgroundLightWarning)`,
  backgroundAlwaysDark: `var(--backgroundAlwaysDark)`,
  backgroundAlwaysLight: `var(--backgroundAlwaysLight)`,

  // Content
  contentPrimary: `var(--contentPrimary)`,
  contentSecondary: `var(--contentSecondary)`,
  contentTertiary: `var(--contentTertiary)`,
  contentInversePrimary: `var(--contentInversePrimary)`,
  contentInverseSecondary: `var(--contentInverseSecondary)`,
  contentInverseTertiary: `var(--contentInverseTertiary)`,
  contentStateDisabled: `var(--contentStateDisabled)`,
  contentAccent: `var(--contentAccent)`,
  contentOnColor: `var(--contentOnColor)`,
  contentOnColorInverse: `var(--contentOnColorInverse)`,
  contentNegative: `var(--contentNegative)`,
  contentWarning: `var(--contentWarning)`,
  contentPositive: `var(--contentPositive)`,

  // Border
  borderStateDisabled: `var(--borderStateDisabled)`,
  borderAccent: `var(--borderAccent)`,
  borderAccentLight: `var(--borderAccentLight)`,
  borderNegative: `var(--borderNegative)`,
  borderWarning: `var(--borderWarning)`,
  borderPositive: `var(--borderPositive)`,
  borderOpaque: `var(--borderOpaque)`,
  borderTransparent: `var(--borderTransparent)`,
  borderSelected: `var(--borderSelected)`,
  borderInverseOpaque: `var(--borderInverseOpaque)`,
  borderInverseTransparent: `var(--borderInverseTransparent)`,
  borderInverseSelected: `var(--borderInverseSelected)`,

  // Links
  linkText: `var(--linkText)`,
  linkVisited: `var(--linkVisited)`,
  linkHover: `var(--linkHover)`,
  linkActive: `var(--linkActive)`,

  // Buttons
  buttonPrimaryFill: `var(--buttonPrimaryFill)`,
  buttonPrimaryText: `var(--buttonPrimaryText)`,
  buttonPrimaryHover: `var(--buttonPrimaryHover)`,
  buttonPrimaryActive: `var(--buttonPrimaryActive)`,
  buttonPrimarySelectedText: `var(--buttonPrimarySelectedText)`,
  buttonPrimarySelectedFill: `var(--buttonPrimarySelectedFill)`,
  buttonPrimarySpinnerForeground: `var(--buttonPrimarySpinnerForeground)`,
  buttonPrimarySpinnerBackground: `var(--buttonPrimarySpinnerBackground)`,

  buttonSecondaryFill: `var(--buttonSecondaryFill)`,
  buttonSecondaryText: `var(--buttonSecondaryText)`,
  buttonSecondaryHover: `var(--buttonSecondaryHover)`,
  buttonSecondaryActive: `var(--buttonSecondaryActive)`,
  buttonSecondarySelectedText: `var(--buttonSecondarySelectedText)`,
  buttonSecondarySelectedFill: `var(--buttonSecondarySelectedFill)`,
  buttonSecondarySpinnerForeground: `var(--buttonSecondarySpinnerForeground)`,
  buttonSecondarySpinnerBackground: `var(--buttonSecondarySpinnerBackground)`,

  buttonTertiaryFill: `var(--buttonTertiaryFill)`,
  buttonTertiaryText: `var(--buttonTertiaryText)`,
  buttonTertiaryHover: `var(--buttonTertiaryHover)`,
  buttonTertiaryActive: `var(--buttonTertiaryActive)`,
  buttonTertiarySelectedText: `var(--buttonTertiarySelectedText)`,
  buttonTertiarySelectedFill: `var(--buttonTertiarySelectedFill)`,
  buttonTertiarySpinnerForeground: `var(--buttonTertiarySpinnerForeground)`,
  buttonTertiarySpinnerBackground: `var(--buttonTertiarySpinnerBackground)`,

  buttonMinimalFill: `var(--buttonMinimalFill)`,
  buttonMinimalText: `var(--buttonMinimalText)`,
  buttonMinimalHover: `var(--buttonMinimalHover)`,
  buttonMinimalActive: `var(--buttonMinimalActive)`,
  buttonMinimalSelectedText: `var(--buttonMinimalSelectedText)`,
  buttonMinimalSelectedFill: `var(--buttonMinimalSelectedFill)`,
  buttonMinimalSpinnerForeground: `var(--buttonMinimalSpinnerForeground)`,
  buttonMinimalSpinnerBackground: `var(--buttonMinimalSpinnerBackground)`,

  buttonDisabledFill: `var(--buttonDisabledFill)`,
  buttonDisabledText: `var(--buttonDisabledText)`,
  buttonDisabledSpinnerForeground: `var(--buttonDisabledSpinnerForeground)`,
  buttonDisabledSpinnerBackground: `var(--buttonDisabledSpinnerBackground)`,

  // Header
  headerPrimaryBackground: `var(--headerPrimaryBackground)`,
  headerPrimaryBackgroundInverse: `var(--headerPrimaryBackgroundInverse)`,
  headerSecondaryBackground: `var(--headerSecondaryBackground)`,
  headerSecondaryBackgroundInverse: `var(--headerSecondaryBackgroundInverse)`,

  // Codeblock
  syntaxComment: `var(--syntaxComment)`,
  syntaxVar: `var(--syntaxVar)`,
  syntaxStr: `var(--syntaxStr)`,
  syntaxAtrName: `var(--syntaxAtrName)`,
  syntaxRegex: `var(--syntaxRegex)`,
  syntaxAtrValue: `var(--syntaxAtrValue)`,
  syntaxFunction: `var(--syntaxFunction)`,
  syntaxText: `var(--syntaxText)`,
};
