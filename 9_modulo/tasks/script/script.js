// variáveis globais
const doc_name = document.getElementById("name");
const doc_email = document.getElementById("email");
const doc_btn_add = document.getElementById("btn_add");
const doc_ul = document.getElementById("tasks_list");

// api temporária
api = "https://crudcrud.com/api/caa231d644d3499f92c448f33f8c5dbc/client";

// POST
const post = (name, email) => {
  fetch(api, {
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
};

// GET - para todos os elementos
const getAll = () => {
  fetch(api)
    .then((response) => response.json())
    .then((datas) => {
      datas.forEach((data) => {
        addTag(data);
      });
    })
    .catch((erro) => console.log(erro));
};

// DELETE
const remove = (id) => {
  apiDelete = api + `/${id}`;

  fetch(apiDelete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro));

  destroyTag(id);
};

// Adicionar um elemento li
const addTag = (data) => {
  const item = document.createElement("li");
  item.id = data._id;
  item.innerHTML = `<div class="client"><span class="name">${data.name}</span><span class="email">${data.email}</span></div><button onclick="remove('${data._id}')" class="btn_delete">X</button>`;
  doc_ul.appendChild(item);
};

// Destroir um elemento
const destroyTag = (id) => {
  document.getElementById(id).remove();
};

// Popular o cadastro
document.addEventListener("DOMContentLoaded", () => {
  getAll();
});

// Adicionar cadastro
doc_btn_add.addEventListener("click", (event) => {
  if (doc_name.value == "" || doc_email.value == "") {
    return;
  }
  post(doc_name.value, doc_email.value);
  doc_name.value = "";
  doc_email.value = "";
});
