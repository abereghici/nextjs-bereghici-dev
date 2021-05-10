import React from 'react';

import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  style?: React.CSSProperties;
  children: React.ReactNode;
};
const Button: React.FC<Props> = ({ children, style, onClick }) => (
  <button
    type="button"
    style={style}
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
