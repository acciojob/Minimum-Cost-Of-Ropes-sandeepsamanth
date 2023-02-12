const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
  const ropeLengthsInput = document.getElementById("ropeLengths").value;
  const ropeLengths = ropeLengthsInput.split(",").map(function(length) {
    return parseInt(length, 10);
  });
  const result = minimumCost(ropeLengths);
  document.getElementById("result").innerHTML = "Minimum cost: " + result;
});

function minimumCost(arr) {
  arr.sort((a, b) => a - b);
  let cost = 0;
  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();
    let currentCost = first + second;
    cost += currentCost;
    arr.unshift(currentCost);
    arr.sort((a, b) => a - b);
  }
  return cost;
}
