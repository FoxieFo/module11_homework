export function countDown(n) {
    let result = '';

    for (let i = n; i >= 1; --i) {
        result += i + (i !== 1 ? ', ' : '');
  }
  return result;
}

countDown(3);