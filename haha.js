import Vue from 'vue';

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
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-39e13feb_0", { source: "\n@import url(../style/actionsheet.css);\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["D:\\Code\\we-vue/D:\\Code\\we-vue/D:\\Code\\we-vue\\packages\\actionsheet\\index.vue","index.vue"],"names":[],"mappings":";AAoHA,sCAAA;;AClHA,qCAAqC","file":"index.vue","sourcesContent":[null,"@import url(../style/actionsheet.css);\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

  };
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
  

  
  var index = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

export default index;
