export function Card({ title, description, onDetails }) {
  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: 12,
        padding: 16,
        background: "#4b5563",
        display: "grid",
        gap: 10,
      }}
    >
      <div style={{ display: "grid", gap: 6 }}>
        <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
        <p style={{ margin: 0, color: "#f8f9fa", lineHeight: 1.4 }}>
          {description}
        </p>
      </div>

      {onDetails ? (
        <button
          type="button"
          onClick={onDetails}
          style={{
            justifySelf: "start",
            padding: "8px 12px",
            borderRadius: 10,
            border: "1px solid #e5e7eb",
            background: "#4b5563",
            cursor: "pointer",
          }}
        >
          Saiba mais
        </button>
      ) : null}
    </div>
  );
}