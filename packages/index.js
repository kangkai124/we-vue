// This file is auto gererated by build/bin/build-entry.js
// import './style/base.css'
import Actionsheet from './actionsheet/index'
import Badge from './badge/index'
import Button from './button/index'
import Cell from './cell/index'
import CellSwipe from './cell-swipe/index'
import CellSwipeButton from './cell-swipe-button/index'
import Checklist from './checklist/index'
import Circle from './circle/index'
import DatetimePicker from './datetime-picker/index'
import Dialog from './dialog/index'
import Flex from './flex/index'
import FlexItem from './flex-item/index'
import Footer from './footer/index'
import FormPreview from './form-preview/index'
import Grid from './grid/index'
import GridItem from './grid-item/index'
import Group from './group/index'
import Header from './header/index'
import Icon from './icon/index'
import InfiniteScroll from './infinite-scroll/index'
import Input from './input/index'
import Lazyload from './lazyload/index'
import Loadmore from './loadmore/index'
import MediaBox from './media-box/index'
import NumberSpinner from './number-spinner/index'
import Panel from './panel/index'
import Picker from './picker/index'
import Popup from './popup/index'
import Progress from './progress/index'
import Radio from './radio/index'
import SearchBar from './search-bar/index'
import Slider from './slider/index'
import Spinner from './spinner/index'
import Swipe from './swipe/index'
import SwipeItem from './swipe-item/index'
import Switch from './switch/index'
import Tab from './tab/index'
import Tabbar from './tabbar/index'
import TabbarItem from './tabbar-item/index'
import Tabs from './tabs/index'
import Textarea from './textarea/index'
import Toast from './toast/index'
import TopTips from './top-tips/index'

const version = '2.2.6'
const components = [
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellSwipe,
  CellSwipeButton,
  Checklist,
  Circle,
  DatetimePicker,
  Flex,
  FlexItem,
  Footer,
  FormPreview,
  Grid,
  GridItem,
  Group,
  Header,
  Icon,
  Input,
  Loadmore,
  MediaBox,
  NumberSpinner,
  Panel,
  Picker,
  Popup,
  Progress,
  Radio,
  SearchBar,
  Slider,
  Spinner,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Textarea
]

const install = (Vue, config = {}) => {
  components.forEach(Component => {
    Vue.use(Component)
  })

  Vue.use(InfiniteScroll)
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    attempt: 3,
    ...config.lazyload
  })

  Vue.$dialog = Vue.prototype.$dialog = Dialog
  Vue.$toast = Vue.prototype.$toast = Toast
  Vue.$toptips = Vue.prototype.$toptips = TopTips
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Actionsheet,
  Badge,
  Button,
  Cell,
  CellSwipe,
  CellSwipeButton,
  Checklist,
  Circle,
  DatetimePicker,
  Dialog,
  Flex,
  FlexItem,
  Footer,
  FormPreview,
  Grid,
  GridItem,
  Group,
  Header,
  Icon,
  InfiniteScroll,
  Input,
  Lazyload,
  Loadmore,
  MediaBox,
  NumberSpinner,
  Panel,
  Picker,
  Popup,
  Progress,
  Radio,
  SearchBar,
  Slider,
  Spinner,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Textarea,
  Toast,
  TopTips
}

export default {
  install,
  version
}
