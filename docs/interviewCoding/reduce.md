---
title: reduce
---

## reduce

```js
Array.prototype.myReduce = function (fn, initialValue) {
  if (this.length === 0) {
    if (initialValue === undefined) {
      console.error("reduce of empty array with no initialValue");
    } else {
      return initialValue;
    }
  } else {
    var prev = initialValue !== undefined ? initialValue : this[0];
    var startIndex = initialValue !== undefined ? 0 : 1;
    for (var i = startIndex; i < this.length; i++) {
      prev = fn(prev, this[i]);
    }
    return prev;
  }
};
```
