(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Repeater = require("../components/Repeater");

var _PostAtts = require("../components/PostAtts");

var _DesignOptions = require("../components/DesignOptions");

var _PostSelector = require("../components/PostSelector");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var InspectorControls = wp.editor.InspectorControls;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    ServerSideRender = _wp$components.ServerSideRender,
    Disabled = _wp$components.Disabled,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    CheckboxControl = _wp$components.CheckboxControl,
    SelectControl = _wp$components.SelectControl;
registerBlockType('vodi/blog-grid-with-list-section', {
  title: __('Vodi Blog Grid with List Section', 'vodi'),
  icon: 'grid-view',
  category: 'vodi-blocks',
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var section_title = attributes.section_title,
        section_nav_links = attributes.section_nav_links,
        hide_excerpt_1 = attributes.hide_excerpt_1,
        hide_excerpt_2 = attributes.hide_excerpt_2,
        post_atts_2 = attributes.post_atts_2,
        ids = attributes.ids,
        design_options = attributes.design_options;

    var onChangeSectionTitle = function onChangeSectionTitle(newSectionTitle) {
      setAttributes({
        section_title: newSectionTitle
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

    var onChangeHideExcerpt1 = function onChangeHideExcerpt1(newHideExcerpt1) {
      setAttributes({
        hide_excerpt_1: newHideExcerpt1
      });
    };

    var onChangeHideExcerpt2 = function onChangeHideExcerpt2(newHideExcerpt2) {
      setAttributes({
        hide_excerpt_2: newHideExcerpt2
      });
    };

    var onChangePostAtts2 = function onChangePostAtts2(newPostAtts2) {
      setAttributes({
        post_atts_2: _objectSpread({}, post_atts_2, newPostAtts2)
      });
    };

    var onChangeIds = function onChangeIds(newIds) {
      setAttributes({
        ids: newIds.join(',')
      });
    };

    var onChangeDesignOptions = function onChangeDesignOptions(newDesignOptions) {
      setAttributes({
        design_options: _objectSpread({}, design_options, newDesignOptions)
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(TextControl, {
      label: __('Section Title', 'vodi'),
      value: section_title,
      onChange: onChangeSectionTitle
    }), wp.element.createElement(_Repeater.Repeater, {
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
    })), wp.element.createElement(PanelBody, {
      title: __('Grid View Attributes', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_PostSelector.PostSelector, {
      postType: "post",
      selectSingle: true,
      selectedPostIds: ids ? ids.split(',').map(Number) : [],
      updateSelectedPostIds: onChangeIds
    }), wp.element.createElement(CheckboxControl, {
      label: __('Hide Excerpt', 'vodi'),
      help: __('Check to hide excerpt.', 'vodi'),
      checked: hide_excerpt_1,
      onChange: onChangeHideExcerpt1
    })), wp.element.createElement(PanelBody, {
      title: __('List View Attributes', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_PostAtts.PostAtts, {
      attributes: _objectSpread({}, post_atts_2),
      updatePostAtts: onChangePostAtts2
    }), wp.element.createElement(CheckboxControl, {
      label: __('Hide Excerpt', 'vodi'),
      help: __('Check to hide excerpt.', 'vodi'),
      checked: hide_excerpt_2,
      onChange: onChangeHideExcerpt2
    })), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: _objectSpread({}, design_options),
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, wp.element.createElement(ServerSideRender, {
      block: "vodi/blog-grid-with-list-section",
      attributes: attributes
    })));
  },
  save: function save() {
    // Rendering in PHP
    return null;
  }
});

},{"../components/DesignOptions":2,"../components/PostAtts":5,"../components/PostSelector":6,"../components/Repeater":7}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvYmxvZy1ncmlkLXdpdGgtbGlzdC1zZWN0aW9uLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9EZXNpZ25PcHRpb25zLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9JdGVtLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9JdGVtTGlzdC5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvUG9zdEF0dHMuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1Bvc3RTZWxlY3Rvci5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvUmVwZWF0ZXIuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1Rlcm1TZWxlY3Rvci5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L3V0aWxzL2FwaS5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L3V0aWxzL3VzZWZ1bC1mdW5jcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRVEsRSxHQUFPLEVBQUUsQ0FBQyxJLENBQVYsRTtJQUNBLGlCLEdBQXNCLEVBQUUsQ0FBQyxNLENBQXpCLGlCO0lBQ0EsaUIsR0FBc0IsRUFBRSxD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QVEsR0FBRyxTQUFYLFFBQVcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFjO0FBQ2xDLE1BQUksSUFBSSxHQUFHLEVBQVg7QUFDQSxTQUFPLEdBQUcsQ0FBQyxNQUFKLENBQVcsVUFBQSxJQUFJLEVBQUk7QUFDdEIsUUFBSSxJQUFJLENBQUMsT0FBTCxDQUFhLElBQUksQ0FBQyxHQUFELENBQWpCLE1BQTRCLENBQUMsQ0FBakMsRUFBb0M7QUFDaEMsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsV0FBTyxJQUFJLENBQUMsSUFBTCxDQUFVLElBQUksQ0FBQyxHQUFELENBQWQsQ0FBUDtBQUNILEdBTk0sQ0FBUDtBQU9ILENBVE07QUFXUDs7Ozs7Ozs7O0FBS08sSUFBTSxVQUFVLEdBQUcsU0FBYixVQUFhLENBQUEsR0FBRztBQUFBLFNBQUksUUFBUSxDQUFDLEdBQUQsRUFBTSxJQUFOLENBQVo7QUFBQSxDQUF0QjtBQUVQOzs7Ozs7Ozs7O0FBTU8sSUFBTSxRQUFRLEdBQUcsU0FBWCxRQUFXLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7QUFDcEMsTUFBSSxPQUFPLEdBQUcsSUFBZDtBQUVBLFNBQU8sWUFBWTtBQUNmLFFBQU0sT0FBTyxHQUFHLElBQWhCO0FBQ0EsUUFBTSxJQUFJLEdBQUcsU0FBYjs7QUFFQSxRQUFNLEtBQUssR0FBRyxTQUFSLEtBQVEsR0FBTTtBQUNoQixNQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtBQUNILEtBRkQ7O0FBSUEsSUFBQSxZQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0EsSUFBQSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUQsRUFBUSxJQUFSLENBQXBCO0FBQ0gsR0FWRDtBQVdILENBZE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBSZXBlYXRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvUmVwZWF0ZXInO1xuaW1wb3J0IHsgUG9zdEF0dHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RBdHRzJztcbmltcG9ydCB7IERlc2lnbk9wdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL0Rlc2lnbk9wdGlvbnMnO1xuaW1wb3J0IHsgUG9zdFNlbGVjdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0U2VsZWN0b3InO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgU2VydmVyU2lkZVJlbmRlciwgRGlzYWJsZWQsIFBhbmVsQm9keSwgVGV4dENvbnRyb2wsIENoZWNrYm94Q29udHJvbCwgU2VsZWN0Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd2b2RpL2Jsb2ctZ3JpZC13aXRoLWxpc3Qtc2VjdGlvbicsIHtcbiAgICB0aXRsZTogX18oJ1ZvZGkgQmxvZyBHcmlkIHdpdGggTGlzdCBTZWN0aW9uJywgJ3ZvZGknKSxcblxuICAgIGljb246ICdncmlkLXZpZXcnLFxuXG4gICAgY2F0ZWdvcnk6ICd2b2RpLWJsb2NrcycsXG5cbiAgICBlZGl0OiAoICggcHJvcHMgKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHsgc2VjdGlvbl90aXRsZSwgc2VjdGlvbl9uYXZfbGlua3MsIGhpZGVfZXhjZXJwdF8xLGhpZGVfZXhjZXJwdF8yLCBwb3N0X2F0dHNfMiwgaWRzLCBkZXNpZ25fb3B0aW9ucyB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25UaXRsZSA9IG5ld1NlY3Rpb25UaXRsZSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fdGl0bGU6IG5ld1NlY3Rpb25UaXRsZSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3MgPSBuZXdTZWN0aW9uTmF2TGlua3MgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX25hdl9saW5rczogSlNPTi5zdHJpbmdpZnkoWy4uLm5ld1NlY3Rpb25OYXZMaW5rc10pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc1RleHQgPSAobmV3U2VjdGlvbk5hdkxpbmtzVGV4dCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uX25hdl9saW5rc191cGRhdGVkID0gSlNPTi5wYXJzZShzZWN0aW9uX25hdl9saW5rcyk7XG4gICAgICAgICAgICBzZWN0aW9uX25hdl9saW5rc191cGRhdGVkW2luZGV4XS50aXRsZSA9IG5ld1NlY3Rpb25OYXZMaW5rc1RleHQ7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fbmF2X2xpbmtzOiBKU09OLnN0cmluZ2lmeShbLi4uc2VjdGlvbl9uYXZfbGlua3NfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc0xpbmsgPSAobmV3U2VjdGlvbk5hdkxpbmtzTGluaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uX25hdl9saW5rc191cGRhdGVkID0gSlNPTi5wYXJzZShzZWN0aW9uX25hdl9saW5rcyk7XG4gICAgICAgICAgICBzZWN0aW9uX25hdl9saW5rc191cGRhdGVkW2luZGV4XS5saW5rID0gbmV3U2VjdGlvbk5hdkxpbmtzTGluaztcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2VjdGlvbl9uYXZfbGlua3M6IEpTT04uc3RyaW5naWZ5KFsuLi5zZWN0aW9uX25hdl9saW5rc191cGRhdGVkXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlSGlkZUV4Y2VycHQxID0gbmV3SGlkZUV4Y2VycHQxID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgaGlkZV9leGNlcnB0XzE6IG5ld0hpZGVFeGNlcnB0MSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VIaWRlRXhjZXJwdDIgPSBuZXdIaWRlRXhjZXJwdDIgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBoaWRlX2V4Y2VycHRfMjogbmV3SGlkZUV4Y2VycHQyIH0gKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlUG9zdEF0dHMyID0gbmV3UG9zdEF0dHMyID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgcG9zdF9hdHRzXzI6IHsgLi4ucG9zdF9hdHRzXzIsIC4uLm5ld1Bvc3RBdHRzMiB9IH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZUlkcyA9IG5ld0lkcz0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgaWRzOiBuZXdJZHMuam9pbignLCcpIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTZWN0aW9uIFRpdGxlJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VjdGlvbl90aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU2VjdGlvblRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ05hdiBMaW5rcycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyBzZWN0aW9uX25hdl9saW5rcyA/IEpTT04ucGFyc2Uoc2VjdGlvbl9uYXZfbGlua3MpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17IHsgdGl0bGU6ICcnLCBsaW5rOiAnJyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlcz17IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBY3Rpb24gVGV4dCcsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc1RleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIExpbmsnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc0xpbmsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cbiAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ0dyaWQgVmlldyBBdHRyaWJ1dGVzJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ3Bvc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RTaW5nbGUgPSB7IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0SWRzPXsgaWRzID8gaWRzLnNwbGl0KCcsJykubWFwKE51bWJlcikgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZFBvc3RJZHM9eyBvbkNoYW5nZUlkcyB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnSGlkZSBFeGNlcnB0JywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e19fKCdDaGVjayB0byBoaWRlIGV4Y2VycHQuJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBoaWRlX2V4Y2VycHRfMSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlSGlkZUV4Y2VycHQxIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ0xpc3QgVmlldyBBdHRyaWJ1dGVzJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0QXR0c1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHsgeyAuLi5wb3N0X2F0dHNfMiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBvc3RBdHRzID0geyBvbkNoYW5nZVBvc3RBdHRzMiB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnSGlkZSBFeGNlcnB0JywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e19fKCdDaGVjayB0byBoaWRlIGV4Y2VycHQuJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBoaWRlX2V4Y2VycHRfMiB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlSGlkZUV4Y2VycHQyIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ0Rlc2lnbiBPcHRpb25zJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7IHsgLi4uZGVzaWduX29wdGlvbnMgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVzaWduT3B0aW9ucyA9IHsgb25DaGFuZ2VEZXNpZ25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgPERpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICA8U2VydmVyU2lkZVJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ2b2RpL2Jsb2ctZ3JpZC13aXRoLWxpc3Qtc2VjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9EaXNhYmxlZD5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfSApLFxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgLy8gUmVuZGVyaW5nIGluIFBIUFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxufSApOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIERlc2lnbk9wdGlvbnMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBEZXNpZ25PcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgRGVzaWduT3B0aW9ucyBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ0JvdHRvbSA9IHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdSaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wID0gdGhpcy5vbkNoYW5nZU1hcmdpblRvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tID0gdGhpcy5vbkNoYW5nZU1hcmdpbkJvdHRvbS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1RvcCggbmV3b25DaGFuZ2VQYWRkaW5nVG9wICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ190b3A6IG5ld29uQ2hhbmdlUGFkZGluZ1RvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdCb3R0b20oIG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfYm90dG9tOiBuZXdvbkNoYW5nZVBhZGRpbmdCb3R0b21cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nTGVmdCggbmV3b25DaGFuZ2VQYWRkaW5nTGVmdCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfbGVmdDogbmV3b25DaGFuZ2VQYWRkaW5nTGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdSaWdodCggbmV3b25DaGFuZ2VQYWRkaW5nUmlnaHQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3JpZ2h0OiBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU1hcmdpblRvcCggbmV3b25DaGFuZ2VNYXJnaW5Ub3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXJnaW5fdG9wOiBuZXdvbkNoYW5nZU1hcmdpblRvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU1hcmdpbkJvdHRvbSggbmV3b25DaGFuZ2VNYXJnaW5Cb3R0b20gKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXJnaW5fYm90dG9tOiBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBEZXNpZ25PcHRpb25zIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBwYWRkaW5nX3RvcCwgcGFkZGluZ19ib3R0b20sIHBhZGRpbmdfbGVmdCwgcGFkZGluZ19yaWdodCwgbWFyZ2luX3RvcCwgbWFyZ2luX2JvdHRvbSB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBUb3AgKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ190b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBCb3R0b20gKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBMZWZ0IChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfbGVmdCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBSaWdodCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3JpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTWFyZ2luIFRvcCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW5fdG9wIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgLTEwMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTWFyZ2luIEJvdHRvbSAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW5fYm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgLTEwMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJcbi8qKlxuICogSXRlbSBDb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1UaXRsZSAtIEN1cnJlbnQgaXRlbSB0aXRsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsaWNrSGFuZGxlciAtIHRoaXMgaXMgdGhlIGhhbmRsaW5nIGZ1bmN0aW9uIGZvciB0aGUgYWRkL3JlbW92ZSBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBpdGVtSWQgLSBDdXJyZW50IGl0ZW0gSURcbiAqIEBwYXJhbSBpY29uXG4gKiBAcmV0dXJucyB7Kn0gSXRlbSBIVE1MLlxuICovXG5leHBvcnQgY29uc3QgSXRlbSA9ICh7IHRpdGxlOiB7IHJlbmRlcmVkOiBpdGVtVGl0bGUgfSA9IHt9LCBuYW1lLCBjbGlja0hhbmRsZXIsIGlkOiBpdGVtSWQsIGljb24gfSkgPT4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWJvZHlcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+e2l0ZW1UaXRsZX17bmFtZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoaXRlbUlkKX0+e2ljb259PC9idXR0b24+XG4gICAgPC9hcnRpY2xlPlxuKTsiLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBJdGVtTGlzdCBDb21wb25lbnRcbiAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBDb21wb25lbnQgcHJvcHMuXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgSXRlbUxpc3QgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJlZCA9IGZhbHNlLCBsb2FkaW5nID0gZmFsc2UsIGl0ZW1zID0gW10sIGFjdGlvbiA9ICgpID0+IHt9LCBpY29uID0gbnVsbCB9ID0gcHJvcHM7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwibG9hZGluZy1pdGVtc1wiPntfXygnTG9hZGluZyAuLi4nLCAndm9kaScpfTwvcD47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcmVkICYmIGl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0XCI+XG4gICAgICAgICAgICAgICAgPHA+e19fKCdZb3VyIHF1ZXJ5IHlpZWxkZWQgbm8gcmVzdWx0cywgcGxlYXNlIHRyeSBhZ2Fpbi4nLCAndm9kaScpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICggISBpdGVtcyB8fCBpdGVtcy5sZW5ndGggPCAxICkge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwibm8taXRlbXNcIj57X18oJ05vdCBmb3VuZC4nLCAndm9kaScpfTwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdFwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gPEl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gY2xpY2tIYW5kbGVyPXthY3Rpb259IGljb249e2ljb259IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07IiwiaW1wb3J0IHsgUG9zdFNlbGVjdG9yIH0gZnJvbSAnLi9Qb3N0U2VsZWN0b3InO1xuaW1wb3J0IHsgVGVybVNlbGVjdG9yIH0gZnJvbSAnLi9UZXJtU2VsZWN0b3InO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFRleHRDb250cm9sLCBSYW5nZUNvbnRyb2wsIFNlbGVjdENvbnRyb2wsIENoZWNrYm94Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcblxuLyoqXG4gKiBQb3N0QXR0cyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3RBdHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUG9zdEF0dHMgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2VOdW1iZXIgPSB0aGlzLm9uQ2hhbmdlTnVtYmVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VPcmRlcmJ5ID0gdGhpcy5vbkNoYW5nZU9yZGVyYnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU9yZGVyID0gdGhpcy5vbkNoYW5nZU9yZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VJZHMgPSB0aGlzLm9uQ2hhbmdlSWRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDYXRlZ29yeSA9IHRoaXMub25DaGFuZ2VDYXRlZ29yeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlU3RpY2t5ID0gdGhpcy5vbkNoYW5nZVN0aWNreS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTnVtYmVyKCBuZXdOdW1iZXIgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUG9zdEF0dHMoe1xuICAgICAgICAgICAgcG9zdHNfcGVyX3BhZ2U6IG5ld051bWJlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU9yZGVyYnkoIG5ld09yZGVyYnkgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUG9zdEF0dHMoe1xuICAgICAgICAgICAgb3JkZXJieTogbmV3T3JkZXJieVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU9yZGVyKCBuZXdPcmRlciApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQb3N0QXR0cyh7XG4gICAgICAgICAgICBvcmRlcjogbmV3T3JkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VJZHMoIG5ld0lkcyApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQb3N0QXR0cyh7XG4gICAgICAgICAgICBpZHM6IG5ld0lkcy5qb2luKCcsJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VDYXRlZ29yeSggbmV3Q2F0ZWdvcnkgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlUG9zdEF0dHMoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6IG5ld0NhdGVnb3J5LmpvaW4oJywnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVN0aWNreSggbmV3U3RpY2t5ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVBvc3RBdHRzKHtcbiAgICAgICAgICAgIHN0aWNreTogbmV3U3RpY2t5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFBvc3RBdHRzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgY2F0VGF4b25vbXksIGhpZGVGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgcG9zdHNfcGVyX3BhZ2UsIG9yZGVyYnksIG9yZGVyLCBpZHMsIGNhdGVnb3J5LCBzdGlja3kgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2xpbWl0JykgKSA/IChcbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTGltaXQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBvc3RzX3Blcl9wYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTnVtYmVyIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgYXBwbHlGaWx0ZXJzKCAndm9kaS5jb21wb25lbnQucG9zdEF0dHMubGltaXQubWluJywgMSApIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgYXBwbHlGaWx0ZXJzKCAndm9kaS5jb21wb25lbnQucG9zdEF0dHMubGltaXQubWF4JywgMTAgKSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdvcmRlcmJ5JykgKSA/IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ09yZGVyYnknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG9yZGVyYnkgfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1RpdGxlJywgJ3ZvZGknKSwgdmFsdWU6ICd0aXRsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdEYXRlJywgJ3ZvZGknKSwgdmFsdWU6ICdkYXRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0lEJywgJ3ZvZGknKSwgdmFsdWU6ICdpZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdSYW5kb20nLCAndm9kaScpLCB2YWx1ZTogJ3JhbmQnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VPcmRlcmJ5IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ29yZGVyJykgKSA/IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ09yZGVyJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBvcmRlciB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnQVNDJywgJ3ZvZGknKSwgdmFsdWU6ICdBU0MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnREVTQycsICd2b2RpJyksIHZhbHVlOiAnREVTQycgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU9yZGVyIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2lkcycpICkgPyAoXG4gICAgICAgICAgICAgICAgPFBvc3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBwb3N0VHlwZSA9ICdwb3N0J1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBvc3RJZHM9eyBpZHMgPyBpZHMuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRQb3N0SWRzPXsgdGhpcy5vbkNoYW5nZUlkcyB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdjYXRlZ29yeScpICkgPyAoXG4gICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBwb3N0VHlwZSA9ICdwb3N0J1xuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teSA9IHsgY2F0VGF4b25vbXkgfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRlcm1JZHM9eyBjYXRlZ29yeSA/IGNhdGVnb3J5LnNwbGl0KCcsJykubWFwKE51bWJlcikgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkVGVybUlkcz17IHRoaXMub25DaGFuZ2VDYXRlZ29yeSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdzdGlja3knKSApID8gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnU3RpY2t5IFBvc3RzJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzdGlja3kgfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1Nob3cgQWxsIFBvc3RzJywgJ3ZvZGknKSwgdmFsdWU6ICdzaG93JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0hpZGUgU3RpY2t5IFBvc3RzJywgJ3ZvZGknKSwgdmFsdWU6ICdoaWRlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1Nob3cgT25seSBTdGlja3kgUG9zdHMnLCAndm9kaScpLCB2YWx1ZTogJ29ubHknIH0sXG4gICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VTdGlja3kgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gJy4vSXRlbUxpc3QnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyB1bmlxdWVCeUlkLCBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzL3VzZWZ1bC1mdW5jcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcblxuLyoqXG4gKiBQb3N0U2VsZWN0b3IgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQb3N0U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBQb3N0U2VsZWN0b3IgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnBvc3RUeXBlIHx8ICdwb3N0JyxcbiAgICAgICAgICAgIHR5cGVzOiBbXSxcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclBvc3RzOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkUG9zdCA9IHRoaXMuYWRkUG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVBvc3QgPSB0aGlzLnJlbW92ZVBvc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb1Bvc3RGaWx0ZXIgPSBkZWJvdW5jZSh0aGlzLmRvUG9zdEZpbHRlci5iaW5kKHRoaXMpLCAzMDApO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgaXQgY2FsbHMgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBGZXRjaGVzIHBvc3RzIHR5cGVzLCBzZWxlY3RlZCBwb3N0cyB0aGVuIG1ha2VzIGZpcnN0IGNhbGwgZm9yIHBvc3RzXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwaS5nZXRQb3N0VHlwZXMoKVxuICAgICAgICAgICAgLnRoZW4oKCByZXNwb25zZSApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlU2VsZWN0ZWRQb3N0cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoIHNlbGVjdGVkUG9zdHMgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHNlbGVjdGVkUG9zdHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogc2VsZWN0ZWRQb3N0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRQb3N0cyB3cmFwcGVyLCBidWlsZHMgdGhlIHJlcXVlc3QgYXJndW1lbnQgYmFzZWQgc3RhdGUgYW5kIHBhcmFtZXRlcnMgcGFzc2VkL1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIC0gZGVzaXJlZCBhcmd1bWVudHMgKGNhbiBiZSBlbXB0eSkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD59XG4gICAgICovXG4gICAgZ2V0UG9zdHMoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBcmdzID0ge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS50eXBlLFxuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0QXJndW1lbnRzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdEFyZ3MsXG4gICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFyZ3VtZW50cy5yZXN0QmFzZSA9IHRoaXMuc3RhdGUudHlwZXNbdGhpcy5zdGF0ZS50eXBlXS5yZXN0X2Jhc2U7XG5cbiAgICAgICAgcmV0dXJuIGFwaS5nZXRQb3N0cyhyZXF1ZXN0QXJndW1lbnRzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0QXJndW1lbnRzLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclBvc3RzOiByZXNwb25zZS5maWx0ZXIoKHsgaWQgfSkgPT4gcG9zdElkcy5pbmRleE9mKGlkKSA9PT0gLTEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiB1bmlxdWVCeUlkKFsuLi50aGlzLnN0YXRlLnBvc3RzLCAuLi5yZXNwb25zZV0pLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlIHRvIGNvbnRpbnVlIHRoZSBjaGFpblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHBvc3RzIGJ5IGlkIGZyb20gdGhlIGBwb3N0c2Agc3RhdGUgb2JqZWN0IGFuZCBzb3J0cyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBzZWxlY3RlZCBhcnJheS5cbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBvYmplY3RzLlxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUG9zdElkcygpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZFBvc3RJZHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYoIHNlbGVjdGVkUG9zdElkcyApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJZHMgPSBBcnJheS5pc0FycmF5KCBzZWxlY3RlZFBvc3RJZHMgKSA/IHNlbGVjdGVkUG9zdElkcyA6IHNlbGVjdGVkUG9zdElkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RJZHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcG9zdHMgYnkgaWQgZnJvbSB0aGUgYHBvc3RzYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRQb3N0cyggcG9zdElkcyApIHtcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyUG9zdHNMaXN0ID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmcgJiYgIXRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZyA/IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMgOiBbXTtcbiAgICAgICAgY29uc3QgcG9zdExpc3QgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmlsdGVyUG9zdHMsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3RzXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RzID0gcG9zdExpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gcG9zdElkcy5pbmRleE9mKGlkKSAhPT0gLTEpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHBvc3RJZHMuaW5kZXhPZihhLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiSW5kZXggPSBwb3N0SWRzLmluZGV4T2YoYi5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4ID4gYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPCBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBzZWxlY3RlZFBvc3RzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgbmVjZXNzYXJ5IGFwaSBjYWxscyB0byBmZXRjaCB0aGUgc2VsZWN0ZWQgcG9zdHMgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU2VsZWN0ZWRQb3N0cygpIHtcbiAgICAgICAgY29uc3QgeyBwb3N0VHlwZSwgc2VsZWN0ZWRQb3N0SWRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHR5cGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpLmpvaW4oJywnKTtcblxuICAgICAgICBpZiAoICEgcG9zdElkcyApIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBhIGZha2UgcHJvbWlzZSB0aGF0IGF1dG8gcmVzb2x2ZXMuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zdF9hcmdzID0ge1xuICAgICAgICAgICAgaW5jbHVkZTogcG9zdElkcyxcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsXG4gICAgICAgICAgICBwb3N0VHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnBvc3RTdGF0dXMgKSB7XG4gICAgICAgICAgICBwb3N0X2FyZ3Muc3RhdHVzID0gdGhpcy5wcm9wcy5wb3N0U3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zdHMoe1xuICAgICAgICAgICAgLi4ucG9zdF9hcmdzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZGVzaXJlZCBwb3N0IGlkIHRvIHRoZSBzZWxlY3RlZFBvc3RJZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zdF9pZFxuICAgICAqL1xuICAgIGFkZFBvc3QocG9zdF9pZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnN0YXRlLmZpbHRlclBvc3RzLmZpbHRlcihwID0+IHAuaWQgPT09IHBvc3RfaWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3RzLFxuICAgICAgICAgICAgICAgIC4uLnBvc3RcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb3N0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5zZWxlY3RTaW5nbGUgKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIHBvc3RfaWQgXTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgLi4ucG9zdElkcywgcG9zdF9pZCBdO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGVzaXJlZCBwb3N0IGlkIHRvIHRoZSBzZWxlY3RlZFBvc3RJZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zdF9pZFxuICAgICAqL1xuICAgIHJlbW92ZVBvc3QocG9zdF9pZCkge1xuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyAuLi5wb3N0SWRzIF0uZmlsdGVyKGlkID0+IGlkICE9PSBwb3N0X2lkKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHNlYXJjaCBib3ggaW5wdXQgdmFsdWVcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHR5cGUgLSBjb21lcyBmcm9tIHRoZSBldmVudCBvYmplY3QgdGFyZ2V0LlxuICAgICAqL1xuICAgIGhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOmZpbHRlciA9ICcnIH0gPSB7fSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZmlsdGVyZWQgcG9zdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkUG9zdHM6IFtdLCBmaWx0ZXJpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvUG9zdEZpbHRlcigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdHVhbCBhcGkgY2FsbCBmb3Igc2VhcmNoaW5nIGZvciBxdWVyeSwgdGhpcyBmdW5jdGlvbiBpcyBkZWJvdW5jZWQgaW4gY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgZG9Qb3N0RmlsdGVyKCkge1xuICAgICAgICBjb25zdCB7IGZpbHRlciA9ICcnIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBvc3RfYXJncyA9IHt9O1xuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnBvc3RTdGF0dXMgKSB7XG4gICAgICAgICAgICBwb3N0X2FyZ3Muc3RhdHVzID0gdGhpcy5wcm9wcy5wb3N0U3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRQb3N0cyh7XG4gICAgICAgICAgICAuLi5wb3N0X2FyZ3NcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFBvc3RTZWxlY3RvciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwb3N0TGlzdCA9IHRoaXMuc3RhdGUuZmlsdGVyaW5nICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclBvc3RzIDogW107XG5cbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IDxJY29uIGljb249XCJwbHVzXCIgLz47XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSA8SWNvbiBpY29uPVwibWludXNcIiAvPjtcblxuICAgICAgICBjb25zdCBzZWFyY2hpbnB1dHVuaXF1ZUlkID0gJ3NlYXJjaGlucHV0LScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTYpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtcG9zdC1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLS1zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e19fKCdTZWFyY2ggUG9zdCcsICd2b2RpJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkUG9zdHNdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMucmVtb3ZlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3JlbW92ZUljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3NlYXJjaGlucHV0dW5pcXVlSWR9IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1BsZWFzZSBlbnRlciB5b3VyIHNlYXJjaCBxdWVyeS4uLicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17cG9zdExpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfHx0aGlzLnN0YXRlLmxvYWRpbmd8fHRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkPXt0aGlzLnN0YXRlLmZpbHRlcmluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5hZGRQb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBQYW5lbCwgQnV0dG9uLCBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlcGVhdGVyIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmVwZWF0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBSZXBlYXRlciBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJBZGRCdXR0b24gPSB0aGlzLnJlbmRlckFkZEJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlclJlbW92ZUJ1dHRvbiA9IHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQWRkID0gdGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmUgPSB0aGlzLmhhbmRsZVJlbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuRWxlbWVudHMgPSB0aGlzLnJlbmRlckNoaWxkcmVuRWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXJBZGRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxCdXR0b24gaXNEZWZhdWx0IGNsYXNzTmFtZT1cImJ1dHRvbi1mdWxsd2lkdGhcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZH0+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInBsdXNcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUmVtb3ZlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8QnV0dG9uIGlzRGVzdHJ1Y3RpdmUgY2xhc3NOYW1lPVwiYnV0dG9uLXJlbW92ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiZGlzbWlzc1wiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBZGQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlcywgdXBkYXRlVmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudF92YWx1ZXMgPSB2YWx1ZXMgPyBbIC4uLnZhbHVlcywgeyAuLi5kZWZhdWx0VmFsdWVzIH0gXSA6IFsgeyAuLi5kZWZhdWx0VmFsdWVzIH0gXTtcbiAgICAgICAgdXBkYXRlVmFsdWVzKCBjdXJyZW50X3ZhbHVlcyApO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW92ZSggaW5kZXggKSB7XG4gICAgICAgIGNvbnN0IHsgdXBkYXRlVmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudF92YWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKCAoIHZhbHVlLCBpICkgPT4gaSAhPSBpbmRleCApO1xuICAgICAgICB1cGRhdGVWYWx1ZXMoIGN1cnJlbnRfdmFsdWVzICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW5FbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYoICEgdmFsdWVzICkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlX2J1dHRvbiA9IHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uKCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoICggdmFsdWUsIGluZGV4ICkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZF9jaGlsZHJlbiA9IENoaWxkcmVuLm1hcChjaGlsZHJlbiwgKCBjaGlsZCApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRfcHJvcHMgPSB7IC4uLmNoaWxkLnByb3BzIH07XG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlc1tpbmRleF1bY2hpbGQucHJvcHMubmFtZV0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX3Byb3BzW2NoaWxkLnByb3BzLnZhbHVla2V5XSA9IHZhbHVlc1tpbmRleF1bY2hpbGQucHJvcHMubmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkX3Byb3BzW2NoaWxkLnByb3BzLnRyaWdnZXJfbWV0aG9kX25hbWVdID0gKHZhbHVlKSA9PiBjaGlsZC5wcm9wc1tjaGlsZC5wcm9wcy50cmlnZ2VyX21ldGhvZF9uYW1lXSh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoIGNoaWxkLCB7IC4uLmNoaWxkX3Byb3BzIH0gKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZF9yZW1vdmVfYnV0dG9uID0gUmVhY3QuY2xvbmVFbGVtZW50KCByZW1vdmVfYnV0dG9uLCB7IGtleTogJ3JlcGVhdGVyLXJlbW92ZS0nK2luZGV4LCBvbkNsaWNrOiAoKSA9PiByZW1vdmVfYnV0dG9uLnByb3BzWydvbkNsaWNrJ10oaW5kZXgpIH0gKTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFBhbmVsLCB7IGtleTogJ3JlcGVhdGVyLWNoaWxkLScraW5kZXggfSwgW3VwZGF0ZWRfY2hpbGRyZW4sIHVwZGF0ZWRfcmVtb3ZlX2J1dHRvbl0pO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUmVwZWF0ZXIgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgcmVwZWF0ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuRWxlbWVudHMoKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWRkQnV0dG9uKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tIFwiLi9JdGVtTGlzdFwiO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyB1bmlxdWVCeUlkLCBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzL3VzZWZ1bC1mdW5jcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcblxuLyoqXG4gKiBUZXJtU2VsZWN0b3IgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXJtU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBUZXJtU2VsZWN0b3IgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXJtczogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnBvc3RUeXBlIHx8ICdwb3N0JyxcbiAgICAgICAgICAgIHRheG9ub215OiBwcm9wcy50YXhvbm9teSB8fCAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgdGF4b25vbWllczogW10sXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXJUZXJtczogW10sXG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRUZXJtID0gdGhpcy5hZGRUZXJtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlVGVybSA9IHRoaXMucmVtb3ZlVGVybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvVGVybUZpbHRlciA9IGRlYm91bmNlKHRoaXMuZG9UZXJtRmlsdGVyLmJpbmQodGhpcyksIDMwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyBpdCBjYWxscyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEZldGNoZXMgdGVybXMgdGF4b25vbWllcywgc2VsZWN0ZWQgdGVybXMgdGhlbiBtYWtlcyBmaXJzdCBjYWxsIGZvciB0ZXJtc1xuICAgICAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhcGkuZ2V0VGF4b25vbWllcyggeyB0eXBlOiB0aGlzLnN0YXRlLnR5cGUgfSApXG4gICAgICAgICAgICAudGhlbigoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YXhvbm9taWVzOiByZXNwb25zZVxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZVNlbGVjdGVkVGVybXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0VGVybXMgd3JhcHBlciwgYnVpbGRzIHRoZSByZXF1ZXN0IGFyZ3VtZW50IGJhc2VkIHN0YXRlIGFuZCBwYXJhbWV0ZXJzIHBhc3NlZC9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyAtIGRlc2lyZWQgYXJndW1lbnRzIChjYW4gYmUgZW1wdHkpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fVxuICAgICAqL1xuICAgIGdldFRlcm1zKGFyZ3MgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkVGVybUlkcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBkZWZhdWx0QXJncyA9IHtcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc3RhdGUudHlwZSxcbiAgICAgICAgICAgIHRheG9ub215OiB0aGlzLnN0YXRlLnRheG9ub215LFxuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0QXJndW1lbnRzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdEFyZ3MsXG4gICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFyZ3VtZW50cy5yZXN0QmFzZSA9IHRoaXMuc3RhdGUudGF4b25vbWllc1t0aGlzLnN0YXRlLnRheG9ub215XS5yZXN0X2Jhc2U7XG5cbiAgICAgICAgcmV0dXJuIGFwaS5nZXRUZXJtcyhyZXF1ZXN0QXJndW1lbnRzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0QXJndW1lbnRzLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclRlcm1zOiByZXNwb25zZS5maWx0ZXIoKHsgaWQgfSkgPT4gc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoaWQpID09PSAtMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGVybXM6IHVuaXF1ZUJ5SWQoWy4uLnRoaXMuc3RhdGUudGVybXMsIC4uLnJlc3BvbnNlXSksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UgdG8gY29udGludWUgdGhlIGNoYWluXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgdGVybXMgYnkgaWQgZnJvbSB0aGUgYHRlcm1zYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRUZXJtcygpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZFRlcm1JZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRlcm1zXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IHNlbGVjdGVkVGVybUlkcy5pbmRleE9mKGlkKSAhPT0gLTEpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoYS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYkluZGV4ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihiLmlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPiBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA8IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgbmVjZXNzYXJ5IGFwaSBjYWxscyB0byBmZXRjaCB0aGUgc2VsZWN0ZWQgdGVybXMgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU2VsZWN0ZWRUZXJtcygpIHtcbiAgICAgICAgY29uc3QgeyB0ZXJtVHlwZSwgc2VsZWN0ZWRUZXJtSWRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHRheG9ub21pZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCBzZWxlY3RlZFRlcm1JZHMgJiYgIXNlbGVjdGVkVGVybUlkcy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgZmFrZSBwcm9taXNlIHRoYXQgYXV0byByZXNvbHZlcy5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRlcm1zKHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzLmpvaW4oJywnKSxcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsXG4gICAgICAgICAgICB0ZXJtVHlwZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGRlc2lyZWQgdGVybSBpZCB0byB0aGUgc2VsZWN0ZWRUZXJtSWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHRlcm1faWRcbiAgICAgKi9cbiAgICBhZGRUZXJtKHRlcm1faWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy5zdGF0ZS5maWx0ZXJUZXJtcy5maWx0ZXIocCA9PiBwLmlkID09PSB0ZXJtX2lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1zID0gdW5pcXVlQnlJZChbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50ZXJtcyxcbiAgICAgICAgICAgICAgICAuLi50ZXJtXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFRlcm1JZHMoW1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMsXG4gICAgICAgICAgICB0ZXJtX2lkXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGVzaXJlZCB0ZXJtIGlkIHRvIHRoZSBzZWxlY3RlZFRlcm1JZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gdGVybV9pZFxuICAgICAqL1xuICAgIHJlbW92ZVRlcm0odGVybV9pZCkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkVGVybUlkcyhbXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkc1xuICAgICAgICBdLmZpbHRlcihpZCA9PiBpZCAhPT0gdGVybV9pZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHNlYXJjaCBib3ggaW5wdXQgdmFsdWVcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHR5cGUgLSBjb21lcyBmcm9tIHRoZSBldmVudCBvYmplY3QgdGFyZ2V0LlxuICAgICAqL1xuICAgIGhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOmZpbHRlciA9ICcnIH0gPSB7fSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZmlsdGVyZWQgdGVybXNcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkVGVybXM6IFtdLCBmaWx0ZXJpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvVGVybUZpbHRlcigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdHVhbCBhcGkgY2FsbCBmb3Igc2VhcmNoaW5nIGZvciBxdWVyeSwgdGhpcyBmdW5jdGlvbiBpcyBkZWJvdW5jZWQgaW4gY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgZG9UZXJtRmlsdGVyKCkge1xuICAgICAgICBjb25zdCB7IGZpbHRlciA9ICcnIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRUZXJtcygpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBUZXJtU2VsZWN0b3IgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaXNGaWx0ZXJlZCA9IHRoaXMuc3RhdGUuZmlsdGVyaW5nO1xuICAgICAgICBjb25zdCB0ZXJtTGlzdCA9IGlzRmlsdGVyZWQgJiYgIXRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZyA/IHRoaXMuc3RhdGUuZmlsdGVyVGVybXMgOiBbXTtcbiAgICAgICAgY29uc3QgU2VsZWN0ZWRUZXJtTGlzdCAgPSB0aGlzLmdldFNlbGVjdGVkVGVybXMoKTtcblxuICAgICAgICBjb25zdCBhZGRJY29uID0gPEljb24gaWNvbj1cInBsdXNcIiAvPjtcbiAgICAgICAgY29uc3QgcmVtb3ZlSWNvbiA9IDxJY29uIGljb249XCJtaW51c1wiIC8+O1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaGlucHV0dW5pcXVlSWQgPSAnc2VhcmNoaW5wdXQtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxNik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgY29tcG9uZW50cy10ZXJtLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQtLXNlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57X18oJ1NlYXJjaCBUZXJtJywgJ3ZvZGknKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtTZWxlY3RlZFRlcm1MaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5yZW1vdmVUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17cmVtb3ZlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17c2VhcmNoaW5wdXR1bmlxdWVJZH0gY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLXRleHQtY29udHJvbF9faW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlYXJjaGlucHV0dW5pcXVlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnUGxlYXNlIGVudGVyIHlvdXIgc2VhcmNoIHF1ZXJ5Li4uJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZXJtTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd8fHRoaXMuc3RhdGUubG9hZGluZ3x8dGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWQ9e2lzRmlsdGVyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuYWRkVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2FkZEljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiY29uc3QgeyBhcGlGZXRjaCB9ID0gd3A7XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgUG9zdFR5cGVzIGVuZHBvaW50LlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3N0VHlwZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6ICcvd3AvdjIvdHlwZXMnIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgZGVzaXJlZCBwb3N0IHR5cGUgYW5kIGJ1aWxkcyB0aGUgcXVlcnkgc3RyaW5nIGJhc2VkIG9uIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSByZXN0QmFzZSAtIHJlc3QgYmFzZSBmb3IgdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICh7IHJlc3RCYXNlID0gZmFsc2UsIC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi8ke3Jlc3RCYXNlfT8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgUG9zdFR5cGUgVGF4b25vbWllcyBlbmRwb2ludC5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGF4b25vbWllcyA9ICh7IC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi90YXhvbm9taWVzPyR7cXVlcnlTdHJpbmd9Jl9lbWJlZGA7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6IHBhdGggfSApO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBkZXNpcmVkIHBvc3QgdHlwZSBhbmQgYnVpbGRzIHRoZSBxdWVyeSBzdHJpbmcgYmFzZWQgb24gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IHJlc3RCYXNlIC0gcmVzdCBiYXNlIGZvciB0aGUgcXVlcnkuXG4gKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRlcm1zID0gKHsgcmVzdEJhc2UgPSBmYWxzZSwgLi4uYXJncyB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoYXJnID0+IGAke2FyZ309JHthcmdzW2FyZ119YCkuam9pbignJicpO1xuXG4gICAgbGV0IHBhdGggPSBgL3dwL3YyLyR7cmVzdEJhc2V9PyR7cXVlcnlTdHJpbmd9Jl9lbWJlZGA7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6IHBhdGggfSApO1xufTsiLCIvKipcbiAqIFJldHVybnMgYSB1bmlxdWUgYXJyYXkgb2Ygb2JqZWN0cyBiYXNlZCBvbiBhIGRlc2lyZWQga2V5LlxuICogQHBhcmFtIHthcnJheX0gYXJyIC0gYXJyYXkgb2Ygb2JqZWN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfGludH0ga2V5IC0ga2V5IHRvIGZpbHRlciBvYmplY3RzIGJ5XG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxdWVCeSA9IChhcnIsIGtleSkgPT4ge1xuICAgIGxldCBrZXlzID0gW107XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChrZXlzLmluZGV4T2YoaXRlbVtrZXldKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXlzLnB1c2goaXRlbVtrZXldKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHVuaXF1ZSBhcnJheSBvZiBvYmplY3RzIGJhc2VkIG9uIHRoZSBpZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IG9mIG9iamVjdHMgdG8gZmlsdGVyLlxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxdWVCeUlkID0gYXJyID0+IHVuaXF1ZUJ5KGFyciwgJ2lkJyk7XG5cbi8qKlxuICogRGVib3VuY2UgYSBmdW5jdGlvbiBieSBsaW1pdGluZyBob3cgb2Z0ZW4gaXQgY2FuIHJ1bi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBjYWxsYmFjayBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSB3YWl0IC0gVGltZSBpbiBtaWxsaXNlY29uZHMgaG93IGxvbmcgaXQgc2hvdWxkIHdhaXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIH1cbn07Il19
