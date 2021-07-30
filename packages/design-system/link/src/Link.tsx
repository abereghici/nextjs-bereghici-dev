import * as React from 'react';
import styled from '@emotion/styled';
import {
  isFocusVisible,
  forkFocus,
  forkBlur,
} from '@bereghici/design-system.utils/focus-visible';
import { theme } from '@bereghici/design-system.theme';

interface StyledLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  animateUnderline: boolean;
  focusVisible: boolean;
}

function LinkFocus(props: {
  children: (props: {
    focusVisible: boolean;
    handleFocus: (event: React.FocusEvent) => void;
    handleBlur: () => void;
  }) => React.ReactElement<unknown>;
}) {
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handleFocus = (event: React.FocusEvent) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  };
  const handleBlur = () => {
    if (focusVisible) {
      setFocusVisible(false);
    }
  };
  return props.children({ focusVisible, handleFocus, handleBlur });
}

const StyledLink = styled.a<StyledLinkProps>(
  ({ animateUnderline, focusVisible }) => {
    const { colors, typography, animation } = theme;

    return {
      color: colors.linkText,
      ...typography.font350,
      fontSize: 'inherit',
      lineHeight: 'inherit',
      transitionProperty: animateUnderline ? 'none' : 'backgroundSize',
      transitionDuration: animation.timing500,
      transitionTimingFunction: animation.easeOutQuinticCurve,
      position: animateUnderline ? 'relative' : 'static',
      textDecoration: animateUnderline ? 'none' : 'underline',
      textUnderlinePosition: 'under',
      willChange: 'background-size',
      backgroundSize: '0% 100%, 100% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundImage: animateUnderline
        ? `linear-gradient(transparent calc(100% - 1px), ${colors.linkText} 1px), linear-gradient(transparent calc(100% - 1px), ${colors.linkHover} 1px)`
        : 'none',
      ':hover': {
        color: colors.linkHover,
        backgroundSize: '100% 100%, 100% 100%',
      },
      ':focus': {
        outline: focusVisible ? `3px solid ${colors.contentAccent}` : 'none',
        outlineOffset: '1px',
        textDecoration: 'none',
      },
      ':visited': {
        color: colors.linkVisited,
      },
      ':active': {
        color: colors.linkActive,
      },
    };
  }
);

interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  animateUnderline?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ animateUnderline = false, ...rest }, ref) => {
    return (
      <LinkFocus>
        {focusProps => (
          <StyledLink
            ref={ref}
            animateUnderline={animateUnderline}
            focusVisible={focusProps.focusVisible}
            onFocus={forkFocus({}, focusProps.handleFocus)}
            onBlur={forkBlur({}, focusProps.handleBlur)}
            {...rest}
          />
        )}
      </LinkFocus>
    );
  }
);

Link.displayName = 'Link';
