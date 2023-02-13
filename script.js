//your code here
function findMinCost(input) {
  // Split the input string into an array of rope lengths
  let ropeLengths = input.split(',').map(function(length) {
    return parseInt(length, 10);
  });

  // Sort the rope lengths in ascending order
  ropeLengths.sort(function(a, b) {
    return a - b;
  });

  // Initialize the minimum cost
  let minCost = 0;

  // Keep connecting the two shortest ropes until there is only one rope left
  while (ropeLengths.length > 1) {
    // Take the two shortest ropes and sum their lengths
    let newRope = ropeLengths[0] + ropeLengths[1];
    minCost += newRope;

    // Remove the two shortest ropes from the array
    ropeLengths.shift();
    ropeLengths.shift();

    // Insert the new rope into the sorted array of ropes
    let index = 0;
    while (index < ropeLengths.length && ropeLengths[index] < newRope) {
      index++;
    }
    ropeLengths.splice(index, 0, newRope);
  }

  return minCost;
}

// Example usage
let input = "4, 2, 7, 6, 9";
let minCost = findMinCost(input);
console.log(minCost); // Output: 62