//  using closures
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('Long time...');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}

const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(5));
console.log(memoized(6));
