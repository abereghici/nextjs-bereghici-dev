import * as React from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { theme } from '@bereghici/design-system.theme';

export const ResponsiveContainer: StyledComponent<
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: React.ElementType<any> | undefined;
  },
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  {}
> = styled.div({
  paddingLeft: theme.layout.pageMargin,
  paddingRight: theme.layout.pageMargin,
  [theme.mediaQueries.desktop]: {
    width: `calc(${theme.layout.maxContentWidth} + 2 * ${theme.layout.pageMargin})`,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
  },
});
