import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full md:w-[80%] ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
