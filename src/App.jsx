import { Hello } from "./components/Hello";
import { Teste } from "./components/Teste";
import { Teste2 } from "./components/Teste2";
import { Button } from "./components/Button";
import { Header } from "./components/Header";


export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Dia 2 — JSX + Props ✅</h1>

      <Header title="Meu painel" subtitle="Dia 2 — JSX + Props"/>

      <Teste />

      <Button
        label="Saiba mais"
        onClick={() =>alert("clicou")}
      />

      <Teste2 />
    </div>
  );
}
