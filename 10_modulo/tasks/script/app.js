import { Api } from "./api.js";

// variáveis globais
const doc_name = document.getElementById("name");
const doc_email = document.getElementById("email");
const doc_btn_add = document.getElementById("btn_add");
const doc_ul = document.getElementById("tasks_list");

// api temporária
const link = "https://crudcrud.com/api/207a9774ae4f401487574c994fe9e2af/client";

const crudcrudApi = new Api(link);

// Popular o cadastro
document.addEventListener("DOMContentLoaded", () => {
  crudcrudApi.getAll();
});

// Adicionar cadastro
doc_btn_add.addEventListener("click", (event) => {
  if (doc_name.value == "" || doc_email.value == "") {
    return;
  }
  crudcrudApi.post(doc_name.value, doc_email.value);
  doc_name.value = "";
  doc_email.value = "";
});

doc_ul.addEventListener("click", (event) => {
  // se não clicou no botão, ignora
  if (event.target.tagName != "BUTTON") return;

  crudcrudApi.remove(event.target.name);
});
