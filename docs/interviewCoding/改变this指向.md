---
title: apply/call/bind
---

## apply

```js
Function.prototype.myApply = function (context, args) {
  context = context || window;
  args = args || [];
  const key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};
```

## call

```js
Function.prototype.myCall = function (context) {
  context = context || window;
  let args = [...arguments].slice(1);
  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};
```

## bind

```js
Function.prototype.myBind = function (context) {
  context = context || window;
  let args = [...arguments].slice(1);
  let _this = this;
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};
```
