import { hasGlobalComponent } from "F:/xVueWEBPAGE/vPXSLZDH/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "F:/xVueWEBPAGE/vPXSLZDH/node_modules/@vueuse/core/index.mjs";
import Badge from "F:/xVueWEBPAGE/vPXSLZDH/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/xVueWEBPAGE/vPXSLZDH/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import PDF from "F:/xVueWEBPAGE/vPXSLZDH/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import SiteInfo from "F:/xVueWEBPAGE/vPXSLZDH/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";

import "F:/xVueWEBPAGE/vPXSLZDH/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

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
