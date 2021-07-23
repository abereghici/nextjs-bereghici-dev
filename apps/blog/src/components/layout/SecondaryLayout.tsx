import * as React from 'react';
import styled from '@emotion/styled';
import { Block } from '@bereghici/design-system.core';

import { SecondaryHeader } from './header';
import { Footer } from './footer';
import { Meta } from './meta';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const SecondaryLayout = ({
  title,
  description,
  path,
  children,
}: Props) => {
  return (
    <Wrapper>
      <Meta path={path} title={title} description={description} />
      <SecondaryHeader />
      <Block as="main" flex="1" backgroundColor="backgroundSecondary">
        {children}
      </Block>
      <Footer />
    </Wrapper>
  );
};
