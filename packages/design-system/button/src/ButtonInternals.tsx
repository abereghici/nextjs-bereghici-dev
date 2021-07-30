import * as React from 'react';

import { EndEnhancer, StartEnhancer } from './Enhancers';
import type { ButtonProps } from './types';

function RenderEnhancer(props: { enhancer: React.ReactNode }) {
  const { enhancer: Enhancer } = props;

  if (typeof Enhancer === 'function' && React.isValidElement(Enhancer)) {
    return <Enhancer />;
  }

  if (React.isValidElement(Enhancer)) {
    return Enhancer;
  }

  return null;
}

export function ButtonInternals(props: ButtonProps) {
  const { children, startEnhancer, endEnhancer } = props;

  return (
    <React.Fragment>
      {startEnhancer && (
        <StartEnhancer>
          <RenderEnhancer enhancer={startEnhancer} />
        </StartEnhancer>
      )}
      {children}
      {endEnhancer && (
        <EndEnhancer>
          <RenderEnhancer enhancer={endEnhancer} />
        </EndEnhancer>
      )}
    </React.Fragment>
  );
}
