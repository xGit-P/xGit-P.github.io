import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({

  darkmode: "auto",

  hostname: "pxslzdh.cn",

  favicon: "/assets/icon/favicon.ico",

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/icon/logo.png",

  print: false,

  fullscreen: false,

  docsDir: "src",

  navbar,

  sidebar,

  copyright: "Copyright © 2024 沛县水利机械化施工有限公司",

  pageInfo: false,

  plugins: {
    components: {
      components: [
        "Badge",
        "FontIcon",
        "PDF",
        "SiteInfo",
      ],
    },

    markdownImage: {
      figure: true,
      lazyload: true,
      mark: true,
      size: true,
    },

    markdownTab: {
      tabs: true,
      codeTabs: true,
    },

    markdownHint: {
      hint: true,
      alert: true,
    },


    photoSwipe: true,

    mdEnhance: {
      component: true,
      align: true,
      attrs: true,
      include: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
    },
  },
});
