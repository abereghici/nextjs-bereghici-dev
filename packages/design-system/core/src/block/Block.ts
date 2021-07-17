import type { Typography, Sizing } from '@bereghici/design-system.tokens';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

import { SemanticColors } from './../theme/types';

export interface BlockProps {
  color?: keyof SemanticColors;
  backgroundColor?: keyof SemanticColors;
  font?: keyof Typography;
  padding?: keyof Sizing;
  margin?: keyof Sizing;
}

export const Block = styled('div', {
  shouldForwardProp: prop =>
    // color is valid because of Safari mask-icon link but we don't need it
    isPropValid(prop) && !['color'].includes(String(prop)),
})<BlockProps>(props => {
  const font = props.font ? props.theme.typography[props.font] : null;

  const getScale = (size: keyof Sizing) => props.theme.sizing[size];

  return {
    ...(props.color && {
      color: props.theme.colors[props.color] ?? '',
    }),
    ...(props.backgroundColor && {
      color: props.theme.colors[props.backgroundColor] ?? '',
    }),
    ...(font && {
      fontFamily: font.fontFamily,
      fontWeight: font.fontWeight,
      fontSize: font.fontSize,
      lineHeight: font.lineHeight,
    }),
    ...(props.padding && {
      padding: getScale(props.padding),
    }),
    ...(props.margin && {
      padding: getScale(props.margin),
    }),
  };
});
