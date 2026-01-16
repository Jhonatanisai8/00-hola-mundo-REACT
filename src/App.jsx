import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const usuarios = [
  {
    nombreUsuario: "jhonatan",
    nombre: "Jhonatan Sami",
    esSeguidor: true,
  },
  {
    nombreUsuario: "danieldev",
    nombre: "Daniel Sami",
    esSeguidor: true,
  },
  {
    nombreUsuario: "yumiSanz",
    nombre: "Yumi Sanz",
    esSeguidor: true,
  },
  {
    nombreUsuario: "elisamu",
    nombre: "Samuel Eli",
    esSeguidor: true,
  },
];
export function App() {
  // const addAt = (userName) => `@${userName}`;
  // const format = (userName) => `@${userName}`;
  // const formatteedUserName = (userName) => <span>@{userName}</span>;
  // const [nombre, setNombre] = useState("eli");
  // console.log("Nombre Renderisado", nombre);

  return (
    <section className="App">
      {usuarios.map((usuario) => {
        const { nombreUsuario, nombre, esSeguidor } = usuario;
        return (
          <TwitterFollowCard
            userName={nombreUsuario}
            initialIsFollowing={esSeguidor}
          >
            {nombre}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
