import React from "react";

type LogoMarkProps = {
  size?: number;
  className?: string;
};

export function LogoMark({ size = 68, className = "" }: LogoMarkProps) {
  return (
    <img
      src="/logo-square.png"
      width={size}
      height={size}
      className={`brand-mark ${className}`.trim()}
      alt="BodyZen Muscular Therapy logo"
      loading="eager"
      decoding="async"
    />
  );
}

export default function Logo() {
  return (
    <div className="brand" aria-label="BodyZen Muscular Therapy">
      <LogoMark />
      <div className="brand-copy">
        <div className="name">BodyZen Muscular Therapy</div>
        <div className="tag">Sports Massage • Recovery • Mobility</div>
      </div>
    </div>
  );
}
