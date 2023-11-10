"use strict";

/** Given two sorted arrays, return one sorted new array. */

function merge(a, b) {
  const merged = [];
  let aPointer = 0;
  let bPointer = 0;

  while (aPointer < a.length && bPointer < b.length) {
    if (a[aPointer] < b[bPointer]) {
      merged.push(a[aPointer]);
      aPointer += 1;
    } else {
      merged.push(b[bPointer]);
      bPointer += 1;
    }
  }

  if (aPointer < a.length) {
    for (let i = aPointer; i < a.length; i++) {
      merged.push(a[i]);
    }
  }

  if (bPointer < b.length) {
    for (let i = bPointer; i < b.length; i++) {
      merged.push(b[i]);
    }
  }

  return merged;
}



function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}



module.exports = { merge, mergeSort };