"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface RevealWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  delayMs?: number;
  durationMs?: number;
  yOffset?: number;
  once?: boolean;
}

export default function RevealWrapper({
  children,
  className = "",
  delayMs = 0,
  durationMs = 400,
  yOffset = 8,
  once = true,
  style,
  ...rest
}: RevealWrapperProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = () => {
      const shouldReduce = mediaQuery.matches;
      setReduceMotion(shouldReduce);
      if (shouldReduce) {
        setIsVisible(true);
      }
    };

    handleMotionPreference();
    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const node = elementRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, reduceMotion]);

  const transitionStyle = reduceMotion
    ? style
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : `translateY(${yOffset}px)`,
        transitionProperty: "opacity, transform",
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "opacity, transform",
        ...style,
      };

  return (
    <div ref={elementRef} className={className} style={transitionStyle} {...rest}>
      {children}
    </div>
  );
}
