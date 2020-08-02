---
title: new的实现
---

```js
// • 以构造器的prototype属性为原型，创建新对象；
// • 将this(也就是上一句中的新对象)和调用参数传给构造器，执行；
// • 如果构造器没有手动返回对象，则返回第一步创建的对象
function newMethod(Parent, ...rest) {
  // 1.以构造器的prototype属性为原型，创建新对象；
  let child = Object.create(Parent.prototype);
  // 2.将this和调用参数传给构造器执行
  let result = Parent.apply(child, rest);
  // 3.如果构造器没有手动返回对象，则返回第一步的对象
  return typeof result === "object" ? result : child;
}
function newWay() {
  let [constructor, ...args] = [...arguments];
  let child = Object.create(constructor.prototype);
  let result = constructor.apply(child, args);
  return typeof result === "object" ? result : child;
}
```
