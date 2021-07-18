import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { Size, Variant } from './types';
import { Theme } from '../theme';

export const LoadingSpinnerContainer = styled.div<{ size: Size }>(
  ({ size, theme }) => {
    // let margins = 3px;
    let margins = theme.sizing.scale0;
    // if (size === 'mini' || size === 'compact') {
    //   margins = theme.sizing.scale0;
    // }
    if (size === 'large') {
      margins = theme.sizing.scale100;
    }

    return {
      lineHeight: 0,
      position: 'static',
      marginBottom: margins,
      marginTop: margins,
    };
  }
);

export const LoadingSpinner = styled.span<{
  variant: Variant;
  disabled: boolean;
  size: Size;
}>(({ theme, variant, disabled, size }) => {
  const { foreground, background } = getLoadingSpinnerColors({
    theme,
    variant,
    disabled,
  });

  let dimension = theme.sizing.scale550;
  if (size === 'mini' || size === 'compact') {
    dimension = theme.sizing.scale500;
  }
  if (size === 'large') {
    dimension = theme.sizing.scale600;
  }

  return {
    height: dimension,
    width: dimension,
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    borderLeftStyle: 'solid',
    borderTopStyle: 'solid',
    borderRightStyle: 'solid',
    borderBottomStyle: 'solid',
    borderLeftWidth: theme.sizing.scale0,
    borderTopWidth: theme.sizing.scale0,
    borderRightWidth: theme.sizing.scale0,
    borderBottomWidth: theme.sizing.scale0,
    borderTopColor: foreground,
    borderLeftColor: background,
    borderBottomColor: background,
    borderRightColor: background,
    boxSizing: 'border-box',
    display: 'inline-block',
    animationDuration: theme.animation.timing700,
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationName: keyframes({
      to: {
        transform: 'rotate(360deg)',
      },
      from: {
        transform: 'rotate(0deg)',
      },
    }),
  };
});

function getLoadingSpinnerColors({
  theme,
  variant,
  disabled,
}: {
  theme: Theme;
  variant: Variant;
  disabled: boolean;
}) {
  if (disabled) {
    return {
      foreground: theme.colors.buttonDisabledSpinnerForeground,
      background: theme.colors.buttonDisabledSpinnerBackground,
    };
  }
  switch (variant) {
    case 'secondary': {
      return {
        foreground: theme.colors.buttonSecondarySpinnerForeground,
        background: theme.colors.buttonSecondarySpinnerBackground,
      };
    }
    case 'tertiary': {
      return {
        foreground: theme.colors.buttonTertiarySpinnerForeground,
        background: theme.colors.buttonTertiarySpinnerBackground,
      };
    }
    case 'minimal': {
      return {
        foreground: theme.colors.buttonMinimalSpinnerForeground,
        background: theme.colors.buttonMinimalSpinnerBackground,
      };
    }
    case 'primary':
    default: {
      return {
        foreground: theme.colors.buttonPrimarySpinnerForeground,
        background: theme.colors.buttonPrimarySpinnerBackground,
      };
    }
  }
}
