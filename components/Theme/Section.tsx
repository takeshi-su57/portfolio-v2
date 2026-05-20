import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: ReactNode;
}

export default function Section({
  className = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={`editorial-section ${className}`.trim()} {...rest}>
      <div className="editorial-container">{children}</div>
    </section>
  );
}
