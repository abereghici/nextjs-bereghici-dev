import styled from '@emotion/styled';

export const ResponsiveContainer = styled.div(({ theme }) => {
  return {
    paddingLeft: theme.layout.pageMargin,
    paddingRight: theme.layout.pageMargin,
    [theme.mediaQuery.desktop]: {
      width: theme.layout.maxContentWidth + 2 * theme.layout.pageMargin,
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
    },
  };
});
