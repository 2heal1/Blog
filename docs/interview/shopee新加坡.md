---
title: Shopee新加坡
---

# 公司

Shopee

# 岗位

Engineering - Software Engineer: Frontend (Fresh Grad)

# 结果

三面挂

## 一面 hr 面 （30min）

一开始用英文自我介绍，后来又要结合项目，实在英语说不出来了，面试官来了一句：那我们说中文吧...

1. 自我介绍
2. 项目介绍
3. coding 排序，并计算复杂度
4. 为什么投递 shopee
5. 为什么要来新加坡
6. 对于薪资的要求

## 二面 （100min）

主要是三块考察 js css web development

js:
主要是两道题目，需求会不断变化

1. 写一个字符串缩写函数
   example: internationalization => i18n  
    alias => a3s
   如果字符长度<4，则输出全部字符
   num => num
   并且可能输入一个句子，字符内容是只包含 a-z A-Z,其他均为分隔符
   '-important-num-alias' => "-i6t-num-a3s"

2. debounce 防抖函数
   需求 1:常规防抖
   需求 2:要求在第一次调用时候，立即执行，后面调用的时候如果还在 wait 时间内，则不会调用，并且就算重复调用，也不会延时执行 2:要求在第一次调用时候，立即执行，后面调用的时候如果还在 wait 时间内，则不会调用，并且就算重复调用，也不会延时执行

example: debounce(func,wait) wait=500ms
0ms debounce 立即执行
100ms debouce 不执行
200ms debounce 不执行
700ms nothing happened
800ms debounce 立即执行

css：

1. position 有几个值以及作用
2. display:block | display:inline 区别以及作用
3. display:flex 相对于的值以及应用（主要是三栏布局然后问了下设置 flex-grow:1,flex-shrink:1，布局会发生什么变化）

web development:

1. cookie session 区别以及使用方式和场景
2. cors
3. 除了 cookie session 还有什么验证方法（我说可以用 token jwt，然后问我流程是怎么样的，怎么验证 token）
4. https 和 http 区别
5. 在 tls 不对称加密中的客户端是怎么验证证书的
6. https 怎么防止中间人攻击
7. if you are given a job: optimize the performance of a huge single page web app, it load 2MB of JS, 500KB of CSS, what will you do? what aspect do you think might be able to optimize?

## 三面 （60min）

1. xss && csrf
2. jwt
3. 设计验证方式
4. coding zombie game

```js
Zombie Game
0: block, 1: healthy people, 2: zombie
Each zombie can infect adjacent healthy people in 4 adjacent cells (up, down, left, right) every day
How long does it take to infect all people?
Example 1:
Day 0    Day 1    Day 2    Day 3    Day 4
-----------------------------------------------
2 1 1    2 2 1    2 2 2    2 2 2    2 2 2
1 1 0 => 2 1 0 => 2 2 0 => 2 2 0 => 2 2 0
0 1 1    0 1 1    0 1 1    0 2 1    0 2 2
Return 4

Example 2:
Day 0
------
2 2 2
0 2 2
1 0 2
Return -1, because the left corner ppl won't be infected

Example 3:
Day 0
-----
0 2
Return 0, the starting state is all ppl got infected
```

## 总结

shopee 新加坡是比较想去的公司，第三面有些可惜。第三面算法是做出来了，但是复杂度过高，面试官是后端，对于复杂度要求很高，只能说算法还是太差了需要多练。南洋梦破碎了
