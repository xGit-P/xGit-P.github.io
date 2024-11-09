export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"公司首页","i":"home"} }],
  ["/wDetail.html", { loader: () => import(/* webpackChunkName: "wDetail.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wDetail.html.js"), meta: {"t":"公司简介","i":"user-tie"} }],
  ["/wHonor.html", { loader: () => import(/* webpackChunkName: "wHonor.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wHonor.html.js"), meta: {"t":"荣誉资质","i":"award"} }],
  ["/wProject.html", { loader: () => import(/* webpackChunkName: "wProject.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wProject.html.js"), meta: {"t":"公司项目","i":"list-check"} }],
  ["/wSafe.html", { loader: () => import(/* webpackChunkName: "wSafe.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wSafe.html.js"), meta: {"t":"安全生产","i":"helmet-safety"} }],
  ["/wSafe_Part1.html", { loader: () => import(/* webpackChunkName: "wSafe_Part1.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wSafe_Part1.html.js"), meta: {"t":"安全风险管理和隐患自查","i":"helmet-safety"} }],
  ["/wSafe_Part2.html", { loader: () => import(/* webpackChunkName: "wSafe_Part2.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wSafe_Part2.html.js"), meta: {"t":"安全生产预警预测","i":"helmet-safety"} }],
  ["/wSafe_Part3.html", { loader: () => import(/* webpackChunkName: "wSafe_Part3.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wSafe_Part3.html.js"), meta: {"t":"应急救援","i":"helmet-safety"} }],
  ["/wSafe_Part4.html", { loader: () => import(/* webpackChunkName: "wSafe_Part4.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wSafe_Part4.html.js"), meta: {"t":"重大危险源监控","i":"helmet-safety"} }],
  ["/wTeam.html", { loader: () => import(/* webpackChunkName: "wTeam.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/wTeam.html.js"), meta: {"t":"党团活动","i":"users"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"F:/vueWEB/vPXSLZDH_WEB/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
