import Vue from 'vue'
import WeVue from '../src/index.js'
import App from './app.vue'
import './assets/style/demo.scss'
import './assets/iconfont/iconfont.css'
import router from './router'
import QRCode from 'qrcode'
import store from './store'

// TODO
import '../src/style/actionsheet.scss'
import '../src/style/badge.scss'
import '../src/style/button.scss'
import '../src/style/cell.scss'
import '../src/style/cell-swipe.scss'
import '../src/style/dialog.scss'
import '../src/style/flex.scss'
import '../src/style/footer.scss'
import '../src/style/grid.scss'
import '../src/style/group.scss'
import '../src/style/loadmore.scss'
import '../src/style/media-box.scss'
import '../src/style/panel.scss'
import '../src/style/picker.scss'
import '../src/style/progress.scss'
import '../src/style/searchbar.scss'
import '../src/style/slider.scss'
import '../src/style/tabbar.scss'
import '../src/style/tabs.scss'
import '../src/style/toast.scss'
import '../src/style/top-tips.scss'
import '../src/style/swipe.scss'
import '../src/style/header.scss'
import '../src/style/popup.scss'
import '../src/style/icons.scss'
import '../src/style/number-spinner.scss'
import '../src/style/spinner.scss'
import '../src/style/switch.scss'
import '../src/style/input.scss'
import '../src/style/textarea.scss'
import '../src/style/radio.scss'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(WeVue)

router.afterEach((to, from) => {
  document.title = to.meta.title

  const host = window.location.host
  const protocol = window.location.protocol

  const currentUrl = `${protocol}//${host}${to.fullPath}`

  QRCode.toDataURL(currentUrl)
    .then((url) => {
      store.commit('UPDATE_QRCODE_URL', url)
    })
    .catch((error) => {
      console.error(error)
    })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App),

  router,

  store,

  data () {
    return {
      transitionName: 'slide-right'
    }
  },

  methods: {
    message (msg) {
      this.$toast.text(msg)
    }
  },

  watch: {
    '$route' (to, from) {
      this.transitionName = from.name === 'index' ? 'slide-left' : 'slide-right'
    }
  }
})
