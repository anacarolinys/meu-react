import { Hello } from "./components/Hello";
import { Teste } from "./components/Teste";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Dia 1 — React rodando ✅</h1>
      <p>Se eu mudar este arquivo, muda no navegador.</p>

      <Hello />
      <Teste />
    </div>
  );
}
