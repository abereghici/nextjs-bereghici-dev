import * as React from 'react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import { Link } from '@bereghici/design-system.link';
import { theme } from '@bereghici/design-system.theme';
import { sessionStorage } from '@bereghici/storage';
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

const logoText = 'bereghici@dev ~ %';

export const Logo = () => {
  const textRef = React.useRef<HTMLSpanElement>(null);
  const cursorRef = React.useRef<HTMLSpanElement>(null);

  const animateLogo = (short = false) => {
    if (!cursorRef.current || !textRef.current) {
      return;
    }

    gsap.fromTo(
      cursorRef.current,
      { autoAlpha: 1, x: -10 },
      { autoAlpha: 0, duration: 1, repeat: 5, ease: SteppedEase.config(1) }
    );

    if (short) {
      textRef.current.innerText = logoText;
      return;
    }

    gsap.to(textRef.current, {
      text: {
        value: logoText,
      },
      duration: 0.5,
      delay: 0.1,
      ease: 'none',
    });
  };

  React.useEffect(() => {
    const bgSessionKey = `ignore-bg-animation`;
    const ignoreBgAnimation = !!sessionStorage.get(bgSessionKey);

    animateLogo(ignoreBgAnimation);

    sessionStorage.set(bgSessionKey, true);
  }, []);

  return (
    <div>
      <NextLink href="/" passHref>
        <StyledLink>
          <Text ref={textRef} />
          <Cursor ref={cursorRef}>|</Cursor>
        </StyledLink>
      </NextLink>
    </div>
  );
};
