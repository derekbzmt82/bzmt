import React from "react";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <img
      src="/logo-square.png"
      className={`brand-mark ${className}`.trim()}
      alt="BZMT logo"
      loading="eager"
      decoding="async"
    />
  );
}

export default function Logo() {
  return (
    <div className="brand" aria-label="BodyZen Muscular Therapy">
      <LogoMark />
    </div>
  );
}
