import logoImage from "@/assets/logo.png";

type LogoSize = "small" | "default" | "large" | "header";

const Logo = ({ className = "", size = "default" }: { className?: string; size?: LogoSize }) => {
  const sizes: Record<LogoSize, string> = {
    small: "h-10",
    default: "h-14",
    large: "h-20",
    header: "h-[5.75rem] sm:h-[6.5rem] lg:h-[7.5rem]",
  };

  return (
    <img
      src={logoImage}
      alt="BodyZen Muscular Therapy logo"
      className={`w-auto object-contain ${sizes[size]} ${className}`.trim()}
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;
