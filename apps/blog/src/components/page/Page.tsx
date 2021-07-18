import * as React from 'react';
import styled from '@emotion/styled';
import { Block, ResponsiveContainer } from '@bereghici/design-system.core';

import { Header } from '../header';
import { Footer } from '../footer';
import { Meta } from '../meta';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  path: string;
}

const PageWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const Page = ({ title, description, path, children }: Props) => {
  return (
    <PageWrapper>
      <Meta path={path} title={title} description={description} />
      <Header />
      <Block as="main" flex="1" backgroundColor="backgroundSecondary">
        <ResponsiveContainer as="section">{children}</ResponsiveContainer>
      </Block>
      <Footer />
    </PageWrapper>
  );
};
