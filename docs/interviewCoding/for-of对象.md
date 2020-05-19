---
title: for-of对象
---

## for-of 对象

```js
var obj = {
  a: 1,
  b: 2,
  c: 3,
};

obj[Symbol.iterator] = function () {
  var keys = Object.keys(this);
  var count = 0;
  return {
    next() {
      if (count < keys.length) {
        return { value: obj[keys[count++]], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

for (var k of obj) {
  console.log(k);
}
```
