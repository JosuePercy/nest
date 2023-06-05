import "./style.css";

import { charmander } from "./bases/03-classes";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <h1>Hello Vite! ${charmander.name}</h1>
`;
