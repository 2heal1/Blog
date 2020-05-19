---
title: Promise.all
---

## Promise.all

```js
function promiseAll(promiseArr) {
  let count = 0;
  let len = promiseAll.length;
  let result = new Array(len).fill(null);
  return new Promise((resolve, reject) => {
    promiseArr
      .forEach((fn, index) => {
        fn.then((res) => {
          result[index] = res;
          count++;
          if (count == length) {
            resolve(result);
          }
        });
      })
      .catch((err) => reject(err));
  });
}
```
