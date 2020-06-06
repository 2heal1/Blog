var path = require("path");
module.exports = {
  title: "Heal Blog",
  description: "Oops!",
  themeConfig: {
    sidebar: [
      ["/about", "介绍"],
      {
        title: "LeetCode题解",
        path: "/algorithm/",
        collapsable: false,
        children: [
          "/algorithm/2020-05-11",
          "/algorithm/2020-05-12",
          "/algorithm/2020-05-13",
          "/algorithm/2020-05-14",
          "/algorithm/2020-05-15",
          "/algorithm/2020-05-16",
          "/algorithm/2020-05-17",
          "/algorithm/2020-05-18",
          "/algorithm/2020-05-19",
          "/algorithm/2020-05-20",
          "/algorithm/2020-05-21",
          "/algorithm/2020-05-22",
          "/algorithm/2020-05-23",
          "/algorithm/2020-05-24",
          "/algorithm/2020-05-25",
          "/algorithm/2020-05-26",
          "/algorithm/2020-05-27",
          "/algorithm/2020-05-28",
          "/algorithm/2020-05-29",
          "/algorithm/2020-05-30",
          "/algorithm/2020-05-31",
          "/algorithm/2020-06-01",
          "/algorithm/2020-06-02",
          "/algorithm/2020-06-03",
          "/algorithm/2020-06-04",
          "/algorithm/2020-06-05",
          "/algorithm/2020-06-06",
        ],
      },
      {
        title: "面试常见代码题",
        path: "/interviewCoding/",
        collapsable: false,
        children: [
          "/interviewCoding/深拷贝",
          "/interviewCoding/数组对象去重",
          "/interviewCoding/背包问题",
          "/interviewCoding/二分查找",
          "/interviewCoding/扁平化",
          "/interviewCoding/柯里化函数",
          "/interviewCoding/排序算法",
          "/interviewCoding/驼峰下划线转换",
          "/interviewCoding/序列化与反序列化",
          "/interviewCoding/防抖节流",
          "/interviewCoding/改变this指向",
          "/interviewCoding/Object.create",
          "/interviewCoding/promise",
          "/interviewCoding/Promise.all",
          "/interviewCoding/promise化ajax",
          "/interviewCoding/reduce",
          "/interviewCoding/发布订阅者模式",
          "/interviewCoding/手写Event类",
          "/interviewCoding/jsonp",
          "/interviewCoding/for-of对象",
          "/interviewCoding/三栏布局",
        ],
      },
      {
        title: "JavaScript",
        path: "/javaScript/",
        collapsable: false,
        children: ["/javaScript/new的实现", "/javaScript/instanceof原理"],
      },
      {
        title: "春招面试",
        path: "/interview/",
        collapsable: false,
        children: [
          "/interview/字节跳动Data",
          "/interview/同花顺",
          "/interview/美团点评",
          "/interview/腾讯wxg",
          "/interview/shopee新加坡",
          "/interview/中文未来",
          "/interview/百度",
          "/interview/图森未来",
          "/interview/奇安信",
          "/interview/字节跳动抖音短视频",
        ],
      },
    ],
  },
};
