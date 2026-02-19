import { Hello } from "./components/Hello";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h1>Dia 1 — React rodando ✅</h1>
      <p>Se eu mudar este arquivo, muda no navegador.</p>

      <Hello />
    </div>
  );
}
