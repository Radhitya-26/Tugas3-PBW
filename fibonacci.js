function generateFibonacci() {
  const termCount = document.getElementById("termCount").value;

  let fibonacciOutput = "";
  let a = 1,
    b = 1,
    nextTerm;

  for (let i = 1; i < termCount; i++) {
    fibonacciOutput += `<span class="fibonacci-number">${a}</span>`;
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }

  document.getElementById("fibonacciOutput").innerHTML = fibonacciOutput;
}
