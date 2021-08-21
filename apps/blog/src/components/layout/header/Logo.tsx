import * as React from 'react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { Link } from '@bereghici/design-system.link';
import { theme } from '@bereghici/design-system.theme';
import { gsap, SteppedEase } from 'gsap';
import TextPlugin from 'gsap/dist/TextPlugin';

gsap.registerPlugin(TextPlugin);

const StyledLink = styled(Link)({
  ...theme.typography.MonoHeadingSmall,
  textDecoration: 'none',
  display: 'flex',
});

const Cursor = styled.span({
  margin: 0,
  display: 'inline-block',
});

const Text = styled.span({
  padding: `0 ${theme.sizing.scale600} 0 0`,
  margin: 0,
});

export const Logo = () => {
  const textRef = React.useRef<HTMLSpanElement>(null);
  const cursorRef = React.useRef<HTMLSpanElement>(null);

  const animateLogo = () => {
    if (cursorRef.current) {
      gsap.fromTo(
        cursorRef.current,
        { autoAlpha: 1, x: -10 },
        { autoAlpha: 0, duration: 1, repeat: 5, ease: SteppedEase.config(1) }
      );
    }
  };

  React.useEffect(() => {
    animateLogo();
  }, []);

  return (
    <div>
      <NextLink href="/" passHref>
        <StyledLink>
          <Text ref={textRef}>bereghici@dev ~ %</Text>
          <Cursor ref={cursorRef}>|</Cursor>
        </StyledLink>
      </NextLink>
    </div>
  );
};
