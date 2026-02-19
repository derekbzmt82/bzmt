import logoImage from "@/assets/logo.png";

type LogoSize = "small" | "default" | "large" | "header";

const Logo = ({ className = "", size = "default" }: { className?: string; size?: LogoSize }) => {
  const sizes: Record<LogoSize, string> = {
    small: "w-24",
    default: "w-36",
    large: "w-48",
    header: "w-[9rem] sm:w-[10rem] lg:w-[11rem]",
  };

  return (
    <img
      src={logoImage}
      alt="BodyZen Muscular Therapy logo"
      className={`h-auto object-contain ${sizes[size]} ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;
