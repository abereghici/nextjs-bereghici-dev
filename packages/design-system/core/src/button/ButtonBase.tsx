import styled from '@emotion/styled';

import { Theme } from '../theme';
import { Size, Variant, Shape } from './types';

export const BaseButton = styled.button<{
  size: Size;
  variant: Variant;
  shape: Shape;
  isLoading: boolean;
  isSelected: boolean;
  disabled: boolean;
  focusVisible: boolean;
}>(
  ({
    size,
    variant,
    shape,
    isLoading,
    isSelected,
    focusVisible,
    disabled,
    theme,
  }) => {
    return {
      display: 'inline-flex',
      // need to maintain button width while showing loading spinner
      flexDirection: isLoading ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderLeftWidth: 0,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      borderLeftStyle: 'none',
      borderTopStyle: 'none',
      borderRightStyle: 'none',
      borderBottomStyle: 'none',
      outline: 'none',
      textDecoration: 'none',
      WebkitAppearance: 'none',
      transitionProperty: 'background',
      transitionDuration: theme.animation.timing200,
      transitionTimingFunction: theme.animation.linearCurve,
      cursor: 'pointer',
      ':disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.buttonDisabledFill,
        color: theme.colors.buttonDisabledText,
      },
      marginLeft: 0,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      ...getFontStyles({ theme, size }),
      ...getBorderRadiiStyles({ theme, size, shape }),
      ...getPaddingStyles({ theme, size, shape }),
      // Variant style override
      ...getVariantStyles({ theme, variant, isLoading, isSelected, disabled }),
      ...getShapeStyles({ shape, size }),

      boxShadow: focusVisible
        ? `inset 0 0 0 3px ${theme.colors.contentAccent}`
        : 'none',
    };
  }
);

function getFontStyles({ theme, size }: { theme: Theme; size: Size }) {
  switch (size) {
    case 'mini':
      return theme.typography.font150;
    case 'compact':
      return theme.typography.font250;
    case 'large':
      return theme.typography.font450;
    default:
      return theme.typography.font350;
  }
}

function getBorderRadiiStyles({
  theme,
  size,
  shape,
}: {
  theme: Theme;
  size: Size;
  shape: Shape;
}) {
  let value = theme.borders.buttonBorderRadius;

  if (shape === 'pill') {
    if (size === 'compact') {
      value = '30px';
    } else if (size === 'large') {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if (shape === 'circle' || shape === 'round') {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  };
}

function getPaddingStyles({
  theme,
  size,
  shape,
}: {
  theme: Theme;
  size: Size;
  shape: Shape;
}) {
  const iconShape = ['square', 'circle', 'round'].includes(shape);

  switch (size) {
    case 'mini':
      return {
        paddingTop: theme.sizing.scale200,
        paddingBottom: theme.sizing.scale200,
        paddingLeft: iconShape ? theme.sizing.scale200 : theme.sizing.scale300,
        paddingRight: iconShape ? theme.sizing.scale200 : theme.sizing.scale300,
      };
    case 'compact':
      return {
        paddingTop: theme.sizing.scale400,
        paddingBottom: theme.sizing.scale400,
        paddingLeft: iconShape ? theme.sizing.scale400 : theme.sizing.scale500,
        paddingRight: iconShape ? theme.sizing.scale400 : theme.sizing.scale500,
      };
    case 'large':
      return {
        paddingTop: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: iconShape ? theme.sizing.scale600 : theme.sizing.scale700,
        paddingRight: iconShape ? theme.sizing.scale600 : theme.sizing.scale700,
      };
    default:
      return {
        paddingTop: theme.sizing.scale550,
        paddingBottom: theme.sizing.scale550,
        paddingLeft: iconShape ? theme.sizing.scale550 : theme.sizing.scale600,
        paddingRight: iconShape ? theme.sizing.scale550 : theme.sizing.scale600,
      };
  }
}

type VariantStyles = {
  color?: string;
  backgroundColor?: string;
  ':hover'?: {
    backgroundColor: string;
  };
  ':focus'?: {
    backgroundColor: string;
  };
  ':active'?: {
    backgroundColor: string;
  };
};

function getVariantStyles({
  theme,
  isLoading,
  isSelected,
  variant,
  disabled,
}: {
  theme: Theme;
  variant: Variant;
  isLoading: boolean;
  isSelected: boolean;
  disabled: boolean;
}): VariantStyles {
  if (disabled) {
    return Object.freeze({});
  }
  switch (variant) {
    case 'primary':
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimarySelectedText,
          backgroundColor: theme.colors.buttonPrimarySelectedFill,
        };
      }
      return {
        color: theme.colors.buttonPrimaryText,
        backgroundColor: theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: isLoading
            ? theme.colors.buttonPrimaryActive
            : theme.colors.buttonPrimaryHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonPrimaryActive,
        },
      };
    case 'secondary':
      if (isSelected) {
        return {
          color: theme.colors.buttonPrimaryText,
          backgroundColor: theme.colors.buttonPrimaryFill,
        };
      }
      return {
        color: theme.colors.buttonSecondaryText,
        backgroundColor: theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: isLoading
            ? theme.colors.buttonSecondaryActive
            : theme.colors.buttonSecondaryHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonSecondaryActive,
        },
      };
    case 'tertiary':
      if (isSelected) {
        return {
          color: theme.colors.buttonTertiarySelectedText,
          backgroundColor: theme.colors.buttonTertiarySelectedFill,
        };
      }
      return {
        color: theme.colors.buttonTertiaryText,
        backgroundColor: theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: isLoading
            ? theme.colors.buttonTertiaryActive
            : theme.colors.buttonTertiaryHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonTertiaryActive,
        },
      };
    case 'minimal':
      if (isSelected) {
        return {
          color: theme.colors.buttonMinimalSelectedText,
          backgroundColor: theme.colors.buttonMinimalSelectedFill,
        };
      }
      return {
        color: theme.colors.buttonMinimalText,
        backgroundColor: theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: isLoading
            ? theme.colors.buttonMinimalActive
            : theme.colors.buttonMinimalHover,
        },
        ':active': {
          backgroundColor: theme.colors.buttonMinimalActive,
        },
      };
    default:
      return Object.freeze({});
  }
}

function getShapeStyles({ shape, size }: { shape: Shape; size: Size }) {
  if (shape === 'circle' || shape === 'square') {
    let height, width;
    switch (size) {
      case 'mini':
        height = '28px';
        width = '28px';
        break;
      case 'compact':
        height = '36px';
        width = '36px';
        break;
      case 'large':
        height = '56px';
        width = '56px';
        break;
      case 'default':
      default:
        height = '48px';
        width = '48px';
        break;
    }
    return {
      height,
      width,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    };
  } else {
    return {};
  }
}
