(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Repeater = require("../components/Repeater");

var _PostAtts = require("../components/PostAtts");

var _DesignOptions = require("../components/DesignOptions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.editor.InspectorControls;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    ServerSideRender = _wp$components.ServerSideRender,
    Disabled = _wp$components.Disabled,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl;
registerBlockType('vodi/blog-tab-section', {
  title: __('Vodi Blog Tab Section', 'vodi'),
  icon: 'editor-kitchensink',
  category: 'vodi-blocks',
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var tab_args = attributes.tab_args,
        section_nav_links = attributes.section_nav_links,
        style = attributes.style,
        design_options = attributes.design_options;

    var onChangeDesignOptions = function onChangeDesignOptions(newDesignOptions) {
      setAttributes({
        design_options: _objectSpread({}, design_options, newDesignOptions)
      });
    };

    var onChangeTabArgs = function onChangeTabArgs(newTabArgs) {
      setAttributes({
        tab_args: JSON.stringify(_toConsumableArray(newTabArgs))
      });
    };

    var onChangeTabArgsTabTitle = function onChangeTabArgsTabTitle(newTabArgsTabTitle, index) {
      var tab_args_updated = JSON.parse(tab_args);
      tab_args_updated[index].tab_title = newTabArgsTabTitle;
      setAttributes({
        tab_args: JSON.stringify(_toConsumableArray(tab_args_updated))
      });
    };

    var onChangeTabArgsPostAtts = function onChangeTabArgsPostAtts(newTabArgsPostAtts, index) {
      var tab_args_updated = JSON.parse(tab_args);
      tab_args_updated[index].post_atts = _objectSpread({}, tab_args_updated[index].post_atts, newTabArgsPostAtts);
      setAttributes({
        tab_args: JSON.stringify(_toConsumableArray(tab_args_updated))
      });
    };

    var onChangeSectionNavLinks = function onChangeSectionNavLinks(newSectionNavLinks) {
      setAttributes({
        section_nav_links: JSON.stringify(_toConsumableArray(newSectionNavLinks))
      });
    };

    var onChangeSectionNavLinksText = function onChangeSectionNavLinksText(newSectionNavLinksText, index) {
      var section_nav_links_updated = JSON.parse(section_nav_links);
      section_nav_links_updated[index].title = newSectionNavLinksText;
      setAttributes({
        section_nav_links: JSON.stringify(_toConsumableArray(section_nav_links_updated))
      });
    };

    var onChangeSectionNavLinksLink = function onChangeSectionNavLinksLink(newSectionNavLinksLink, index) {
      var section_nav_links_updated = JSON.parse(section_nav_links);
      section_nav_links_updated[index].link = newSectionNavLinksLink;
      setAttributes({
        section_nav_links: JSON.stringify(_toConsumableArray(section_nav_links_updated))
      });
    };

    var onChangeStyle = function onChangeStyle(newStyle) {
      setAttributes({
        style: newStyle
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(_Repeater.Repeater, {
      title: __('Blog Tabs', 'vodi'),
      values: tab_args ? JSON.parse(tab_args) : [],
      defaultValues: {
        tab_title: '',
        post_atts: {}
      },
      updateValues: onChangeTabArgs
    }, wp.element.createElement(TextControl, {
      label: __('Tab Title', 'vodi'),
      name: "tab_title",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeTabArgsTabTitle
    }), wp.element.createElement(_PostAtts.PostAtts, {
      name: "post_atts",
      valuekey: "attributes",
      attributes: {},
      trigger_method_name: "updatePostAtts",
      updatePostAtts: onChangeTabArgsPostAtts
    })), style != 'style-v2' ? wp.element.createElement(_Repeater.Repeater, {
      title: __('Nav Links', 'vodi'),
      values: section_nav_links ? JSON.parse(section_nav_links) : [],
      defaultValues: {
        title: '',
        link: ''
      },
      updateValues: onChangeSectionNavLinks
    }, wp.element.createElement(TextControl, {
      label: __('Action Text', 'vodi'),
      name: "title",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeSectionNavLinksText
    }), wp.element.createElement(TextControl, {
      label: __('Action Link', 'vodi'),
      name: "link",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeSectionNavLinksLink
    })) : '', wp.element.createElement(SelectControl, {
      label: __('Style', 'vodi'),
      value: style,
      options: [{
        label: __('Style 1', 'vodi'),
        value: 'style-v1'
      }, {
        label: __('Style 2', 'vodi'),
        value: 'style-v2'
      }],
      onChange: onChangeStyle
    }), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: _objectSpread({}, design_options),
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, tab_args ? wp.element.createElement(ServerSideRender, {
      block: "vodi/blog-tab-section",
      attributes: attributes
    }) : __('Add Tab', 'vodi')));
  },
  save: function save() {
    // Rendering in PHP
    return null;
  }
});

},{"../components/DesignOptions":2,"../components/PostAtts":5,"../components/Repeater":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignOptions = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var __ = wp.i18n.__;
var Component = wp.element.Component;
var RangeControl = wp.components.RangeControl;
/**
 * DesignOptions Component
 */

var DesignOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(DesignOptions, _Component);

  /**
   * Constructor for DesignOptions Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function DesignOptions(props) {
    var _this;

    _classCallCheck(this, DesignOptions);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DesignOptions).apply(this, arguments));
    _this.props = props;
    _this.onChangePaddingTop = _this.onChangePaddingTop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangePaddingBottom = _this.onChangePaddingBottom.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangePaddingLeft = _this.onChangePaddingLeft.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangePaddingRight = _this.onChangePaddingRight.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeMarginTop = _this.onChangeMarginTop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeMarginBottom = _this.onChangeMarginBottom.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(DesignOptions, [{
    key: "onChangePaddingTop",
    value: function onChangePaddingTop(newonChangePaddingTop) {
      this.props.updateDesignOptions({
        padding_top: newonChangePaddingTop
      });
    }
  }, {
    key: "onChangePaddingBottom",
    value: function onChangePaddingBottom(newonChangePaddingBottom) {
      this.props.updateDesignOptions({
        padding_bottom: newonChangePaddingBottom
      });
    }
  }, {
    key: "onChangePaddingLeft",
    value: function onChangePaddingLeft(newonChangePaddingLeft) {
      this.props.updateDesignOptions({
        padding_left: newonChangePaddingLeft
      });
    }
  }, {
    key: "onChangePaddingRight",
    value: function onChangePaddingRight(newonChangePaddingRight) {
      this.props.updateDesignOptions({
        padding_right: newonChangePaddingRight
      });
    }
  }, {
    key: "onChangeMarginTop",
    value: function onChangeMarginTop(newonChangeMarginTop) {
      this.props.updateDesignOptions({
        margin_top: newonChangeMarginTop
      });
    }
  }, {
    key: "onChangeMarginBottom",
    value: function onChangeMarginBottom(newonChangeMarginBottom) {
      this.props.updateDesignOptions({
        margin_bottom: newonChangeMarginBottom
      });
    }
    /**
     * Renders the DesignOptions component.
     */

  }, {
    key: "render",
    value: function render() {
      var attributes = this.props.attributes;
      var padding_top = attributes.padding_top,
          padding_bottom = attributes.padding_bottom,
          padding_left = attributes.padding_left,
          padding_right = attributes.padding_right,
          margin_top = attributes.margin_top,
          margin_bottom = attributes.margin_bottom;
      return wp.element.createElement("div", null, wp.element.createElement(RangeControl, {
        label: __('Padding Top (px)', 'vodi'),
        value: padding_top,
        onChange: this.onChangePaddingTop,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Padding Bottom (px)', 'vodi'),
        value: padding_bottom,
        onChange: this.onChangePaddingBottom,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Padding Left (px)', 'vodi'),
        value: padding_left,
        onChange: this.onChangePaddingLeft,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Padding Right (px)', 'vodi'),
        value: padding_right,
        onChange: this.onChangePaddingRight,
        min: 0,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Margin Top (px)', 'vodi'),
        value: margin_top,
        onChange: this.onChangeMarginTop,
        min: -100,
        max: 100
      }), wp.element.createElement(RangeControl, {
        label: __('Margin Bottom (px)', 'vodi'),
        value: margin_bottom,
        onChange: this.onChangeMarginBottom,
        min: -100,
        max: 100
      }));
    }
  }]);

  return DesignOptions;
}(Component);

exports.DesignOptions = DesignOptions;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

/**
 * Item Component.
 *
 * @param {string} itemTitle - Current item title.
 * @param {function} clickHandler - this is the handling function for the add/remove function
 * @param {Integer} itemId - Current item ID
 * @param icon
 * @returns {*} Item HTML.
 */
var Item = function Item(_ref) {
  var _ref$title = _ref.title;
  _ref$title = _ref$title === void 0 ? {} : _ref$title;
  var itemTitle = _ref$title.rendered,
      name = _ref.name,
      clickHandler = _ref.clickHandler,
      itemId = _ref.id,
      icon = _ref.icon;
  return wp.element.createElement("article", {
    className: "item"
  }, wp.element.createElement("div", {
    className: "item-body"
  }, wp.element.createElement("h3", {
    className: "item-title"
  }, itemTitle, name)), wp.element.createElement("button", {
    onClick: function onClick() {
      return clickHandler(itemId);
    }
  }, icon));
};

exports.Item = Item;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemList = void 0;

var _Item = require("./Item");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __ = wp.i18n.__;
/**
 * ItemList Component
 * @param object props - Component props.
 * @returns {*}
 * @constructor
 */

var ItemList = function ItemList(props) {
  var _props$filtered = props.filtered,
      filtered = _props$filtered === void 0 ? false : _props$filtered,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$items = props.items,
      items = _props$items === void 0 ? [] : _props$items,
      _props$action = props.action,
      action = _props$action === void 0 ? function () {} : _props$action,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? null : _props$icon;

  if (loading) {
    return wp.element.createElement("p", {
      className: "loading-items"
    }, __('Loading ...', 'vodi'));
  }

  if (filtered && items.length < 1) {
    return wp.element.createElement("div", {
      className: "item-list"
    }, wp.element.createElement("p", null, __('Your query yielded no results, please try again.', 'vodi')));
  }

  if (!items || items.length < 1) {
    return wp.element.createElement("p", {
      className: "no-items"
    }, __('Not found.', 'vodi'));
  }

  return wp.element.createElement("div", {
    className: "item-list"
  }, items.map(function (item) {
    return wp.element.createElement(_Item.Item, _extends({
      key: item.id
    }, item, {
      clickHandler: action,
      icon: icon
    }));
  }));
};

exports.ItemList = ItemList;

},{"./Item":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostAtts = void 0;

var _PostSelector = require("./PostSelector");

var _TermSelector = require("./TermSelector");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl;
var applyFilters = wp.hooks.applyFilters;
/**
 * PostAtts Component
 */

var PostAtts =
/*#__PURE__*/
function (_Component) {
  _inherits(PostAtts, _Component);

  /**
   * Constructor for PostAtts Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function PostAtts(props) {
    var _this;

    _classCallCheck(this, PostAtts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostAtts).apply(this, arguments));
    _this.props = props;
    _this.onChangeNumber = _this.onChangeNumber.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeOrderby = _this.onChangeOrderby.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeOrder = _this.onChangeOrder.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeIds = _this.onChangeIds.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeCategory = _this.onChangeCategory.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeSticky = _this.onChangeSticky.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(PostAtts, [{
    key: "onChangeNumber",
    value: function onChangeNumber(newNumber) {
      this.props.updatePostAtts({
        posts_per_page: newNumber
      });
    }
  }, {
    key: "onChangeOrderby",
    value: function onChangeOrderby(newOrderby) {
      this.props.updatePostAtts({
        orderby: newOrderby
      });
    }
  }, {
    key: "onChangeOrder",
    value: function onChangeOrder(newOrder) {
      this.props.updatePostAtts({
        order: newOrder
      });
    }
  }, {
    key: "onChangeIds",
    value: function onChangeIds(newIds) {
      this.props.updatePostAtts({
        ids: newIds.join(',')
      });
    }
  }, {
    key: "onChangeCategory",
    value: function onChangeCategory(newCategory) {
      this.props.updatePostAtts({
        category: newCategory.join(',')
      });
    }
  }, {
    key: "onChangeSticky",
    value: function onChangeSticky(newSticky) {
      this.props.updatePostAtts({
        sticky: newSticky
      });
    }
    /**
     * Renders the PostAtts component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          catTaxonomy = _this$props.catTaxonomy,
          hideFields = _this$props.hideFields;
      var posts_per_page = attributes.posts_per_page,
          orderby = attributes.orderby,
          order = attributes.order,
          ids = attributes.ids,
          category = attributes.category,
          sticky = attributes.sticky;
      return wp.element.createElement("div", null, !(hideFields && hideFields.includes('limit')) ? wp.element.createElement(RangeControl, {
        label: __('Limit', 'vodi'),
        value: posts_per_page,
        onChange: this.onChangeNumber,
        min: applyFilters('vodi.component.postAtts.limit.min', 1),
        max: applyFilters('vodi.component.postAtts.limit.max', 10)
      }) : '', !(hideFields && hideFields.includes('orderby')) ? wp.element.createElement(SelectControl, {
        label: __('Orderby', 'vodi'),
        value: orderby,
        options: [{
          label: __('Title', 'vodi'),
          value: 'title'
        }, {
          label: __('Date', 'vodi'),
          value: 'date'
        }, {
          label: __('ID', 'vodi'),
          value: 'id'
        }, {
          label: __('Random', 'vodi'),
          value: 'rand'
        }],
        onChange: this.onChangeOrderby
      }) : '', !(hideFields && hideFields.includes('order')) ? wp.element.createElement(SelectControl, {
        label: __('Order', 'vodi'),
        value: order,
        options: [{
          label: __('ASC', 'vodi'),
          value: 'ASC'
        }, {
          label: __('DESC', 'vodi'),
          value: 'DESC'
        }],
        onChange: this.onChangeOrder
      }) : '', !(hideFields && hideFields.includes('ids')) ? wp.element.createElement(_PostSelector.PostSelector, {
        postType: "post",
        selectedPostIds: ids ? ids.split(',').map(Number) : [],
        updateSelectedPostIds: this.onChangeIds
      }) : '', !(hideFields && hideFields.includes('category')) ? wp.element.createElement(_TermSelector.TermSelector, {
        postType: "post",
        taxonomy: catTaxonomy,
        selectedTermIds: category ? category.split(',').map(Number) : [],
        updateSelectedTermIds: this.onChangeCategory
      }) : '', !(hideFields && hideFields.includes('sticky')) ? wp.element.createElement(SelectControl, {
        label: __('Sticky Posts', 'vodi'),
        value: sticky,
        options: [{
          label: __('Show All Posts', 'vodi'),
          value: 'show'
        }, {
          label: __('Hide Sticky Posts', 'vodi'),
          value: 'hide'
        }, {
          label: __('Show Only Sticky Posts', 'vodi'),
          value: 'only'
        }],
        onChange: this.onChangeSticky
      }) : '');
    }
  }]);

  return PostAtts;
}(Component);

exports.PostAtts = PostAtts;

},{"./PostSelector":6,"./TermSelector":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostSelector = void 0;

var _ItemList = require("./ItemList");

var api = _interopRequireWildcard(require("../utils/api"));

var _usefulFuncs = require("../utils/useful-funcs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var __ = wp.i18n.__;
var Icon = wp.components.Icon;
var Component = wp.element.Component;
/**
 * PostSelector Component
 */

var PostSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(PostSelector, _Component);

  /**
   * Constructor for PostSelector Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function PostSelector(props) {
    var _this;

    _classCallCheck(this, PostSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostSelector).apply(this, arguments));
    _this.props = props;
    _this.state = {
      posts: [],
      loading: false,
      type: props.postType || 'post',
      types: [],
      filter: '',
      filterLoading: false,
      filterPosts: [],
      initialLoading: false,
      selectedPosts: []
    };
    _this.addPost = _this.addPost.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removePost = _this.removePost.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInputFilterChange = _this.handleInputFilterChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.doPostFilter = (0, _usefulFuncs.debounce)(_this.doPostFilter.bind(_assertThisInitialized(_assertThisInitialized(_this))), 300);
    _this.getSelectedPostIds = _this.getSelectedPostIds.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getSelectedPosts = _this.getSelectedPosts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * When the component mounts it calls this function.
   * Fetches posts types, selected posts then makes first call for posts
   */


  _createClass(PostSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        initialLoading: true
      });
      api.getPostTypes().then(function (response) {
        _this2.setState({
          types: response
        }, function () {
          _this2.retrieveSelectedPosts().then(function (selectedPosts) {
            if (selectedPosts) {
              _this2.setState({
                initialLoading: false,
                selectedPosts: selectedPosts
              });
            } else {
              _this2.setState({
                initialLoading: false
              });
            }
          });
        });
      });
    }
    /**
     * GetPosts wrapper, builds the request argument based state and parameters passed/
     * @param {object} args - desired arguments (can be empty).
     * @returns {Promise<T>}
     */

  }, {
    key: "getPosts",
    value: function getPosts() {
      var _this3 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var postIds = this.getSelectedPostIds();
      var defaultArgs = {
        per_page: 10,
        type: this.state.type,
        search: this.state.filter
      };

      var requestArguments = _objectSpread({}, defaultArgs, args);

      requestArguments.restBase = this.state.types[this.state.type].rest_base;
      return api.getPosts(requestArguments).then(function (response) {
        if (requestArguments.search) {
          _this3.setState({
            filterPosts: response.filter(function (_ref) {
              var id = _ref.id;
              return postIds.indexOf(id) === -1;
            })
          });

          return response;
        }

        _this3.setState({
          posts: (0, _usefulFuncs.uniqueById)([].concat(_toConsumableArray(_this3.state.posts), _toConsumableArray(response)))
        }); // return response to continue the chain


        return response;
      });
    }
    /**
     * Gets the selected posts by id from the `posts` state object and sorts them by their position in the selected array.
     * @returns Array of objects.
     */

  }, {
    key: "getSelectedPostIds",
    value: function getSelectedPostIds() {
      var selectedPostIds = this.props.selectedPostIds;

      if (selectedPostIds) {
        var postIds = Array.isArray(selectedPostIds) ? selectedPostIds : selectedPostIds.split(',');
        return postIds;
      }

      return [];
    }
    /**
     * Gets the selected posts by id from the `posts` state object and sorts them by their position in the selected array.
     * @returns Array of objects.
     */

  }, {
    key: "getSelectedPosts",
    value: function getSelectedPosts(postIds) {
      // const filterPostsList = this.state.filtering && !this.state.filterLoading ? this.state.filterPosts : [];
      var postList = (0, _usefulFuncs.uniqueById)([].concat(_toConsumableArray(this.state.filterPosts), _toConsumableArray(this.state.posts)));
      var selectedPosts = postList.filter(function (_ref2) {
        var id = _ref2.id;
        return postIds.indexOf(id) !== -1;
      }).sort(function (a, b) {
        var aIndex = postIds.indexOf(a.id);
        var bIndex = postIds.indexOf(b.id);

        if (aIndex > bIndex) {
          return 1;
        }

        if (aIndex < bIndex) {
          return -1;
        }

        return 0;
      });
      this.setState({
        selectedPosts: selectedPosts
      });
    }
    /**
     * Makes the necessary api calls to fetch the selected posts and returns a promise.
     * @returns {*}
     */

  }, {
    key: "retrieveSelectedPosts",
    value: function retrieveSelectedPosts() {
      var _this$props = this.props,
          postType = _this$props.postType,
          selectedPostIds = _this$props.selectedPostIds;
      var types = this.state.types;
      var postIds = this.getSelectedPostIds().join(',');

      if (!postIds) {
        // return a fake promise that auto resolves.
        return new Promise(function (resolve) {
          return resolve();
        });
      }

      var post_args = {
        include: postIds,
        per_page: 100,
        postType: postType
      };

      if (this.props.postStatus) {
        post_args.status = this.props.postStatus;
      }

      return this.getPosts(_objectSpread({}, post_args));
    }
    /**
     * Adds desired post id to the selectedPostIds List
     * @param {Integer} post_id
     */

  }, {
    key: "addPost",
    value: function addPost(post_id) {
      if (this.state.filter) {
        var post = this.state.filterPosts.filter(function (p) {
          return p.id === post_id;
        });
        var posts = (0, _usefulFuncs.uniqueById)([].concat(_toConsumableArray(this.state.posts), _toConsumableArray(post)));
        this.setState({
          posts: posts
        });
      }

      if (this.props.selectSingle) {
        var selectedPostIds = [post_id];
        this.props.updateSelectedPostIds(selectedPostIds);
        this.getSelectedPosts(selectedPostIds);
      } else {
        var postIds = this.getSelectedPostIds();

        var _selectedPostIds = [].concat(_toConsumableArray(postIds), [post_id]);

        this.props.updateSelectedPostIds(_selectedPostIds);
        this.getSelectedPosts(_selectedPostIds);
      }
    }
    /**
     * Removes desired post id to the selectedPostIds List
     * @param {Integer} post_id
     */

  }, {
    key: "removePost",
    value: function removePost(post_id) {
      var postIds = this.getSelectedPostIds();

      var selectedPostIds = _toConsumableArray(postIds).filter(function (id) {
        return id !== post_id;
      });

      this.props.updateSelectedPostIds(selectedPostIds);
      this.getSelectedPosts(selectedPostIds);
    }
    /**
     * Handles the search box input value
     * @param string type - comes from the event object target.
     */

  }, {
    key: "handleInputFilterChange",
    value: function handleInputFilterChange() {
      var _this4 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var _ref3$target$value = _ref3$target.value,
          filter = _ref3$target$value === void 0 ? '' : _ref3$target$value;
      this.setState({
        filter: filter
      }, function () {
        if (!filter) {
          // remove filtered posts
          return _this4.setState({
            filteredPosts: [],
            filtering: false
          });
        }

        _this4.doPostFilter();
      });
    }
    /**
     * Actual api call for searching for query, this function is debounced in constructor.
     */

  }, {
    key: "doPostFilter",
    value: function doPostFilter() {
      var _this5 = this;

      var _this$state$filter = this.state.filter,
          filter = _this$state$filter === void 0 ? '' : _this$state$filter;

      if (!filter) {
        return;
      }

      this.setState({
        filtering: true,
        filterLoading: true
      });
      var post_args = {};

      if (this.props.postStatus) {
        post_args.status = this.props.postStatus;
      }

      this.getPosts(_objectSpread({}, post_args)).then(function () {
        _this5.setState({
          filterLoading: false
        });
      });
    }
    /**
     * Renders the PostSelector component.
     */

  }, {
    key: "render",
    value: function render() {
      var postList = this.state.filtering && !this.state.filterLoading ? this.state.filterPosts : [];
      var addIcon = wp.element.createElement(Icon, {
        icon: "plus"
      });
      var removeIcon = wp.element.createElement(Icon, {
        icon: "minus"
      });
      var searchinputuniqueId = 'searchinput-' + Math.random().toString(36).substr(2, 16);
      return wp.element.createElement("div", {
        className: "components-base-control components-post-selector"
      }, wp.element.createElement("div", {
        className: "components-base-control__field--selected"
      }, wp.element.createElement("h2", null, __('Search Post', 'vodi')), wp.element.createElement(_ItemList.ItemList, {
        items: _toConsumableArray(this.state.selectedPosts),
        loading: this.state.initialLoading,
        action: this.removePost,
        icon: removeIcon
      })), wp.element.createElement("div", {
        className: "components-base-control__field"
      }, wp.element.createElement("label", {
        htmlFor: searchinputuniqueId,
        className: "components-base-control__label"
      }, wp.element.createElement(Icon, {
        icon: "search"
      })), wp.element.createElement("input", {
        className: "components-text-control__input",
        id: searchinputuniqueId,
        type: "search",
        placeholder: __('Please enter your search query...', 'vodi'),
        value: this.state.filter,
        onChange: this.handleInputFilterChange
      }), wp.element.createElement(_ItemList.ItemList, {
        items: postList,
        loading: this.state.initialLoading || this.state.loading || this.state.filterLoading,
        filtered: this.state.filtering,
        action: this.addPost,
        icon: addIcon
      })));
    }
  }]);

  return PostSelector;
}(Component);

exports.PostSelector = PostSelector;

},{"../utils/api":9,"../utils/useful-funcs":10,"./ItemList":4}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repeater = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Children = _wp$element.Children;
var _wp$components = wp.components,
    Panel = _wp$components.Panel,
    Button = _wp$components.Button,
    Icon = _wp$components.Icon;
/**
 * Repeater Component
 */

var Repeater =
/*#__PURE__*/
function (_Component) {
  _inherits(Repeater, _Component);

  /**
   * Constructor for Repeater Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function Repeater(props) {
    var _this;

    _classCallCheck(this, Repeater);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Repeater).apply(this, arguments));
    _this.props = props;
    _this.renderAddButton = _this.renderAddButton.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderRemoveButton = _this.renderRemoveButton.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleRemove = _this.handleRemove.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderChildrenElements = _this.renderChildrenElements.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Repeater, [{
    key: "renderAddButton",
    value: function renderAddButton() {
      return wp.element.createElement(Button, {
        isDefault: true,
        className: "button-fullwidth",
        onClick: this.handleAdd
      }, wp.element.createElement(Icon, {
        icon: "plus"
      }));
    }
  }, {
    key: "renderRemoveButton",
    value: function renderRemoveButton() {
      return wp.element.createElement(Button, {
        isDestructive: true,
        className: "button-remove",
        onClick: this.handleRemove
      }, wp.element.createElement(Icon, {
        icon: "dismiss"
      }));
    }
  }, {
    key: "handleAdd",
    value: function handleAdd() {
      var _this$props = this.props,
          defaultValues = _this$props.defaultValues,
          updateValues = _this$props.updateValues;
      var values = this.props.values;
      var current_values = values ? [].concat(_toConsumableArray(values), [_objectSpread({}, defaultValues)]) : [_objectSpread({}, defaultValues)];
      updateValues(current_values);
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(index) {
      var updateValues = this.props.updateValues;
      var values = this.props.values;
      var current_values = values.filter(function (value, i) {
        return i != index;
      });
      updateValues(current_values);
    }
  }, {
    key: "renderChildrenElements",
    value: function renderChildrenElements() {
      var children = this.props.children;
      var values = this.props.values;

      if (!values) {
        return [];
      }

      var remove_button = this.renderRemoveButton();
      return values.map(function (value, index) {
        var updated_children = Children.map(children, function (child) {
          var child_props = _objectSpread({}, child.props);

          if (values[index][child.props.name]) {
            child_props[child.props.valuekey] = values[index][child.props.name];
          }

          child_props[child.props.trigger_method_name] = function (value) {
            return child.props[child.props.trigger_method_name](value, index);
          };

          return React.cloneElement(child, _objectSpread({}, child_props));
        });
        var updated_remove_button = React.cloneElement(remove_button, {
          key: 'repeater-remove-' + index,
          onClick: function onClick() {
            return remove_button.props['onClick'](index);
          }
        });
        return React.createElement(Panel, {
          key: 'repeater-child-' + index
        }, [updated_children, updated_remove_button]);
      });
    }
    /**
     * Renders the Repeater component.
     */

  }, {
    key: "render",
    value: function render() {
      return wp.element.createElement("div", {
        className: "components-base-control repeater-component"
      }, wp.element.createElement("div", {
        className: "components-base-control__field"
      }, wp.element.createElement("label", {
        className: "components-base-control__label"
      }, this.props.title), this.renderChildrenElements(), this.renderAddButton()));
    }
  }]);

  return Repeater;
}(Component);

exports.Repeater = Repeater;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermSelector = void 0;

var _ItemList = require("./ItemList");

var api = _interopRequireWildcard(require("../utils/api"));

var _usefulFuncs = require("../utils/useful-funcs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var __ = wp.i18n.__;
var Icon = wp.components.Icon;
var Component = wp.element.Component;
/**
 * TermSelector Component
 */

var TermSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(TermSelector, _Component);

  /**
   * Constructor for TermSelector Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function TermSelector(props) {
    var _this;

    _classCallCheck(this, TermSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TermSelector).apply(this, arguments));
    _this.props = props;
    _this.state = {
      terms: [],
      loading: false,
      type: props.postType || 'post',
      taxonomy: props.taxonomy || 'category',
      taxonomies: [],
      filter: '',
      filterLoading: false,
      filterTerms: [],
      initialLoading: false
    };
    _this.addTerm = _this.addTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeTerm = _this.removeTerm.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleInputFilterChange = _this.handleInputFilterChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.doTermFilter = (0, _usefulFuncs.debounce)(_this.doTermFilter.bind(_assertThisInitialized(_assertThisInitialized(_this))), 300);
    return _this;
  }
  /**
   * When the component mounts it calls this function.
   * Fetches terms taxonomies, selected terms then makes first call for terms
   */


  _createClass(TermSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        initialLoading: true
      });
      api.getTaxonomies({
        type: this.state.type
      }).then(function (response) {
        _this2.setState({
          taxonomies: response
        }, function () {
          _this2.retrieveSelectedTerms().then(function () {
            _this2.setState({
              initialLoading: false
            });
          });
        });
      });
    }
    /**
     * GetTerms wrapper, builds the request argument based state and parameters passed/
     * @param {object} args - desired arguments (can be empty).
     * @returns {Promise<T>}
     */

  }, {
    key: "getTerms",
    value: function getTerms() {
      var _this3 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var selectedTermIds = this.props.selectedTermIds;
      var defaultArgs = {
        per_page: 10,
        type: this.state.type,
        taxonomy: this.state.taxonomy,
        search: this.state.filter
      };

      var requestArguments = _objectSpread({}, defaultArgs, args);

      requestArguments.restBase = this.state.taxonomies[this.state.taxonomy].rest_base;
      return api.getTerms(requestArguments).then(function (response) {
        if (requestArguments.search) {
          _this3.setState({
            filterTerms: response.filter(function (_ref) {
              var id = _ref.id;
              return selectedTermIds.indexOf(id) === -1;
            })
          });

          return response;
        }

        _this3.setState({
          terms: (0, _usefulFuncs.uniqueById)([].concat(_toConsumableArray(_this3.state.terms), _toConsumableArray(response)))
        }); // return response to continue the chain


        return response;
      });
    }
    /**
     * Gets the selected terms by id from the `terms` state object and sorts them by their position in the selected array.
     * @returns Array of objects.
     */

  }, {
    key: "getSelectedTerms",
    value: function getSelectedTerms() {
      var _this4 = this;

      var selectedTermIds = this.props.selectedTermIds;
      return this.state.terms.filter(function (_ref2) {
        var id = _ref2.id;
        return selectedTermIds.indexOf(id) !== -1;
      }).sort(function (a, b) {
        var aIndex = _this4.props.selectedTermIds.indexOf(a.id);

        var bIndex = _this4.props.selectedTermIds.indexOf(b.id);

        if (aIndex > bIndex) {
          return 1;
        }

        if (aIndex < bIndex) {
          return -1;
        }

        return 0;
      });
    }
    /**
     * Makes the necessary api calls to fetch the selected terms and returns a promise.
     * @returns {*}
     */

  }, {
    key: "retrieveSelectedTerms",
    value: function retrieveSelectedTerms() {
      var _this$props = this.props,
          termType = _this$props.termType,
          selectedTermIds = _this$props.selectedTermIds;
      var taxonomies = this.state.taxonomies;

      if (selectedTermIds && !selectedTermIds.length > 0) {
        // return a fake promise that auto resolves.
        return new Promise(function (resolve) {
          return resolve();
        });
      }

      return this.getTerms({
        include: this.props.selectedTermIds.join(','),
        per_page: 100,
        termType: termType
      });
    }
    /**
     * Adds desired term id to the selectedTermIds List
     * @param {Integer} term_id
     */

  }, {
    key: "addTerm",
    value: function addTerm(term_id) {
      if (this.state.filter) {
        var term = this.state.filterTerms.filter(function (p) {
          return p.id === term_id;
        });
        var terms = (0, _usefulFuncs.uniqueById)([].concat(_toConsumableArray(this.state.terms), _toConsumableArray(term)));
        this.setState({
          terms: terms
        });
      }

      this.props.updateSelectedTermIds([].concat(_toConsumableArray(this.props.selectedTermIds), [term_id]));
    }
    /**
     * Removes desired term id to the selectedTermIds List
     * @param {Integer} term_id
     */

  }, {
    key: "removeTerm",
    value: function removeTerm(term_id) {
      this.props.updateSelectedTermIds(_toConsumableArray(this.props.selectedTermIds).filter(function (id) {
        return id !== term_id;
      }));
    }
    /**
     * Handles the search box input value
     * @param string type - comes from the event object target.
     */

  }, {
    key: "handleInputFilterChange",
    value: function handleInputFilterChange() {
      var _this5 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$target = _ref3.target;

      _ref3$target = _ref3$target === void 0 ? {} : _ref3$target;
      var _ref3$target$value = _ref3$target.value,
          filter = _ref3$target$value === void 0 ? '' : _ref3$target$value;
      this.setState({
        filter: filter
      }, function () {
        if (!filter) {
          // remove filtered terms
          return _this5.setState({
            filteredTerms: [],
            filtering: false
          });
        }

        _this5.doTermFilter();
      });
    }
    /**
     * Actual api call for searching for query, this function is debounced in constructor.
     */

  }, {
    key: "doTermFilter",
    value: function doTermFilter() {
      var _this6 = this;

      var _this$state$filter = this.state.filter,
          filter = _this$state$filter === void 0 ? '' : _this$state$filter;

      if (!filter) {
        return;
      }

      this.setState({
        filtering: true,
        filterLoading: true
      });
      this.getTerms().then(function () {
        _this6.setState({
          filterLoading: false
        });
      });
    }
    /**
     * Renders the TermSelector component.
     */

  }, {
    key: "render",
    value: function render() {
      var isFiltered = this.state.filtering;
      var termList = isFiltered && !this.state.filterLoading ? this.state.filterTerms : [];
      var SelectedTermList = this.getSelectedTerms();
      var addIcon = wp.element.createElement(Icon, {
        icon: "plus"
      });
      var removeIcon = wp.element.createElement(Icon, {
        icon: "minus"
      });
      var searchinputuniqueId = 'searchinput-' + Math.random().toString(36).substr(2, 16);
      return wp.element.createElement("div", {
        className: "components-base-control components-term-selector"
      }, wp.element.createElement("div", {
        className: "components-base-control__field--selected"
      }, wp.element.createElement("h2", null, __('Search Term', 'vodi')), wp.element.createElement(_ItemList.ItemList, {
        items: SelectedTermList,
        loading: this.state.initialLoading,
        action: this.removeTerm,
        icon: removeIcon
      })), wp.element.createElement("div", {
        className: "components-base-control__field"
      }, wp.element.createElement("label", {
        htmlFor: searchinputuniqueId,
        className: "components-base-control__label"
      }, wp.element.createElement(Icon, {
        icon: "search"
      })), wp.element.createElement("input", {
        className: "components-text-control__input",
        id: searchinputuniqueId,
        type: "search",
        placeholder: __('Please enter your search query...', 'vodi'),
        value: this.state.filter,
        onChange: this.handleInputFilterChange
      }), wp.element.createElement(_ItemList.ItemList, {
        items: termList,
        loading: this.state.initialLoading || this.state.loading || this.state.filterLoading,
        filtered: isFiltered,
        action: this.addTerm,
        icon: addIcon
      })));
    }
  }]);

  return TermSelector;
}(Component);

exports.TermSelector = TermSelector;

},{"../utils/api":9,"../utils/useful-funcs":10,"./ItemList":4}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerms = exports.getTaxonomies = exports.getPosts = exports.getPostTypes = void 0;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _wp = wp,
    apiFetch = _wp.apiFetch;
/**
 * Makes a get request to the PostTypes endpoint.
 *
 * @returns {Promise<any>}
 */

var getPostTypes = function getPostTypes() {
  return apiFetch({
    path: '/wp/v2/types'
  });
};
/**
 * Makes a get request to the desired post type and builds the query string based on an object.
 *
 * @param {string|boolean} restBase - rest base for the query.
 * @param {object} args
 * @returns {Promise<any>}
 */


exports.getPostTypes = getPostTypes;

var getPosts = function getPosts(_ref) {
  var _ref$restBase = _ref.restBase,
      restBase = _ref$restBase === void 0 ? false : _ref$restBase,
      args = _objectWithoutProperties(_ref, ["restBase"]);

  var queryString = Object.keys(args).map(function (arg) {
    return "".concat(arg, "=").concat(args[arg]);
  }).join('&');
  var path = "/wp/v2/".concat(restBase, "?").concat(queryString, "&_embed");
  return apiFetch({
    path: path
  });
};
/**
 * Makes a get request to the PostType Taxonomies endpoint.
 *
 * @returns {Promise<any>}
 */


exports.getPosts = getPosts;

var getTaxonomies = function getTaxonomies(_ref2) {
  var args = _extends({}, _ref2);

  var queryString = Object.keys(args).map(function (arg) {
    return "".concat(arg, "=").concat(args[arg]);
  }).join('&');
  var path = "/wp/v2/taxonomies?".concat(queryString, "&_embed");
  return apiFetch({
    path: path
  });
};
/**
 * Makes a get request to the desired post type and builds the query string based on an object.
 *
 * @param {string|boolean} restBase - rest base for the query.
 * @param {object} args
 * @returns {Promise<any>}
 */


exports.getTaxonomies = getTaxonomies;

var getTerms = function getTerms(_ref3) {
  var _ref3$restBase = _ref3.restBase,
      restBase = _ref3$restBase === void 0 ? false : _ref3$restBase,
      args = _objectWithoutProperties(_ref3, ["restBase"]);

  var queryString = Object.keys(args).map(function (arg) {
    return "".concat(arg, "=").concat(args[arg]);
  }).join('&');
  var path = "/wp/v2/".concat(restBase, "?").concat(queryString, "&_embed");
  return apiFetch({
    path: path
  });
};

exports.getTerms = getTerms;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = exports.uniqueById = exports.uniqueBy = void 0;

/**
 * Returns a unique array of objects based on a desired key.
 * @param {array} arr - array of objects.
 * @param {string|int} key - key to filter objects by
 */
var uniqueBy = function uniqueBy(arr, key) {
  var keys = [];
  return arr.filter(function (item) {
    if (keys.indexOf(item[key]) !== -1) {
      return false;
    }

    return keys.push(item[key]);
  });
};
/**
 * Returns a unique array of objects based on the id property.
 * @param {array} arr - array of objects to filter.
 * @returns {*}
 */


exports.uniqueBy = uniqueBy;

var uniqueById = function uniqueById(arr) {
  return uniqueBy(arr, 'id');
};
/**
 * Debounce a function by limiting how often it can run.
 * @param {function} func - callback function
 * @param {Integer} wait - Time in milliseconds how long it should wait.
 * @returns {Function}
 */


exports.uniqueById = uniqueById;

var debounce = function debounce(func, wait) {
  var timeout = null;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

exports.debounce = debounce;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvYmxvZy10YWItc2VjdGlvbi5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvRGVzaWduT3B0aW9ucy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSXRlbS5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSXRlbUxpc3QuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1Bvc3RBdHRzLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9Qb3N0U2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1JlcGVhdGVyLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy9hcGkuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy91c2VmdWwtZnVuY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVRLEUsR0FBTyxFQUFFLENBQUMsSSxDQUFWLEU7SUFDQSxpQixHQUFzQixFQUFFLENBQUMsTSxDQUF6QixpQjtJQUNBLGlCLEdBQXNCLEVBQUUsQ0FBQyxNLENBQXpCLGlCO0lB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dXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgUmVwZWF0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1JlcGVhdGVyJztcbmltcG9ydCB7IFBvc3RBdHRzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0QXR0cyc7XG5pbXBvcnQgeyBEZXNpZ25PcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EZXNpZ25PcHRpb25zJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFNlcnZlclNpZGVSZW5kZXIsIERpc2FibGVkLCBQYW5lbEJvZHksIFRleHRDb250cm9sLCBTZWxlY3RDb250cm9sLCBDaGVja2JveENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndm9kaS9ibG9nLXRhYi1zZWN0aW9uJywge1xuICAgIHRpdGxlOiBfXygnVm9kaSBCbG9nIFRhYiBTZWN0aW9uJywgJ3ZvZGknKSxcblxuICAgIGljb246ICdlZGl0b3Ita2l0Y2hlbnNpbmsnLFxuXG4gICAgY2F0ZWdvcnk6ICd2b2RpLWJsb2NrcycsXG5cbiAgICBlZGl0OiAoICggcHJvcHMgKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdGFiX2FyZ3MsIHNlY3Rpb25fbmF2X2xpbmtzLCBzdHlsZSwgZGVzaWduX29wdGlvbnMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VEZXNpZ25PcHRpb25zID0gbmV3RGVzaWduT3B0aW9ucyA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IGRlc2lnbl9vcHRpb25zOiB7IC4uLmRlc2lnbl9vcHRpb25zLCAuLi5uZXdEZXNpZ25PcHRpb25zIH0gfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlVGFiQXJncyA9IG5ld1RhYkFyZ3MgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyB0YWJfYXJnczogSlNPTi5zdHJpbmdpZnkoWy4uLm5ld1RhYkFyZ3NdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VUYWJBcmdzVGFiVGl0bGUgPSAobmV3VGFiQXJnc1RhYlRpdGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRhYl9hcmdzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHRhYl9hcmdzKTtcbiAgICAgICAgICAgIHRhYl9hcmdzX3VwZGF0ZWRbaW5kZXhdLnRhYl90aXRsZSA9IG5ld1RhYkFyZ3NUYWJUaXRsZTtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgdGFiX2FyZ3M6IEpTT04uc3RyaW5naWZ5KFsuLi50YWJfYXJnc191cGRhdGVkXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlVGFiQXJnc1Bvc3RBdHRzID0gKG5ld1RhYkFyZ3NQb3N0QXR0cywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciB0YWJfYXJnc191cGRhdGVkID0gSlNPTi5wYXJzZSh0YWJfYXJncyk7XG4gICAgICAgICAgICB0YWJfYXJnc191cGRhdGVkW2luZGV4XS5wb3N0X2F0dHMgPSB7IC4uLnRhYl9hcmdzX3VwZGF0ZWRbaW5kZXhdLnBvc3RfYXR0cywgLi4ubmV3VGFiQXJnc1Bvc3RBdHRzIH07XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHRhYl9hcmdzOiBKU09OLnN0cmluZ2lmeShbLi4udGFiX2FyZ3NfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rcyA9IG5ld1NlY3Rpb25OYXZMaW5rcyA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fbmF2X2xpbmtzOiBKU09OLnN0cmluZ2lmeShbLi4ubmV3U2VjdGlvbk5hdkxpbmtzXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzVGV4dCA9IChuZXdTZWN0aW9uTmF2TGlua3NUZXh0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25fbmF2X2xpbmtzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHNlY3Rpb25fbmF2X2xpbmtzKTtcbiAgICAgICAgICAgIHNlY3Rpb25fbmF2X2xpbmtzX3VwZGF0ZWRbaW5kZXhdLnRpdGxlID0gbmV3U2VjdGlvbk5hdkxpbmtzVGV4dDtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2VjdGlvbl9uYXZfbGlua3M6IEpTT04uc3RyaW5naWZ5KFsuLi5zZWN0aW9uX25hdl9saW5rc191cGRhdGVkXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzTGluayA9IChuZXdTZWN0aW9uTmF2TGlua3NMaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25fbmF2X2xpbmtzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHNlY3Rpb25fbmF2X2xpbmtzKTtcbiAgICAgICAgICAgIHNlY3Rpb25fbmF2X2xpbmtzX3VwZGF0ZWRbaW5kZXhdLmxpbmsgPSBuZXdTZWN0aW9uTmF2TGlua3NMaW5rO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX25hdl9saW5rczogSlNPTi5zdHJpbmdpZnkoWy4uLnNlY3Rpb25fbmF2X2xpbmtzX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTdHlsZSA9IG5ld1N0eWxlID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc3R5bGU6IG5ld1N0eWxlIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ0Jsb2cgVGFicycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyB0YWJfYXJncyA/IEpTT04ucGFyc2UodGFiX2FyZ3MpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17IHsgdGFiX3RpdGxlOiAnJywgcG9zdF9hdHRzOiB7fSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlcz17IG9uQ2hhbmdlVGFiQXJncyB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnVGFiIFRpdGxlJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0YWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVRhYkFyZ3NUYWJUaXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RBdHRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncG9zdF9hdHRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVla2V5PSdhdHRyaWJ1dGVzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM9eyB7fSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0ndXBkYXRlUG9zdEF0dHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUG9zdEF0dHM9eyBvbkNoYW5nZVRhYkFyZ3NQb3N0QXR0cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyPlxuICAgICAgICAgICAgICAgICAgICB7ICggc3R5bGUgIT0gJ3N0eWxlLXYyJyApID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdOYXYgTGlua3MnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17IHNlY3Rpb25fbmF2X2xpbmtzID8gSlNPTi5wYXJzZShzZWN0aW9uX25hdl9saW5rcykgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17IHsgdGl0bGU6ICcnLCBsaW5rOiAnJyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZXM9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIFRleHQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyX21ldGhvZF9uYW1lPSdvbkNoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc1RleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIExpbmsnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdsaW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZWtleT0ndmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJfbWV0aG9kX25hbWU9J29uQ2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzTGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1N0eWxlJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc3R5bGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnU3R5bGUgMScsICd2b2RpJyksIHZhbHVlOiAnc3R5bGUtdjEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1N0eWxlIDInLCAndm9kaScpLCB2YWx1ZTogJ3N0eWxlLXYyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU3R5bGUgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ0Rlc2lnbiBPcHRpb25zJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7IHsgLi4uZGVzaWduX29wdGlvbnMgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVzaWduT3B0aW9ucyA9IHsgb25DaGFuZ2VEZXNpZ25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgPERpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICB7IHRhYl9hcmdzID8gKFxuICAgICAgICAgICAgICAgICAgICA8U2VydmVyU2lkZVJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ2b2RpL2Jsb2ctdGFiLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogX18oJ0FkZCBUYWInLCAndm9kaScpIH1cbiAgICAgICAgICAgICAgICA8L0Rpc2FibGVkPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9ICksXG5cbiAgICBzYXZlKCkge1xuICAgICAgICAvLyBSZW5kZXJpbmcgaW4gUEhQXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59ICk7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogRGVzaWduT3B0aW9ucyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIERlc2lnbk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBEZXNpZ25PcHRpb25zIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgPSB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gPSB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nVG9wKCBuZXdvbkNoYW5nZVBhZGRpbmdUb3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3RvcDogbmV3b25DaGFuZ2VQYWRkaW5nVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ0JvdHRvbSggbmV3b25DaGFuZ2VQYWRkaW5nQm90dG9tICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19ib3R0b206IG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdMZWZ0KCBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19sZWZ0OiBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1JpZ2h0KCBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfcmlnaHQ6IG5ld29uQ2hhbmdlUGFkZGluZ1JpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luVG9wKCBuZXdvbkNoYW5nZU1hcmdpblRvcCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl90b3A6IG5ld29uQ2hhbmdlTWFyZ2luVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luQm90dG9tKCBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl9ib3R0b206IG5ld29uQ2hhbmdlTWFyZ2luQm90dG9tXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIERlc2lnbk9wdGlvbnMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHBhZGRpbmdfdG9wLCBwYWRkaW5nX2JvdHRvbSwgcGFkZGluZ19sZWZ0LCBwYWRkaW5nX3JpZ2h0LCBtYXJnaW5fdG9wLCBtYXJnaW5fYm90dG9tIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFRvcCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIEJvdHRvbSAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX2JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIExlZnQgKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19sZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFJpZ2h0IChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfcmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gVG9wIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl90b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gQm90dG9tIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl9ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIlxuLyoqXG4gKiBJdGVtIENvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbVRpdGxlIC0gQ3VycmVudCBpdGVtIHRpdGxlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xpY2tIYW5kbGVyIC0gdGhpcyBpcyB0aGUgaGFuZGxpbmcgZnVuY3Rpb24gZm9yIHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGl0ZW1JZCAtIEN1cnJlbnQgaXRlbSBJRFxuICogQHBhcmFtIGljb25cbiAqIEByZXR1cm5zIHsqfSBJdGVtIEhUTUwuXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtID0gKHsgdGl0bGU6IHsgcmVuZGVyZWQ6IGl0ZW1UaXRsZSB9ID0ge30sIG5hbWUsIGNsaWNrSGFuZGxlciwgaWQ6IGl0ZW1JZCwgaWNvbiB9KSA9PiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYm9keVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIml0ZW0tdGl0bGVcIj57aXRlbVRpdGxlfXtuYW1lfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihpdGVtSWQpfT57aWNvbn08L2J1dHRvbj5cbiAgICA8L2FydGljbGU+XG4pOyIsImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL0l0ZW0nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEl0ZW1MaXN0IENvbXBvbmVudFxuICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIENvbXBvbmVudCBwcm9wcy5cbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtTGlzdCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IGZpbHRlcmVkID0gZmFsc2UsIGxvYWRpbmcgPSBmYWxzZSwgaXRlbXMgPSBbXSwgYWN0aW9uID0gKCkgPT4ge30sIGljb24gPSBudWxsIH0gPSBwcm9wcztcblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLWl0ZW1zXCI+e19fKCdMb2FkaW5nIC4uLicsICd2b2RpJyl9PC9wPjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyZWQgJiYgaXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8cD57X18oJ1lvdXIgcXVlcnkgeWllbGRlZCBubyByZXN1bHRzLCBwbGVhc2UgdHJ5IGFnYWluLicsICd2b2RpJyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCAhIGl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA8IDEgKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJuby1pdGVtc1wiPntfXygnTm90IGZvdW5kLicsICd2b2RpJyl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0XCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiA8SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSBjbGlja0hhbmRsZXI9e2FjdGlvbn0gaWNvbj17aWNvbn0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTsiLCJpbXBvcnQgeyBQb3N0U2VsZWN0b3IgfSBmcm9tICcuL1Bvc3RTZWxlY3Rvcic7XG5pbXBvcnQgeyBUZXJtU2VsZWN0b3IgfSBmcm9tICcuL1Rlcm1TZWxlY3Rvcic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgVGV4dENvbnRyb2wsIFJhbmdlQ29udHJvbCwgU2VsZWN0Q29udHJvbCwgQ2hlY2tib3hDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG4vKipcbiAqIFBvc3RBdHRzIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUG9zdEF0dHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBQb3N0QXR0cyBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZU51bWJlciA9IHRoaXMub25DaGFuZ2VOdW1iZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU9yZGVyYnkgPSB0aGlzLm9uQ2hhbmdlT3JkZXJieS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlT3JkZXIgPSB0aGlzLm9uQ2hhbmdlT3JkZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUlkcyA9IHRoaXMub25DaGFuZ2VJZHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhdGVnb3J5ID0gdGhpcy5vbkNoYW5nZUNhdGVnb3J5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VTdGlja3kgPSB0aGlzLm9uQ2hhbmdlU3RpY2t5LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VOdW1iZXIoIG5ld051bWJlciApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQb3N0QXR0cyh7XG4gICAgICAgICAgICBwb3N0c19wZXJfcGFnZTogbmV3TnVtYmVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlT3JkZXJieSggbmV3T3JkZXJieSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQb3N0QXR0cyh7XG4gICAgICAgICAgICBvcmRlcmJ5OiBuZXdPcmRlcmJ5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlT3JkZXIoIG5ld09yZGVyICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVBvc3RBdHRzKHtcbiAgICAgICAgICAgIG9yZGVyOiBuZXdPcmRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUlkcyggbmV3SWRzICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVBvc3RBdHRzKHtcbiAgICAgICAgICAgIGlkczogbmV3SWRzLmpvaW4oJywnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUNhdGVnb3J5KCBuZXdDYXRlZ29yeSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQb3N0QXR0cyh7XG4gICAgICAgICAgICBjYXRlZ29yeTogbmV3Q2F0ZWdvcnkuam9pbignLCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlU3RpY2t5KCBuZXdTdGlja3kgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUG9zdEF0dHMoe1xuICAgICAgICAgICAgc3RpY2t5OiBuZXdTdGlja3lcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUG9zdEF0dHMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBjYXRUYXhvbm9teSwgaGlkZUZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBwb3N0c19wZXJfcGFnZSwgb3JkZXJieSwgb3JkZXIsIGlkcywgY2F0ZWdvcnksIHN0aWNreSB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnbGltaXQnKSApID8gKFxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdMaW1pdCcsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcG9zdHNfcGVyX3BhZ2UgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VOdW1iZXIgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5wb3N0QXR0cy5saW1pdC5taW4nLCAxICkgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5wb3N0QXR0cy5saW1pdC5tYXgnLCAxMCApIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ29yZGVyYnknKSApID8gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnT3JkZXJieScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgb3JkZXJieSB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnVGl0bGUnLCAndm9kaScpLCB2YWx1ZTogJ3RpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0RhdGUnLCAndm9kaScpLCB2YWx1ZTogJ2RhdGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnSUQnLCAndm9kaScpLCB2YWx1ZTogJ2lkJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1JhbmRvbScsICd2b2RpJyksIHZhbHVlOiAncmFuZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU9yZGVyYnkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnb3JkZXInKSApID8gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnT3JkZXInLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG9yZGVyIH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdBU0MnLCAndm9kaScpLCB2YWx1ZTogJ0FTQycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdERVNDJywgJ3ZvZGknKSwgdmFsdWU6ICdERVNDJyB9LFxuICAgICAgICAgICAgICAgICAgICBdIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlT3JkZXIgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnaWRzJykgKSA/IChcbiAgICAgICAgICAgICAgICA8UG9zdFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ3Bvc3QnXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUG9zdElkcz17IGlkcyA/IGlkcy5zcGxpdCgnLCcpLm1hcChOdW1iZXIpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZFBvc3RJZHM9eyB0aGlzLm9uQ2hhbmdlSWRzIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2NhdGVnb3J5JykgKSA/IChcbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ3Bvc3QnXG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215ID0geyBjYXRUYXhvbm9teSB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVybUlkcz17IGNhdGVnb3J5ID8gY2F0ZWdvcnkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRUZXJtSWRzPXsgdGhpcy5vbkNoYW5nZUNhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ3N0aWNreScpICkgPyAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTdGlja3kgUG9zdHMnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHN0aWNreSB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnU2hvdyBBbGwgUG9zdHMnLCAndm9kaScpLCB2YWx1ZTogJ3Nob3cnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnSGlkZSBTdGlja3kgUG9zdHMnLCAndm9kaScpLCB2YWx1ZTogJ2hpZGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnU2hvdyBPbmx5IFN0aWNreSBQb3N0cycsICd2b2RpJyksIHZhbHVlOiAnb25seScgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVN0aWNreSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSAnLi9JdGVtTGlzdCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IHVuaXF1ZUJ5SWQsIGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMvdXNlZnVsLWZ1bmNzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIFBvc3RTZWxlY3RvciBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3RTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFBvc3RTZWxlY3RvciBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMucG9zdFR5cGUgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgdHlwZXM6IFtdLFxuICAgICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyUG9zdHM6IFtdLFxuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRQb3N0ID0gdGhpcy5hZGRQb3N0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9zdCA9IHRoaXMucmVtb3ZlUG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvUG9zdEZpbHRlciA9IGRlYm91bmNlKHRoaXMuZG9Qb3N0RmlsdGVyLmJpbmQodGhpcyksIDMwMCk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyBpdCBjYWxscyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEZldGNoZXMgcG9zdHMgdHlwZXMsIHNlbGVjdGVkIHBvc3RzIHRoZW4gbWFrZXMgZmlyc3QgY2FsbCBmb3IgcG9zdHNcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBpLmdldFBvc3RUeXBlcygpXG4gICAgICAgICAgICAudGhlbigoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlczogcmVzcG9uc2VcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVTZWxlY3RlZFBvc3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCggc2VsZWN0ZWRQb3N0cyApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggc2VsZWN0ZWRQb3N0cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBzZWxlY3RlZFBvc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldFBvc3RzIHdyYXBwZXIsIGJ1aWxkcyB0aGUgcmVxdWVzdCBhcmd1bWVudCBiYXNlZCBzdGF0ZSBhbmQgcGFyYW1ldGVycyBwYXNzZWQvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgLSBkZXNpcmVkIGFyZ3VtZW50cyAoY2FuIGJlIGVtcHR5KS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn1cbiAgICAgKi9cbiAgICBnZXRQb3N0cyhhcmdzID0ge30pIHtcbiAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdEFyZ3MgPSB7XG4gICAgICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnN0YXRlLnR5cGUsXG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RBcmd1bWVudHMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0QXJncyxcbiAgICAgICAgICAgIC4uLmFyZ3NcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0QXJndW1lbnRzLnJlc3RCYXNlID0gdGhpcy5zdGF0ZS50eXBlc1t0aGlzLnN0YXRlLnR5cGVdLnJlc3RfYmFzZTtcblxuICAgICAgICByZXR1cm4gYXBpLmdldFBvc3RzKHJlcXVlc3RBcmd1bWVudHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RBcmd1bWVudHMuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyUG9zdHM6IHJlc3BvbnNlLmZpbHRlcigoeyBpZCB9KSA9PiBwb3N0SWRzLmluZGV4T2YoaWQpID09PSAtMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IHVuaXF1ZUJ5SWQoWy4uLnRoaXMuc3RhdGUucG9zdHMsIC4uLnJlc3BvbnNlXSksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UgdG8gY29udGludWUgdGhlIGNoYWluXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcG9zdHMgYnkgaWQgZnJvbSB0aGUgYHBvc3RzYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRQb3N0SWRzKCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkUG9zdElkcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiggc2VsZWN0ZWRQb3N0SWRzICkge1xuICAgICAgICAgICAgY29uc3QgcG9zdElkcyA9IEFycmF5LmlzQXJyYXkoIHNlbGVjdGVkUG9zdElkcyApID8gc2VsZWN0ZWRQb3N0SWRzIDogc2VsZWN0ZWRQb3N0SWRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICByZXR1cm4gcG9zdElkcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBwb3N0cyBieSBpZCBmcm9tIHRoZSBgcG9zdHNgIHN0YXRlIG9iamVjdCBhbmQgc29ydHMgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgc2VsZWN0ZWQgYXJyYXkuXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygb2JqZWN0cy5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFBvc3RzKCBwb3N0SWRzICkge1xuICAgICAgICAvLyBjb25zdCBmaWx0ZXJQb3N0c0xpc3QgPSB0aGlzLnN0YXRlLmZpbHRlcmluZyAmJiAhdGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nID8gdGhpcy5zdGF0ZS5maWx0ZXJQb3N0cyA6IFtdO1xuICAgICAgICBjb25zdCBwb3N0TGlzdCA9IHVuaXF1ZUJ5SWQoW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5maWx0ZXJQb3N0cyxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9zdHNcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdHMgPSBwb3N0TGlzdFxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBwb3N0SWRzLmluZGV4T2YoaWQpICE9PSAtMSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYUluZGV4ID0gcG9zdElkcy5pbmRleE9mKGEuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJJbmRleCA9IHBvc3RJZHMuaW5kZXhPZihiLmlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPiBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA8IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IHNlbGVjdGVkUG9zdHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBuZWNlc3NhcnkgYXBpIGNhbGxzIHRvIGZldGNoIHRoZSBzZWxlY3RlZCBwb3N0cyBhbmQgcmV0dXJucyBhIHByb21pc2UuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmV0cmlldmVTZWxlY3RlZFBvc3RzKCkge1xuICAgICAgICBjb25zdCB7IHBvc3RUeXBlLCBzZWxlY3RlZFBvc3RJZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdHlwZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCkuam9pbignLCcpO1xuXG4gICAgICAgIGlmICggISBwb3N0SWRzICkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgZmFrZSBwcm9taXNlIHRoYXQgYXV0byByZXNvbHZlcy5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb3N0X2FyZ3MgPSB7XG4gICAgICAgICAgICBpbmNsdWRlOiBwb3N0SWRzLFxuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHBvc3RUeXBlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMucG9zdFN0YXR1cyApIHtcbiAgICAgICAgICAgIHBvc3RfYXJncy5zdGF0dXMgPSB0aGlzLnByb3BzLnBvc3RTdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3N0cyh7XG4gICAgICAgICAgICAuLi5wb3N0X2FyZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBkZXNpcmVkIHBvc3QgaWQgdG8gdGhlIHNlbGVjdGVkUG9zdElkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBwb3N0X2lkXG4gICAgICovXG4gICAgYWRkUG9zdChwb3N0X2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMuZmlsdGVyKHAgPT4gcC5pZCA9PT0gcG9zdF9pZCk7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHVuaXF1ZUJ5SWQoW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9zdHMsXG4gICAgICAgICAgICAgICAgLi4ucG9zdFxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvc3RzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnNlbGVjdFNpbmdsZSApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgcG9zdF9pZCBdO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyAuLi5wb3N0SWRzLCBwb3N0X2lkIF07XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkUG9zdElkcyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBkZXNpcmVkIHBvc3QgaWQgdG8gdGhlIHNlbGVjdGVkUG9zdElkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBwb3N0X2lkXG4gICAgICovXG4gICAgcmVtb3ZlUG9zdChwb3N0X2lkKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIC4uLnBvc3RJZHMgXS5maWx0ZXIoaWQgPT4gaWQgIT09IHBvc3RfaWQpO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkUG9zdElkcyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgc2VhcmNoIGJveCBpbnB1dCB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdHJpbmcgdHlwZSAtIGNvbWVzIGZyb20gdGhlIGV2ZW50IG9iamVjdCB0YXJnZXQuXG4gICAgICovXG4gICAgaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6ZmlsdGVyID0gJycgfSA9IHt9IH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlclxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmaWx0ZXJlZCBwb3N0c1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRQb3N0czogW10sIGZpbHRlcmluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZG9Qb3N0RmlsdGVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0dWFsIGFwaSBjYWxsIGZvciBzZWFyY2hpbmcgZm9yIHF1ZXJ5LCB0aGlzIGZ1bmN0aW9uIGlzIGRlYm91bmNlZCBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBkb1Bvc3RGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyID0gJycgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9zdF9hcmdzID0ge307XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMucG9zdFN0YXR1cyApIHtcbiAgICAgICAgICAgIHBvc3RfYXJncy5zdGF0dXMgPSB0aGlzLnByb3BzLnBvc3RTdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFBvc3RzKHtcbiAgICAgICAgICAgIC4uLnBvc3RfYXJnc1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUG9zdFNlbGVjdG9yIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvc3RMaXN0ID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmcgJiYgIXRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZyA/IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMgOiBbXTtcblxuICAgICAgICBjb25zdCBhZGRJY29uID0gPEljb24gaWNvbj1cInBsdXNcIiAvPjtcbiAgICAgICAgY29uc3QgcmVtb3ZlSWNvbiA9IDxJY29uIGljb249XCJtaW51c1wiIC8+O1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaGlucHV0dW5pcXVlSWQgPSAnc2VhcmNoaW5wdXQtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxNik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgY29tcG9uZW50cy1wb3N0LXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQtLXNlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57X18oJ1NlYXJjaCBQb3N0JywgJ3ZvZGknKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXsgWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRQb3N0c10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5yZW1vdmVQb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17cmVtb3ZlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17c2VhcmNoaW5wdXR1bmlxdWVJZH0gY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLXRleHQtY29udHJvbF9faW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlYXJjaGlucHV0dW5pcXVlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnUGxlYXNlIGVudGVyIHlvdXIgc2VhcmNoIHF1ZXJ5Li4uJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtwb3N0TGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd8fHRoaXMuc3RhdGUubG9hZGluZ3x8dGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWQ9e3RoaXMuc3RhdGUuZmlsdGVyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLmFkZFBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXthZGRJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFBhbmVsLCBCdXR0b24sIEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVwZWF0ZXIgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBlYXRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJlcGVhdGVyIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLnJlbmRlckFkZEJ1dHRvbiA9IHRoaXMucmVuZGVyQWRkQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uID0gdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBZGQgPSB0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cyA9IHRoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlckFkZEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEJ1dHRvbiBpc0RlZmF1bHQgY2xhc3NOYW1lPVwiYnV0dG9uLWZ1bGx3aWR0aFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwicGx1c1wiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJSZW1vdmVCdXR0b24oKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxCdXR0b24gaXNEZXN0cnVjdGl2ZSBjbGFzc05hbWU9XCJidXR0b24tcmVtb3ZlXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmV9PlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJkaXNtaXNzXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUFkZCgpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWVzLCB1cGRhdGVWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdXJyZW50X3ZhbHVlcyA9IHZhbHVlcyA/IFsgLi4udmFsdWVzLCB7IC4uLmRlZmF1bHRWYWx1ZXMgfSBdIDogWyB7IC4uLmRlZmF1bHRWYWx1ZXMgfSBdO1xuICAgICAgICB1cGRhdGVWYWx1ZXMoIGN1cnJlbnRfdmFsdWVzICk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3ZlKCBpbmRleCApIHtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdXJyZW50X3ZhbHVlcyA9IHZhbHVlcy5maWx0ZXIoICggdmFsdWUsIGkgKSA9PiBpICE9IGluZGV4ICk7XG4gICAgICAgIHVwZGF0ZVZhbHVlcyggY3VycmVudF92YWx1ZXMgKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbkVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiggISB2YWx1ZXMgKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVfYnV0dG9uID0gdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24oKTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCggKCB2YWx1ZSwgaW5kZXggKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkX2NoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoIGNoaWxkICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZF9wcm9wcyA9IHsgLi4uY2hpbGQucHJvcHMgfTtcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVzW2luZGV4XVtjaGlsZC5wcm9wcy5uYW1lXSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfcHJvcHNbY2hpbGQucHJvcHMudmFsdWVrZXldID0gdmFsdWVzW2luZGV4XVtjaGlsZC5wcm9wcy5uYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGRfcHJvcHNbY2hpbGQucHJvcHMudHJpZ2dlcl9tZXRob2RfbmFtZV0gPSAodmFsdWUpID0+IGNoaWxkLnByb3BzW2NoaWxkLnByb3BzLnRyaWdnZXJfbWV0aG9kX25hbWVdKHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCggY2hpbGQsIHsgLi4uY2hpbGRfcHJvcHMgfSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkX3JlbW92ZV9idXR0b24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoIHJlbW92ZV9idXR0b24sIHsga2V5OiAncmVwZWF0ZXItcmVtb3ZlLScraW5kZXgsIG9uQ2xpY2s6ICgpID0+IHJlbW92ZV9idXR0b24ucHJvcHNbJ29uQ2xpY2snXShpbmRleCkgfSApO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggUGFuZWwsIHsga2V5OiAncmVwZWF0ZXItY2hpbGQtJytpbmRleCB9LCBbdXBkYXRlZF9jaGlsZHJlbiwgdXBkYXRlZF9yZW1vdmVfYnV0dG9uXSk7XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBSZXBlYXRlciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCByZXBlYXRlci1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cygpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBZGRCdXR0b24oKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gXCIuL0l0ZW1MaXN0XCI7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IHVuaXF1ZUJ5SWQsIGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMvdXNlZnVsLWZ1bmNzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIFRlcm1TZWxlY3RvciBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRlcm1TZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFRlcm1TZWxlY3RvciBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlcm1zOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMucG9zdFR5cGUgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgdGF4b25vbXk6IHByb3BzLnRheG9ub215IHx8ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB0YXhvbm9taWVzOiBbXSxcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclRlcm1zOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZFRlcm0gPSB0aGlzLmFkZFRlcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVUZXJtID0gdGhpcy5yZW1vdmVUZXJtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9UZXJtRmlsdGVyID0gZGVib3VuY2UodGhpcy5kb1Rlcm1GaWx0ZXIuYmluZCh0aGlzKSwgMzAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjb21wb25lbnQgbW91bnRzIGl0IGNhbGxzIHRoaXMgZnVuY3Rpb24uXG4gICAgICogRmV0Y2hlcyB0ZXJtcyB0YXhvbm9taWVzLCBzZWxlY3RlZCB0ZXJtcyB0aGVuIG1ha2VzIGZpcnN0IGNhbGwgZm9yIHRlcm1zXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwaS5nZXRUYXhvbm9taWVzKCB7IHR5cGU6IHRoaXMuc3RhdGUudHlwZSB9IClcbiAgICAgICAgICAgIC50aGVuKCggcmVzcG9uc2UgKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub21pZXM6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlU2VsZWN0ZWRUZXJtcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRUZXJtcyB3cmFwcGVyLCBidWlsZHMgdGhlIHJlcXVlc3QgYXJndW1lbnQgYmFzZWQgc3RhdGUgYW5kIHBhcmFtZXRlcnMgcGFzc2VkL1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIC0gZGVzaXJlZCBhcmd1bWVudHMgKGNhbiBiZSBlbXB0eSkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD59XG4gICAgICovXG4gICAgZ2V0VGVybXMoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRUZXJtSWRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBcmdzID0ge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS50eXBlLFxuICAgICAgICAgICAgdGF4b25vbXk6IHRoaXMuc3RhdGUudGF4b25vbXksXG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RBcmd1bWVudHMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0QXJncyxcbiAgICAgICAgICAgIC4uLmFyZ3NcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0QXJndW1lbnRzLnJlc3RCYXNlID0gdGhpcy5zdGF0ZS50YXhvbm9taWVzW3RoaXMuc3RhdGUudGF4b25vbXldLnJlc3RfYmFzZTtcblxuICAgICAgICByZXR1cm4gYXBpLmdldFRlcm1zKHJlcXVlc3RBcmd1bWVudHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RBcmd1bWVudHMuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVGVybXM6IHJlc3BvbnNlLmZpbHRlcigoeyBpZCB9KSA9PiBzZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihpZCkgPT09IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXJtczogdW5pcXVlQnlJZChbLi4udGhpcy5zdGF0ZS50ZXJtcywgLi4ucmVzcG9uc2VdKSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZSB0byBjb250aW51ZSB0aGUgY2hhaW5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCB0ZXJtcyBieSBpZCBmcm9tIHRoZSBgdGVybXNgIHN0YXRlIG9iamVjdCBhbmQgc29ydHMgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgc2VsZWN0ZWQgYXJyYXkuXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygb2JqZWN0cy5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFRlcm1zKCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkVGVybUlkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGVybXNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoaWQpICE9PSAtMSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYUluZGV4ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihhLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiSW5kZXggPSB0aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkcy5pbmRleE9mKGIuaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA+IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4IDwgYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBuZWNlc3NhcnkgYXBpIGNhbGxzIHRvIGZldGNoIHRoZSBzZWxlY3RlZCB0ZXJtcyBhbmQgcmV0dXJucyBhIHByb21pc2UuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmV0cmlldmVTZWxlY3RlZFRlcm1zKCkge1xuICAgICAgICBjb25zdCB7IHRlcm1UeXBlLCBzZWxlY3RlZFRlcm1JZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdGF4b25vbWllcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIHNlbGVjdGVkVGVybUlkcyAmJiAhc2VsZWN0ZWRUZXJtSWRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSBmYWtlIHByb21pc2UgdGhhdCBhdXRvIHJlc29sdmVzLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGVybXMoe1xuICAgICAgICAgICAgaW5jbHVkZTogdGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMuam9pbignLCcpLFxuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHRlcm1UeXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZGVzaXJlZCB0ZXJtIGlkIHRvIHRoZSBzZWxlY3RlZFRlcm1JZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gdGVybV9pZFxuICAgICAqL1xuICAgIGFkZFRlcm0odGVybV9pZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnN0YXRlLmZpbHRlclRlcm1zLmZpbHRlcihwID0+IHAuaWQgPT09IHRlcm1faWQpO1xuICAgICAgICAgICAgY29uc3QgdGVybXMgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRlcm1zLFxuICAgICAgICAgICAgICAgIC4uLnRlcm1cbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkVGVybUlkcyhbXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkcyxcbiAgICAgICAgICAgIHRlcm1faWRcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBkZXNpcmVkIHRlcm0gaWQgdG8gdGhlIHNlbGVjdGVkVGVybUlkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSB0ZXJtX2lkXG4gICAgICovXG4gICAgcmVtb3ZlVGVybSh0ZXJtX2lkKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRUZXJtSWRzKFtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzXG4gICAgICAgIF0uZmlsdGVyKGlkID0+IGlkICE9PSB0ZXJtX2lkKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgc2VhcmNoIGJveCBpbnB1dCB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdHJpbmcgdHlwZSAtIGNvbWVzIGZyb20gdGhlIGV2ZW50IG9iamVjdCB0YXJnZXQuXG4gICAgICovXG4gICAgaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6ZmlsdGVyID0gJycgfSA9IHt9IH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlclxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmaWx0ZXJlZCB0ZXJtc1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRUZXJtczogW10sIGZpbHRlcmluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZG9UZXJtRmlsdGVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0dWFsIGFwaSBjYWxsIGZvciBzZWFyY2hpbmcgZm9yIHF1ZXJ5LCB0aGlzIGZ1bmN0aW9uIGlzIGRlYm91bmNlZCBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBkb1Rlcm1GaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyID0gJycgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFRlcm1zKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFRlcm1TZWxlY3RvciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc0ZpbHRlcmVkID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmc7XG4gICAgICAgIGNvbnN0IHRlcm1MaXN0ID0gaXNGaWx0ZXJlZCAmJiAhdGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nID8gdGhpcy5zdGF0ZS5maWx0ZXJUZXJtcyA6IFtdO1xuICAgICAgICBjb25zdCBTZWxlY3RlZFRlcm1MaXN0ICA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXJtcygpO1xuXG4gICAgICAgIGNvbnN0IGFkZEljb24gPSA8SWNvbiBpY29uPVwicGx1c1wiIC8+O1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gPEljb24gaWNvbj1cIm1pbnVzXCIgLz47XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoaW5wdXR1bmlxdWVJZCA9ICdzZWFyY2hpbnB1dC0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDE2KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBjb21wb25lbnRzLXRlcm0tc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZC0tc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntfXygnU2VhcmNoIFRlcm0nLCAndm9kaScpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1NlbGVjdGVkVGVybUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnJlbW92ZVRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtyZW1vdmVJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfSBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdGV4dC1jb250cm9sX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VhcmNoaW5wdXR1bmlxdWVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCdQbGVhc2UgZW50ZXIgeW91ciBzZWFyY2ggcXVlcnkuLi4nLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Rlcm1MaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ3x8dGhpcy5zdGF0ZS5sb2FkaW5nfHx0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZD17aXNGaWx0ZXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5hZGRUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJjb25zdCB7IGFwaUZldGNoIH0gPSB3cDtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBQb3N0VHlwZXMgZW5kcG9pbnQuXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBvc3RUeXBlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogJy93cC92Mi90eXBlcycgfSApO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBkZXNpcmVkIHBvc3QgdHlwZSBhbmQgYnVpbGRzIHRoZSBxdWVyeSBzdHJpbmcgYmFzZWQgb24gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IHJlc3RCYXNlIC0gcmVzdCBiYXNlIGZvciB0aGUgcXVlcnkuXG4gKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gKHsgcmVzdEJhc2UgPSBmYWxzZSwgLi4uYXJncyB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoYXJnID0+IGAke2FyZ309JHthcmdzW2FyZ119YCkuam9pbignJicpO1xuXG4gICAgbGV0IHBhdGggPSBgL3dwL3YyLyR7cmVzdEJhc2V9PyR7cXVlcnlTdHJpbmd9Jl9lbWJlZGA7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6IHBhdGggfSApO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBQb3N0VHlwZSBUYXhvbm9taWVzIGVuZHBvaW50LlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUYXhvbm9taWVzID0gKHsgLi4uYXJncyB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoYXJnID0+IGAke2FyZ309JHthcmdzW2FyZ119YCkuam9pbignJicpO1xuXG4gICAgbGV0IHBhdGggPSBgL3dwL3YyL3RheG9ub21pZXM/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIGRlc2lyZWQgcG9zdCB0eXBlIGFuZCBidWlsZHMgdGhlIHF1ZXJ5IHN0cmluZyBiYXNlZCBvbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gcmVzdEJhc2UgLSByZXN0IGJhc2UgZm9yIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGVybXMgPSAoeyByZXN0QmFzZSA9IGZhbHNlLCAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvJHtyZXN0QmFzZX0/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59OyIsIi8qKlxuICogUmV0dXJucyBhIHVuaXF1ZSBhcnJheSBvZiBvYmplY3RzIGJhc2VkIG9uIGEgZGVzaXJlZCBrZXkuXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgLSBhcnJheSBvZiBvYmplY3RzLlxuICogQHBhcmFtIHtzdHJpbmd8aW50fSBrZXkgLSBrZXkgdG8gZmlsdGVyIG9iamVjdHMgYnlcbiAqL1xuZXhwb3J0IGNvbnN0IHVuaXF1ZUJ5ID0gKGFyciwga2V5KSA9PiB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICByZXR1cm4gYXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihpdGVtW2tleV0pICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXMucHVzaChpdGVtW2tleV0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdW5pcXVlIGFycmF5IG9mIG9iamVjdHMgYmFzZWQgb24gdGhlIGlkIHByb3BlcnR5LlxuICogQHBhcmFtIHthcnJheX0gYXJyIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBmaWx0ZXIuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVuaXF1ZUJ5SWQgPSBhcnIgPT4gdW5pcXVlQnkoYXJyLCAnaWQnKTtcblxuLyoqXG4gKiBEZWJvdW5jZSBhIGZ1bmN0aW9uIGJ5IGxpbWl0aW5nIGhvdyBvZnRlbiBpdCBjYW4gcnVuLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdhaXQgLSBUaW1lIGluIG1pbGxpc2Vjb25kcyBob3cgbG9uZyBpdCBzaG91bGQgd2FpdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgfVxufTsiXX0=
