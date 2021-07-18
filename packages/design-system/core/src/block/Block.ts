import styled from '@emotion/styled';
import type { Typography, Sizing } from '@bereghici/design-system.tokens';
import isPropValid from '@emotion/is-prop-valid';

import { SemanticColors } from './../theme/types';

export type AlignContent =
  | 'baseline'
  | 'center'
  | 'end'
  | 'first baseline'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'last baseline'
  | 'normal'
  | 'safe center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch'
  | 'unsafe center'
  | 'unset';

export type AlignItems =
  | 'baseline'
  | 'center'
  | 'end'
  | 'first baseline'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'last baseline'
  | 'normal'
  | 'safe center'
  | 'self-end'
  | 'self-start'
  | 'start'
  | 'stretch'
  | 'unsafe center'
  | 'unset';

export type AlignSelf =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'end'
  | 'first baseline'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'last baseline'
  | 'normal'
  | 'safe center'
  | 'self-end'
  | 'self-start'
  | 'start'
  | 'stretch'
  | 'unsafe center'
  | 'unset';

export type FlexDirection =
  | 'column-reverse'
  | 'column'
  | 'inherit'
  | 'initial'
  | 'row-reverse'
  | 'row'
  | 'unset';

export type JustifyContent =
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'left'
  | 'right'
  | 'safe center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'start'
  | 'stretch'
  | 'unsafe center'
  | 'unset';

export type JustifyItems =
  /* Basic keywords */
  | 'auto'
  | 'baseline'
  | 'center'
  | 'end'
  | 'first baseline'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'last baseline'
  | 'left'
  | 'legacy center'
  | 'legacy left'
  | 'legacy right'
  | 'normal'
  | 'right'
  | 'safe center'
  | 'self-end'
  | 'self-start'
  | 'start'
  | 'stretch'
  | 'unsafe center'
  | 'unset';

export type JustifySelf =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'end'
  | 'first baseline'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'last baseline'
  | 'left'
  | 'normal'
  | 'right'
  | 'safe center'
  | 'self-end'
  | 'self-start'
  | 'start'
  | 'stretch'
  | 'unsafe center'
  | 'unset';

export type Flex = number | string;

export type Display =
  | 'block flow'
  | 'block'
  | 'contents'
  | 'flex run-in'
  | 'flex'
  | 'flow list-item block'
  | 'flow-root'
  | 'flow'
  | 'grid'
  | 'inherit'
  | 'initial'
  | 'inline table'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-table'
  | 'inline'
  | 'list-item block flow-root'
  | 'list-item block flow'
  | 'list-item block'
  | 'list-item flow-root'
  | 'list-item flow'
  | 'list-item inline'
  | 'list-item'
  | 'none'
  | 'ruby-base-container'
  | 'ruby-base'
  | 'ruby-text-container'
  | 'ruby-text'
  | 'ruby'
  | 'run-in'
  | 'table-caption'
  | 'table-cell'
  | 'table-column-group'
  | 'table-column'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-row'
  | 'table'
  | 'unset';

export interface BlockProps {
  color?: keyof SemanticColors;
  backgroundColor?: keyof SemanticColors;
  font?: keyof Typography;
  padding?: keyof Sizing;
  paddingTop?: keyof Sizing;
  paddingBottom?: keyof Sizing;
  paddingLeft?: keyof Sizing;
  paddingRight?: keyof Sizing;
  margin?: keyof Sizing;
  marginTop?: keyof Sizing;
  marginBottom?: keyof Sizing;
  marginLeft?: keyof Sizing;
  marginRight?: keyof Sizing;
  alignContent?: AlignContent;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items */
  alignItems?: AlignItems;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: AlignSelf;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction */
  flexDirection?: FlexDirection;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content */
  justifyContent?: JustifyContent;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items */
  justifyItems?: JustifyItems;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self */
  justifySelf?: JustifySelf;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/display */
  display?: Display;
  /** available values: https://developer.mozilla.org/en-US/docs/Web/CSS/flex */
  flex?: Flex;
}

export const Block = styled('div', {
  shouldForwardProp: prop =>
    // color is valid because of Safari mask-icon link but we don't need it
    isPropValid(prop) && !['color'].includes(String(prop)),
})<BlockProps>(
  ({
    theme,
    color,
    backgroundColor,
    font,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    display,
    flex,
    flexDirection,
    alignContent,
    alignItems,
    alignSelf,
    justifyContent,
    justifyItems,
    justifySelf,
  }) => {
    const getFont = (f: keyof Typography | undefined) =>
      f ? theme.typography[f] : undefined;

    const getScale = (size: keyof Sizing | undefined) =>
      size ? theme.sizing[size] : '';

    const getColor = (c: keyof SemanticColors | undefined) =>
      c ? theme.colors[c] ?? '' : '';

    return {
      ...getFont(font),
      color: getColor(color),
      backgroundColor: getColor(backgroundColor),
      padding: getScale(padding),
      paddingBottom: getScale(paddingBottom),
      paddingLeft: getScale(paddingLeft),
      paddingRight: getScale(paddingRight),
      paddingTop: getScale(paddingTop),
      margin: getScale(margin),
      marginBottom: getScale(marginBottom),
      marginLeft: getScale(marginLeft),
      marginRight: getScale(marginRight),
      marginTop: getScale(marginTop),
      display,
      flex,
      flexDirection,
      alignContent,
      alignItems,
      alignSelf,
      justifyContent,
      justifyItems,
      justifySelf,
    };
  }
);
