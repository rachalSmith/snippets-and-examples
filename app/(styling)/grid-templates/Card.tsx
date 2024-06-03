import { HTMLAttributes } from "react";

export function Card({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-neutral-50 rounded-md p-4 w-1/4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
