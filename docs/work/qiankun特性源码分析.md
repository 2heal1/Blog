---
title: qiankun特性源码分析
---

# 背景

在简单分析了 single-spa 的实现后，会发现在 single-spa 中，通过 reroute 和路由控制不断地在调度子应用，加载子应用的代码，切换子应用，改变子应用的 app.status。所以 single-spa 解决了一个子应用之间的调度问题。并且，single-spa 有一个开放的地方，那就是 registerApplication 中引入子应用的加载函数。

qiankun 就做了这样的事，qiankun 是一个阿里团队基于 single-spa、import-html-entry 进行二次开发的微前端实现库，该库解决了许多当前微前端所碰到的问题，并且有许多有意思的特性，本文主要对于其特性进行剖析。

先上一张特性图
![qiankun-feture](../assest/qiankun-feture.png)
可以看到，qiankun 特性有许多，本文就对我个人感兴趣的 _HTML Entry 接入方式_ _样式隔离_ _JS 沙箱_ _资源预加载_,这 4 个特性进行分析

## HTML Entry 接入方式

todo

## 样式隔离

todo

## JS 沙箱

todo

## 资源预加载

todo
