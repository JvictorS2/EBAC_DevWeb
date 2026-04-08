// Adicionar um elemento li
const addTag = (data) => {
  const doc_ul = document.getElementById("tasks_list");
  const item = document.createElement("li");
  item.id = data._id;
  item.innerHTML = `<div class="client"><span class="name">${data.name}</span><span class="email">${data.email}</span></div><button name="${data._id}" class="btn_delete">X</button>`;
  doc_ul.appendChild(item);
};

// Destroir um elemento
const destroyTag = (id) => {
  document.getElementById(id).remove();
};

export { addTag, destroyTag };
