import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'no_image.jpg',
  loading: 'lazy_loader.gif',
  attempt: 1
})