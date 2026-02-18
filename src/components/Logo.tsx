import logoImage from "@/assets/logo.png";

type LogoSize = "small" | "default" | "large" | "header";

const Logo = ({ className = "", size = "default" }: { className?: string; size?: LogoSize }) => {
  const sizes: Record<LogoSize, string> = {
    small: "w-10",
    default: "w-14",
    large: "w-20",
    header: "w-[6.75rem] sm:w-[7.5rem] lg:w-[8.5rem]",
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
