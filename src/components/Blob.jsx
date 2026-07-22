/**
 * Blob optimizado para rendimiento.
 * Sin animaciones y con menor desenfoque.
 */

export default function Blob({
  className = "",
  tone = "light",
}) {
  const gradients = {
    light:
      "from-lavender-200/60 via-lavender-100/40 to-transparent",
    deep:
      "from-lavender-400/35 via-lavender-300/20 to-transparent",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br blur-2xl ${gradients[tone]} ${className}`}
    />
  );
}