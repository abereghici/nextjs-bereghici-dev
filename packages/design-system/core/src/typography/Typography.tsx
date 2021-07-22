import * as React from 'react';

import { Block, BlockProps } from '../block';

interface Typography extends BlockProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as?: React.ElementType<any> | undefined;
}

export const DisplayLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'DisplayLarge'}
      color={props.color ?? 'contentPrimary'}
      backgroundColor="backgroundAccent"
      ref={ref}
    />
  )
);
DisplayLarge.displayName = 'DisplayLarge';

export const DisplayMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'DisplayMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplayMedium.displayName = 'DisplayMedium';

export const DisplaySmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'DisplaySmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplaySmall.displayName = 'DisplaySmall';

export const DisplayXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'DisplayXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
DisplayXSmall.displayName = 'DisplayXSmall';

export const HeadingXXLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h1'}
      {...props}
      font={props.font ?? 'HeadingXXLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
HeadingXXLarge.displayName = 'HeadingXXLarge';

export const HeadingXLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h2'}
      {...props}
      font={props.font ?? 'HeadingXLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
HeadingXLarge.displayName = 'HeadingXLarge';

export const HeadingLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h3'}
      {...props}
      font={props.font ?? 'HeadingLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
HeadingLarge.displayName = 'HeadingLarge';

export const HeadingMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h4'}
      {...props}
      font={props.font ?? 'HeadingMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
HeadingMedium.displayName = 'HeadingMedium';

export const HeadingSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h5'}
      {...props}
      font={props.font ?? 'HeadingSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
HeadingSmall.displayName = 'HeadingSmall';

export const HeadingXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h6'}
      {...props}
      font={props.font ?? 'HeadingXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
HeadingXSmall.displayName = 'HeadingXSmall';

export const LabelLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'LabelLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
LabelLarge.displayName = 'LabelLarge';

export const LabelMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'LabelMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
LabelMedium.displayName = 'LabelMedium';

export const LabelSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'LabelSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
LabelSmall.displayName = 'LabelSmall';

export const LabelXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'LabelXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
LabelXSmall.displayName = 'LabelXSmall';

export const ParagraphLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'ParagraphLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
ParagraphLarge.displayName = 'ParagraphLarge';

export const ParagraphMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'ParagraphMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
ParagraphMedium.displayName = 'ParagraphMedium';

export const ParagraphSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'ParagraphSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
ParagraphSmall.displayName = 'ParagraphSmall';

export const ParagraphXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'ParagraphXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
ParagraphXSmall.displayName = 'ParagraphXSmall';

export const MonoDisplayLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoDisplayLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplayLarge.displayName = 'MonoDisplayLarge';

export const MonoDisplayMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoDisplayMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplayMedium.displayName = 'MonoDisplayMedium';

export const MonoDisplaySmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoDisplaySmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplaySmall.displayName = 'MonoDisplaySmall';

export const MonoDisplayXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoDisplayXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoDisplayXSmall.displayName = 'MonoDisplayXSmall';

export const MonoHeadingXXLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h1'}
      {...props}
      font={props.font ?? 'MonoHeadingXXLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoHeadingXXLarge.displayName = 'MonoHeadingXXLarge';

export const MonoHeadingXLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h2'}
      {...props}
      font={props.font ?? 'MonoHeadingXLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoHeadingXLarge.displayName = 'MonoHeadingXLarge';

export const MonoHeadingLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h3'}
      {...props}
      font={props.font ?? 'MonoHeadingLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoHeadingLarge.displayName = 'MonoHeadingLarge';

export const MonoHeadingMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h4'}
      {...props}
      font={props.font ?? 'MonoHeadingMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoHeadingMedium.displayName = 'MonoHeadingMedium';

export const MonoHeadingSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h5'}
      {...props}
      font={props.font ?? 'MonoHeadingSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoHeadingSmall.displayName = 'MonoHeadingSmall';

export const MonoHeadingXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'h6'}
      {...props}
      font={props.font ?? 'MonoHeadingXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoHeadingXSmall.displayName = 'MonoHeadingXSmall';

export const MonoLabelLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoLabelLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoLabelLarge.displayName = 'MonoLabelLarge';

export const MonoLabelMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoLabelMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoLabelMedium.displayName = 'MonoLabelMedium';

export const MonoLabelSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoLabelSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoLabelSmall.displayName = 'MonoLabelSmall';

export const MonoLabelXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      {...props}
      font={props.font ?? 'MonoLabelXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoLabelXSmall.displayName = 'MonoLabelXSmall';

export const MonoParagraphLarge = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'MonoParagraphLarge'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoParagraphLarge.displayName = 'MonoParagraphLarge';

export const MonoParagraphMedium = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'MonoParagraphMedium'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoParagraphMedium.displayName = 'MonoParagraphMedium';

export const MonoParagraphSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'MonoParagraphSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoParagraphSmall.displayName = 'MonoParagraphSmall';

export const MonoParagraphXSmall = React.forwardRef<HTMLDivElement, Typography>(
  (props, ref) => (
    <Block
      as={props.as ?? 'p'}
      {...props}
      font={props.font ?? 'MonoParagraphXSmall'}
      color={props.color ?? 'contentPrimary'}
      ref={ref}
    />
  )
);
MonoParagraphXSmall.displayName = 'MonoParagraphXSmall';
