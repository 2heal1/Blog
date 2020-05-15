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
        children: ["/algorithm/2020-05-14", "/algorithm/2020-05-15"],
      },
      {
        title: "JavaScript",
        path: "/javaScript/",
        collapsable: false,
        children: ["/javaScript/new的实现"],
      },
    ],
  },
};
