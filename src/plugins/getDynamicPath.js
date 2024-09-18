export default {
  install: (app) => {
    app.config.globalProperties.$getDynamicPath = (path) => {
      return new URL(`/src/${path}`, import.meta.url).href
    }
  }
}