---
title: Object.create
---

## 写法一

```js
Object.create = function (obj) {
  function F() {}
  F.prototype = obj;
  return new F();
};
```

## 写法二

```js
Object.create = function (obj) {
  var B = {};
  Object.setPrototypeOf(B, obj);
  return B;
};
```

## 写法三

```js
Object.create = function (obj) {
  var B = {};
  B.__proto__ = obj;
  return B;
};
```
