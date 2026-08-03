export default function CardHeader({ number, label, title }) {
  return (
    <div className="card-header">
      {(number || label) && (
        <span className="card-eyebrow mono">
          {number && <span className="num">{number}</span>} {label}
        </span>
      )}
      {title && <h3 className="card-title">{title}</h3>}
    </div>
  );
}
