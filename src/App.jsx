import { Hello } from "./components/Hello";
import { Teste } from "./components/Teste";
import { Teste2 } from "./components/Teste2";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Dia 1 — React rodando ✅</h1>
      <p>Se eu mudar este arquivo, muda no navegador.</p>

      <Hello />
      <Teste />
      <Teste2 />
    </div>
  );
}
