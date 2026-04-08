class Parquimetro {
  #value;
  #time;
  #troco;
  constructor() {
    this.#value = 0;
    this.#time = 0;
    this.#troco = 0;
  }

  set value(newvalue) {
    this.#value = newvalue;
  }

  get value() {
    return this.#value;
  }

  get time() {
    return this.#time;
  }

  get troco() {
    return this.#troco;
  }

  calcularParquimetro() {
    if (this.#value < 1) {
    }

    if (1 <= this.#value && this.#value < 1.75) {
      this.#time = 30;
      this.#troco = this.#value - 1;
    } else if (1.75 <= this.#value && this.#value < 3) {
      this.#time = 60;
      this.#troco = this.#value - 1.75;
      75;
    } else if (3 <= this.#value) {
      this.#time = 120;
      this.#troco = this.#value - 3;
    }

    return true;
  }
}

class ExibrParquimetro {
  constructor(parquimetro) {
    this.parquimetro = parquimetro;
    this.doc_status = document.getElementById("status");
  }

  exibir() {
    if (this.parquimetro.value == 0) {
      this.doc_status.textContent = `Valor insuficiente!`;
      return;
    }
    if (this.parquimetro.troco == 0) {
      this.doc_status.textContent = `Você tem ${this.parquimetro.time} minutos`;
      return;
    }

    this.doc_status.textContent = `Você tem ${this.parquimetro.time} minutos e seu troco é R$${this.parquimetro.troco.toFixed(2)}`;
  }
}

let parquimetro = new Parquimetro();
let exibrParquimetro = new ExibrParquimetro(parquimetro);

const calcular = () => {
  const doc_Value = parseFloat(document.getElementById("parquimetro").value);

  if (doc_Value < 1) {
    parquimetro.value = 0;
    exibrParquimetro.exibir();
    return;
  }

  console.log(parquimetro.time);

  parquimetro.value = doc_Value;

  parquimetro.calcularParquimetro();

  exibrParquimetro.exibir();
};
