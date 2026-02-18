const SectionHeading = ({
  tag,
  title,
  subtitle,
  center = true,
}: {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {tag && (
      <span className="inline-block px-3 py-1 rounded-full bg-teal-light text-primary text-xs font-semibold uppercase tracking-wider mb-3">
        {tag}
      </span>
    )}
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
