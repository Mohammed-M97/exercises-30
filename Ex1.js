// Mini-Max Sum
function miniMaxSum(arr) {
  let sort = arr.sort();
  let max = 0;
  let min = 0;
  for (let i = 1; i < sort.length; i++) {
    max += sort[i];
  }
  for (let i = 0; i < sort.length - 1; i++) {
    min += sort[i];
  }
  return min + " " + max;
}

console.log(miniMaxSum([1, 2,3,4,5]));
