import { CodeTabs } from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_wnocen3fp4enengfaq7sk4qhse/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_wnocen3fp4enengfaq7sk4qhse/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.56_markdown-it@14.1.0_vuepress@2.0.0-rc.18_@vuepress+b_wnocen3fp4enengfaq7sk4qhse/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
