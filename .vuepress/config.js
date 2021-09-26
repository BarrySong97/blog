module.exports = {
  title: "Barry Song's Blog",
  description: "Barry Song's Blog",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "about me",
        icon: "reco-blog",
        link: "/blogs/other/about.html",
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/recoluan",
            icon: "reco-github",
          },
        ],
      },
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "分类",
      },
      tag: {
        location: 3,
        text: "Tag",
      },
    },
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
    ],
    valineConfig: {
      appId: "FCa6amgk0WKBSHWembXxGoIJ-gzGzoHsz", // your appId
      appKey: "JD0W7atMwx3Ap7YzG7WGCOoS", // your appKey
    },
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "barry song",
    authorAvatar: "/avatar.jpg",
    record: "xxxx",
    startYear: "2021",
  },
  markdown: {
    lineNumbers: true,
  },
};
