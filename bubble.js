// [8, 6, 5]
// [6, 5]    [8]
// [5]  [6]  [8]

function bubbleSort(arr) {
  // Take first item in unsorted portion of list -> bubble it to the right/up until you reach a higher number. Continue bubbling up until the end of unsorted portion.
  // Reduce size of unsorted portion by 1.
  // Return array.

  let unsortedLength = arr.length;

  while (unsortedLength > 1) {
    for (let i = 0; i < unsortedLength - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let num1 = arr[i];
        let num2 = arr[i + 1];
        arr[i] = num2;
        arr[i + 1] = num1;
      }
    }
    unsortedLength--;
  }
  return arr;
}

module.exports = bubbleSort;