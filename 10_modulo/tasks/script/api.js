import { addTag, destroyTag } from "./utils.js";

export class Api {
  #api;
  constructor(api) {
    this.#api = api;
  }
  // POST
  post(name, email) {
    fetch(this.#api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        addTag(data);
      })
      .catch((erro) => console.log(erro));
  }

  // GET - para todos os elementos
  getAll() {
    fetch(this.#api)
      .then((response) => response.json())
      .then((datas) => {
        datas.forEach((data) => {
          addTag(data);
        });
      })
      .catch((erro) => console.log(erro));
  }

  // DELETE
  remove(id) {
    const apiDelete = this.#api + `/${id}`;

    fetch(apiDelete, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((erro) => console.log(erro));

    destroyTag(id);
  }

  test() {
    console.log("oi");
  }
}
