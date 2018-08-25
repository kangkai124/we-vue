import Vue from 'vue'
import WeVue from '../packages'
import App from './app.vue'
import './assets/style/demo.scss'
// import './assets/iconfont/iconfont.css' // TODO
import router from './router'
import QRCode from 'qrcode'
import store from './store'

// TODO
import '../packages/style/actionsheet.scss'
import '../packages/style/badge.scss'
import '../packages/style/button.scss'
import '../packages/style/cell.scss'
import '../packages/style/cell-swipe.scss'
import '../packages/style/dialog.scss'
import '../packages/style/flex.scss'
import '../packages/style/footer.scss'
import '../packages/style/grid.scss'
import '../packages/style/group.scss'
import '../packages/style/loadmore.scss'
import '../packages/style/media-box.scss'
import '../packages/style/panel.scss'
import '../packages/style/picker.scss'
import '../packages/style/progress.scss'
import '../packages/style/searchbar.scss'
import '../packages/style/slider.scss'
import '../packages/style/tabbar.scss'
import '../packages/style/tabs.scss'
import '../packages/style/toast.scss'
import '../packages/style/top-tips.scss'
import '../packages/style/swipe.scss'
import '../packages/style/header.scss'
import '../packages/style/popup.scss'
import '../packages/style/icons.scss'
import '../packages/style/number-spinner.scss'
import '../packages/style/spinner.scss'
import '../packages/style/switch.scss'
import '../packages/style/input.scss'
import '../packages/style/textarea.scss'
import '../packages/style/radio.scss'

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
