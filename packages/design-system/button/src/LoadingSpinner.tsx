import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from '@bereghici/design-system.theme';

import type { Size, Variant } from './types';

export const LoadingSpinnerContainer = styled.div<{ size: Size }>(
  ({ size }) => {
    let margins: string = theme.sizing.scale0;

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
}>(({ variant, disabled, size }) => {
  const { foreground, background } = getLoadingSpinnerColors({
    variant,
    disabled,
  });

  let dimension: string = theme.sizing.scale550;
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
  variant,
  disabled,
}: {
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
