import React from 'react';

import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};
const Button: React.FC<Props> = ({ children, onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
