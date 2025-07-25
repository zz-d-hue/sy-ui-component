import React from 'react';
import clsx from 'clsx';
import './index.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', onClick }: ButtonProps) => {
  return (
    <button className={clsx(`button ${variant}`)} onClick={onClick}>
      {children}
    </button>
  );
};
