import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

export default function App() {
  const cards = [
    { id: 1, title: "Card 1", description: "Esse é o primeiro card" },
    { id: 2, title: "Card 2", description: "Esse é o segundo card" },
    { id: 3, title: "Card 3", description: "Esse é o terceiro card" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        fontFamily: "Arial",
        padding: 20,
      }}
    >
      <div style={{ width: "100%", maxWidth: 800 }}>
        <h1>Dia 4 </h1>

        <Header title="Meu painel" subtitle="Dia 4 — Card + map" />

        <div style={{ display: "grid", gap: 12 }}>
  {cards.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      description={item.description}
      onDetails={() => alert(item.title)}
    />
  ))}

  <Button
    label="Saiba mais"
    width={160}
    onClick={() => alert("aaaah que legal")}
  />
</div>
      </div>
    </div>
  );
}