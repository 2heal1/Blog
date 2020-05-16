var path = require("path");
module.exports = {
  title: "Heal Blog",
  description: "Oops!",
  themeConfig: {
    sidebar: [
      ["/about", "介绍"],
      {
        title: "算法",
        path: "/algorithm/",
        collapsable: false,
        children: [
          "/algorithm/2020-05-11",
          "/algorithm/2020-05-12",
          "/algorithm/2020-05-13",
          "/algorithm/2020-05-14",
          "/algorithm/2020-05-15",
          "/algorithm/2020-05-16",
        ],
      },
      {
        title: "JavaScript",
        path: "/javaScript/",
        collapsable: false,
        children: ["/javaScript/new的实现"],
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
