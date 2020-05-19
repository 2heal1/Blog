---
title: 手写Event类
---

## 手写 Event 类

```js
class Event {
  constructor() {
    this._cache = {};
  }
  on(type, callback) {
    let fns = this._cache[type] || [];
    if (fns.indexOf(callback === -1)) {
      fns.push(callback);
    }
    return this;
  }
  emit(type, data) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(data);
      });
    }
    return this;
  }
  once(type, callback) {
    let wrapFunc = (...args) => {
      callback.apply(this, args);
      this.off(type, callback);
    };
    this.on(type, wrapFunc);
  }
  off(type, callback) {
    if (!type) {
      this._cache = {};
    } else {
      let fns = this._cache[type];
      if (Array.isArray(fns)) {
        if (callback) {
          let index = fns.indexOf(callback);
          if (index !== -1) {
            fns.splice(index, 1);
          } else {
            fns.length = 0;
          }
        }
      }
      return this;
    }
  }
}
```
