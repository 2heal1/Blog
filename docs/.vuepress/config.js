var path = require("path");
module.exports = {
  title: "Heal Blog",
  description: "Oops!",
  themeConfig: {
    sidebar: [
      ["/about", "介绍"],
      {
        title: "工作",
        path: "/work/",
        collapsable: false,
        children: [
          "/work/入职",
          "/work/nest里的单元测试",
          "/work/single-spa",
          "/work/qiankun特性源码分析",
          "/work/markdown转ppt"
        ]
      },
      {
        title: "工具",
        path: "/tools/",
        collapsable: false,
        children: [
          "/tools/约定式路由插件",
          "/tools/组件替换工具"
        ]
      },
      {
        title: "css",
        path: "/css/",
        collapsable: false,
        children: ["/css/bfc"]
      },
      {
        title: "LeetCode题解",
        path: "/algorithm/",
        collapsable: false,
        children: [
          {
            title: "2020-05",
            path: "/algorithm/2020-05/",
            collapsable: true,
            children: [
              "/algorithm/2020-05/2020-05-11",
              "/algorithm/2020-05/2020-05-12",
              "/algorithm/2020-05/2020-05-13",
              "/algorithm/2020-05/2020-05-14",
              "/algorithm/2020-05/2020-05-15",
              "/algorithm/2020-05/2020-05-16",
              "/algorithm/2020-05/2020-05-17",
              "/algorithm/2020-05/2020-05-18",
              "/algorithm/2020-05/2020-05-19",
              "/algorithm/2020-05/2020-05-20",
              "/algorithm/2020-05/2020-05-21",
              "/algorithm/2020-05/2020-05-22",
              "/algorithm/2020-05/2020-05-23",
              "/algorithm/2020-05/2020-05-24",
              "/algorithm/2020-05/2020-05-25",
              "/algorithm/2020-05/2020-05-26",
              "/algorithm/2020-05/2020-05-27",
              "/algorithm/2020-05/2020-05-28",
              "/algorithm/2020-05/2020-05-29",
              "/algorithm/2020-05/2020-05-30",
              "/algorithm/2020-05/2020-05-31"
            ]
          },
          {
            title: "2020-06",
            path: "/algorithm/2020-06/",
            collapsable: true,
            children: [
              "/algorithm/2020-06/2020-06-01",
              "/algorithm/2020-06/2020-06-02",
              "/algorithm/2020-06/2020-06-03",
              "/algorithm/2020-06/2020-06-04",
              "/algorithm/2020-06/2020-06-05",
              "/algorithm/2020-06/2020-06-06",
              "/algorithm/2020-06/2020-06-07",
              "/algorithm/2020-06/2020-06-08",
              "/algorithm/2020-06/2020-06-09",
              "/algorithm/2020-06/2020-06-10",
              "/algorithm/2020-06/2020-06-11",
              "/algorithm/2020-06/2020-06-12",
              "/algorithm/2020-06/2020-06-13",
              "/algorithm/2020-06/2020-06-14",
              "/algorithm/2020-06/2020-06-15",
              "/algorithm/2020-06/2020-06-16",
              "/algorithm/2020-06/2020-06-17",
              "/algorithm/2020-06/2020-06-18",
              "/algorithm/2020-06/2020-06-19",
              "/algorithm/2020-06/2020-06-20",
              "/algorithm/2020-06/2020-06-21",
              "/algorithm/2020-06/2020-06-22",
              "/algorithm/2020-06/2020-06-23",
              "/algorithm/2020-06/2020-06-24",
              "/algorithm/2020-06/2020-06-25",
              "/algorithm/2020-06/2020-06-26",
              "/algorithm/2020-06/2020-06-27",
              "/algorithm/2020-06/2020-06-28",
              "/algorithm/2020-06/2020-06-29",
              "/algorithm/2020-06/2020-06-30"
            ]
          },
          {
            title: "2020-07",
            path: "/algorithm/2020-07/",
            collapsable: true,
            children: [
              "/algorithm/2020-07/2020-07-01",
              "/algorithm/2020-07/2020-07-02",
              "/algorithm/2020-07/2020-07-03",
              "/algorithm/2020-07/2020-07-04",
              "/algorithm/2020-07/2020-07-05",
              "/algorithm/2020-07/2020-07-06",
              "/algorithm/2020-07/2020-07-07",
              "/algorithm/2020-07/2020-07-08",
              "/algorithm/2020-07/2020-07-09",
              "/algorithm/2020-07/2020-07-10",
              "/algorithm/2020-07/2020-07-11",
              "/algorithm/2020-07/2020-07-12",
              "/algorithm/2020-07/2020-07-13",
              "/algorithm/2020-07/2020-07-14",
              "/algorithm/2020-07/2020-07-15",
              "/algorithm/2020-07/2020-07-16",
              "/algorithm/2020-07/2020-07-17",
              "/algorithm/2020-07/2020-07-18",
              "/algorithm/2020-07/2020-07-19",
              "/algorithm/2020-07/2020-07-20"
            ]
          }
        ]
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
          "/interviewCoding/new的实现",
          "/interviewCoding/instanceof原理"
        ]
      }
      // {
      //   title: "春招面试",
      //   path: "/interview/",
      //   collapsable: false,
      //   children: [
      //     "/interview/字节跳动Data",
      //     "/interview/同花顺",
      //     "/interview/美团点评",
      //     "/interview/腾讯wxg",
      //     "/interview/shopee新加坡",
      //     "/interview/中文未来",
      //     "/interview/百度",
      //     "/interview/图森未来",
      //     "/interview/奇安信",
      //     "/interview/字节跳动抖音短视频",
      //   ],
      // },
    ]
  },
  plugins: {
    sitemap: {
      hostname: "https://2heal1.github.io"
    }
  }
};
