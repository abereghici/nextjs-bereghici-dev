import styled from '@emotion/styled';

export const StartEnhancer = styled.div(({ theme }) => ({
  display: 'flex',
  marginRight: theme.sizing.scale500,
}));

export const EndEnhancer = styled.div(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.sizing.scale500,
}));
