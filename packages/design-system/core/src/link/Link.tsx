import styled from '@emotion/styled';

interface LinkProps {
  animateUnderline?: boolean;
}

export const Link = styled.a<LinkProps>(({ animateUnderline, theme }) => {
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
      outline: `3px solid ${colors.contentAccent}`,
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
});
