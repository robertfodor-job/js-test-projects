function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];

  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);

    // array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort([4, 3, 19, 1, 2]));
