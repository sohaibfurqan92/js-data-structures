function addTo80(n) {
  console.log('Long time...');
  return n + 80;
}

// console.log(addTo80(5));
// console.log(addTo80(5));
// console.log(addTo80(5));

let cache = {};
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('Long time...');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log(memoizedAddTo80(5));

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(5));
