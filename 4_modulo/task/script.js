calcular_imc = () => {
  kg_input = document.getElementById("kg_input").value;
  altura_input = document.getElementById("altura_input").value;
  btn = document.getElementById("btn");
  imc = document.getElementById("imc");
  imc_Status = document.getElementById("imc_Status");

  result = (kg_input / (altura_input * altura_input)).toFixed(2);
  status_imc = "";
  imc.textContent = "Resultado do IMC é " + result;

  if (result < 18.5) {
    status_imc = "Magreza";
  } else if (18.5 <= result && result < 25) {
    status_imc = "Peso normal";
  } else if (25 <= result && result < 30) {
    status_imc = "Sobrepeso";
  } else if (30 <= result && result < 35) {
    status_imc = "Obesidade grau 1";
  } else {
    status_imc = "Obesidade grau 2";
  }

  imc_Status.textContent = "O seu status é: " + status_imc;
};
