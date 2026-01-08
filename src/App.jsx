import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  // const formatteedUserName = (userName) => <span>@{userName}</span>;
  const [nombre, setNombre] = useState("eli");
  console.log("Nombre Renderisado", nombre);

  return (
    <section className="App">
      <TwitterFollowCard isFollowing={true}>Test</TwitterFollowCard>

      <TwitterFollowCard userName="midudev">mouredev</TwitterFollowCard>

      <TwitterFollowCard userName="jhonatan">Jhonatan</TwitterFollowCard>
      <TwitterFollowCard userName={nombre}>Jhonatan</TwitterFollowCard>
      <button
        onClick={() => {
          setNombre("Daniel");
        }}
      >
        Cambiar de Nombre
      </button>
    </section>
  );
}
