import VueLimitedScroll from './vueLimitedScroll.vue';

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('vue-limited-scroll', vueLimitedScroll)
}

const vueLimitedScroll = {
  install,
  VueLimitedScroll,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueLimitedScroll)
}

export default vueLimitedScroll