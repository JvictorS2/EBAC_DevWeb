// variáveis globais
const doc_cep = document.getElementById("cep");
const doc_btn = document.getElementById("btn");

// Recuperar dados do localStorage
const setValuesLocal = () => {
  address = JSON.parse(localStorage.getItem("cep"));
  setValues(address);
};

// Setar valores nos campos
const setValues = (data) => {
  if (doc_cep.value == "") {
    doc_cep.value = data.cep;
  }
  document.getElementById("logradouro").value = data.logradouro;
  document.getElementById("bairro").value = data.bairro;
  document.getElementById("estado").value = data.estado;
  document.getElementById("localidade").value = data.localidade;
  document.getElementById("regiao").value = data.regiao;
  document.getElementById("uf").value = data.uf;
  document.getElementById("complemento").value = data.complemento;
  localStorage.setItem("cep", JSON.stringify(data));
};

// Busca cep
const getCep = (cep) => {
  if (cep.length == 9) {
    cep = cep.split("-").join("");
  }

  api = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      setValues(data);
    })
    .catch((error) => console.error("Erro ao busca o CEP:", error));
};

// Busca cep quando sair do campo
doc_cep.addEventListener("blur", (event) => {
  const value = event.target.value;

  if (value.length == 8 || value.length == 9) {
    getCep(value);
  }
});

// Setar valores quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("cep")) {
    setValuesLocal();
  }
});

// Salvar valores quando submeter
doc_btn.addEventListener("click", (event) => {
  //event.preventDefault();
  data = JSON.parse(localStorage.getItem("cep"));
  data.complemento = document.getElementById("complemento").value;
  localStorage.setItem("cep", JSON.stringify(data));
});
