import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
// root.render("Hola Mundo");
root.render(
  <React.Fragment>
    <button>Hola Mundo</button>
    <button>Adios Mundo</button>
  </React.Fragment>
);
