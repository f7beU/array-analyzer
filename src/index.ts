import "./index.css";

const input: HTMLInputElement = document.querySelector("#numbers-input")!;
const addButton: HTMLButtonElement = document.querySelector("#add-button")!;
const resetButton: HTMLButtonElement = document.querySelector("#reset-button")!;
const sumButton: HTMLButtonElement = document.querySelector("#sum-button")!;
const minButton: HTMLButtonElement = document.querySelector("#min-button")!;
const maxButton: HTMLButtonElement = document.querySelector("#max-button")!;
const averageButton: HTMLButtonElement =
  document.querySelector("#average-button")!;
const lengthButton: HTMLButtonElement =
  document.querySelector("#length-button")!;

const result: HTMLDivElement = document.querySelector("#result")!;

let array: number[] = [];
let analyzer: Analyze;

addButton.addEventListener("click", (event: MouseEvent) => {
  array = input.value.split(",").map((num) => parseFloat(num.trim()));
  // console.log(array);
  if (array[0] === 0) {
    // console.log('Введите значение')
    result.textContent = "Введите значения элементов массива отличные от 0";
  }
  if (array.includes(NaN)) {
    // console.log("Все элементы массива должны быть числами")
    result.textContent = "Все элементы массива должны быть числами";
  }
  analyzer = new Analyze(array);
  return array;
});

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  input.value = "";
  result.textContent = "";
});

sumButton.addEventListener("click", (event: MouseEvent) => {
  result.textContent = String(analyzer.sum);
  console.log(analyzer.sum);
});

minButton.addEventListener("click", (event: MouseEvent) => {
  result.textContent = String(analyzer.min);
  console.log(analyzer.min);
});

maxButton.addEventListener("click", (event: MouseEvent) => {
  result.textContent = String(analyzer.max);
  console.log(analyzer.max);
});

averageButton.addEventListener("click", (event: MouseEvent) => {
  result.textContent = analyzer.average;
  console.log(analyzer.average);
});

lengthButton.addEventListener("click", (event: MouseEvent) => {
  result.textContent = String(analyzer.length);
  console.log(analyzer.length);
});

class Analyze {
  constructor(public array: number[]) {
    this.array = array;
  }
  get sum() {
    return this.array.reduce((acc, item) => (acc += item), 0);
  }
  get length() {
    return this.array.length;
  }
  get average() {
    return (this.sum / this.length).toFixed(2);
  }
  get min() {
    return Math.min(...this.array);
  }
  get max() {
    return Math.max(...this.array);
  }
  checkArr() {
    if (this.array.length === 0) {
      return "even";
    }
    return this.sum % 2 === 0 ? "even" : "odd";
  }
}
