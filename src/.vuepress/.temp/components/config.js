import { hasGlobalComponent } from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-webpack@2.0.0-rc.18_vue@3.5.12_/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/@vueuse+core@11.2.0_vue@3.5.12/node_modules/@vueuse/core/index.mjs";
import Badge from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_sass-embedded@_zhdfpdap37o5ds26catjucbery/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_sass-embedded@_zhdfpdap37o5ds26catjucbery/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_sass-embedded@_zhdfpdap37o5ds26catjucbery/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import SiteInfo from "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_sass-embedded@_zhdfpdap37o5ds26catjucbery/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "F:/vueWEB/vPXSLZDH_WEB/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.80.6_sass-loader@16.0.3_sass-embedded@_zhdfpdap37o5ds26catjucbery/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
