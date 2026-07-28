export default function SectionHeading({ eyebrow, title, highlight, center, light }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-2 font-display text-xs font-600 uppercase tracking-[2px] text-fox-red">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-800 leading-tight md:text-4xl ${
          light ? "text-white" : "text-teal-deep"
        }`}
      >
        {title} {highlight && <span className="text-fox-red">{highlight}</span>}
      </h2>
    </div>
  );
}
