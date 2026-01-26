import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {}

export function Button({ type = 'button', children, ...props }: ButtonProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
