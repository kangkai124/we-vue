import Actionsheet from './actionsheet/index.vue';
export { default as Actionsheet } from './actionsheet/index.vue';
import Badge from './badge/index.vue';
export { default as Badge } from './badge/index.vue';
import Button from './button/index.vue';
export { default as Button } from './button/index.vue';
import Cell from './cell/index.vue';
export { default as Cell } from './cell/index.vue';
import CellSwipe from './cell-swipe/index.vue';
export { default as CellSwipe } from './cell-swipe/index.vue';
import CellSwipeButton from './cell-swipe-button/index.vue';
export { default as CellSwipeButton } from './cell-swipe-button/index.vue';
import Checklist from './checklist/index.vue';
export { default as Checklist } from './checklist/index.vue';
import Circle from './circle/index.vue';
export { default as Circle } from './circle/index.vue';
import DatetimePicker from './datetime-picker/index.vue';
export { default as DatetimePicker } from './datetime-picker/index.vue';
import Dialog from './dialog/index.js';
export { default as Dialog } from './dialog/index.js';
import Flex from './flex/index.vue';
export { default as Flex } from './flex/index.vue';
import FlexItem from './flex-item/index.vue';
export { default as FlexItem } from './flex-item/index.vue';
import Footer from './footer/index.vue';
export { default as Footer } from './footer/index.vue';
import FormPreview from './form-preview/index.vue';
export { default as FormPreview } from './form-preview/index.vue';
import Grid from './grid/index.vue';
export { default as Grid } from './grid/index.vue';
import GridItem from './grid-item/index.vue';
export { default as GridItem } from './grid-item/index.vue';
import Group from './group/index.vue';
export { default as Group } from './group/index.vue';
import Header from './header/index.vue';
export { default as Header } from './header/index.vue';
import Icon from './icon/index.vue';
export { default as Icon } from './icon/index.vue';
import InfiniteScroll from './infinite-scroll/index.js';
export { default as InfiniteScroll } from './infinite-scroll/index.js';
import Input from './input/index.vue';
export { default as Input } from './input/index.vue';
import Lazyload from './lazyload/index.js';
export { default as Lazyload } from './lazyload/index.js';
import Loadmore from './loadmore/index.vue';
export { default as Loadmore } from './loadmore/index.vue';
import MediaBox from './media-box/index.vue';
export { default as MediaBox } from './media-box/index.vue';
import NumberSpinner from './number-spinner/index.vue';
export { default as NumberSpinner } from './number-spinner/index.vue';
import Panel from './panel/index.vue';
export { default as Panel } from './panel/index.vue';
import Picker from './picker/index.vue';
export { default as Picker } from './picker/index.vue';
import Popup from './popup/index.vue';
export { default as Popup } from './popup/index.vue';
import Progress from './progress/index.vue';
export { default as Progress } from './progress/index.vue';
import Radio from './radio/index.vue';
export { default as Radio } from './radio/index.vue';
import SearchBar from './search-bar/index.vue';
export { default as SearchBar } from './search-bar/index.vue';
import Slider from './slider/index.vue';
export { default as Slider } from './slider/index.vue';
import Spinner from './spinner/index.vue';
export { default as Spinner } from './spinner/index.vue';
import Swipe from './swipe/index.vue';
export { default as Swipe } from './swipe/index.vue';
import SwipeItem from './swipe-item/index.vue';
export { default as SwipeItem } from './swipe-item/index.vue';
import Switch from './switch/index.vue';
export { default as Switch } from './switch/index.vue';
import Tab from './tab/index.vue';
export { default as Tab } from './tab/index.vue';
import Tabbar from './tabbar/index.vue';
export { default as Tabbar } from './tabbar/index.vue';
import TabbarItem from './tabbar-item/index.vue';
export { default as TabbarItem } from './tabbar-item/index.vue';
import Tabs from './tabs/index.vue';
export { default as Tabs } from './tabs/index.vue';
import Textarea from './textarea/index.vue';
export { default as Textarea } from './textarea/index.vue';
import Toast from './toast/index.js';
export { default as Toast } from './toast/index.js';
import TopTips from './top-tips/index.js';
export { default as TopTips } from './top-tips/index.js';

// This file is auto gererated by build/bin/build-entry.js

const version = '2.2.5';
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
];

const install = (Vue, config = {}) => {
  components.forEach(Component => {
    Vue.use(Component);
  });

  Vue.use(InfiniteScroll);
  Vue.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    attempt: 3,
    ...config.lazyload
  });

  Vue.$dialog = Vue.prototype.$dialog = Dialog;
  Vue.$toast = Vue.prototype.$toast = Toast;
  Vue.$toptips = Vue.prototype.$toptips = TopTips;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  install,
  version
};

export default index;
export { install, version };
