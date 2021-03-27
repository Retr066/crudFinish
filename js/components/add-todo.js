import Alert from "./alert.js";
export default class AddTodo {
  constructor() {
    this.btn = document.getElementById("add");
    this.title = document.getElementById("title");
    this.description = document.getElementById("description");
    this.alert = new Alert("alert");
  }
  onClick(cb) {
    this.btn.onclick = () => {
      if (title.value === "" || description.value === "") {
        this.alert.show("Se necesitan el titulo y la descripcion");
      } else {
        this.alert.hide();
        cb(this.title.value, this.description.value);
      }
    };
  }
}
