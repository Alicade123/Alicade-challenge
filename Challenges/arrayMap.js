function hasSubarrayWithSum(arr, target) {
  let sum = 0;
  const sumSet = new Set();
  sumSet.add(0);
  
  for (let num of arr) {
    sum += num;
    if (sumSet.has(sum - target)) {
      return true;
    }
    sumSet.add(sum);
  }
  return false;
}

// Example usage:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithSum(arr, target)); // Output: true
