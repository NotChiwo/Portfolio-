/**
 * Reusable button/link.
 * variant: "primary" | "secondary"
 * Renders an <a> if `href` is passed, otherwise a <button>.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  type = "button",
  ariaLabel,
  target,
  className = "",
}) {
  const classes = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`;

  const content = (
    <>
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
