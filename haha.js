import Vue from 'vue';
import Lazyload from 'vue-lazyload';

/**
 * Install function to register a component
 */
function install (Vue$$1) {
  Vue$$1.component(this.name, this);
}

/**
 * Create a component with common options
 */

function create (sfc) {
  sfc.name = 'wv-' + sfc.name;
  sfc.mixins = sfc.mixins || [];
  sfc.components = sfc.components || {};
  sfc.install = sfc.install || install;
  sfc.methods = sfc.methods || {};

  return sfc
}

const getTouch = (event) => {
  return event.changedTouches[0] || event.touches[0]
};

const isServer = Vue.prototype.$isServer;

//

var script = create({
  name: 'actionsheet',

  props: {
    type: {
      type: String,
      default: 'ios'
    },
    title: String,
    actions: {
      type: Array,
      default: () => []
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    },
    value: Boolean
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },

    value (val) {
      this.currentValue = val;
    }
  },

  methods: {
    itemClick (item) {
      if (item.method && typeof item.method === 'function') {
        item.method();
      }
      this.currentValue = false;
    }
  }
});

/* script */
            const __vue_script__ = script;
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "weui-animate-fade-in",
            "leave-active-class": "weui-animate-fade-out"
          }
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.currentValue && _vm.type === "ios",
                expression: "currentValue && type === 'ios'"
              }
            ],
            staticClass: "weui-mask weui-animate-fade-in",
            on: {
              click: function($event) {
                _vm.currentValue = false;
              }
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "weui-animate-slide-up",
            "leave-active-class": "weui-animate-slide-down"
          }
        },
        [
          _vm.type === "ios"
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.currentValue,
                      expression: "currentValue"
                    }
                  ],
                  staticClass: "weui-actionsheet weui-actionsheet_toggle"
                },
                [
                  _vm.title
                    ? _c("div", { staticClass: "weui-actionsheet__title" }, [
                        _c("p", {
                          staticClass: "weui-actionsheet__title-text",
                          domProps: { innerHTML: _vm._s(_vm.title) }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "weui-actionsheet__menu" },
                    _vm._l(_vm.actions, function(item) {
                      return _c("div", {
                        key: item.name,
                        staticClass: "weui-actionsheet__cell",
                        domProps: { textContent: _vm._s(item.name) },
                        on: {
                          click: function($event) {
                            _vm.itemClick(item);
                          }
                        }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _vm.cancelText
                    ? _c("div", { staticClass: "weui-actionsheet__action" }, [
                        _c("div", {
                          staticClass: "weui-actionsheet__cell",
                          domProps: { innerHTML: _vm._s(_vm.cancelText) },
                          on: {
                            click: function($event) {
                              _vm.currentValue = false;
                            }
                          }
                        })
                      ])
                    : _vm._e()
                ]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "weui-animate-fade-in",
            "leave-active-class": "weui-animate-fade-out"
          }
        },
        [
          _vm.type === "android"
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.currentValue,
                      expression: "currentValue"
                    }
                  ],
                  staticClass: "weui-skin_android"
                },
                [
                  _c("div", {
                    staticClass: "weui-mask",
                    on: {
                      click: function($event) {
                        _vm.currentValue = false;
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "weui-actionsheet" }, [
                    _c(
                      "div",
                      { staticClass: "weui-actionsheet__menu" },
                      _vm._l(_vm.actions, function(item) {
                        return _c("div", {
                          key: item.name,
                          staticClass: "weui-actionsheet__cell",
                          domProps: { textContent: _vm._s(item.name) },
                          on: {
                            click: function($event) {
                              _vm.itemClick(item);
                            }
                          }
                        })
                      })
                    )
                  ])
                ]
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-39e13feb";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\actionsheet\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Actionsheet = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//

var script$1 = create({
  name: 'badge',

  props: {
    color: String,
    isDot: Boolean
  }
});

/* script */
            const __vue_script__$1 = script$1;
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    {
      staticClass: "weui-badge",
      class: { "weui-badge_dot": _vm.isDot },
      style: { "background-color": _vm.color }
    },
    [!_vm.isDot ? _vm._t("default") : _vm._e()],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = "data-v-3b954ec2";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\badge\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Badge = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

//

var script$2 = create({
  name: 'button',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    isLoading: Boolean,
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean
  },

  methods: {
    handleClick (event) {
      this.$emit('click', event);
    }
  },

  computed: {
    classObject () {
      let ret = {};

      let classType = this.plain ? `weui-btn_plain-${this.type}` : `weui-btn_${this.type}`;
      let classDisabled = this.plain ? 'weui-btn_plain-disabled' : 'weui-btn_disabled';

      ret[classType] = true;
      ret[classDisabled] = this.disabled;
      ret['weui-btn_loading'] = this.isLoading;
      ret['weui-btn_mini'] = this.mini;

      return ret
    }
  }
});

/* script */
            const __vue_script__$2 = script$2;
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "button",
    {
      staticClass: "weui-btn",
      class: _vm.classObject,
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.handleClick }
    },
    [
      _vm.isLoading ? _c("i", { staticClass: "weui-loading" }) : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = "data-v-415dffda";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\button\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Button = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  );

/**
 * add vue-router support
 */
var RouterLink = {
  props: {
    url: String,
    replace: Boolean,
    to: [String, Object]
  },

  methods: {
    routerLink () {
      const { to, url, $router, replace } = this;
      if (to && $router) {
        $router[replace ? 'replace' : 'push'](to);
      } else if (url) {
        replace ? location.replace(url) : location.href = url;
      }
    }
  }
};

//

var script$3 = create({
  name: 'cell',

  mixins: [RouterLink],

  props: {
    title: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    isLink: Boolean
  },

  methods: {
    onClick () {
      this.$emit('click');
      this.routerLink();
    }
  }
});

/* script */
            const __vue_script__$3 = script$3;
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "weui-cell",
      class: { "weui-cell_access": _vm.isLink },
      on: { click: _vm.onClick }
    },
    [
      _c("div", { staticClass: "weui-cell_hd" }, [_vm._t("icon")], 2),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "weui-cell__bd" },
        [
          _vm._t("bd", [
            _c("p", { domProps: { innerHTML: _vm._s(_vm.title) } })
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "weui-cell__ft" },
        [_vm._t("ft", [_vm._v(_vm._s(_vm.value))])],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-a67811a4_0", { source: "", map: {"version":3,"sources":["D:\\Code\\we-vue/D:\\Code\\we-vue/D:\\Code\\we-vue\\packages\\cell\\index.vue"],"names":[],"mappings":";AAiDA,+BAAA","file":"index.vue","sourcesContent":[null]}, media: undefined });
Object.defineProperty(this, "$style", { value: {} });

  };
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\cell\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$3() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Cell = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$3,
    undefined
  );

/**
 * v-clickoutside
 *
 * ```vue
 * <div v-clickoutside="onClose">
 * ```
 */

const context = '@@clickoutsideContext';

var Clickoutside = {
  bind (el, binding) {
    const handler = event => {
      if (!el.contains(event.target)) {
        el[context].callback();
      }
    };

    el[context] = {
      handler,
      callback: binding.value,
      arg: binding.arg || 'click'
    };

    !isServer && document.addEventListener(el[context].arg, handler);
  },

  update (el, binding) {
    /* istanbul ignore next */
    el[context].callback = binding.value;
  },

  unbind (el) {
    !isServer && document.removeEventListener(el[context].arg, el[context].handler);
  },

  install (Vue$$1) {
    Vue$$1.directive('clickoutside', {
      bind: this.bind,
      unbind: this.unbind
    });
  }
};

//

var script$4 = create({
  name: 'cell-swipe',

  components: {
    [Cell.name]: Cell
  },

  directives: {
    Clickoutside
  },

  mixins: [RouterLink],

  props: {
    title: [String, Number],
    value: [String, Number],
    isLink: Boolean
  },

  data () {
    return {
      startPosX: 0,
      rightWidth: 0,
      offset: 0,
      startOffset: 0,
      deltaX: 0,
      transition: ''
    }
  },

  computed: {
    style () {
      return {
        transition: this.transition,
        transform: `translate3d(${this.offset}px, 0px, 0px)`
      }
    }
  },

  mounted () {
    this.rightWidth = this.$refs.rightBtns.clientWidth;
  },

  methods: {
    onTouchstart (event) {
      const touch = getTouch(event);
      this.startPosX = touch.clientX;

      this.startOffset = this.offset;
      this.transition = '';
    },

    onTouchmove (event) {
      const touch = getTouch(event);
      this.deltaX = touch.clientX - this.startPosX;

      const targetOffset = this.startOffset + this.deltaX;

      this.offset = targetOffset > 0 ? 0 : targetOffset < -this.rightWidth ? -this.rightWidth : targetOffset;
    },

    onTouchend () {
      this.transition = 'all 200ms ease';

      // when the moving distance is smaller than 20,
      // the state of the cell-swipe will recover
      if (Math.abs(this.deltaX) < 20) {
        this.offset = this.startOffset;
        return
      }

      if (this.startOffset < 0 && this.deltaX > 0) {
        this.offset = 0;
      } else if (this.startOffset === 0 && this.deltaX < 0) {
        this.offset = -this.rightWidth;
      }
    },

    onClickoutside () {
      this.offset = 0;
    }
  }
});

/* script */
            const __vue_script__$4 = script$4;
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "clickoutside",
          rawName: "v-clickoutside:touchstart",
          value: _vm.onClickoutside,
          expression: "onClickoutside",
          arg: "touchstart"
        }
      ],
      staticClass: "weui-cell weui-cell_swiped"
    },
    [
      _c(
        "div",
        {
          ref: "cellBd",
          staticClass: "weui-cell__bd",
          style: _vm.style,
          on: {
            touchstart: _vm.onTouchstart,
            touchmove: _vm.onTouchmove,
            touchend: _vm.onTouchend,
            touchcancel: _vm.onTouchend
          }
        },
        [
          _c(
            "wv-cell",
            {
              ref: "cell",
              attrs: {
                title: _vm.title,
                value: _vm.value,
                "is-link": _vm.isLink,
                to: _vm.to,
                url: _vm.url
              }
            },
            [
              _c("template", { slot: "icon" }, [_vm._t("icon")], 2),
              _vm._v(" "),
              !_vm.title
                ? _c("template", { slot: "bd" }, [_vm._t("bd")], 2)
                : _vm._e(),
              _vm._v(" "),
              typeof _vm.value === "undefined"
                ? _c("template", { slot: "ft" }, [_vm._t("ft")], 2)
                : _vm._e()
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { ref: "rightBtns", staticClass: "weui-cell__ft" },
        [_vm._t("right")],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = "data-v-521f8415";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\cell-swipe\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$4() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var CellSwipe = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    __vue_create_injector__$4,
    undefined
  );

//

var script$5 = create({
  name: 'cell-swipe-button',

  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
});

/* script */
            const __vue_script__$5 = script$5;
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: "weui-swiped-btn weui-swiped-btn_" + _vm.type },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = "data-v-86f87a8a";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\cell-swipe-button\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$5() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var CellSwipeButton = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    __vue_create_injector__$5,
    undefined
  );

//

var script$6 = create({
  name: 'checklist',

  props: {
    max: {
      type: Number,
      validator: (val) => {
        return val >= 0
      }
    },
    title: String,
    align: {
      type: String,
      default: 'left',
      validator: (val) => {
        return val === 'left' || val === 'right'
      }
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    currentValue: {
      get () {
        return this.value
      },

      set (val) {
        if (this.max && val.length > this.max) {
          val = val.slice(0, this.max);
        }

        this.$emit('input', val);
      }
    }
  },

  created () {
    this.currentValue = this.value;
  },

  watch: {
    value (val, oldValue) {
      if (JSON.stringify(val) !== JSON.stringify(oldValue)) {
        this.$emit('change', val);
      }
    }
  }
});

/* script */
            const __vue_script__$6 = script$6;
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _vm.title
      ? _c("div", {
          staticClass: "weui-cells__title",
          domProps: { innerHTML: _vm._s(_vm.title) }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "weui-cells weui-cells_checkbox" },
      _vm._l(_vm.options, function(option) {
        return _c(
          "label",
          {
            key: option.label || option,
            staticClass: "weui-cell weui-check__label",
            class: { "weui-check__label-disabled": option.disabled }
          },
          [
            _vm.align === "left"
              ? _c("div", { staticClass: "weui-cell__hd" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentValue,
                        expression: "currentValue"
                      }
                    ],
                    staticClass: "weui-check",
                    attrs: { type: "checkbox", disabled: option.disabled },
                    domProps: {
                      value: option.value || option,
                      checked: Array.isArray(_vm.currentValue)
                        ? _vm._i(_vm.currentValue, option.value || option) > -1
                        : _vm.currentValue
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.currentValue,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false;
                        if (Array.isArray($$a)) {
                          var $$v = option.value || option,
                            $$i = _vm._i($$a, $$v);
                          if ($$el.checked) {
                            $$i < 0 && (_vm.currentValue = $$a.concat([$$v]));
                          } else {
                            $$i > -1 &&
                              (_vm.currentValue = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)));
                          }
                        } else {
                          _vm.currentValue = $$c;
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "weui-icon-checked" })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "weui-cell__bd" }, [
              _c("p", {
                domProps: { textContent: _vm._s(option.label || option) }
              })
            ]),
            _vm._v(" "),
            _vm.align === "right"
              ? _c("div", { staticClass: "weui-cell__hd" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.currentValue,
                        expression: "currentValue"
                      }
                    ],
                    staticClass: "weui-check",
                    attrs: { type: "checkbox", disabled: option.disabled },
                    domProps: {
                      value: option.value || option,
                      checked: Array.isArray(_vm.currentValue)
                        ? _vm._i(_vm.currentValue, option.value || option) > -1
                        : _vm.currentValue
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.currentValue,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false;
                        if (Array.isArray($$a)) {
                          var $$v = option.value || option,
                            $$i = _vm._i($$a, $$v);
                          if ($$el.checked) {
                            $$i < 0 && (_vm.currentValue = $$a.concat([$$v]));
                          } else {
                            $$i > -1 &&
                              (_vm.currentValue = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)));
                          }
                        } else {
                          _vm.currentValue = $$c;
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("i", { staticClass: "weui-icon-checked" })
                ])
              : _vm._e()
          ]
        )
      })
    )
  ])
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = "data-v-525bb8d6";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\checklist\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$6() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Checklist = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    __vue_create_injector__$6,
    undefined
  );

//

var script$7 = create({
  name: 'circle',

  props: {
    diameter: {
      type: Number,
      default: 100
    },
    lineWidth: {
      type: Number,
      default: 4
    },
    strokeColor: {
      type: String,
      default: '#3FC7FA'
    },
    trailColor: {
      type: String,
      default: '#D9D9D9'
    },
    fillColor: {
      type: String,
      default: 'transparent'
    },
    speed: {
      type: Number,
      default: 500
    },
    value: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  computed: {
    style () {
      return {
        width: this.diameter + 'px',
        height: this.diameter + 'px'
      }
    },

    pathRadius () {
      return (this.diameter - this.lineWidth) / 2
    },

    radius () {
      return this.diameter / 2
    },

    pathString () {
      return `M ${this.radius},${this.radius} m 0,-${this.pathRadius}
      a ${this.pathRadius},${this.pathRadius} 0 1 1 0,${2 * this.pathRadius}
      a ${this.pathRadius},${this.pathRadius} 0 1 1 0,-${2 * this.pathRadius}`
    },

    len () {
      return Math.PI * 2 * this.pathRadius
    },

    pathStyle () {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - this.currentValue) / 100 * this.len)}px`,
        'transition': `stroke-dashoffset ${this.speed}ms ease 0s, stroke ${this.speed}ms ease`
      }
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },

    value (val) {
      this.currentValue = val;
    }
  }
});

/* script */
            const __vue_script__$7 = script$7;
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "wv-circle", style: _vm.style }, [
    _c(
      "svg",
      {
        attrs: {
          width: _vm.diameter,
          height: _vm.diameter,
          viewBox: "0 0 " + _vm.diameter + " " + _vm.diameter
        }
      },
      [
        _c("path", {
          attrs: {
            d: _vm.pathString,
            stroke: _vm.trailColor,
            "stroke-width": _vm.lineWidth,
            fill: "none"
          }
        }),
        _vm._v(" "),
        _c("path", {
          style: _vm.pathStyle,
          attrs: {
            d: _vm.pathString,
            "stroke-linecap": "round",
            stroke: _vm.strokeColor,
            "stroke-width": _vm.lineWidth,
            fill: _vm.fillColor
          }
        }),
        _vm._v(" "),
        _c(
          "text",
          {
            staticClass: "wv-circle-content",
            attrs: {
              "text-anchor": "middle",
              "dominant-baseline": "middle",
              x: "50%",
              y: "50%"
            }
          },
          [_vm._t("default")],
          2
        )
      ]
    )
  ])
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = "data-v-5ff8fcbb";
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* component normalizer */
  function __vue_normalize__$7(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\circle\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$7() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Circle = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    __vue_create_injector__$7,
    undefined
  );

//

const range = (num, min, max) => Math.min(Math.max(num, min), max);

// height of th option item
const ITEM_HEIGHT = 34;
// default transition
const DEFAULT_TRANSITION = 'all 150ms ease';

var script$8 = create({
  name: 'picker-column',

  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {},
    valueKey: String,
    visibleItemCount: {
      type: Number,
      default: 7,
      validator: (value) => {
        return [3, 5, 7].indexOf(value) > -1
      }
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      startY: 0,
      startOffset: 0,
      offset: 0,
      prevY: 0,
      prevTime: null,
      velocity: 0, // moving velocity
      transition: '',
      currentIndex: this.defaultIndex
    }
  },

  computed: {
    minTranslateY () {
      return ITEM_HEIGHT * (Math.ceil(this.visibleItemCount / 2) - this.options.length)
    },

    maxTranslateY () {
      return ITEM_HEIGHT * Math.floor(this.visibleItemCount / 2)
    },

    wrapperStyle () {
      return {
        transition: this.transition,
        transform: `translate3d(0, ${this.offset}px, 0)`
      }
    },

    pickerIndicatorStyle () {
      return {
        top: Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT + 'px'
      }
    },

    pickerMaskStyle () {
      return {
        backgroundSize: '100% ' + Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT + 'px'
      }
    },

    count () {
      return this.options.length
    },

    currentValue () {
      return this.options[this.currentIndex]
    }
  },

  created () {
    this.$parent && this.$parent.children.push(this);
  },

  mounted () {
    this.setIndex(this.currentIndex);
  },

  destroyed () {
    this.$parent && this.$parent.children.splice(this.$parent.children.indexOf(this), 1);
  },

  methods: {
    getOptionText (item) {
      return typeof item === 'object' ? item[this.valueKey] : item
    },

    isDisabled (item) {
      return typeof item === 'object' && item.disabled
    },

    indexToOffset (index) {
      const baseOffset = Math.floor(this.visibleItemCount / 2);
      return (index - baseOffset) * -ITEM_HEIGHT
    },

    offsetToIndex (offset) {
      offset = Math.round(offset / ITEM_HEIGHT) * ITEM_HEIGHT;
      return -(offset - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT
    },

    onTouchstart (event) {
      this.startOffset = this.offset;
      this.startY = event.touches[0].clientY;
      this.prevY = event.touches[0].clientY;
      this.prevTime = new Date();
      this.transition = '';
    },

    onTouchmove (event) {
      const currentTime = +new Date();
      const currentY = event.touches[0].clientY;

      const distance = currentY - this.startY;

      this.offset = this.startOffset + distance;

      // compute velocity
      this.velocity = (event.touches[0].clientY - this.prevY) / (currentTime - this.prevTime);
      this.prevY = currentY;
      this.prevTime = currentTime;
    },

    onTouchend () {
      this.transition = DEFAULT_TRANSITION;

      const endOffset = this.offset + this.velocity * 150;

      const index = this.offsetToIndex(endOffset);

      this.setIndex(index, true);
    },

    onClick (event) {
      const indicator = this.$refs.indicator;

      this.transition = DEFAULT_TRANSITION;

      // treat the event as 'click' when the moving distance is shorter than 10px
      const indicatorRect = indicator.getBoundingClientRect();
      const clickOffset = Math.floor((event.clientY - indicatorRect.top) / ITEM_HEIGHT) * ITEM_HEIGHT;

      const targetOffset = this.offset - clickOffset;

      // offset should be within the range
      this.offset = range(targetOffset, this.minTranslateY, this.maxTranslateY);

      const index = this.offsetToIndex(this.offset);

      this.setIndex(index, true);
    },

    // adjust index, avoid disabled options
    adjustIndex (index) {
      index = range(index, 0, this.count);
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i
      }
    },

    setIndex (index, userAction = false) {
      index = this.adjustIndex(index);
      this.offset = this.indexToOffset(index);

      if (index !== this.currentIndex) {
        this.currentIndex = index;
        userAction && this.$emit('change', index);
      }
    },

    setValue (value) {
      const { options } = this;
      const valueIndex = options.findIndex(option => {
        return this.getOptionText(option) === value
      });
      if (valueIndex > -1) {
        this.setIndex(valueIndex);
      }
    }
  },

  watch: {
    defaultIndex (index) {
      this.setIndex(index);
    },

    options (val, oldValue) {
      if (JSON.stringify(val) !== JSON.stringify(oldValue)) {
        this.setIndex(0);
      }
    }
  }
});

/* script */
            const __vue_script__$8 = script$8;
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return !_vm.divider
    ? _c(
        "div",
        {
          staticClass: "weui-picker__group",
          on: {
            touchstart: _vm.onTouchstart,
            touchmove: function($event) {
              $event.preventDefault();
              return _vm.onTouchmove($event)
            },
            touchend: _vm.onTouchend,
            touchcancel: _vm.onTouchend,
            click: _vm.onClick
          }
        },
        [
          _c("div", {
            staticClass: "weui-picker__mask",
            style: _vm.pickerMaskStyle
          }),
          _vm._v(" "),
          _c("div", {
            ref: "indicator",
            staticClass: "weui-picker__indicator",
            style: _vm.pickerIndicatorStyle
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "weui-picker__content", style: _vm.wrapperStyle },
            _vm._l(_vm.options, function(option, index) {
              return _c("div", {
                key: index,
                staticClass: "weui-picker__item",
                class: { "weui-picker__item_disabled": _vm.isDisabled(option) },
                domProps: { textContent: _vm._s(_vm.getOptionText(option)) }
              })
            })
          )
        ]
      )
    : _c("div", {
        staticClass: "wv-picker-column-divider",
        domProps: { innerHTML: _vm._s(_vm.content) }
      })
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = "data-v-9ccced44";
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* component normalizer */
  function __vue_normalize__$8(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\picker\\picker-column.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$8() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$8.styles || (__vue_create_injector__$8.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var PickerColumn = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    __vue_create_injector__$8,
    undefined
  );

//

// height of th option item
const ITEM_HEIGHT$1 = 34;

var script$9 = create({
  name: 'picker',

  components: {
    PickerColumn
  },

  props: {
    visible: Boolean,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    columns: {
      type: Array,
      default: () => []
    },
    valueKey: String,
    visibleItemCount: {
      type: Number,
      default: 7,
      validator: (value) => {
        return [3, 5, 7].indexOf(value) > -1
      }
    },
    value: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      children: [],
      currentColumns: [],
      currentValue: this.value
    }
  },

  computed: {
    columnCount () {
      return this.columns.filter(column => !column.divider).length
    },

    pickerBodyStyle () {
      return {
        height: this.visibleItemCount * ITEM_HEIGHT$1 + 'px'
      }
    }
  },

  created () {
    this.initialize();
  },

  methods: {
    initialize () {
      this.currentColumns = this.columns;
    },

    columnValueChange (columnIndex) {
      this.currentValue = this.getValues();
      this.$emit('change', this, this.getValues(), columnIndex);
    },

    getColumn (columnIndex) {
      let children = this.children;
      return children.find((child, index) => {
        return (child.$options.name === 'wv-picker-column' && !child.divider && index === columnIndex)
      })
    },

    getColumnValue (columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentValue
    },

    setColumnValue (columnIndex, value) {
      const column = this.getColumn(columnIndex);
      column && column.setValue(value);
    },

    getColumnValues (columnIndex) {
      return (this.currentColumns[columnIndex] || {}).values
    },

    setColumnValues (columnIndex, values) {
      const column = this.currentColumns[columnIndex];
      if (column) {
        column.values = values;
      }
    },

    getValues () {
      return this.children.map(child => child.currentValue)
    },

    setValues (values) {
      if (this.columnCount !== values.length) {
        throw new Error('Length values is not equal to columns count.')
      }

      values.forEach((value, index) => {
        this.setColumnValue(index, value);
      });
    },

    getColumnIndex (columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex
    },

    setColumnIndex (columnIndex, index) {
      const column = this.getColumn(columnIndex);
      column && column.setIndex(index);
    },

    getIndexes () {
      return this.children.map(child => child.currentIndex)
    },

    setIndexes (indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex);
      });
    },

    onCancel () {
      this.$emit('cancel', this);
      this.$emit('update:visible', false);
    },

    onConfirm () {
      this.$emit('confirm', this);
      this.$emit('update:visible', false);
    }
  },

  watch: {
    value (val) {
      this.setValues(val);
      this.currentValue = val;
    },

    currentValue (val) {
      this.$emit('input', val);
    }
  }
});

/* script */
            const __vue_script__$9 = script$9;
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "weui-animate-fade-in",
            "leave-active-class": "weui-animate-fade-out"
          }
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.visible,
                expression: "visible"
              }
            ],
            staticClass: "weui-mask"
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "weui-animate-slide-up",
            "leave-active-class": "weui-animate-slide-down"
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible,
                  expression: "visible"
                }
              ],
              staticClass: "weui-picker"
            },
            [
              _c("div", { staticClass: "weui-picker__hd" }, [
                _c("div", {
                  staticClass: "weui-picker__action",
                  domProps: { textContent: _vm._s(_vm.cancelText) },
                  on: { click: _vm.onCancel }
                }),
                _vm._v(" "),
                _c("div", {
                  staticClass: "weui-picker__action",
                  domProps: { textContent: _vm._s(_vm.confirmText) },
                  on: { click: _vm.onConfirm }
                })
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "weui-picker__bd", style: _vm.pickerBodyStyle },
                _vm._l(_vm.columns, function(column, index) {
                  return _c("picker-column", {
                    key: index,
                    attrs: {
                      options: column.values || [],
                      "value-key": _vm.valueKey,
                      divider: column.divider,
                      content: column.content,
                      "default-index": column.defaultIndex,
                      "visible-item-count": _vm.visibleItemCount
                    },
                    on: {
                      change: function($event) {
                        _vm.columnValueChange(index);
                      }
                    }
                  })
                })
              )
            ]
          )
        ]
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = "data-v-50ba0214";
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* component normalizer */
  function __vue_normalize__$9(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\picker\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$9() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$9.styles || (__vue_create_injector__$9.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var WvPicker = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    __vue_create_injector__$9,
    undefined
  );

//

const isValidDate = date => Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime());

var script$a = create({
  name: 'datetime-picker',

  components: {
    WvPicker
  },

  props: {
    visible: Boolean,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    type: {
      type: String,
      default: 'datetime'
    },
    startDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear() - 10, 0, 1),
      validator: isValidDate
    },
    endDate: {
      type: Date,
      default: () => new Date(new Date().getFullYear() + 10, 11, 31),
      validator: isValidDate
    },
    startHour: {
      type: Number,
      default: 0
    },
    endHour: {
      type: Number,
      default: 23
    },
    yearFormat: {
      type: String,
      default: '{value}'
    },
    monthFormat: {
      type: String,
      default: '{value}'
    },
    dateFormat: {
      type: String,
      default: '{value}'
    },
    hourFormat: {
      type: String,
      default: '{value}'
    },
    minuteFormat: {
      type: String,
      default: '{value}'
    },
    visibleItemCount: {
      type: Number,
      default: 7
    },
    value: {}
  },

  data () {
    return {
      currentVisible: this.visible,
      currentValue: this.correctValue(this.value)
    }
  },

  computed: {
    ranges () {
      if (this.type === 'time') {
        return {
          hour: [this.startHour, this.endHour],
          minute: [0, 59]
        }
      }

      const { startYear, startMonth, startDate, startHour, startMinute } = this.getBoundary('start', this.currentValue);
      const { endYear, endMonth, endDate, endHour, endMinute } = this.getBoundary('end', this.currentValue);

      if (this.type === 'datetime') {
        return {
          year: [startYear, endYear],
          month: [startMonth, endMonth],
          date: [startDate, endDate],
          hour: [startHour, endHour],
          minute: [startMinute, endMinute]
        }
      } else {
        return {
          year: [startYear, endYear],
          month: [startMonth, endMonth],
          date: [startDate, endDate]
        }
      }
    },

    pickerColumns () {
      let result = [];
      for (let rangeKey in this.ranges) {
        result.push({
          values: this.fillColumnValues(rangeKey, this.ranges[rangeKey][0], this.ranges[rangeKey][1])
        });
      }

      return result
    }
  },

  methods: {
    open () {
      this.currentVisible = true;
    },

    close () {
      this.currentVisible = false;
    },

    isLeapYear (year) {
      return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)
    },

    isShortMonth (month) {
      return [4, 6, 9, 11].indexOf(month) > -1
    },

    getMonthEndDay (year, month) {
      if (this.isShortMonth(month)) {
        return 30
      } else if (month === 2) {
        return this.isLeapYear(year) ? 29 : 28
      } else {
        return 31
      }
    },

    getTrueValue (formattedValue) {
      if (!formattedValue) return
      while (isNaN(parseInt(formattedValue, 10))) {
        formattedValue = formattedValue.slice(1);
      }
      return parseInt(formattedValue, 10)
    },

    correctValue (value) {
      // validate value
      const isDateType = this.type.indexOf('date') > -1;
      if (isDateType && !isValidDate(value)) {
        value = this.startDate;
      } else if (!value) {
        const { startHour } = this;
        value = `${startHour > 10 ? startHour : '0' + startHour}:00`;
      }

      // time type
      if (!isDateType) {
        const [hour, minute] = value.split(':');
        let correctedHour = Math.max(hour, this.startHour);
        correctedHour = Math.min(correctedHour, this.endHour);

        return `${correctedHour}:${minute}`
      }

      // date type
      const { endYear, endDate, endMonth, endHour, endMinute } = this.getBoundary('end', value);
      const { startYear, startDate, startMonth, startHour, startMinute } = this.getBoundary('start', value);
      const startDay = new Date(startYear, startMonth - 1, startDate, startHour, startMinute);
      const endDay = new Date(endYear, endMonth - 1, endDate, endHour, endMinute);
      value = Math.max(value, startDay);
      value = Math.min(value, endDay);

      return new Date(value)
    },

    onChange (picker) {
      const values = picker.getValues();
      let value;

      if (this.type === 'time') {
        value = values.join(':');
      } else {
        const year = this.getTrueValue(values[0]);
        const month = this.getTrueValue(values[1]);
        let date = this.getTrueValue(values[2]);
        const endDate = this.getMonthEndDay(year, month);

        date = date > endDate ? endDate : date;
        let hour = 0;
        let minute = 0;
        if (this.type === 'datetime') {
          hour = this.getTrueValue(values[3]);
          minute = this.getTrueValue(values[4]);
        }
        value = new Date(year, month - 1, date, hour, minute);
      }

      value = this.correctValue(value);
      this.currentValue = value;
      this.$emit('change', picker);
      this.$emit('input', value);
    },

    fillColumnValues (type, start, end) {
      let values = [];
      for (let i = start; i <= end; i++) {
        if (i < 10) {
          values.push(this[`${type}Format`].replace('{value}', ('0' + i).slice(-2)));
        } else {
          values.push(this[`${type}Format`].replace('{value}', i));
        }
      }
      return values
    },

    getBoundary (type, value) {
      const boundary = this[`${type}Date`];
      const year = boundary.getFullYear();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;

      if (type === 'end') {
        month = 12;
        date = this.getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute
      }
    },

    updateColumnValue (value) {
      let values = [];
      if (this.type === 'time') {
        const currentValue = value.split(':');
        values = [
          this.hourFormat.replace('{value}', `0${currentValue[0]}`.slice(-2)),
          this.minuteFormat.replace('{value}', `0${currentValue[1]}`.slice(-2))
        ];
      } else {
        values = [
          this.yearFormat.replace('{value}', `${value.getFullYear()}`),
          this.monthFormat.replace('{value}', `0${value.getMonth() + 1}`.slice(-2)),
          this.dateFormat.replace('{value}', `0${value.getDate()}`.slice(-2))
        ];
        if (this.type === 'datetime') {
          values.push(
            this.hourFormat.replace('{value}', `0${value.getHours()}`.slice(-2)),
            this.minuteFormat.replace('{value}', `0${value.getMinutes()}`.slice(-2))
          );
        }
      }

      this.$nextTick(() => {
        this.setColumnByValues(values);
      });
    },

    setColumnByValues (values) {
      this.$refs.picker.setValues(values);
    },

    onConfirm () {
      this.visible = false;
      this.$emit('confirm', this.currentValue);
    },

    onCancel () {
      this.visible = false;
      this.$emit('cancel');
    }
  },

  mounted () {
    if (!this.value) {
      this.currentValue = this.type.indexOf('date') > -1 ? this.startDate : `${('0' + this.startHour).slice(-2)}:00`;
    } else {
      this.currentValue = this.value;
    }

    this.updateColumnValue(this.currentValue);
  },

  watch: {
    value (val) {
      val = this.correctValue(val);
      const isEqual = this.type === 'time' ? val === this.currentValue : val.valueOf() === this.currentValue.valueOf();

      if (!isEqual) {
        this.currentValue = val;
      }
    },

    currentValue (val) {
      this.updateColumnValue(val);
      this.$emit('input', val);
    }
  }
});

/* script */
            const __vue_script__$a = script$a;
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("wv-picker", {
    ref: "picker",
    attrs: {
      visible: _vm.currentVisible,
      columns: _vm.pickerColumns,
      "confirm-text": _vm.confirmText,
      "cancel-text": _vm.cancelText,
      "visible-item-count": _vm.visibleItemCount
    },
    on: {
      "update:visible": function($event) {
        _vm.currentVisible = $event;
      },
      change: _vm.onChange,
      confirm: _vm.onConfirm,
      cancel: _vm.onCancel
    }
  })
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = "data-v-6ffcf6ce";
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* component normalizer */
  function __vue_normalize__$a(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\datetime-picker\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$a() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$a.styles || (__vue_create_injector__$a.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var DatetimePicker = __vue_normalize__$a(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    __vue_create_injector__$a,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//

var script$b = {
  name: 'modal',

  props: {
    visible: Boolean,
    zIndex: Number,
    className: String,
    customStyle: Object
  },

  computed: {
    style () {
      return {
        zIndex: this.zIndex,
        ...this.customStyle
      }
    }
  }
};

/* script */
            const __vue_script__$b = script$b;
            
/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("transition", { attrs: { name: "wv-fade" } }, [
    _c("div", {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.visible,
          expression: "visible"
        }
      ],
      staticClass: "wv-modal",
      class: _vm.className,
      style: _vm.style,
      on: {
        touchmove: function($event) {
          $event.preventDefault();
          $event.stopPropagation();
        },
        click: function($event) {
          _vm.$emit("click", $event);
        }
      }
    })
  ])
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* component normalizer */
  function __vue_normalize__$b(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\mixins\\popup\\Modal.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$b() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$b.styles || (__vue_create_injector__$b.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Modal = __vue_normalize__$b(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    __vue_create_injector__$b,
    undefined
  );

const PopupContext = {
  idSeed: 1,
  zIndex: 2000,
  stack: [],

  plusKey (key) {
    return this[key]++
  },

  get top () {
    return this.stack[this.stack.length - 1]
  }
};

const defaultConfig = {
  className: '',
  customStyle: {}
};

var manager = {
  open (vm, config) {
    const exist = PopupContext.stack.some(item => item.vm._popupId === vm.popupId);

    if (!exist) {
      const el = vm.$el;
      const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body;
      PopupContext.stack.push({ vm, config, targetNode });
      this.update();
    }
  },

  close (id) {
    const { stack } = PopupContext;

    if (stack.length) {
      if (PopupContext.top.vm._popupId === id) {
        stack.pop();
        this.update();
      } else {
        PopupContext.stack = stack.filter(item => item.vm._popupId !== id);
      }
    }
  },

  update () {
    let { modal } = PopupContext;

    if (!modal) {
      modal = new (Vue.extend(Modal))({
        el: document.createElement('div')
      });
      modal.$on('click', this.onClick);
      PopupContext.modal = modal;
    }

    if (modal.$el.parentNode) {
      modal.visible = false;
    }

    if (PopupContext.top) {
      const { targetNode, config } = PopupContext.top;

      targetNode.appendChild(modal.$el);
      Object.assign(modal, {
        ...defaultConfig,
        ...config,
        visible: true
      });
    }
  },

  // close popup when click modal && closeOnClickMask is true
  onClick () {
    if (PopupContext.top) {
      const { vm } = PopupContext.top;
      vm.$emit('click-mask');
      vm.closeOnClickMask && vm.close();
    }
  }
};

var scrollUtils = {
  debounce (func, wait, immediate) {
    let timeout, args, context, timestamp, result;
    return function () {
      context = this;
      args = arguments;
      timestamp = new Date();
      const later = () => {
        const last = (new Date()) - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          result = func.apply(context, args);
        }
      };
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      return result
    }
  },

  /**
   * 找到最近的触发滚动事件的元素
   * @param {Element} element
   * @param {Element} rootParent
   * @returns {Element | window}
   */
  getScrollEventTarget (element, rootParent = window) {
    let currentNode = element;
    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1 && currentNode !== rootParent) {
      const overflowY = this.getComputedStyle(currentNode).overflowY;
      if (overflowY === 'scroll' || overflowY === 'auto') {
        return currentNode
      }
      currentNode = currentNode.parentNode;
    }
    return rootParent
  },

  // 判断元素是否被加入到页面节点内
  isAttached (element) {
    let currentNode = element.parentNode;
    while (currentNode) {
      if (currentNode.tagName === 'HTML') {
        return true
      }
      if (currentNode.nodeType === 11) {
        return false
      }
      currentNode = currentNode.parentNode;
    }
    return false
  },

  // 获取滚动高度
  getScrollTop (element) {
    return 'scrollTop' in element ? element.scrollTop : element.pageYOffset
  },

  // 设置滚动高度
  setScrollTop (element, value) {
    'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
  },

  // 获取元素距离顶部高度
  getElementTop (element) {
    return (element === window ? 0 : element.getBoundingClientRect().top) + this.getScrollTop(window)
  },

  getVisibleHeight (element) {
    return element === window ? element.innerHeight : element.getBoundingClientRect().height
  },

  getComputedStyle: !isServer && document.defaultView.getComputedStyle.bind(document.defaultView)
};

let supportsPassive = false;
if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

function on (target, event, handler, passive = false) {
  !isServer &&
  target.addEventListener(
    event,
    handler,
    supportsPassive ? {capture: false, passive} : false
  );
}

function off (target, event, handler) {
  !isServer && target.removeEventListener(event, handler);
}

var PopupMixin = {
  props: {
    // whether to show popup
    visible: Boolean,
    // whether to show mask
    mask: Boolean,
    // mask custom style
    maskStyle: Object,
    // mask custom class name
    maskClass: String,
    // whether to close popup when click mask
    closeOnClickMask: Boolean,
    // z-index
    zIndex: [String, Number],
    // prevent body scroll
    getContainer: Function,
    lockOnScroll: {
      type: Boolean,
      default: true
    }
  },

  watch: {
    visible (val) {
      this[val ? 'open' : 'close']();
    },

    getContainer () {
      this.move();
    },

    mask () {
      this.renderMask();
    }
  },

  created () {
    this._popupId = 'popup-' + PopupContext.plusKey('idSeed');
    this.pos = {
      x: 0,
      y: 0
    };
  },

  mounted () {
    if (this.getContainer) {
      this.move();
    }
    if (this.visible) {
      this.open();
    }
  },

  methods: {
    move () {
      /* istanbul ignore else */
      if (this.getContainer) {
        this.getContainer().appendChild(this.$el);
      } else if (this.$parent) {
        this.$parent.$el.appendChild(this.$el);
      }
    },

    onTouchstart (e) {
      this.pos = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    },

    onTouchmove (e) {
      const { pos } = this;
      const dx = e.touches[0].clientX - pos.x;
      const dy = e.touches[0].clientY - pos.y;
      const direction = dy > 0 ? '10' : '01';
      const el = scrollUtils.getScrollEventTarget(e.target, this.$el);
      const {scrollHeight, offsetHeight, scrollTop} = el;
      const isVertical = Math.abs(dx) < Math.abs(dy);

      let status = '11';

      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }

      if (
        status !== '11' &&
        isVertical &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    },

    open () {
      /* istanbul ignore next */
      if (this.$isServer) {
        return
      }

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        PopupContext.zIndex = this.zIndex;
      }

      if (this.lockOnScroll) {
        document.body.classList.add('wv-overflow-hidden');
        on(document, 'touchstart', this.onTouchstart);
        on(document, 'touchmove', this.onTouchmove);
      }

      this.renderMask();
      this.$emit('update:visible', true);
    },

    close () {
      if (this.lockOnScroll) {
        document.body.classList.remove('wv-overflow-hidden');
        off(document, 'touchstart', this.onTouchstart);
        off(document, 'touchmove', this.onTouchmove);
      }

      manager.close(this._popupId);
      this.$emit('update:visible', false);
    },

    renderMask () {
      if (this.mask) {
        manager.open(this, {
          zIndex: PopupContext.plusKey('zIndex'),
          className: this.maskClass,
          customStyle: this.maskStyle
        });
      } else {
        manager.close(this._popupId);
      }
      this.$el.style.zIndex = PopupContext.plusKey('zIndex');
    }
  },

  beforeDestroy () {
    this.close();
  }
};

//

const CONFIRM_TEXT = '确定';
const CANCEL_TEXT = '取消';

var script$c = create({
  name: 'dialog',

  mixins: [PopupMixin],

  props: {
    skin: {
      type: String,
      default: 'ios'
    },
    title: String,
    message: String,
    confirmButtonText: {
      type: String,
      default: CONFIRM_TEXT
    },
    cancelButtonText: {
      type: String,
      default: CANCEL_TEXT
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    callback: Function
  },

  methods: {
    handleAction (action) {
      this.visible = false;
      this.$emit(action);
      this.callback && this.callback(action);
    }
  }
});

/* script */
            const __vue_script__$c = script$c;
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition-group",
    {
      attrs: {
        "enter-active-class": "weui-animate-fade-in",
        "leave-active-class": "weui-animate-fade-out"
      }
    },
    [
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        key: "mask",
        staticClass: "weui-mask"
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          key: "dialog",
          staticClass: "weui-dialog",
          class: { "weui-skin_android": _vm.skin === "android" }
        },
        [
          _vm.title
            ? _c("div", { staticClass: "weui-dialog__hd" }, [
                _c("strong", {
                  staticClass: "weui-dialog__title",
                  domProps: { innerHTML: _vm._s(_vm.title) }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", {
            staticClass: "weui-dialog__bd",
            domProps: { innerHTML: _vm._s(_vm.message) }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "weui-dialog__ft" }, [
            _vm.showCancelButton
              ? _c("div", {
                  staticClass: "weui-dialog__btn weui-dialog__btn_default",
                  domProps: { textContent: _vm._s(_vm.cancelButtonText) },
                  on: {
                    click: function($event) {
                      _vm.handleAction("cancel");
                    }
                  }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.showConfirmButton
              ? _c("div", {
                  staticClass: "weui-dialog__btn weui-dialog__btn_primary",
                  domProps: { textContent: _vm._s(_vm.confirmButtonText) },
                  on: {
                    click: function($event) {
                      _vm.handleAction("confirm");
                    }
                  }
                })
              : _vm._e()
          ])
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = undefined;
  /* scoped */
  const __vue_scope_id__$c = "data-v-cbe0fca4";
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* component normalizer */
  function __vue_normalize__$c(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\dialog\\dialog.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$c() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$c.styles || (__vue_create_injector__$c.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var DialogComponent = __vue_normalize__$c(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    __vue_create_injector__$c,
    undefined
  );

let instance;

let CONFIRM_TEXT$1 = '确定';
let CANCEL_TEXT$1 = '取消';

let defaultOptions = {
  visible: true,
  title: '提示',
  message: '',
  type: '',
  modalFade: false,
  lockScroll: false,
  closeOnClickModal: true,
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: CONFIRM_TEXT$1,
  cancelButtonText: CANCEL_TEXT$1,
  callback: action => {
    instance[action === 'confirm' ? 'resolve' : 'reject'](action);
  }
};

const initInstance = () => {
  const DialogConstructor = Vue.extend(DialogComponent);

  instance = new DialogConstructor({
    el: document.createElement('div')
  });

  document.body.appendChild(instance.$el);
};

const Dialog = options => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      initInstance();
    }

    Object.assign(instance, {
      resolve,
      reject,
      ...defaultOptions,
      ...options
    });
  })
};

Dialog.alert = options => Dialog({
  ...defaultOptions,
  ...options
});

Dialog.confirm = options => Dialog({
  ...defaultOptions,
  showCancelButton: true,
  ...options
});

Dialog.close = () => {
  instance.visible = false;
};

Vue.prototype.$dialog = Dialog;

//

var script$d = create({
  name: 'flex',

  props: {
    gutter: {
      type: [Number, String],
      default: 0,
      validator: (val) => {
        return Number(val) >= 0
      }
    }
  },

  computed: {
    style () {
      const margin = `-${Number(this.gutter) / 2}px`;

      return this.gutter ? { marginLeft: margin, marginRight: margin } : {}
    }
  }
});

/* script */
            const __vue_script__$d = script$d;
/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "weui-flex", style: _vm.style },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = undefined;
  /* scoped */
  const __vue_scope_id__$d = "data-v-cd28888e";
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* component normalizer */
  function __vue_normalize__$d(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\flex\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$d() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$d.styles || (__vue_create_injector__$d.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Flex = __vue_normalize__$d(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    __vue_create_injector__$d,
    undefined
  );

//

var script$e = create({
  name: 'flex-item',

  props: {
    flex: {
      type: [Number, String],
      default: 1
    },
    offset: {
      type: String,
      default: ''
    }
  },

  computed: {
    gutter () {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },

    style () {
      const padding = `${Number(this.gutter) / 2}px`;

      let ret = this.gutter
        ? {
          paddingLeft: padding,
          paddingRight: padding
        }
        : {};

      return { ...ret, ...{ flex: Number(this.flex), marginLeft: this.offset } }
    }
  }
});

/* script */
            const __vue_script__$e = script$e;
/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "weui-flex__item", style: _vm.style },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  const __vue_inject_styles__$e = undefined;
  /* scoped */
  const __vue_scope_id__$e = "data-v-6990d0cf";
  /* module identifier */
  const __vue_module_identifier__$e = undefined;
  /* functional template */
  const __vue_is_functional_template__$e = false;
  /* component normalizer */
  function __vue_normalize__$e(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\flex-item\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$e() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$e.styles || (__vue_create_injector__$e.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FlexItem = __vue_normalize__$e(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    __vue_create_injector__$e,
    undefined
  );

//

var script$f = create({
  name: 'footer-link',

  mixins: [RouterLink],

  props: {
    text: String
  },

  methods: {
    onClick () {
      this.$emit('click');
      this.routerLink();
    }
  }
});

/* script */
            const __vue_script__$f = script$f;
            
/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "weui-footer__link",
    domProps: { textContent: _vm._s(_vm.text) },
    on: { click: _vm.onClick }
  })
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  const __vue_inject_styles__$f = undefined;
  /* scoped */
  const __vue_scope_id__$f = undefined;
  /* module identifier */
  const __vue_module_identifier__$f = undefined;
  /* functional template */
  const __vue_is_functional_template__$f = false;
  /* component normalizer */
  function __vue_normalize__$f(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\footer\\footer-link.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$f() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$f.styles || (__vue_create_injector__$f.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FooterLink = __vue_normalize__$f(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    __vue_create_injector__$f,
    undefined
  );

//

var script$g = create({
  name: 'footer',

  components: {
    FooterLink
  },

  props: {
    text: String,
    links: {
      type: Array,
      default: () => []
    }
  }
});

/* script */
            const __vue_script__$g = script$g;
/* template */
var __vue_render__$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-footer" }, [
    _vm.links.length > 0
      ? _c(
          "p",
          { staticClass: "weui-footer__links" },
          _vm._l(_vm.links, function(item) {
            return _c("FooterLink", {
              key: item.text,
              attrs: { text: item.text, to: item.link }
            })
          })
        )
      : _vm._e(),
    _vm._v(" "),
    _c("p", {
      staticClass: "weui-footer__text",
      domProps: { innerHTML: _vm._s(_vm.text) }
    })
  ])
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

  /* style */
  const __vue_inject_styles__$g = function (inject) {
    if (!inject) return
    inject("data-v-65bc980e_0", { source: "", map: {"version":3,"sources":["D:\\Code\\we-vue/D:\\Code\\we-vue/D:\\Code\\we-vue\\packages\\footer\\index.vue"],"names":[],"mappings":";AAmCA,iCAAA","file":"index.vue","sourcesContent":[null]}, media: undefined });
Object.defineProperty(this, "$style", { value: {} });

  };
  /* scoped */
  const __vue_scope_id__$g = undefined;
  /* module identifier */
  const __vue_module_identifier__$g = undefined;
  /* functional template */
  const __vue_is_functional_template__$g = false;
  /* component normalizer */
  function __vue_normalize__$g(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\footer\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$g() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$g.styles || (__vue_create_injector__$g.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Footer = __vue_normalize__$g(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    __vue_create_injector__$g,
    undefined
  );

//

var script$h = create({
  name: 'form-preview',

  props: {
    title: String,
    value: String,
    dataItems: {
      type: Array,
      default: () => []
    },
    buttons: {
      type: Array,
      default: () => []
    }
  }
});

/* script */
            const __vue_script__$h = script$h;
/* template */
var __vue_render__$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-form-preview" }, [
    _c("div", { staticClass: "weui-form-preview__hd" }, [
      _c("label", {
        staticClass: "weui-form-preview__label",
        domProps: { innerHTML: _vm._s(_vm.title) }
      }),
      _vm._v(" "),
      _c("em", {
        staticClass: "weui-form-preview__value",
        domProps: { innerHTML: _vm._s(_vm.value) }
      })
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "weui-form-preview__bd" },
      _vm._l(_vm.dataItems, function(item, key, index) {
        return _c("div", { key: key, staticClass: "weui-form-preview__item" }, [
          _c("label", { staticClass: "weui-form-preview__label" }, [
            _vm._v(_vm._s(item.label))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "weui-form-preview__value" }, [
            _vm._v(_vm._s(item.value))
          ])
        ])
      })
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "weui-form-preview__ft" },
      _vm._l(_vm.buttons, function(button, index) {
        return _c("div", {
          key: index,
          staticClass: "weui-form-preview__btn",
          class:
            button.type === "primary"
              ? "weui-form-preview__btn_primary"
              : "weui-form-preview__btn_default",
          domProps: { textContent: _vm._s(button.text) },
          on: { click: button.action }
        })
      })
    )
  ])
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

  /* style */
  const __vue_inject_styles__$h = undefined;
  /* scoped */
  const __vue_scope_id__$h = "data-v-d16c1f3c";
  /* module identifier */
  const __vue_module_identifier__$h = undefined;
  /* functional template */
  const __vue_is_functional_template__$h = false;
  /* component normalizer */
  function __vue_normalize__$h(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\form-preview\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$h() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$h.styles || (__vue_create_injector__$h.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var FormPreview = __vue_normalize__$h(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    __vue_create_injector__$h,
    undefined
  );

//

var script$i = create({
  name: 'grid'
});

/* script */
            const __vue_script__$i = script$i;
/* template */
var __vue_render__$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-grids" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

  /* style */
  const __vue_inject_styles__$i = undefined;
  /* scoped */
  const __vue_scope_id__$i = "data-v-d149edf4";
  /* module identifier */
  const __vue_module_identifier__$i = undefined;
  /* functional template */
  const __vue_is_functional_template__$i = false;
  /* component normalizer */
  function __vue_normalize__$i(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\grid\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$i() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$i.styles || (__vue_create_injector__$i.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Grid = __vue_normalize__$i(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    __vue_create_injector__$i,
    undefined
  );

//

var script$j = create({
  name: 'grid-item',

  mixins: [RouterLink],

  methods: {
    onClick () {
      this.$emit('click');
      this.routerLink();
    }
  }
});

/* script */
            const __vue_script__$j = script$j;
/* template */
var __vue_render__$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "weui-grid", on: { click: _vm.onClick } },
    [
      _vm.$slots.icon
        ? _c("div", { staticClass: "weui-grid__icon" }, [_vm._t("icon")], 2)
        : _vm._e(),
      _vm._v(" "),
      _vm.$slots.label
        ? _c("p", { staticClass: "weui-grid__label" }, [_vm._t("label")], 2)
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

  /* style */
  const __vue_inject_styles__$j = undefined;
  /* scoped */
  const __vue_scope_id__$j = "data-v-3d9d36bf";
  /* module identifier */
  const __vue_module_identifier__$j = undefined;
  /* functional template */
  const __vue_is_functional_template__$j = false;
  /* component normalizer */
  function __vue_normalize__$j(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\grid-item\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$j() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$j.styles || (__vue_create_injector__$j.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var GridItem = __vue_normalize__$j(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    __vue_create_injector__$j,
    undefined
  );

//

var script$k = create({
  name: 'group',

  props: {
    title: String,
    titleColor: String
  }
});

/* script */
            const __vue_script__$k = script$k;
/* template */
var __vue_render__$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _vm.title
      ? _c("div", {
          staticClass: "weui-cells__title",
          style: { color: _vm.titleColor },
          domProps: { innerHTML: _vm._s(_vm.title) }
        })
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "weui-cells" }, [_vm._t("default")], 2)
  ])
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

  /* style */
  const __vue_inject_styles__$k = function (inject) {
    if (!inject) return
    inject("data-v-9da1cdd4_0", { source: "", map: {"version":3,"sources":["D:\\Code\\we-vue/D:\\Code\\we-vue/D:\\Code\\we-vue\\packages\\group\\index.vue"],"names":[],"mappings":";AAuBA,gCAAA","file":"index.vue","sourcesContent":[null]}, media: undefined });
Object.defineProperty(this, "$style", { value: {} });

  };
  /* scoped */
  const __vue_scope_id__$k = undefined;
  /* module identifier */
  const __vue_module_identifier__$k = undefined;
  /* functional template */
  const __vue_is_functional_template__$k = false;
  /* component normalizer */
  function __vue_normalize__$k(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\group\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$k() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$k.styles || (__vue_create_injector__$k.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Group = __vue_normalize__$k(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    __vue_create_injector__$k,
    undefined
  );

//

var script$l = create({
  name: 'header',

  props: {
    title: String,
    fixed: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: '#21292c'
    }
  }
});

/* script */
            const __vue_script__$l = script$l;
/* template */
var __vue_render__$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "header",
    {
      staticClass: "wv-header",
      class: { "is-fixed": _vm.fixed },
      style: { "background-color": _vm.backgroundColor },
      on: {
        click: function($event) {
          $event.stopPropagation();
          _vm.$emit("headerClick");
        }
      }
    },
    [
      _c("div", { staticClass: "wv-header-btn left" }, [_vm._t("left")], 2),
      _vm._v(" "),
      _c("div", {
        staticClass: "wv-header-title",
        domProps: { textContent: _vm._s(_vm.title) }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "wv-header-btn right" }, [_vm._t("right")], 2)
    ]
  )
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

  /* style */
  const __vue_inject_styles__$l = undefined;
  /* scoped */
  const __vue_scope_id__$l = "data-v-4914e8c3";
  /* module identifier */
  const __vue_module_identifier__$l = undefined;
  /* functional template */
  const __vue_is_functional_template__$l = false;
  /* component normalizer */
  function __vue_normalize__$l(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\header\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$l() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$l.styles || (__vue_create_injector__$l.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Header = __vue_normalize__$l(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    __vue_create_injector__$l,
    undefined
  );

//

var script$m = create({
  name: 'icon',

  props: {
    type: {
      type: String,
      required: true
    },
    large: Boolean
  },

  computed: {
    classObject () {
      let classType = `weui-icon-${this.type}`;

      return {
        [classType]: true,
        'weui-icon_msg': this.large
      }
    }
  }
});

/* script */
            const __vue_script__$m = script$m;
/* template */
var __vue_render__$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("i", { class: _vm.classObject })
};
var __vue_staticRenderFns__$m = [];
__vue_render__$m._withStripped = true;

  /* style */
  const __vue_inject_styles__$m = undefined;
  /* scoped */
  const __vue_scope_id__$m = "data-v-9628722c";
  /* module identifier */
  const __vue_module_identifier__$m = undefined;
  /* functional template */
  const __vue_is_functional_template__$m = false;
  /* component normalizer */
  function __vue_normalize__$m(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\icon\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$m() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$m.styles || (__vue_create_injector__$m.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var WvIcon = __vue_normalize__$m(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    __vue_create_injector__$m,
    undefined
  );

const CONTEXT = '@@InfiniteScroll';
const DISTANCE = 300;

function doBindEvent () {
  /* istanbul ignore if */
  if (this.el[CONTEXT].binded) {
    return
  }
  this.el[CONTEXT].binded = true;

  this.scrollEventListener = scrollUtils.debounce(handleScrollEvent.bind(this), 200);
  this.scrollEventTarget = scrollUtils.getScrollEventTarget(this.el);

  const disabledExpr = this.el.getAttribute('infinite-scroll-disabled');
  let disabled = false;
  if (disabledExpr) {
    this.vm.$watch(disabledExpr, (value) => {
      this.disabled = value;
      this.scrollEventListener();
    });
    disabled = Boolean(this.vm[disabledExpr]);
  }
  this.disabled = disabled;

  let distance = this.el.getAttribute('infinite-scroll-distance');
  this.distance = Number(distance) || DISTANCE;

  on(this.scrollEventTarget, 'scroll', this.scrollEventListener, true);

  const immediateCheckExpr = this.el.getAttribute('infinite-scroll-immediate-check');

  let immediateCheck = immediateCheckExpr ? Boolean(this.vm[immediateCheckExpr]) : true;

  if (immediateCheck) {
    this.scrollEventListener();
  }
}

/**
 * handle the scroll event
 */
function handleScrollEvent () {
  const scrollEventTarget = this.scrollEventTarget;
  const element = this.el;

  if (this.disabled) {
    return
  }

  const targetScrollTop = scrollUtils.getScrollTop(scrollEventTarget);
  const targetBottom = targetScrollTop + scrollUtils.getVisibleHeight(scrollEventTarget);
  const targetVisibleHeight = scrollUtils.getVisibleHeight(scrollEventTarget);

  // return when the targetElement has no height (treat as hidden)
  if (!targetVisibleHeight) {
    return
  }

  let needLoadMore = false;
  if (scrollEventTarget === element) {
    needLoadMore = scrollEventTarget.scrollHeight - targetBottom < this.distance;
  } else {
    const elementBottom = scrollUtils.getElementTop(element) - scrollUtils.getElementTop(scrollEventTarget) + scrollUtils.getVisibleHeight(element);

    needLoadMore = elementBottom - targetVisibleHeight < this.distance;
  }

  if (needLoadMore && this.expression) {
    this.expression();
  }
}

function startBind (el) {
  const context = el[CONTEXT];

  context.vm.$nextTick(function () {
    if (scrollUtils.isAttached(el)) {
      doBindEvent.call(el[CONTEXT]);
    }
  });
}

function doCheckStartBind (el) {
  const context = el[CONTEXT];

  if (context.vm._isMounted) {
    /* istanbul ignore next */
    startBind(el);
  } else {
    context.vm.$on('hook:mounted', function () {
      startBind(el);
    });
  }
}

var InfiniteScroll = {
  bind (el, binding, vnode) {
    if (!el[CONTEXT]) {
      el[CONTEXT] = {
        el,
        vm: vnode.context,
        expression: binding.value
      };
    }
    el[CONTEXT].expression = binding.value;

    doCheckStartBind(el);
  },

  update (el) {
    const context = el[CONTEXT];
    context.scrollEventListener && context.scrollEventListener();
  },

  unbind (el) {
    const context = el[CONTEXT];
    if (context.scrollEventTarget) {
      off(context.scrollEventTarget, 'scroll', context.scrollEventListener);
    }
  }
};

const install$1 = (Vue$$1) => {
  Vue$$1.directive('InfiniteScroll', InfiniteScroll);
};

/* istanbul ignore next */
if (!Vue.prototype.$isServer && window.Vue) {
  window.infiniteScroll = InfiniteScroll;
  Vue.use(install$1);
}

InfiniteScroll.install = install$1;

//

var script$n = create({
  components: {
    [WvIcon.name]: WvIcon
  },

  name: 'input',

  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    labelWidth: {
      type: Number,
      default: 105
    },
    placeholder: String,
    value: String,
    name: String,
    autoComplete: {
      type: String,
      default: 'off'
    },
    maxlength: Number,
    minlength: Number,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    required: {
      type: Boolean,
      default: false
    },
    pattern: String,
    validateMode: {
      type: Object,
      default: () => {
        return {
          onFocus: true,
          onBlur: true,
          onChange: true,
          onInput: true
        }
      }
    }
  },

  data () {
    return {
      active: false,
      valid: true,
      currentValue: this.value
    }
  },

  methods: {
    handleInput (event) {
      // 当有最大长度属性时，限制过长的输入
      if (this.maxlength && event.target.value.length >= this.maxlength) {
        this.currentValue = '';
        this.currentValue = event.target.value.substr(0, this.maxlength);
      } else {
        this.currentValue = event.target.value;
      }

      if (typeof this.validateMode === 'undefined' || this.validateMode.onInput !== false) {
        this.validate();
      }
    },

    focus () {
      this.$refs.input.focus();
    },

    onFocus () {
      this.active = true;
      this.$emit('focus');

      if (typeof this.validateMode === 'undefined' || this.validateMode.onFocus !== false) {
        this.validate();
      }
    },

    onBlur () {
      this.active = false;
      this.$emit('blur');

      if (typeof this.validateMode === 'undefined' || this.validateMode.onBlur !== false) {
        this.validate();
      }
    },

    onChange () {
      this.$emit('change', this.currentValue);

      if (typeof this.validateMode === 'undefined' || this.validateMode.onChange !== false) {
        this.validate();
      }
    },

    validate () {
      if (this.pattern) {
        const reg = new RegExp(this.pattern);
        if (!reg.test(this.currentValue)) {
          this.valid = false;
          return
        }
      }

      if (this.required && this.currentValue === '') {
        this.valid = false;
        return
      }

      if (this.minlength && this.currentValue.length < this.minlength) {
        this.valid = false;
        return
      }

      this.valid = true;
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },

    value (val) {
      this.currentValue = val;
    }
  }
});

/* script */
            const __vue_script__$n = script$n;
/* template */
var __vue_render__$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "weui-cell", class: { "weui-cell_warn": !_vm.valid } },
    [
      _c("div", { staticClass: "weui-cell__hd" }, [
        _vm.label
          ? _c("label", {
              staticClass: "weui-label",
              style: { width: _vm.labelWidth + "px" },
              domProps: { innerHTML: _vm._s(_vm.label) }
            })
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "weui-cell__bd" }, [
        _c("input", {
          ref: "input",
          staticClass: "weui-input",
          attrs: {
            type: _vm.type,
            "auto-complete": _vm.autoComplete,
            autofocus: _vm.autofocus,
            placeholder: _vm.placeholder,
            readonly: _vm.readonly,
            number: _vm.type === "number",
            maxlength: _vm.maxlength,
            minlength: _vm.minlength
          },
          domProps: { value: _vm.currentValue },
          on: {
            focus: _vm.onFocus,
            blur: _vm.onBlur,
            change: _vm.onChange,
            input: _vm.handleInput
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "weui-cell__ft" },
        [
          !_vm.valid ? _c("wv-icon", { attrs: { type: "warn" } }) : _vm._e(),
          _vm._v(" "),
          _vm._t("ft")
        ],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$n = [];
__vue_render__$n._withStripped = true;

  /* style */
  const __vue_inject_styles__$n = undefined;
  /* scoped */
  const __vue_scope_id__$n = "data-v-141098fa";
  /* module identifier */
  const __vue_module_identifier__$n = undefined;
  /* functional template */
  const __vue_is_functional_template__$n = false;
  /* component normalizer */
  function __vue_normalize__$n(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\input\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$n() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$n.styles || (__vue_create_injector__$n.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Input = __vue_normalize__$n(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    __vue_create_injector__$n,
    undefined
  );

//

var script$o = create({
  name: 'loadmore',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    text: {
      type: String,
      default: '正在加载'
    }
  }
});

/* script */
            const __vue_script__$o = script$o;
/* template */
var __vue_render__$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "weui-loadmore",
      class: {
        "weui-loadmore_line": _vm.type === "line" || _vm.type === "lineDot",
        "weui-loadmore_dot": _vm.type === "lineDot"
      }
    },
    [
      _vm.type === "default"
        ? _c("i", { staticClass: "weui-loading" })
        : _vm._e(),
      _vm._v(" "),
      _c("span", {
        staticClass: "weui-loadmore__tips",
        domProps: {
          textContent: _vm._s(_vm.type === "lineDot" ? "" : _vm.text)
        }
      })
    ]
  )
};
var __vue_staticRenderFns__$o = [];
__vue_render__$o._withStripped = true;

  /* style */
  const __vue_inject_styles__$o = undefined;
  /* scoped */
  const __vue_scope_id__$o = "data-v-732c8adc";
  /* module identifier */
  const __vue_module_identifier__$o = undefined;
  /* functional template */
  const __vue_is_functional_template__$o = false;
  /* component normalizer */
  function __vue_normalize__$o(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\loadmore\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$o() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$o.styles || (__vue_create_injector__$o.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Loadmore = __vue_normalize__$o(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    __vue_create_injector__$o,
    undefined
  );

//

var script$p = create({
  name: 'media-box',

  mixins: [RouterLink],

  props: {
    type: {
      type: String,
      default: 'appmsg'
    },
    thumb: String,
    title: String,
    description: String
  },

  methods: {
    onClick () {
      this.$emit('click');
      this.routerLink();
    }
  }
});

/* script */
            const __vue_script__$p = script$p;
/* template */
var __vue_render__$p = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.type === "appmsg"
    ? _c(
        "div",
        {
          staticClass: "weui-media-box",
          class: "weui-media-box_" + _vm.type,
          on: { click: _vm.onClick }
        },
        [
          _vm.type !== "text"
            ? _c("div", { staticClass: "weui-media-box__hd" }, [
                _c("img", {
                  staticClass: "weui-media-box__thumb",
                  attrs: { src: _vm.thumb, alt: "" }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "weui-media-box__bd" }, [
            _c("h4", {
              staticClass: "weui-media-box__title",
              domProps: { textContent: _vm._s(_vm.title) }
            }),
            _vm._v(" "),
            _c("p", {
              staticClass: "weui-media-box__desc",
              domProps: { textContent: _vm._s(_vm.description) }
            })
          ])
        ]
      )
    : _c(
        "div",
        {
          staticClass: "weui-media-box",
          class: "weui-media-box_" + _vm.type,
          on: { click: _vm.onClick }
        },
        [
          _c("h4", {
            staticClass: "weui-media-box__title",
            domProps: { textContent: _vm._s(_vm.title) }
          }),
          _vm._v(" "),
          _c("p", {
            staticClass: "weui-media-box__desc",
            domProps: { textContent: _vm._s(_vm.description) }
          }),
          _vm._v(" "),
          _vm._t("box_ft")
        ],
        2
      )
};
var __vue_staticRenderFns__$p = [];
__vue_render__$p._withStripped = true;

  /* style */
  const __vue_inject_styles__$p = undefined;
  /* scoped */
  const __vue_scope_id__$p = "data-v-58450df1";
  /* module identifier */
  const __vue_module_identifier__$p = undefined;
  /* functional template */
  const __vue_is_functional_template__$p = false;
  /* component normalizer */
  function __vue_normalize__$p(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\media-box\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$p() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$p.styles || (__vue_create_injector__$p.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var MediaBox = __vue_normalize__$p(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    __vue_create_injector__$p,
    undefined
  );

//

const isNaN$1 = Number.isNaN || window.isNaN;

var script$q = create({
  name: 'number-spinner',

  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    inputWidth: {
      type: String,
      default: '3em'
    },
    readonly: Boolean,
    disabled: Boolean,
    align: {
      type: String,
      default: 'center'
    },
    fillable: {
      type: Boolean,
      default: true
    },
    value: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  inheritAttrs: false,

  model: {
    event: 'change'
  },

  computed: {
    increasable () {
      const num = this.currentValue;

      return isNaN$1(num) || num < this.max
    },

    decreasable () {
      const num = this.currentValue;

      return isNaN$1(num) || num > this.min
    },

    inputStyle () {
      return {
        width: this.inputWidth,
        textAlign: this.align
      }
    },

    listeners () {
      const listeners = { ...this.$listeners };
      delete listeners.change;
      return listeners
    }
  },

  created () {
    if (this.min < this.max) {
      this.currentValue = Math.min(this.max, Math.max(this.min, this.value));
    }
  },

  methods: {
    decrease () {
      if (this.decreasable) {
        let { currentValue } = this;
        if (isNaN$1(currentValue)) {
          currentValue = 0;
        }
        this.setValue(Math.min(this.max, Math.max(this.min, currentValue - this.step)));
      }
    },

    increase () {
      if (this.increasable) {
        let { currentValue } = this;
        if (isNaN$1(currentValue)) {
          currentValue = 0;
        }
        this.setValue(Math.min(this.max, Math.max(this.min, currentValue + this.step)));
      }
    },

    onChange (event) {
      this.setValue(Math.min(this.max, Math.max(this.min, event.target.value)));
    },

    onPaste (event) {
      if (!this.fillable || !/^-?(\d+|\d+\.\d+|\.\d+)([eE][-+]?\d+)?$/.test(event.clipboardData.getData('text'))) {
        event.preventDefault();
      }
    },

    onKeypress (event) {
      if (!this.fillable) {
        event.preventDefault();
      }
    },

    setValue (val) {
      const oldValue = this.currentValue;

      this.currentValue = val;
      this.$emit('change', val, oldValue);
      this.$refs.input.value = val;
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },

    value (val) {
      if (typeof val === 'number') {
        if (val <= this.min) {
          this.currentValue = this.min;
        } else if (val >= this.max) {
          this.currentValue = this.max;
        } else {
          this.currentValue = val;
        }
      } else if (val === '') {
        this.currentValue = '';
      }
    }
  }
});

/* script */
            const __vue_script__$q = script$q;
/* template */
var __vue_render__$q = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    _vm._g({ staticClass: "wv-number-spinner" }, _vm.listeners),
    [
      _c("button", {
        staticClass: "spinner-btn btn-minus",
        attrs: { disabled: _vm.disabled || _vm.readonly || !_vm.decreasable },
        on: { click: _vm.decrease }
      }),
      _vm._v(" "),
      _c(
        "input",
        _vm._b(
          {
            ref: "input",
            style: _vm.inputStyle,
            attrs: {
              type: "number",
              min: _vm.min,
              max: _vm.max,
              step: _vm.step,
              disabled: _vm.disabled || (!_vm.decreasable && !_vm.increasable),
              readonly: _vm.readonly
            },
            domProps: { value: _vm.currentValue },
            on: {
              change: _vm.onChange,
              paste: _vm.onPaste,
              keypress: _vm.onKeypress
            }
          },
          "input",
          _vm.$attrs,
          false
        )
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "spinner-btn btn-plus",
        attrs: { disabled: _vm.disabled || _vm.readonly || !_vm.increasable },
        on: { click: _vm.increase }
      })
    ]
  )
};
var __vue_staticRenderFns__$q = [];
__vue_render__$q._withStripped = true;

  /* style */
  const __vue_inject_styles__$q = undefined;
  /* scoped */
  const __vue_scope_id__$q = "data-v-3c0633f4";
  /* module identifier */
  const __vue_module_identifier__$q = undefined;
  /* functional template */
  const __vue_is_functional_template__$q = false;
  /* component normalizer */
  function __vue_normalize__$q(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\number-spinner\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$q() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$q.styles || (__vue_create_injector__$q.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var NumberSpinner = __vue_normalize__$q(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    __vue_create_injector__$q,
    undefined
  );

//

var script$r = create({
  name: 'panel',

  props: {
    title: String
  }
});

/* script */
            const __vue_script__$r = script$r;
/* template */
var __vue_render__$r = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-panel weui-panel_access" }, [
    _vm.title
      ? _c("div", {
          staticClass: "weui-panel__hd",
          domProps: { innerHTML: _vm._s(_vm.title) }
        })
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "weui-panel__bd" }, [_vm._t("default")], 2),
    _vm._v(" "),
    _c("div", { staticClass: "weui-panel__ft" }, [_vm._t("ft")], 2)
  ])
};
var __vue_staticRenderFns__$r = [];
__vue_render__$r._withStripped = true;

  /* style */
  const __vue_inject_styles__$r = undefined;
  /* scoped */
  const __vue_scope_id__$r = "data-v-75b50d7e";
  /* module identifier */
  const __vue_module_identifier__$r = undefined;
  /* functional template */
  const __vue_is_functional_template__$r = false;
  /* component normalizer */
  function __vue_normalize__$r(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\panel\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$r() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$r.styles || (__vue_create_injector__$r.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Panel = __vue_normalize__$r(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    __vue_create_injector__$r,
    undefined
  );

//

var script$s = create({
  name: 'popup',

  mixins: [PopupMixin],

  props: {
    height: {
      type: [String, Number],
      default: 'auto',
      validator: (val) => {
        return /^(auto)|(\d+(px|vh|%)?)$/.test(val)
      }
    },
    mask: {
      default: true
    },
    lockOnScroll: {
      default: true
    },
    closeOnClickMask: {
      default: true
    },
    maskClass: {
      default: 'weui-mask'
    }
  },

  computed: {
    style () {
      let ret = {};

      if (/^\d+$/.test(this.height)) {
        ret.height = parseInt(this.height) + 'px';
      } else {
        ret.height = this.height;
      }

      return ret
    }
  },

  mounted () {
    if (this.visible) {
      this.open();
    }
  }
});

/* script */
            const __vue_script__$s = script$s;
/* template */
var __vue_render__$s = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "weui-animate-slide-up",
        "leave-active-class": "weui-animate-slide-down"
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          staticClass: "wv-popup",
          style: _vm.style
        },
        [_vm._t("default")],
        2
      )
    ]
  )
};
var __vue_staticRenderFns__$s = [];
__vue_render__$s._withStripped = true;

  /* style */
  const __vue_inject_styles__$s = undefined;
  /* scoped */
  const __vue_scope_id__$s = "data-v-78858997";
  /* module identifier */
  const __vue_module_identifier__$s = undefined;
  /* functional template */
  const __vue_is_functional_template__$s = false;
  /* component normalizer */
  function __vue_normalize__$s(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\popup\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$s() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$s.styles || (__vue_create_injector__$s.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Popup = __vue_normalize__$s(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    __vue_create_injector__$s,
    undefined
  );

//

var script$t = create({
  name: 'progress',

  props: {
    percent: {
      type: [Number, String]
    },
    showClear: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onCancelClick (event) {
      event.preventDefault();
      this.$emit('cancel', this);
    }
  }
});

/* script */
            const __vue_script__$t = script$t;
/* template */
var __vue_render__$t = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-progress" }, [
    _c("div", { staticClass: "weui-progress__bar" }, [
      _c("div", {
        staticClass: "weui-progress__inner-bar js_progress",
        style: { width: _vm.percent + "%" }
      })
    ]),
    _vm._v(" "),
    _vm.showClear
      ? _c("span", { staticClass: "weui-progress__opr" }, [
          _c("i", {
            staticClass: "weui-icon-cancel",
            on: { click: _vm.onCancelClick }
          })
        ])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$t = [];
__vue_render__$t._withStripped = true;

  /* style */
  const __vue_inject_styles__$t = undefined;
  /* scoped */
  const __vue_scope_id__$t = "data-v-fe97eaa4";
  /* module identifier */
  const __vue_module_identifier__$t = undefined;
  /* functional template */
  const __vue_is_functional_template__$t = false;
  /* component normalizer */
  function __vue_normalize__$t(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\progress\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$t() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$t.styles || (__vue_create_injector__$t.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Progress = __vue_normalize__$t(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    __vue_create_injector__$t,
    undefined
  );

//

var script$u = create({
  name: 'radio',

  props: {
    title: String,
    align: {
      type: String,
      default: 'left'
    },
    options: {
      type: Array,
      required: true
    },
    value: {}
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
      this.$emit('change', val);
    },

    value (val) {
      this.currentValue = val;
    }
  }
});

/* script */
            const __vue_script__$u = script$u;
/* template */
var __vue_render__$u = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [
    _vm.title
      ? _c("div", {
          staticClass: "weui-cells__title",
          domProps: { innerHTML: _vm._s(_vm.title) }
        })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "weui-cells weui-cells_radio" },
      _vm._l(_vm.options, function(option) {
        return _c(
          "label",
          {
            key: option.label || option,
            staticClass: "weui-cell weui-check__label",
            class: { "weui-check__label-disabled": option.disabled }
          },
          [
            _c("div", { staticClass: "weui-cell__bd" }, [
              _c("p", {
                domProps: { textContent: _vm._s(option.label || option) }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "weui-cell__ft" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.currentValue,
                    expression: "currentValue"
                  }
                ],
                staticClass: "weui-check",
                attrs: { type: "radio", disabled: option.disabled },
                domProps: {
                  value: option.value || option,
                  checked: _vm._q(_vm.currentValue, option.value || option)
                },
                on: {
                  change: function($event) {
                    _vm.currentValue = option.value || option;
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "weui-icon-checked" })
            ])
          ]
        )
      })
    )
  ])
};
var __vue_staticRenderFns__$u = [];
__vue_render__$u._withStripped = true;

  /* style */
  const __vue_inject_styles__$u = undefined;
  /* scoped */
  const __vue_scope_id__$u = "data-v-42f51a72";
  /* module identifier */
  const __vue_module_identifier__$u = undefined;
  /* functional template */
  const __vue_is_functional_template__$u = false;
  /* component normalizer */
  function __vue_normalize__$u(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\radio\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$u() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$u.styles || (__vue_create_injector__$u.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Radio = __vue_normalize__$u(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    __vue_create_injector__$u,
    undefined
  );

//

var script$v = create({
  name: 'search-bar',

  components: {
    WvCell: Cell
  },

  props: {
    value: String,
    autofocus: Boolean,
    show: Boolean,
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    resultTextKey: String,
    result: Array
  },

  data () {
    return {
      isActive: false,
      currentValue: this.value
    }
  },

  mounted () {
    if (this.autofocus) {
      this.isActive = true;
    }
  },

  methods: {
    textClick () {
      // focus the input
      this.$refs.input.focus();
      this.isActive = true;
    },

    // 清除输入
    clear () {
      this.currentValue = '';
    },

    // 取消搜索
    cancel () {
      this.clear();
      this.isActive = false;
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },

    value (val) {
      this.currentValue = val;
    }
  }
});

/* script */
            const __vue_script__$v = script$v;
/* template */
var __vue_render__$v = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("div", { staticClass: "weui-search-bar" }, [
        _c("div", { staticClass: "weui-search-bar__form" }, [
          _c("div", { staticClass: "weui-search-bar__box" }, [
            _c("i", { staticClass: "weui-icon-search" }),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { action: "javascript:" },
                on: {
                  submit: function($event) {
                    _vm.$emit("search", _vm.currentValue);
                  }
                }
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.currentValue,
                      expression: "currentValue"
                    }
                  ],
                  ref: "input",
                  staticClass: "weui-search-bar__input",
                  attrs: {
                    type: "search",
                    placeholder: _vm.placeholder,
                    autofocus: _vm.autofocus
                  },
                  domProps: { value: _vm.currentValue },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.currentValue = $event.target.value;
                    }
                  }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "weui-icon-clear",
              on: { click: _vm.clear }
            })
          ]),
          _vm._v(" "),
          _c(
            "label",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isActive,
                  expression: "!isActive"
                }
              ],
              staticClass: "weui-search-bar__label",
              on: { click: _vm.textClick }
            },
            [
              _c("i", { staticClass: "weui-icon-search" }),
              _vm._v(" "),
              _c("span", { domProps: { textContent: _vm._s(_vm.placeholder) } })
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isActive,
              expression: "isActive"
            }
          ],
          staticClass: "weui-search-bar__cancel-btn",
          domProps: { textContent: _vm._s(_vm.cancelText) },
          on: { click: _vm.cancel }
        })
      ]),
      _vm._v(" "),
      _vm._t("default", [
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show || _vm.currentValue,
                expression: "show || currentValue"
              }
            ],
            staticClass: "weui-cells searchbar-result"
          },
          _vm._l(_vm.result, function(item, index) {
            return _c("wv-cell", {
              key: index,
              attrs: {
                title: typeof item === "object" ? item[_vm.resultTextKey] : item
              },
              on: {
                click: function($event) {
                  _vm.$emit("click-result", item);
                }
              }
            })
          })
        )
      ])
    ],
    2
  )
};
var __vue_staticRenderFns__$v = [];
__vue_render__$v._withStripped = true;

  /* style */
  const __vue_inject_styles__$v = function (inject) {
    if (!inject) return
    inject("data-v-2f74947a_0", { source: "", map: {"version":3,"sources":["D:\\Code\\we-vue/D:\\Code\\we-vue/D:\\Code\\we-vue\\packages\\search-bar\\index.vue"],"names":[],"mappings":";AAuHA,qCAAA;AAEA;EACA,8BAAA;EACA,WAAA;EACA,uBAAA;CACA;AAEA;EACA,eAAA;CACA;AAEA;EACA,eAAA;EACA,8BAAA;EACA,WAAA;EACA,uBAAA;EACA,cAAA;EACA,gBAAA;CACA","file":"index.vue","sourcesContent":[null]}, media: undefined });
Object.defineProperty(this, "$style", { value: {"weui-search-bar__label":"packages-search-bar-weui-search-bar__label-12YV","weui-search-bar__cancel-btn":"packages-search-bar-weui-search-bar__cancel-btn-1e08","searchbar-result":"packages-search-bar-searchbar-result-1hpW"} });

  };
  /* scoped */
  const __vue_scope_id__$v = undefined;
  /* module identifier */
  const __vue_module_identifier__$v = undefined;
  /* functional template */
  const __vue_is_functional_template__$v = false;
  /* component normalizer */
  function __vue_normalize__$v(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\search-bar\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$v() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$v.styles || (__vue_create_injector__$v.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var SearchBar = __vue_normalize__$v(
    { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    __vue_create_injector__$v,
    undefined
  );

//

var script$w = create({
  name: 'slider',

  props: {
    min: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0
      }
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1,
      validator: value => {
        return value > 0
      }
    },
    value: {
      type: Number
    },
    showValue: {
      type: Boolean,
      default: true
    },
    enableClick: {
      type: Boolean,
      default: true
    },
    disabled: Boolean
  },

  data () {
    return {
      handlerStartPos: 0,
      sliderLeft: 0,
      sliderLength: 0
    }
  },

  computed: {
    percent () {
      if (typeof this.value === 'undefined' || this.value === null) return 0

      return Math.floor((this.value - this.min) / (this.max - this.min) * 100)
    },

    stepWidth () {
      return this.sliderLength * this.step / (this.max - this.min)
    }
  },

  created () {
    if (this.min >= this.max) {
      throw new Error('property:max must be bigger than property:min')
    }
  },

  mounted () {
    this.sliderLeft = this.$refs.inner.offsetLeft;
    this.sliderLength = this.$refs.inner.getBoundingClientRect().width;
  },

  methods: {
    getHandlerStartPos () {
      const innerRect = this.$refs.inner.getBoundingClientRect();
      const handlerRect = this.$refs.handler.getBoundingClientRect();

      return handlerRect.left - innerRect.left
    },

    onClick (event) {
      if (this.disabled || !this.enableClick) return

      // 距初始值的目标步数
      const steps = Math.round((event.clientX - this.sliderLeft) / this.stepWidth);

      const value = this.min + this.step * steps;

      this.$emit('input', value);
      this.$emit('change', value);
    },

    onTouchstart () {
      if (this.disabled) return

      this.handlerStartPos = this.getHandlerStartPos();
    },

    onTouchmove (event) {
      if (this.disabled) return

      const touch = getTouch(event);

      // 距初始值的目标步数
      const steps = Math.round((touch.clientX - this.sliderLeft) / this.stepWidth);

      let value = this.min + this.step * steps;
      value = value < this.min ? this.min : value > this.max ? this.max : value;

      this.$emit('input', value);
      this.$emit('change', value);
    }
  }
});

/* script */
            const __vue_script__$w = script$w;
/* template */
var __vue_render__$w = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-slider-box" }, [
    _c(
      "div",
      {
        staticClass: "weui-slider",
        class: { "wv-slider--disabled": _vm.disabled }
      },
      [
        _c(
          "div",
          {
            ref: "inner",
            staticClass: "weui-slider__inner",
            on: {
              click: function($event) {
                $event.preventDefault();
                return _vm.onClick($event)
              }
            }
          },
          [
            _c("div", {
              staticClass: "weui-slider__track",
              style: { width: _vm.percent + "%" }
            }),
            _vm._v(" "),
            _c("div", {
              ref: "handler",
              staticClass: "weui-slider__handler",
              style: { left: _vm.percent + "%" },
              on: { touchstart: _vm.onTouchstart, touchmove: _vm.onTouchmove }
            })
          ]
        )
      ]
    ),
    _vm._v(" "),
    _vm.showValue
      ? _c(
          "div",
          { staticClass: "weui-slider-box__value" },
          [_vm._t("value-box", [_vm._v(_vm._s(_vm.value))])],
          2
        )
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$w = [];
__vue_render__$w._withStripped = true;

  /* style */
  const __vue_inject_styles__$w = undefined;
  /* scoped */
  const __vue_scope_id__$w = "data-v-0758b4ce";
  /* module identifier */
  const __vue_module_identifier__$w = undefined;
  /* functional template */
  const __vue_is_functional_template__$w = false;
  /* component normalizer */
  function __vue_normalize__$w(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\slider\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$w() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$w.styles || (__vue_create_injector__$w.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Slider = __vue_normalize__$w(
    { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    __vue_create_injector__$w,
    undefined
  );

//

var script$x = create({
  name: 'spinner',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: Number,
      default: 17
    },
    color: {
      type: String,
      default: '#aaa'
    }
  },

  computed: {
    fontClassName () {
      switch (this.type) {
        case 'snake':
          return 'icon-spinner-1'
        case 'double-snake':
          return 'icon-spinner9'
        case 'bar-circle':
          return 'icon-spinner2'
        case 'dot-circle':
          return 'icon-spinner1'
        default:
          return ''
      }
    },

    style () {
      return {
        fontSize: this.size + 'px',
        color: this.color
      }
    }
  }
});

/* script */
            const __vue_script__$x = script$x;
/* template */
var __vue_render__$x = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.type === "default"
    ? _c("i", { staticClass: "weui-loading", style: _vm.style })
    : _c("span", { staticClass: "wv-spinner" }, [
        _c("i", {
          staticClass: "iconfont",
          class: _vm.fontClassName,
          style: _vm.style
        })
      ])
};
var __vue_staticRenderFns__$x = [];
__vue_render__$x._withStripped = true;

  /* style */
  const __vue_inject_styles__$x = undefined;
  /* scoped */
  const __vue_scope_id__$x = "data-v-5fe2eac3";
  /* module identifier */
  const __vue_module_identifier__$x = undefined;
  /* functional template */
  const __vue_is_functional_template__$x = false;
  /* component normalizer */
  function __vue_normalize__$x(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\spinner\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$x() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$x.styles || (__vue_create_injector__$x.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var WvSpinner = __vue_normalize__$x(
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
    __vue_create_injector__$x,
    undefined
  );

//

var script$y = create({
  name: 'swipe',

  props: {
    height: Number,
    autoplay: Number,
    defaultIndex: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    prevent: Boolean,
    noDragWhenSingle: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      width: 0,
      offset: 0,
      startX: 0,
      startY: 0,
      active: 0,
      deltaX: 0,
      swipes: [],
      direction: '',
      currentDuration: 0
    }
  },

  mounted () {
    this.initialize();
  },

  destroyed () {
    clearTimeout(this.timer);
  },

  watch: {
    swipes () {
      this.initialize();
    },

    defaultIndex () {
      this.initialize();
    }
  },

  computed: {
    count () {
      return this.swipes.length
    },

    wrapperStyle () {
      let ret = {
        paddingLeft: this.count > 1 ? this.width + 'px' : 0,
        width: this.count > 1 ? (this.count + 2) * this.width + 'px' : '100%',
        transitionDuration: `${this.currentDuration}ms`,
        transform: `translate3d(${this.offset}px, 0, 0)`
      };

      if (this.height) {
        ret.height = this.height + 'px';
      }

      return ret
    },

    activeIndicator () {
      return (this.active + this.count) % this.count
    }
  },

  methods: {
    initialize () {
      clearTimeout(this.timer);
      this.width = this.$el.getBoundingClientRect().width;
      this.active = this.defaultIndex;
      this.currentDuration = 0;
      this.offset = this.count > 1 ? -this.width * (this.active + 1) : 0;
      this.swipes.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },

    onTouchstart (event) {
      if (this.count === 1 && this.noDragWhenSingle) {
        return
      }

      clearTimeout(this.timer);
      const touch = getTouch(event);

      this.deltaX = 0;
      this.direction = '';
      this.currentDuration = 0;
      this.startX = touch.clientX;
      this.startY = touch.clientY;

      if (this.active <= -1) {
        this.move(this.count);
      }
      if (this.active >= this.count) {
        this.move(-this.count);
      }
    },

    onTouchmove (event) {
      if (this.prevent) {
        event.preventDefault();
      }

      const touch = getTouch(event);

      this.deltaX = touch.clientX - this.startX;
      const deltaY = touch.clientY - this.startY;

      if (this.count === 1) {
        if (this.noDragWhenSingle) return

        this.offset = this.range(this.deltaX, [-20, 20]);
      } else if (this.count > 1 && Math.abs(this.deltaX) > Math.abs(deltaY)) {
        this.move(0, this.range(this.deltaX, [-this.width, this.width]));
      }
    },

    onTouchend () {
      if (this.count === 1) {
        if (this.noDragWhenSingle) return

        this.offset = 0;
        this.currentDuration = this.duration;
      } else {
        if (this.deltaX) {
          this.move(Math.abs(this.deltaX) > 50 ? (this.deltaX > 0 ? -1 : 1) : 0);
          this.currentDuration = this.duration;
        }
        this.autoPlay();
      }
    },

    move (move = 0, offset = 0) {
      const {active, count, swipes, deltaX, width} = this;

      if (move) {
        if (active === -1) {
          swipes[count - 1].offset = 0;
        }
        swipes[0].offset = active === count - 1 && move > 0 ? count * width : 0;

        this.active += move;
      } else {
        if (active === 0) {
          swipes[count - 1].offset = deltaX > 0 ? -count * width : 0;
        } else if (active === count - 1) {
          swipes[0].offset = deltaX < 0 ? count * width : 0;
        }
      }
      this.offset = offset - (this.active + 1) * this.width;
    },

    autoPlay () {
      const {autoplay} = this;
      if (autoplay && this.count > 1) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.currentDuration = 0;

          if (this.active >= this.count) {
            this.move(-this.count);
          }

          setTimeout(() => {
            this.currentDuration = this.duration;
            this.move(1);
            this.autoPlay();
          }, 30);
        }, autoplay);
      }
    },

    range (num, arr) {
      return Math.min(Math.max(num, arr[0]), arr[1])
    }
  }
});

/* script */
            const __vue_script__$y = script$y;
/* template */
var __vue_render__$y = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "wv-swipe",
      on: {
        touchstart: _vm.onTouchstart,
        touchmove: _vm.onTouchmove,
        touchend: _vm.onTouchend,
        touchcancel: _vm.onTouchend
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "wv-swipe__wrapper",
          style: _vm.wrapperStyle,
          on: {
            transitionend: function($event) {
              _vm.$emit("change", _vm.activeIndicator);
            }
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.showIndicators && _vm.count > 1
        ? _c(
            "div",
            { staticClass: "wv-swipe__indicators" },
            _vm._l(_vm.count, function(index) {
              return _c("i", {
                key: index,
                class: {
                  "wv-swipe__indicator--active":
                    index - 1 === _vm.activeIndicator
                }
              })
            })
          )
        : _vm._e()
    ]
  )
};
var __vue_staticRenderFns__$y = [];
__vue_render__$y._withStripped = true;

  /* style */
  const __vue_inject_styles__$y = undefined;
  /* scoped */
  const __vue_scope_id__$y = "data-v-8a45bf98";
  /* module identifier */
  const __vue_module_identifier__$y = undefined;
  /* functional template */
  const __vue_is_functional_template__$y = false;
  /* component normalizer */
  function __vue_normalize__$y(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\swipe\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$y() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$y.styles || (__vue_create_injector__$y.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Swipe = __vue_normalize__$y(
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    __vue_create_injector__$y,
    undefined
  );

//

var script$z = create({
  name: 'swipe-item',

  data () {
    return {
      offset: 0
    }
  },

  computed: {
    style () {
      return {
        width: this.$parent.width + 'px',
        transform: `translate3d(${this.offset}px, 0, 0)`
      }
    }
  },

  beforeCreate () {
    this.$parent && this.$parent.swipes.push(this);
  },

  destroyed () {
    this.$parent && this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  }
});

/* script */
            const __vue_script__$z = script$z;
/* template */
var __vue_render__$z = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "wv-swipe-item", style: _vm.style },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$z = [];
__vue_render__$z._withStripped = true;

  /* style */
  const __vue_inject_styles__$z = undefined;
  /* scoped */
  const __vue_scope_id__$z = "data-v-63a62a62";
  /* module identifier */
  const __vue_module_identifier__$z = undefined;
  /* functional template */
  const __vue_is_functional_template__$z = false;
  /* component normalizer */
  function __vue_normalize__$z(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\swipe-item\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$z() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$z.styles || (__vue_create_injector__$z.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var SwipeItem = __vue_normalize__$z(
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
    __vue_inject_styles__$z,
    __vue_script__$z,
    __vue_scope_id__$z,
    __vue_is_functional_template__$z,
    __vue_module_identifier__$z,
    __vue_create_injector__$z,
    undefined
  );

//

// 开关的行程
const THUMB_STROKE = 20;

var script$A = create({
  name: 'switch',

  components: {
    Cell
  },

  props: {
    title: String,
    disabled: Boolean,
    isInCell: {
      type: Boolean,
      default: true
    },
    value: Boolean
  },

  data () {
    return {
      currentValue: this.value,
      startX: 0,
      offset: 0,
      startOffset: 0,
      transition: ''
    }
  },

  computed: {
    thumbStyle () {
      return {
        transition: this.transition,
        transform: `translate3d(${this.offset}px, 0, 0)`
      }
    }
  },

  mounted () {
    this.offset = this.currentValue ? THUMB_STROKE : 0;
  },

  methods: {
    onClick (event) {
      event.preventDefault();
      if (this.disabled) return

      this.currentValue = !this.currentValue;
    },

    onTouchstart (event) {
      if (this.disabled) return

      const touch = getTouch(event);

      this.startX = touch.clientX;
      this.startOffset = this.offset;
      this.transition = '';
    },

    onTouchmove (event) {
      if (this.disabled) return

      const touch = getTouch(event);
      const deltaX = touch.clientX - this.startX;

      const targetOffset = this.startOffset + deltaX;

      if (targetOffset >= 0 && targetOffset <= THUMB_STROKE) {
        this.offset = targetOffset;
      } else if (targetOffset < 0) {
        this.offset = 0;
      } else if (targetOffset > THUMB_STROKE) {
        this.offset = THUMB_STROKE;
      }
    },

    onTouchend (event) {
      if (this.disabled) return

      const touch = getTouch(event);

      let deltaX = touch.clientX - this.startX;

      this.transition = '-webkit-transform .35s cubic-bezier(0.4, 0.4, 0.25, 1.35)';
      if (this.currentValue) {
        if (deltaX < THUMB_STROKE / -2) {
          this.currentValue = false;
        } else {
          this.offset = THUMB_STROKE;
        }
      } else {
        if (deltaX > THUMB_STROKE / 2) {
          this.currentValue = true;
        } else {
          this.offset = 0;
        }
      }
    }
  },

  watch: {
    value (val) {
      this.currentValue = val;
    },

    currentValue (val) {
      this.$emit('input', val);
      this.$emit('change', val);

      this.offset = val ? THUMB_STROKE : 0;
    }
  }
});

/* script */
            const __vue_script__$A = script$A;
/* template */
var __vue_render__$A = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.isInCell
    ? _c(
        "cell",
        { attrs: { title: _vm.title } },
        [
          _c("wv-switch", {
            attrs: { slot: "ft", "is-in-cell": false, disabled: _vm.disabled },
            slot: "ft",
            model: {
              value: _vm.currentValue,
              callback: function($$v) {
                _vm.currentValue = $$v;
              },
              expression: "currentValue"
            }
          })
        ],
        1
      )
    : _c(
        "div",
        {
          staticClass: "wv-switch",
          class: {
            "wv-switch-on": _vm.currentValue,
            "wv-switch-disabled": _vm.disabled
          },
          on: { click: _vm.onClick }
        },
        [
          _c("div", { staticClass: "background" }),
          _vm._v(" "),
          _c("div", {
            staticClass: "thumb",
            style: _vm.thumbStyle,
            on: {
              touchstart: _vm.onTouchstart,
              touchmove: _vm.onTouchmove,
              touchend: _vm.onTouchend,
              touchcancel: _vm.onTouchend
            }
          })
        ]
      )
};
var __vue_staticRenderFns__$A = [];
__vue_render__$A._withStripped = true;

  /* style */
  const __vue_inject_styles__$A = undefined;
  /* scoped */
  const __vue_scope_id__$A = "data-v-244bed8d";
  /* module identifier */
  const __vue_module_identifier__$A = undefined;
  /* functional template */
  const __vue_is_functional_template__$A = false;
  /* component normalizer */
  function __vue_normalize__$A(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\switch\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$A() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$A.styles || (__vue_create_injector__$A.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Switch = __vue_normalize__$A(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
    __vue_inject_styles__$A,
    __vue_script__$A,
    __vue_scope_id__$A,
    __vue_is_functional_template__$A,
    __vue_module_identifier__$A,
    __vue_create_injector__$A,
    undefined
  );

var findParent = {
  data () {
    return {
      parent: null
    }
  },

  methods: {
    findParent (name) {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === name) {
          this.parent = parent;
          break
        }
        parent = parent.$parent;
      }
    }
  }
};

//

var script$B = create({
  name: 'tab',

  mixins: [findParent],

  props: {
    title: String,
    disabled: Boolean
  },

  data () {
    return {
      inited: false
    }
  },

  computed: {
    index () {
      return this.parent.tabs.indexOf(this)
    },

    isSelected () {
      return this.index === this.parent.currentActive
    }
  },

  created () {
    this.findParent('wv-tabs');
  },

  mounted () {
    const { tabs } = this.parent;
    const index = this.parent.$slots.default.indexOf(this.$vnode);
    tabs.splice(index === -1 ? tabs.length : index, 0, this);

    if (this.$slots.title) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },

  beforeDestroy () {
    this.parent.tabs.splice(this.index, 1);
  },

  watch: {
    '$parent.currentActive' () {
      this.inited = this.inited || this.isSelected;
    },

    title () {
      this.parent.setLine();
    }
  }
});

/* script */
            const __vue_script__$B = script$B;
/* template */
var __vue_render__$B = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isSelected,
          expression: "isSelected"
        }
      ],
      staticClass: "wv-tab__pane"
    },
    [
      _vm.inited ? _vm._t("default") : _vm._e(),
      _vm._v(" "),
      _vm.$slots.title
        ? _c("div", { ref: "title" }, [_vm._t("title")], 2)
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__$B = [];
__vue_render__$B._withStripped = true;

  /* style */
  const __vue_inject_styles__$B = undefined;
  /* scoped */
  const __vue_scope_id__$B = "data-v-76fbfbce";
  /* module identifier */
  const __vue_module_identifier__$B = undefined;
  /* functional template */
  const __vue_is_functional_template__$B = false;
  /* component normalizer */
  function __vue_normalize__$B(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\tab\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$B() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$B.styles || (__vue_create_injector__$B.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Tab = __vue_normalize__$B(
    { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
    __vue_inject_styles__$B,
    __vue_script__$B,
    __vue_scope_id__$B,
    __vue_is_functional_template__$B,
    __vue_module_identifier__$B,
    __vue_create_injector__$B,
    undefined
  );

//

var script$C = create({
  name: 'tabbar',

  props: {
    fixed: Boolean
  }
});

/* script */
            const __vue_script__$C = script$C;
/* template */
var __vue_render__$C = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "weui-tabbar",
      style: { position: _vm.fixed ? "fixed" : "absolute" }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$C = [];
__vue_render__$C._withStripped = true;

  /* style */
  const __vue_inject_styles__$C = undefined;
  /* scoped */
  const __vue_scope_id__$C = "data-v-7707eec8";
  /* module identifier */
  const __vue_module_identifier__$C = undefined;
  /* functional template */
  const __vue_is_functional_template__$C = false;
  /* component normalizer */
  function __vue_normalize__$C(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\tabbar\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$C() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$C.styles || (__vue_create_injector__$C.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Tabbar = __vue_normalize__$C(
    { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
    __vue_inject_styles__$C,
    __vue_script__$C,
    __vue_scope_id__$C,
    __vue_is_functional_template__$C,
    __vue_module_identifier__$C,
    __vue_create_injector__$C,
    undefined
  );

//

var script$D = create({
  name: 'tabbar-item',

  mixins: [RouterLink],

  props: {
    isOn: Boolean
  },

  methods: {
    onClick () {
      this.$emit('click');
      this.routerLink();
    }
  }
});

/* script */
            const __vue_script__$D = script$D;
/* template */
var __vue_render__$D = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "weui-tabbar__item",
      class: { "weui-bar__item_on": _vm.isOn },
      on: { click: _vm.onClick }
    },
    [
      _vm._t("icon"),
      _vm._v(" "),
      _c("p", { staticClass: "weui-tabbar__label" }, [_vm._t("default")], 2)
    ],
    2
  )
};
var __vue_staticRenderFns__$D = [];
__vue_render__$D._withStripped = true;

  /* style */
  const __vue_inject_styles__$D = undefined;
  /* scoped */
  const __vue_scope_id__$D = "data-v-d8cb5f5c";
  /* module identifier */
  const __vue_module_identifier__$D = undefined;
  /* functional template */
  const __vue_is_functional_template__$D = false;
  /* component normalizer */
  function __vue_normalize__$D(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\tabbar-item\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$D() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$D.styles || (__vue_create_injector__$D.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var TabbarItem = __vue_normalize__$D(
    { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
    __vue_inject_styles__$D,
    __vue_script__$D,
    __vue_scope_id__$D,
    __vue_is_functional_template__$D,
    __vue_module_identifier__$D,
    __vue_create_injector__$D,
    undefined
  );

/**
 * requestAnimationFrame polyfill
 */

let prev = Date.now();

/* istanbul ignore next */
function fallback (fn) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id
}

/* istanbul ignore next */
const root = isServer ? global : window;

/* istanbul ignore next */
const iRaf = root.requestAnimationFrame || root.webkitRequestAnimationFrame || fallback;

/* istanbul ignore next */
const iCancel = root.cancelAnimationFrame || root.webkitCancelAnimationFrame || root.clearTimeout;

function raf (fn) {
  return iRaf.call(root, fn)
}

var Touch = {
  methods: {
    touchStart (event) {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },

    touchMove (event) {
      const touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
    }
  }
};

//

var script$E = create({
  name: 'tabs',

  mixins: [Touch],

  model: {
    prop: 'active'
  },

  props: {
    sticky: Boolean,
    lineWidth: Number,
    swipeable: Boolean,
    active: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    offsetTop: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      tabs: [],
      position: '',
      currentActive: null,
      lineStyle: {},
      events: {
        resize: false,
        sticky: false,
        swipeable: false
      }
    }
  },

  computed: {
    // whether the nav is scrollable
    scrollable () {
      return this.tabs.length > this.swipeThreshold
    },

    wrapStyle () {
      switch (this.position) {
        case 'top':
          return {
            top: this.offsetTop + 'px',
            position: 'fixed'
          }
        case 'bottom':
          return {
            top: 'auto',
            bottom: 0
          }
        default:
          return null
      }
    }
  },

  watch: {
    active (val) {
      if (val !== this.currentActive) {
        this.correctActive(val);
      }
    },

    tabs () {
      this.correctActive(this.currentActive || this.active);
      this.scrollIntoView();
      this.setLine();
    },

    currentActive () {
      this.scrollIntoView();
      this.setLine();

      // scroll to correct position
      if (this.position === 'page-top' || this.position === 'content-bottom') {
        scrollUtils.setScrollTop(window, scrollUtils.getElementTop(this.$el));
      }
    },

    sticky () {
      this.handlers(true);
    },

    swipeable () {
      this.handlers(true);
    }
  },

  mounted () {
    this.correctActive(this.active);
    this.setLine();

    this.$nextTick(() => {
      this.handlers(true);
      this.scrollIntoView(true);
    });
  },

  activated () {
    this.$nextTick(() => {
      this.handlers(true);
      this.scrollIntoView(true);
    });
  },

  deactivated () {
    this.handlers(false);
  },

  beforeDestroy () {
    this.handlers(false);
  },

  methods: {
    // whether to bind sticky listener
    handlers (bind) {
      const {events} = this;
      const sticky = this.sticky && bind;
      const swipeable = this.swipeable && bind;

      // listen to window resize event
      if (events.resize !== bind) {
        events.resize = bind;
        (bind ? on : off)(window, 'resize', this.setLine, true);
      }

      // listen to scroll event
      if (events.sticky !== sticky) {
        events.sticky = sticky;
        this.scrollEl = this.scrollEl || scrollUtils.getScrollEventTarget(this.$el);
        (sticky ? on : off)(this.scrollEl, 'scroll', this.onScroll, true);
        this.onScroll();
      }

      // listen to touch event
      if (events.swipeable !== swipeable) {
        events.swipeable = swipeable;
        const {content} = this.$refs;
        const action = swipeable ? on : off;

        action(content, 'touchstart', this.touchStart);
        action(content, 'touchmove', this.touchMove);
        action(content, 'touchend', this.onTouchEnd);
        action(content, 'touchcancel', this.onTouchEnd);
      }
    },

    // watch swipe touch end
    onTouchEnd () {
      const {direction, deltaX, currentActive} = this;
      const minSwipeDistance = 50;

      /* istanbul ignore else */
      if (direction === 'horizontal' && this.offsetX >= minSwipeDistance) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentActive !== 0) {
          this.setCurActive(currentActive - 1);
        } else if (deltaX < 0 && currentActive !== this.tabs.length - 1) {
          this.setCurActive(currentActive + 1);
        }
      }
    },

    // adjust tab position
    onScroll () {
      const scrollTop = scrollUtils.getScrollTop(window) + this.offsetTop;
      const elTopToPageTop = scrollUtils.getElementTop(this.$el);
      const elBottomToPageTop = elTopToPageTop + this.$el.offsetHeight - this.$refs.wrap.offsetHeight;
      if (scrollTop > elBottomToPageTop) {
        this.position = 'bottom';
      } else if (scrollTop > elTopToPageTop) {
        this.position = 'top';
      } else {
        this.position = '';
      }
    },

    // update nav bar style
    setLine () {
      this.$nextTick(() => {
        if (!this.$refs.tabs || this.type !== 'line') {
          return
        }

        const tab = this.$refs.tabs[this.currentActive];
        const width = this.lineWidth || tab.offsetWidth;
        const left = tab.offsetLeft + (tab.offsetWidth - width) / 2;

        this.lineStyle = {
          width: `${width}px`,
          transform: `translateX(${left}px)`,
          transitionDuration: `${this.duration}s`
        };
      });
    },

    // correct the value of active
    correctActive (active) {
      active = +active;
      const exist = this.tabs.some(tab => tab.index === active);
      const defaultActive = (this.tabs[0] || {}).index || 0;
      this.setCurActive(exist ? active : defaultActive);
    },

    setCurActive (active) {
      if (active !== this.currentActive) {
        this.$emit('input', active);

        if (this.currentActive !== null) {
          this.$emit('change', active, this.tabs[active].title);
        }
        this.currentActive = active;
      }
    },

    // emit event when clicked
    onClick (index) {
      const {title, disabled} = this.tabs[index];
      if (disabled) {
        this.$emit('disabled', index, title);
      } else {
        this.setCurActive(index);
        this.$emit('click', index, title);
      }
    },

    // scroll active tab into view
    scrollIntoView (immediate) {
      if (!this.scrollable || !this.$refs.tabs) {
        return
      }

      const tab = this.$refs.tabs[this.currentActive];
      const {nav} = this.$refs;
      const {scrollLeft, offsetWidth: navWidth} = nav;
      const {offsetLeft, offsetWidth: tabWidth} = tab;

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate);
    },

    // animate the scrollLeft of nav
    scrollTo (el, from, to, immediate) {
      if (immediate) {
        el.scrollLeft += to - from;
        return
      }

      let count = 0;
      const frames = Math.round(this.duration * 1000 / 16);
      const animate = () => {
        el.scrollLeft += (to - from) / frames;
        /* istanbul ignore next */
        if (++count < frames) {
          raf(animate);
        }
      };
      animate();
    },

    // render title slot of child tab
    renderTitle (el, index) {
      this.$nextTick(() => {
        const title = this.$refs.title[index];
        title.parentNode.replaceChild(el, title);
      });
    }
  }
});

/* script */
            const __vue_script__$E = script$E;
/* template */
var __vue_render__$E = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "wv-tabs", class: "wv-tabs--" + _vm.type }, [
    _c(
      "div",
      {
        ref: "wrap",
        staticClass: "wv-tabs__wrap",
        class: [
          { "wv-tabs__wrap--scrollable": _vm.scrollable },
          { "wv-hairline--top-bottom": _vm.type === "line" }
        ],
        style: _vm.wrapStyle
      },
      [
        _c(
          "div",
          {
            ref: "nav",
            staticClass: "wv-tabs__nav",
            class: "wv-tabs__nav--" + _vm.type
          },
          [
            _vm.type === "line"
              ? _c("div", {
                  staticClass: "wv-tabs__line",
                  style: _vm.lineStyle
                })
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.tabs, function(tab, index) {
              return _c(
                "div",
                {
                  key: index,
                  ref: "tabs",
                  refInFor: true,
                  staticClass: "wv-tab",
                  class: {
                    "wv-tab--active": index === _vm.currentActive,
                    "wv-tab--disabled": tab.disabled
                  },
                  on: {
                    click: function($event) {
                      _vm.onClick(index);
                    }
                  }
                },
                [
                  _c(
                    "span",
                    {
                      ref: "title",
                      refInFor: true,
                      staticClass: "wv-ellipsis"
                    },
                    [_vm._v(_vm._s(tab.title))]
                  )
                ]
              )
            })
          ],
          2
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { ref: "content", staticClass: "wv-tabs__content" },
      [_vm._t("default")],
      2
    )
  ])
};
var __vue_staticRenderFns__$E = [];
__vue_render__$E._withStripped = true;

  /* style */
  const __vue_inject_styles__$E = undefined;
  /* scoped */
  const __vue_scope_id__$E = "data-v-5965c7dd";
  /* module identifier */
  const __vue_module_identifier__$E = undefined;
  /* functional template */
  const __vue_is_functional_template__$E = false;
  /* component normalizer */
  function __vue_normalize__$E(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\tabs\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$E() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$E.styles || (__vue_create_injector__$E.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Tabs = __vue_normalize__$E(
    { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
    __vue_inject_styles__$E,
    __vue_script__$E,
    __vue_scope_id__$E,
    __vue_is_functional_template__$E,
    __vue_module_identifier__$E,
    __vue_create_injector__$E,
    undefined
  );

//

var script$F = create({
  name: 'textarea',

  props: {
    placeholder: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    rows: {
      type: [Number, String],
      default: 3
    },
    maxLength: {
      type: [Number, String],
      default: 100
    },
    disabled: Boolean,
    readonly: Boolean,
    value: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  computed: {
    length () {
      return this.currentValue ? this.currentValue.length : 0
    }
  },

  mounted () {
    if (this.maxLength && this.length > this.maxLength) {
      this.currentValue = this.value.slice(0, this.maxLength);
    } else {
      this.currentValue = this.value;
    }
  },

  methods: {
    onFocus () {
      this.$emit('focus');
    },

    onBlur () {
      this.$emit('blur');
    }
  },

  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },

    value (val) {
      // 有最大字数限制时对超出限制部分进行截取
      if (this.maxLength && val.length > this.maxLength) {
        val = val.slice(0, this.maxLength);
      }

      this.currentValue = val;
    }
  }
});

/* script */
            const __vue_script__$F = script$F;
/* template */
var __vue_render__$F = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "weui-cell" }, [
    _c("div", { staticClass: "weui-cell__bd" }, [
      _c("textarea", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.currentValue,
            expression: "currentValue"
          }
        ],
        ref: "rextarea",
        staticClass: "weui-textarea",
        attrs: {
          placeholder: _vm.placeholder,
          rows: _vm.rows,
          disabled: _vm.disabled,
          readonly: _vm.readonly
        },
        domProps: { value: _vm.currentValue },
        on: {
          change: function($event) {
            _vm.$emit("change", _vm.currentValue);
          },
          focus: _vm.onFocus,
          blur: _vm.onBlur,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.currentValue = $event.target.value;
          }
        }
      }),
      _vm._v(" "),
      _vm.showCounter
        ? _c("div", { staticClass: "weui-textarea-counter" }, [
            _vm._v(
              "\n      " +
                _vm._s(_vm.length) +
                "/" +
                _vm._s(_vm.maxLength) +
                "\n    "
            )
          ])
        : _vm._e()
    ])
  ])
};
var __vue_staticRenderFns__$F = [];
__vue_render__$F._withStripped = true;

  /* style */
  const __vue_inject_styles__$F = undefined;
  /* scoped */
  const __vue_scope_id__$F = "data-v-a2653184";
  /* module identifier */
  const __vue_module_identifier__$F = undefined;
  /* functional template */
  const __vue_is_functional_template__$F = false;
  /* component normalizer */
  function __vue_normalize__$F(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\textarea\\index.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$F() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$F.styles || (__vue_create_injector__$F.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Textarea = __vue_normalize__$F(
    { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
    __vue_inject_styles__$F,
    __vue_script__$F,
    __vue_scope_id__$F,
    __vue_is_functional_template__$F,
    __vue_module_identifier__$F,
    __vue_create_injector__$F,
    undefined
  );

//

var script$G = create({
  name: 'toast',

  components: {
    WvIcon,
    WvSpinner
  },

  mixins: [PopupMixin],

  props: {
    mask: {
      default: true
    },
    icon: {
      type: String,
      default: 'success-no-circle'
    },
    type: {
      type: String,
      default: 'success',
      validator: (value) => {
        return ['success', 'fail', 'loading', 'text', 'html'].indexOf(value) !== -1
      }
    },
    spinnerType: {
      type: String,
      default: 'default'
    },
    message: {
      type: String,
      default: ''
    },
    maskClass: {
      default: 'weui-mask_transparent'
    }
  }
});

/* script */
            const __vue_script__$G = script$G;
/* template */
var __vue_render__$G = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "weui-animate-fade-in",
        "leave-active-class": "weui-animate-fade-out"
      }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.visible,
              expression: "visible"
            }
          ],
          ref: "toast",
          staticClass: "weui-toast",
          class: { "weui-toast_text": _vm.type === "text" }
        },
        [
          _vm.type !== "text" && _vm.type !== "loading"
            ? _c("wv-icon", {
                staticClass: "weui-icon_toast",
                attrs: { type: _vm.icon }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.type === "loading" && _vm.spinnerType !== "none"
            ? _c("wv-spinner", {
                staticClass: "weui-icon_toast",
                attrs: { type: _vm.spinnerType, size: 25 }
              })
            : _vm._e(),
          _vm._v(" "),
          _c("p", {
            staticClass: "weui-toast__content",
            domProps: { textContent: _vm._s(_vm.message) }
          })
        ],
        1
      )
    ]
  )
};
var __vue_staticRenderFns__$G = [];
__vue_render__$G._withStripped = true;

  /* style */
  const __vue_inject_styles__$G = undefined;
  /* scoped */
  const __vue_scope_id__$G = "data-v-d4b5e73a";
  /* module identifier */
  const __vue_module_identifier__$G = undefined;
  /* functional template */
  const __vue_is_functional_template__$G = false;
  /* component normalizer */
  function __vue_normalize__$G(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\toast\\toast.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$G() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$G.styles || (__vue_create_injector__$G.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var ToastComponent = __vue_normalize__$G(
    { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
    __vue_inject_styles__$G,
    __vue_script__$G,
    __vue_scope_id__$G,
    __vue_is_functional_template__$G,
    __vue_module_identifier__$G,
    __vue_create_injector__$G,
    undefined
  );

let instance$1;
const defaultOptions$1 = {
  visible: true,
  duration: 2000,
  mask: true,
  icon: 'success-no-circle',
  type: 'success'
};

const initInstance$1 = () => {
  const ToastConstructor = Vue.extend(ToastComponent);

  instance$1 = new ToastConstructor({
    el: document.createElement('div')
  });

  document.body.appendChild(instance$1.$el);
};

const Toast = (options = {}) => {
  if (typeof options === 'string') {
    options = { message: options };
  }
  options = { ...defaultOptions$1, ...options };

  if (options.type === 'fail') {
    options.icon = 'warn';
  }

  if (!instance$1) {
    initInstance$1();
  }

  clearTimeout(instance$1.timer);

  Object.assign(instance$1, {...options});

  if (options.duration > 0) {
    instance$1.timer = setTimeout(() => {
      instance$1.visible = false;
    }, options.duration);
  }

  return instance$1
};

const createMethod = type => (options = {}) => {
  return Toast({
    type,
    message: typeof options === 'object' ? options.message : options,
    ...options
  })
};

Toast.text = createMethod('text');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.loading = createMethod('loading');

Toast.close = () => {
  instance$1.visible = false;
};

Vue.prototype.$toast = Toast;

//

var script$H = create({
  name: 'top-tips',

  mixins: [PopupMixin],

  props: {
    message: String
  }
});

/* script */
            const __vue_script__$H = script$H;
/* template */
var __vue_render__$H = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "weui-animate-fade-in",
        "leave-active-class": "weui-animate-fade-out"
      }
    },
    [
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.visible,
            expression: "visible"
          }
        ],
        staticClass: "weui-toptips weui-toptips_warn",
        domProps: { innerHTML: _vm._s(_vm.message) }
      })
    ]
  )
};
var __vue_staticRenderFns__$H = [];
__vue_render__$H._withStripped = true;

  /* style */
  const __vue_inject_styles__$H = undefined;
  /* scoped */
  const __vue_scope_id__$H = "data-v-dc492d44";
  /* module identifier */
  const __vue_module_identifier__$H = undefined;
  /* functional template */
  const __vue_is_functional_template__$H = false;
  /* component normalizer */
  function __vue_normalize__$H(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "D:\\Code\\we-vue\\packages\\top-tips\\top-tips.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  function __vue_create_injector__$H() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$H.styles || (__vue_create_injector__$H.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var TopTipsComponent = __vue_normalize__$H(
    { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
    __vue_inject_styles__$H,
    __vue_script__$H,
    __vue_scope_id__$H,
    __vue_is_functional_template__$H,
    __vue_module_identifier__$H,
    __vue_create_injector__$H,
    undefined
  );

let instance$2;

const defaultOptions$2 = {
  visible: true,
  duration: 3000
};

const initInstance$2 = () => {
  const TopTipsConstructor = Vue.extend(TopTipsComponent);

  instance$2 = new TopTipsConstructor({
    el: document.createElement('div')
  });

  document.body.appendChild(instance$2.$el);
};

const TopTips = (options = {}) => {
  if (typeof options === 'string') {
    options = { message: options };
  }
  options = { ...defaultOptions$2, ...options };

  if (!instance$2) {
    initInstance$2();
  }

  clearTimeout(instance$2.timer);

  Object.assign(instance$2, {...options});

  if (options.duration > 0) {
    instance$2.timer = setTimeout(() => {
      instance$2.visible = false;
    }, options.duration);
  }

  return instance$2
};

TopTips.close = () => {
  if (instance$2) {
    instance$2.visible = false;
  }
};

Vue.prototype.$toptips = TopTips;

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
  WvIcon,
  Input,
  Loadmore,
  MediaBox,
  NumberSpinner,
  Panel,
  WvPicker,
  Popup,
  Progress,
  Radio,
  SearchBar,
  Slider,
  WvSpinner,
  Swipe,
  SwipeItem,
  Switch,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Textarea
];

const install$2 = (Vue$$1, config = {}) => {
  components.forEach(Component => {
    Vue$$1.use(Component);
  });

  Vue$$1.use(InfiniteScroll);
  Vue$$1.use(Lazyload, {
    loading: require('./assets/loading-spin.svg'),
    attempt: 3,
    ...config.lazyload
  });

  Vue$$1.$dialog = Vue$$1.prototype.$dialog = Dialog;
  Vue$$1.$toast = Vue$$1.prototype.$toast = Toast;
  Vue$$1.$toptips = Vue$$1.prototype.$toptips = TopTips;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install$2(window.Vue);
}

var index = {
  install: install$2,
  version
};

export default index;
export { install$2 as install, version, Actionsheet, Badge, Button, Cell, CellSwipe, CellSwipeButton, Checklist, Circle, DatetimePicker, Dialog, Flex, FlexItem, Footer, FormPreview, Grid, GridItem, Group, Header, WvIcon as Icon, InfiniteScroll, Input, Lazyload, Loadmore, MediaBox, NumberSpinner, Panel, WvPicker as Picker, Popup, Progress, Radio, SearchBar, Slider, WvSpinner as Spinner, Swipe, SwipeItem, Switch, Tab, Tabbar, TabbarItem, Tabs, Textarea, Toast, TopTips };
