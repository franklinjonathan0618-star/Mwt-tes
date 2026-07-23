"use client";

import { useInView } from "@/hooks/useInView";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  id?: string;
}

export default function RevealSection({
  children,
  className = "",
  style,
  variant = "up",
  delay,
  id,
}: RevealSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  const delayClass = delay ? `reveal-delay-${Math.min(delay, 6)}` : "";

  return (
    <div
      ref={ref}
      id={id}
      className={`reveal reveal-${variant} ${delayClass} ${isInView ? "visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
