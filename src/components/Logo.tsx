import logoImage from "@/assets/logo.png";

const Logo = ({ className = "", size = "default" }: { className?: string; size?: "small" | "default" | "large" }) => {
  const sizes = {
    small: "w-10",
    default: "w-14",
    large: "w-20",
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
