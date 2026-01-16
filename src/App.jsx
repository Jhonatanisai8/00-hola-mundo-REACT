import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  // const formatteedUserName = (userName) => <span>@{userName}</span>;
  // const [nombre, setNombre] = useState("eli");
  // console.log("Nombre Renderisado", nombre);

  return (
    <section className="App">
      <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
        {" "}
        Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard userName="jhonatan">Jhonatan Isai</TwitterFollowCard>
      {/* <button
        onClick={() => {
          setNombre("Daniel");
        }}
      >
        Cambiar de Nombre
      </button> */}
    </section>
  );
}
