import styled from '@emotion/styled';

/**
 * A horizontal rule to visually and semantically separate content.
 */
export const Divider = styled.hr(({ theme }) => ({
  display: 'block',
  width: '100%',
  border: 0,
  borderTop: `1px solid ${theme.colors.borderOpaque}`,
  marginTop: theme.sizing.scale0,
  marginBottom: theme.sizing.scale0,
}));
