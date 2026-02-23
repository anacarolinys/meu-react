import { Hello } from "./components/Hello";
import { Teste } from "./components/Teste";
import { Teste2 } from "./components/Teste2";
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
         <h1>Dia 2 — JSX + Props ✅</h1>

      <Header title="Meu painel" subtitle="Dia 2 — JSX + Props"/>

      <Teste />

 <div style={{ display: "grid", gap: 12 }}>
          {cards.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              onDetails={() => alert(item.title)}
            />
          ))}
        </div>
      <Button
        label="Saiba mais"
        onClick={() =>alert("aaaah que legal")}
      />

      <Teste2 />
    </div>
    </div>
  );
}
