import Model from "./model.js";
import View from "./view.js";
document.addEventListener("DOMContentLoaded", () => {
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModal(model);
  view.render();
});
