const genNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let goal = genNum(1, 100);
let nailedit = false;

const guess = () => {
  // Controle de input
  let doc_quesstry = document.getElementById("guess");
  let quesstry = parseFloat(doc_quesstry.value);

  // Controle de menssagens
  let tip = document.getElementById("Tip");

  let numTry = document.getElementById("numTry");

  if (
    quesstry == "" ||
    isNaN(quesstry) ||
    nailedit ||
    numTry.textContent == 0
  ) {
    console.log("oi");
    return;
  }

  if (quesstry > goal) {
    tip.textContent = `O número é menor que ${quesstry}`;
  } else if (quesstry < goal) {
    tip.textContent = `O número é maior que ${quesstry}`;
  } else if (quesstry === goal) {
    tip.textContent = `Parabéns você acertou, o numéro é ${quesstry}`;
    numTry.textContent = "Parabéns";
    nailedit = true;
  }

  if (!nailedit) {
    numTry.textContent = parseFloat(numTry.textContent) - 1;
    doc_quesstry.value = "";
  }

  if (numTry.textContent == 0 && !nailedit) {
    console.log(1);
    tip.textContent = `O número de tentaivas acabou, o numéro era ${goal}`;
    return;
  }
};
