import * as React from 'react';

import { ButtonProps } from './types';
import { BaseButton } from './ButtonBase';
import { ButtonInternals } from './ButtonInternals';
import { LoadingSpinner, LoadingSpinnerContainer } from './LoadingSpinner';
import { isFocusVisible, forkFocus, forkBlur } from '../utils/focusVisible';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      isLoading = false,
      isSelected = false,
      size = 'default',
      variant = 'primary',
      shape = 'default',
      disabled = false,
      onClick,
      children,
      ...rest
    } = props;

    const [focusState, setFocusState] = React.useState(false);

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isLoading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const handleFocus = (event: React.FocusEvent) => {
      if (isFocusVisible(event)) {
        setFocusState(true);
      }
    };

    const handleBlur = () => {
      if (focusState) {
        setFocusState(false);
      }
    };

    return (
      <BaseButton
        ref={ref}
        {...(isLoading
          ? {
              // we want the screenreader to say loading and also the content of child
              // this seems like the best option even tho the child might not be a string
              'aria-label': `loading ${
                typeof children === 'string' ? children : ''
              }`,
              'aria-busy': 'true',
            }
          : {})}
        isLoading={isLoading}
        isSelected={isSelected}
        size={size}
        variant={variant}
        shape={shape}
        disabled={disabled}
        focusVisible={focusState}
        // Applies last to override passed in onClick
        onClick={handleOnClick}
        onFocus={forkFocus({ ...props }, handleFocus)}
        onBlur={forkBlur({ ...props }, handleBlur)}
        {...rest}
      >
        {isLoading ? (
          <React.Fragment>
            {/* This is not meant to be overridable by users */}
            <div style={{ opacity: 0, display: 'flex', height: '0px' }}>
              <ButtonInternals {...props} />
            </div>
            <LoadingSpinnerContainer size={size}>
              <LoadingSpinner
                size={size}
                variant={variant}
                disabled={disabled}
              />
            </LoadingSpinnerContainer>
          </React.Fragment>
        ) : (
          <ButtonInternals {...props} />
        )}
      </BaseButton>
    );
  }
);

Button.displayName = 'Button';
