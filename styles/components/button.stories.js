import "./button.css";
export default {
  title: "Component/Button", //rechts Komponenten Name, links Oberkategorie
};

// Name der Variante (Regular) bzw Name der Story! Html code Bsp button
export const Regular = () => `<button class="button">click me!</button>`;
export const Blue = () => `<button class="button button--blue">click me!</button`;
