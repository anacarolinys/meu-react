export function Card({ title, description, onDetails }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 16,
        background: "#635d5d",
      }}
    >
      <h2 style={{ margin: 0 }}>{title}</h2>
      <p style={{ marginTop: 8 }}>{description}</p>

      <button
        onClick={onDetails}
        style={{
          marginTop: 10,
          padding: "10px 14px",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
        }}
      >
        Ver detalhes
      </button>
    </div>
  );
}