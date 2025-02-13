import React, { FC } from "react";
// components/ui/visually-hidden.jsx
export interface VisuallyHiddenProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({
  children,
  ...props
}) => {
  return (
    <span className="sr-only" {...props}>
      {children}
    </span>
  );
};
