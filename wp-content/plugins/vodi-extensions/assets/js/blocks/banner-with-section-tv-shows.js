(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Repeater = require("../components/Repeater");

var _ShortcodeAtts = require("../components/ShortcodeAtts");

var _DesignOptions = require("../components/DesignOptions");

var _ImageUpload = require("../components/ImageUpload");

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
    SelectControl = _wp$components.SelectControl;
registerBlockType('vodi/banner-with-section-tv-shows', {
  title: __('Banner With TV Shows Block', 'vodi'),
  icon: 'welcome-view-site',
  category: 'vodi-blocks',
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var section_title = attributes.section_title,
        section_nav_links = attributes.section_nav_links,
        section_background = attributes.section_background,
        section_style = attributes.section_style,
        footer_action_text = attributes.footer_action_text,
        footer_action_link = attributes.footer_action_link,
        image = attributes.image,
        shortcode_atts = attributes.shortcode_atts,
        design_options = attributes.design_options;

    var onChangeSectionTitle = function onChangeSectionTitle(newSectionTitle) {
      setAttributes({
        section_title: newSectionTitle
      });
    };

    var onChangeSectionBackground = function onChangeSectionBackground(newSectionBackground) {
      setAttributes({
        section_background: newSectionBackground
      });
    };

    var onChangeSectionStyle = function onChangeSectionStyle(newSectionStyle) {
      setAttributes({
        section_style: newSectionStyle
      });
    };

    var onChangeFooterActionText = function onChangeFooterActionText(newFooterActionText) {
      setAttributes({
        footer_action_text: newFooterActionText
      });
    };

    var onChangeFooterActionLink = function onChangeFooterActionLink(newFooterActionLink) {
      setAttributes({
        footer_action_link: newFooterActionLink
      });
    };

    var onChangeImage = function onChangeImage(media) {
      setAttributes({
        image: media.id
      });
    };

    var onChangeShortcodeAtts = function onChangeShortcodeAtts(newShortcodeAtts) {
      setAttributes({
        shortcode_atts: _objectSpread({}, shortcode_atts, newShortcodeAtts)
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
    })), wp.element.createElement(SelectControl, {
      label: __('Background Color', 'vodi'),
      value: section_background,
      options: [{
        label: __('Default', 'vodi'),
        value: ''
      }, {
        label: __('Dark', 'vodi'),
        value: 'dark'
      }, {
        label: __('More Dark', 'vodi'),
        value: 'dark more-dark'
      }, {
        label: __('Less Dark', 'vodi'),
        value: 'dark less-dark'
      }, {
        label: __('Light', 'vodi'),
        value: 'light'
      }, {
        label: __('More Light', 'vodi'),
        value: 'light more-light'
      }],
      onChange: onChangeSectionBackground
    }), wp.element.createElement(SelectControl, {
      label: __('Style', 'vodi'),
      value: section_style,
      options: [{
        label: __('Style 1', 'vodi'),
        value: ''
      }, {
        label: __('Style 2', 'vodi'),
        value: 'style-2'
      }],
      onChange: onChangeSectionStyle
    }), wp.element.createElement(TextControl, {
      label: __('Footer Action Text', 'vodi'),
      value: footer_action_text,
      onChange: onChangeFooterActionText
    }), wp.element.createElement(TextControl, {
      label: __('Footer Action Link', 'vodi'),
      value: footer_action_link,
      onChange: onChangeFooterActionLink
    }), wp.element.createElement(_ImageUpload.ImageUpload, {
      addImageLabel: __('Pick an Image', 'vodi'),
      replaceImageLabel: __('Replace Image', 'vodi'),
      removeImageLabel: __('Remove Image', 'vodi'),
      value: image,
      onSelect: onChangeImage
    }), wp.element.createElement(PanelBody, {
      title: __('TV Shows Attributes', 'vodi'),
      initialOpen: true
    }, wp.element.createElement(_ShortcodeAtts.ShortcodeAtts, {
      postType: "tv_show",
      catTaxonomy: "tv_show_cat",
      attributes: _objectSpread({}, shortcode_atts),
      updateShortcodeAtts: onChangeShortcodeAtts
    })), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: _objectSpread({}, design_options),
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, wp.element.createElement(ServerSideRender, {
      block: "vodi/banner-with-section-tv-shows",
      attributes: attributes
    })));
  },
  save: function save() {
    // Rendering in PHP
    return null;
  }
});

},{"../components/DesignOptions":2,"../components/ImageUpload":3,"../components/Repeater":7,"../components/ShortcodeAtts":8}],2:[function(require,module,exports){
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
exports.ImageUpload = void 0;

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
var MediaUpload = wp.editor.MediaUpload;
var _wp$element = wp.element,
    Fragment = _wp$element.Fragment,
    Component = _wp$element.Component;
var Button = wp.components.Button;
/**
 * ImageUpload Component
 */

var ImageUpload =
/*#__PURE__*/
function (_Component) {
  _inherits(ImageUpload, _Component);

  /**
   * Constructor for ImageUpload Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function ImageUpload(props) {
    var _this;

    _classCallCheck(this, ImageUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageUpload).apply(this, arguments));
    _this.props = props;
    _this.onChangeImage = _this.onChangeImage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onRemoveImage = _this.onRemoveImage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageUpload, [{
    key: "onChangeImage",
    value: function onChangeImage(media) {
      this.props.onSelect(media);
    }
  }, {
    key: "onRemoveImage",
    value: function onRemoveImage() {
      this.props.onSelect(0);
    }
    /**
     * Renders the ImageUpload component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          addImageLabel = _this$props.addImageLabel,
          replaceImageLabel = _this$props.replaceImageLabel,
          removeImageLabel = _this$props.removeImageLabel,
          value = _this$props.value;
      return wp.element.createElement("div", {
        className: "components-base-control components-image-upload"
      }, wp.element.createElement("div", {
        className: "components-base-control__field"
      }, wp.element.createElement(MediaUpload, {
        onSelect: this.onChangeImage,
        type: "image",
        value: value,
        render: function render(_ref) {
          var open = _ref.open;
          return wp.element.createElement("div", {
            className: "button-container"
          }, wp.element.createElement(Button, {
            isLarge: true,
            onClick: open
          }, value ? replaceImageLabel : addImageLabel));
        }
      })), value ? wp.element.createElement("div", {
        className: "components-base-control__field"
      }, wp.element.createElement("div", {
        className: "button-container"
      }, wp.element.createElement(Button, {
        isLarge: true,
        onClick: this.onRemoveImage
      }, removeImageLabel))) : '');
    }
  }]);

  return ImageUpload;
}(Component);

exports.ImageUpload = ImageUpload;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./Item":4}],6:[function(require,module,exports){
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

},{"../utils/api":10,"../utils/useful-funcs":11,"./ItemList":5}],7:[function(require,module,exports){
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
exports.ShortcodeAtts = void 0;

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
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl;
var applyFilters = wp.hooks.applyFilters;
/**
 * ShortcodeAtts Component
 */

var ShortcodeAtts =
/*#__PURE__*/
function (_Component) {
  _inherits(ShortcodeAtts, _Component);

  /**
   * Constructor for ShortcodeAtts Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  function ShortcodeAtts(props) {
    var _this;

    _classCallCheck(this, ShortcodeAtts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShortcodeAtts).apply(this, arguments));
    _this.props = props;
    _this.onChangeLimit = _this.onChangeLimit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeColumns = _this.onChangeColumns.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeOrderby = _this.onChangeOrderby.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeOrder = _this.onChangeOrder.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeIds = _this.onChangeIds.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeCategory = _this.onChangeCategory.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeGenre = _this.onChangeGenre.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeFeatured = _this.onChangeFeatured.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onChangeTopRated = _this.onChangeTopRated.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ShortcodeAtts, [{
    key: "onChangeLimit",
    value: function onChangeLimit(newLimit) {
      this.props.updateShortcodeAtts({
        limit: newLimit
      });
    }
  }, {
    key: "onChangeColumns",
    value: function onChangeColumns(newColumns) {
      this.props.updateShortcodeAtts({
        columns: newColumns
      });
    }
  }, {
    key: "onChangeOrderby",
    value: function onChangeOrderby(newOrderby) {
      this.props.updateShortcodeAtts({
        orderby: newOrderby
      });
    }
  }, {
    key: "onChangeOrder",
    value: function onChangeOrder(newOrder) {
      this.props.updateShortcodeAtts({
        order: newOrder
      });
    }
  }, {
    key: "onChangeIds",
    value: function onChangeIds(newIds) {
      this.props.updateShortcodeAtts({
        ids: newIds.join(',')
      });
    }
  }, {
    key: "onChangeCategory",
    value: function onChangeCategory(newCategory) {
      this.props.updateShortcodeAtts({
        category: newCategory.join(',')
      });
    }
  }, {
    key: "onChangeGenre",
    value: function onChangeGenre(newGenre) {
      this.props.updateShortcodeAtts({
        genre: newGenre.join(',')
      });
    }
  }, {
    key: "onChangeFeatured",
    value: function onChangeFeatured(newFeatured) {
      this.props.updateShortcodeAtts({
        featured: newFeatured
      });
    }
  }, {
    key: "onChangeTopRated",
    value: function onChangeTopRated(newTopRated) {
      this.props.updateShortcodeAtts({
        top_rated: newTopRated
      });
    }
    /**
     * Renders the ShortcodeAtts component.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          postType = _this$props.postType,
          catTaxonomy = _this$props.catTaxonomy,
          _this$props$minLimit = _this$props.minLimit,
          minLimit = _this$props$minLimit === void 0 ? 1 : _this$props$minLimit,
          _this$props$maxLimit = _this$props.maxLimit,
          maxLimit = _this$props$maxLimit === void 0 ? 20 : _this$props$maxLimit,
          _this$props$minColumn = _this$props.minColumns,
          minColumns = _this$props$minColumn === void 0 ? 1 : _this$props$minColumn,
          _this$props$maxColumn = _this$props.maxColumns,
          maxColumns = _this$props$maxColumn === void 0 ? 6 : _this$props$maxColumn,
          hideFields = _this$props.hideFields;
      var limit = attributes.limit,
          columns = attributes.columns,
          orderby = attributes.orderby,
          order = attributes.order,
          ids = attributes.ids,
          category = attributes.category,
          genre = attributes.genre,
          featured = attributes.featured,
          top_rated = attributes.top_rated;
      return wp.element.createElement("div", null, !(hideFields && hideFields.includes('limit')) ? wp.element.createElement(RangeControl, {
        label: __('Limit', 'vodi'),
        value: limit,
        onChange: this.onChangeLimit,
        min: applyFilters('vodi.component.shortcodeAtts.limit.min', minLimit),
        max: applyFilters('vodi.component.shortcodeAtts.limit.max', maxLimit)
      }) : '', !(hideFields && hideFields.includes('columns')) ? wp.element.createElement(RangeControl, {
        label: __('Columns', 'vodi'),
        value: columns,
        onChange: this.onChangeColumns,
        min: applyFilters('vodi.component.shortcodeAtts.columns.min', minColumns),
        max: applyFilters('vodi.component.shortcodeAtts.columns.max', maxColumns)
      }) : '', !(hideFields && hideFields.includes('orderby')) ? wp.element.createElement(SelectControl, {
        label: __('Orderby', 'vodi'),
        value: orderby,
        options: [{
          label: __('Title', 'vodi'),
          value: 'title'
        }, {
          label: __('Date', 'vodi'),
          value: postType === 'movie' ? 'release_date' : 'date'
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
        postType: postType,
        selectedPostIds: ids ? ids.split(',').map(Number) : [],
        updateSelectedPostIds: this.onChangeIds
      }) : '', postType === 'video' && !(hideFields && hideFields.includes('category')) ? wp.element.createElement(_TermSelector.TermSelector, {
        postType: postType,
        taxonomy: catTaxonomy,
        selectedTermIds: category ? category.split(',').map(Number) : [],
        updateSelectedTermIds: this.onChangeCategory
      }) : !(hideFields && hideFields.includes('genre')) ? wp.element.createElement(_TermSelector.TermSelector, {
        postType: postType,
        taxonomy: catTaxonomy,
        selectedTermIds: genre ? genre.split(',').map(Number) : [],
        updateSelectedTermIds: this.onChangeGenre
      }) : '', !(hideFields && hideFields.includes('featured')) ? wp.element.createElement(CheckboxControl, {
        label: __('Featured', 'vodi'),
        help: __('Check to select featured posts.', 'vodi'),
        checked: featured,
        onChange: this.onChangeFeatured
      }) : '', !(hideFields && hideFields.includes('top_rated')) ? wp.element.createElement(CheckboxControl, {
        label: __('Top Rated', 'vodi'),
        help: __('Check to select top rated posts.', 'vodi'),
        checked: top_rated,
        onChange: this.onChangeTopRated
      }) : '');
    }
  }]);

  return ShortcodeAtts;
}(Component);

exports.ShortcodeAtts = ShortcodeAtts;

},{"./PostSelector":6,"./TermSelector":9}],9:[function(require,module,exports){
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

},{"../utils/api":10,"../utils/useful-funcs":11,"./ItemList":5}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvYmFubmVyLXdpdGgtc2VjdGlvbi10di1zaG93cy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvRGVzaWduT3B0aW9ucy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0l0ZW0uanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0l0ZW1MaXN0LmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9Qb3N0U2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1JlcGVhdGVyLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9TaG9ydGNvZGVBdHRzLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy9hcGkuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy91c2VmdWwtZnVuY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVRLEUsR0FB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S0FBUSxHQUFNO0FBQ2hCLE1BQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO0FBQ0gsS0FGRDs7QUFJQSxJQUFBLFlBQVksQ0FBQyxPQUFELENBQVo7QUFDQSxJQUFBLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBcEI7QUFDSCxHQVZEO0FBV0gsQ0FkTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IFJlcGVhdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBlYXRlcic7XG5pbXBvcnQgeyBTaG9ydGNvZGVBdHRzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TaG9ydGNvZGVBdHRzJztcbmltcG9ydCB7IERlc2lnbk9wdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL0Rlc2lnbk9wdGlvbnMnO1xuaW1wb3J0IHsgSW1hZ2VVcGxvYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFNlcnZlclNpZGVSZW5kZXIsIERpc2FibGVkLCBQYW5lbEJvZHksIFRleHRDb250cm9sLCBTZWxlY3RDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3ZvZGkvYmFubmVyLXdpdGgtc2VjdGlvbi10di1zaG93cycsIHtcbiAgICB0aXRsZTogX18oJ0Jhbm5lciBXaXRoIFRWIFNob3dzIEJsb2NrJywgJ3ZvZGknKSxcblxuICAgIGljb246ICd3ZWxjb21lLXZpZXctc2l0ZScsXG5cbiAgICBjYXRlZ29yeTogJ3ZvZGktYmxvY2tzJyxcblxuICAgIGVkaXQ6ICggKCBwcm9wcyApID0+IHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgeyBzZWN0aW9uX3RpdGxlLCBzZWN0aW9uX25hdl9saW5rcywgc2VjdGlvbl9iYWNrZ3JvdW5kLCBzZWN0aW9uX3N0eWxlLCBmb290ZXJfYWN0aW9uX3RleHQsIGZvb3Rlcl9hY3Rpb25fbGluaywgaW1hZ2UsIHNob3J0Y29kZV9hdHRzLCBkZXNpZ25fb3B0aW9ucyB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25UaXRsZSA9IG5ld1NlY3Rpb25UaXRsZSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fdGl0bGU6IG5ld1NlY3Rpb25UaXRsZSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uQmFja2dyb3VuZCA9IG5ld1NlY3Rpb25CYWNrZ3JvdW5kID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2VjdGlvbl9iYWNrZ3JvdW5kOiBuZXdTZWN0aW9uQmFja2dyb3VuZCB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uU3R5bGUgPSBuZXdTZWN0aW9uU3R5bGUgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX3N0eWxlOiBuZXdTZWN0aW9uU3R5bGUgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRm9vdGVyQWN0aW9uVGV4dCA9IG5ld0Zvb3RlckFjdGlvblRleHQgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBmb290ZXJfYWN0aW9uX3RleHQ6IG5ld0Zvb3RlckFjdGlvblRleHQgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRm9vdGVyQWN0aW9uTGluayA9IG5ld0Zvb3RlckFjdGlvbkxpbmsgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBmb290ZXJfYWN0aW9uX2xpbms6IG5ld0Zvb3RlckFjdGlvbkxpbmsgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2UgPSBtZWRpYSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IGltYWdlOiBtZWRpYS5pZCB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTaG9ydGNvZGVBdHRzID0gbmV3U2hvcnRjb2RlQXR0cyA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNob3J0Y29kZV9hdHRzOiB7IC4uLnNob3J0Y29kZV9hdHRzLCAuLi5uZXdTaG9ydGNvZGVBdHRzIH0gfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzID0gbmV3U2VjdGlvbk5hdkxpbmtzID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2VjdGlvbl9uYXZfbGlua3M6IEpTT04uc3RyaW5naWZ5KFsuLi5uZXdTZWN0aW9uTmF2TGlua3NdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3NUZXh0ID0gKG5ld1NlY3Rpb25OYXZMaW5rc1RleHQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbl9uYXZfbGlua3NfdXBkYXRlZCA9IEpTT04ucGFyc2Uoc2VjdGlvbl9uYXZfbGlua3MpO1xuICAgICAgICAgICAgc2VjdGlvbl9uYXZfbGlua3NfdXBkYXRlZFtpbmRleF0udGl0bGUgPSBuZXdTZWN0aW9uTmF2TGlua3NUZXh0O1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX25hdl9saW5rczogSlNPTi5zdHJpbmdpZnkoWy4uLnNlY3Rpb25fbmF2X2xpbmtzX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3NMaW5rID0gKG5ld1NlY3Rpb25OYXZMaW5rc0xpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbl9uYXZfbGlua3NfdXBkYXRlZCA9IEpTT04ucGFyc2Uoc2VjdGlvbl9uYXZfbGlua3MpO1xuICAgICAgICAgICAgc2VjdGlvbl9uYXZfbGlua3NfdXBkYXRlZFtpbmRleF0ubGluayA9IG5ld1NlY3Rpb25OYXZMaW5rc0xpbms7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fbmF2X2xpbmtzOiBKU09OLnN0cmluZ2lmeShbLi4uc2VjdGlvbl9uYXZfbGlua3NfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTZWN0aW9uIFRpdGxlJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VjdGlvbl90aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU2VjdGlvblRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ05hdiBMaW5rcycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9eyBzZWN0aW9uX25hdl9saW5rcyA/IEpTT04ucGFyc2Uoc2VjdGlvbl9uYXZfbGlua3MpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17IHsgdGl0bGU6ICcnLCBsaW5rOiAnJyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlcz17IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBY3Rpb24gVGV4dCcsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc1RleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIExpbmsnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc0xpbmsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQmFja2dyb3VuZCBDb2xvcicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHNlY3Rpb25fYmFja2dyb3VuZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdEZWZhdWx0JywgJ3ZvZGknKSwgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0RhcmsnLCAndm9kaScpLCB2YWx1ZTogJ2RhcmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ01vcmUgRGFyaycsICd2b2RpJyksIHZhbHVlOiAnZGFyayBtb3JlLWRhcmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0xlc3MgRGFyaycsICd2b2RpJyksIHZhbHVlOiAnZGFyayBsZXNzLWRhcmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0xpZ2h0JywgJ3ZvZGknKSwgdmFsdWU6ICdsaWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnTW9yZSBMaWdodCcsICd2b2RpJyksIHZhbHVlOiAnbGlnaHQgbW9yZS1saWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25CYWNrZ3JvdW5kIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnU3R5bGUnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWN0aW9uX3N0eWxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ1N0eWxlIDEnLCAndm9kaScpLCB2YWx1ZTogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnU3R5bGUgMicsICd2b2RpJyksIHZhbHVlOiAnc3R5bGUtMicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25TdHlsZSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdGb290ZXIgQWN0aW9uIFRleHQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBmb290ZXJfYWN0aW9uX3RleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZUZvb3RlckFjdGlvblRleHQgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRm9vdGVyIEFjdGlvbiBMaW5rJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgZm9vdGVyX2FjdGlvbl9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2VGb290ZXJBY3Rpb25MaW5rIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJbWFnZUxhYmVsPXsgX18oJ1BpY2sgYW4gSW1hZ2UnLCAndm9kaScpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VJbWFnZUxhYmVsPXsgX18oJ1JlcGxhY2UgSW1hZ2UnLCAndm9kaScpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlTGFiZWw9eyBfXygnUmVtb3ZlIEltYWdlJywgJ3ZvZGknKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgb25DaGFuZ2VJbWFnZSB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnVFYgU2hvd3MgQXR0cmlidXRlcycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnRjb2RlQXR0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ3R2X3Nob3cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0VGF4b25vbXkgPSAndHZfc2hvd19jYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHsgeyAuLi5zaG9ydGNvZGVfYXR0cyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTaG9ydGNvZGVBdHRzID0geyBvbkNoYW5nZVNob3J0Y29kZUF0dHMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnRGVzaWduIE9wdGlvbnMnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNpZ25PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHsgeyAuLi5kZXNpZ25fb3B0aW9ucyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXNpZ25PcHRpb25zID0geyBvbkNoYW5nZURlc2lnbk9wdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICAgICAgICA8RGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2ZXJTaWRlUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jaz1cInZvZGkvYmFubmVyLXdpdGgtc2VjdGlvbi10di1zaG93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9EaXNhYmxlZD5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfSApLFxuXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgLy8gUmVuZGVyaW5nIGluIFBIUFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxufSApOyIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIERlc2lnbk9wdGlvbnMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBEZXNpZ25PcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgRGVzaWduT3B0aW9ucyBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ0JvdHRvbSA9IHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdSaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wID0gdGhpcy5vbkNoYW5nZU1hcmdpblRvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tID0gdGhpcy5vbkNoYW5nZU1hcmdpbkJvdHRvbS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1RvcCggbmV3b25DaGFuZ2VQYWRkaW5nVG9wICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ190b3A6IG5ld29uQ2hhbmdlUGFkZGluZ1RvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdCb3R0b20oIG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfYm90dG9tOiBuZXdvbkNoYW5nZVBhZGRpbmdCb3R0b21cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nTGVmdCggbmV3b25DaGFuZ2VQYWRkaW5nTGVmdCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfbGVmdDogbmV3b25DaGFuZ2VQYWRkaW5nTGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdSaWdodCggbmV3b25DaGFuZ2VQYWRkaW5nUmlnaHQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3JpZ2h0OiBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU1hcmdpblRvcCggbmV3b25DaGFuZ2VNYXJnaW5Ub3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXJnaW5fdG9wOiBuZXdvbkNoYW5nZU1hcmdpblRvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU1hcmdpbkJvdHRvbSggbmV3b25DaGFuZ2VNYXJnaW5Cb3R0b20gKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXJnaW5fYm90dG9tOiBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBEZXNpZ25PcHRpb25zIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBwYWRkaW5nX3RvcCwgcGFkZGluZ19ib3R0b20sIHBhZGRpbmdfbGVmdCwgcGFkZGluZ19yaWdodCwgbWFyZ2luX3RvcCwgbWFyZ2luX2JvdHRvbSB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBUb3AgKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ190b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBCb3R0b20gKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBMZWZ0IChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfbGVmdCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBSaWdodCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3JpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTWFyZ2luIFRvcCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW5fdG9wIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgLTEwMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTWFyZ2luIEJvdHRvbSAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW5fYm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgLTEwMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBNZWRpYVVwbG9hZCB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogSW1hZ2VVcGxvYWQgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIEltYWdlVXBsb2FkIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlSW1hZ2UgPSB0aGlzLm9uQ2hhbmdlSW1hZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZUltYWdlID0gdGhpcy5vblJlbW92ZUltYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VJbWFnZSggbWVkaWEgKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoIG1lZGlhICk7XG4gICAgfVxuXG4gICAgb25SZW1vdmVJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCggMCApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIEltYWdlVXBsb2FkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgYWRkSW1hZ2VMYWJlbCwgcmVwbGFjZUltYWdlTGFiZWwsIHJlbW92ZUltYWdlTGFiZWwsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtaW1hZ2UtdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25DaGFuZ2VJbWFnZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzTGFyZ2Ugb25DbGljaz17IG9wZW4gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB2YWx1ZSApID8gcmVwbGFjZUltYWdlTGFiZWwgOiBhZGRJbWFnZUxhYmVsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ICggdmFsdWUgKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaXNMYXJnZSBvbkNsaWNrPXsgdGhpcy5vblJlbW92ZUltYWdlIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcmVtb3ZlSW1hZ2VMYWJlbCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJcbi8qKlxuICogSXRlbSBDb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1UaXRsZSAtIEN1cnJlbnQgaXRlbSB0aXRsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsaWNrSGFuZGxlciAtIHRoaXMgaXMgdGhlIGhhbmRsaW5nIGZ1bmN0aW9uIGZvciB0aGUgYWRkL3JlbW92ZSBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBpdGVtSWQgLSBDdXJyZW50IGl0ZW0gSURcbiAqIEBwYXJhbSBpY29uXG4gKiBAcmV0dXJucyB7Kn0gSXRlbSBIVE1MLlxuICovXG5leHBvcnQgY29uc3QgSXRlbSA9ICh7IHRpdGxlOiB7IHJlbmRlcmVkOiBpdGVtVGl0bGUgfSA9IHt9LCBuYW1lLCBjbGlja0hhbmRsZXIsIGlkOiBpdGVtSWQsIGljb24gfSkgPT4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWJvZHlcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCI+e2l0ZW1UaXRsZX17bmFtZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoaXRlbUlkKX0+e2ljb259PC9idXR0b24+XG4gICAgPC9hcnRpY2xlPlxuKTsiLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBJdGVtTGlzdCBDb21wb25lbnRcbiAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBDb21wb25lbnQgcHJvcHMuXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgSXRlbUxpc3QgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJlZCA9IGZhbHNlLCBsb2FkaW5nID0gZmFsc2UsIGl0ZW1zID0gW10sIGFjdGlvbiA9ICgpID0+IHt9LCBpY29uID0gbnVsbCB9ID0gcHJvcHM7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwibG9hZGluZy1pdGVtc1wiPntfXygnTG9hZGluZyAuLi4nLCAndm9kaScpfTwvcD47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcmVkICYmIGl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0XCI+XG4gICAgICAgICAgICAgICAgPHA+e19fKCdZb3VyIHF1ZXJ5IHlpZWxkZWQgbm8gcmVzdWx0cywgcGxlYXNlIHRyeSBhZ2Fpbi4nLCAndm9kaScpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICggISBpdGVtcyB8fCBpdGVtcy5sZW5ndGggPCAxICkge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwibm8taXRlbXNcIj57X18oJ05vdCBmb3VuZC4nLCAndm9kaScpfTwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdFwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gPEl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gY2xpY2tIYW5kbGVyPXthY3Rpb259IGljb249e2ljb259IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07IiwiaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tICcuL0l0ZW1MaXN0JztcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi91dGlscy9hcGknO1xuaW1wb3J0IHsgdW5pcXVlQnlJZCwgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy91c2VmdWwtZnVuY3MnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qKlxuICogUG9zdFNlbGVjdG9yIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUG9zdFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUG9zdFNlbGVjdG9yIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBwcm9wcy5wb3N0VHlwZSB8fCAncG9zdCcsXG4gICAgICAgICAgICB0eXBlczogW10sXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXJQb3N0czogW10sXG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZFBvc3QgPSB0aGlzLmFkZFBvc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQb3N0ID0gdGhpcy5yZW1vdmVQb3N0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9Qb3N0RmlsdGVyID0gZGVib3VuY2UodGhpcy5kb1Bvc3RGaWx0ZXIuYmluZCh0aGlzKSwgMzAwKTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjb21wb25lbnQgbW91bnRzIGl0IGNhbGxzIHRoaXMgZnVuY3Rpb24uXG4gICAgICogRmV0Y2hlcyBwb3N0cyB0eXBlcywgc2VsZWN0ZWQgcG9zdHMgdGhlbiBtYWtlcyBmaXJzdCBjYWxsIGZvciBwb3N0c1xuICAgICAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhcGkuZ2V0UG9zdFR5cGVzKClcbiAgICAgICAgICAgIC50aGVuKCggcmVzcG9uc2UgKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVzOiByZXNwb25zZVxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZVNlbGVjdGVkUG9zdHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCBzZWxlY3RlZFBvc3RzICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzZWxlY3RlZFBvc3RzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IHNlbGVjdGVkUG9zdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0UG9zdHMgd3JhcHBlciwgYnVpbGRzIHRoZSByZXF1ZXN0IGFyZ3VtZW50IGJhc2VkIHN0YXRlIGFuZCBwYXJhbWV0ZXJzIHBhc3NlZC9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyAtIGRlc2lyZWQgYXJndW1lbnRzIChjYW4gYmUgZW1wdHkpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fVxuICAgICAqL1xuICAgIGdldFBvc3RzKGFyZ3MgPSB7fSkge1xuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0QXJncyA9IHtcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc3RhdGUudHlwZSxcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdEFyZ3VtZW50cyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRBcmdzLFxuICAgICAgICAgICAgLi4uYXJnc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3RBcmd1bWVudHMucmVzdEJhc2UgPSB0aGlzLnN0YXRlLnR5cGVzW3RoaXMuc3RhdGUudHlwZV0ucmVzdF9iYXNlO1xuXG4gICAgICAgIHJldHVybiBhcGkuZ2V0UG9zdHMocmVxdWVzdEFyZ3VtZW50cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdEFyZ3VtZW50cy5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJQb3N0czogcmVzcG9uc2UuZmlsdGVyKCh7IGlkIH0pID0+IHBvc3RJZHMuaW5kZXhPZihpZCkgPT09IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwb3N0czogdW5pcXVlQnlJZChbLi4udGhpcy5zdGF0ZS5wb3N0cywgLi4ucmVzcG9uc2VdKSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZSB0byBjb250aW51ZSB0aGUgY2hhaW5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBwb3N0cyBieSBpZCBmcm9tIHRoZSBgcG9zdHNgIHN0YXRlIG9iamVjdCBhbmQgc29ydHMgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgc2VsZWN0ZWQgYXJyYXkuXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygb2JqZWN0cy5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFBvc3RJZHMoKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRQb3N0SWRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmKCBzZWxlY3RlZFBvc3RJZHMgKSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0SWRzID0gQXJyYXkuaXNBcnJheSggc2VsZWN0ZWRQb3N0SWRzICkgPyBzZWxlY3RlZFBvc3RJZHMgOiBzZWxlY3RlZFBvc3RJZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0SWRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHBvc3RzIGJ5IGlkIGZyb20gdGhlIGBwb3N0c2Agc3RhdGUgb2JqZWN0IGFuZCBzb3J0cyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBzZWxlY3RlZCBhcnJheS5cbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBvYmplY3RzLlxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUG9zdHMoIHBvc3RJZHMgKSB7XG4gICAgICAgIC8vIGNvbnN0IGZpbHRlclBvc3RzTGlzdCA9IHRoaXMuc3RhdGUuZmlsdGVyaW5nICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclBvc3RzIDogW107XG4gICAgICAgIGNvbnN0IHBvc3RMaXN0ID0gdW5pcXVlQnlJZChbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZpbHRlclBvc3RzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb3N0c1xuICAgICAgICBdKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0cyA9IHBvc3RMaXN0XG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IHBvc3RJZHMuaW5kZXhPZihpZCkgIT09IC0xKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhSW5kZXggPSBwb3N0SWRzLmluZGV4T2YoYS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYkluZGV4ID0gcG9zdElkcy5pbmRleE9mKGIuaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA+IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4IDwgYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogc2VsZWN0ZWRQb3N0cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIG5lY2Vzc2FyeSBhcGkgY2FsbHMgdG8gZmV0Y2ggdGhlIHNlbGVjdGVkIHBvc3RzIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVNlbGVjdGVkUG9zdHMoKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zdFR5cGUsIHNlbGVjdGVkUG9zdElkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB0eXBlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKS5qb2luKCcsJyk7XG5cbiAgICAgICAgaWYgKCAhIHBvc3RJZHMgKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSBmYWtlIHByb21pc2UgdGhhdCBhdXRvIHJlc29sdmVzLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvc3RfYXJncyA9IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHBvc3RJZHMsXG4gICAgICAgICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgICAgICAgcG9zdFR5cGVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5wb3N0U3RhdHVzICkge1xuICAgICAgICAgICAgcG9zdF9hcmdzLnN0YXR1cyA9IHRoaXMucHJvcHMucG9zdFN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc3RzKHtcbiAgICAgICAgICAgIC4uLnBvc3RfYXJnc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGRlc2lyZWQgcG9zdCBpZCB0byB0aGUgc2VsZWN0ZWRQb3N0SWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHBvc3RfaWRcbiAgICAgKi9cbiAgICBhZGRQb3N0KHBvc3RfaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5zdGF0ZS5maWx0ZXJQb3N0cy5maWx0ZXIocCA9PiBwLmlkID09PSBwb3N0X2lkKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gdW5pcXVlQnlJZChbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb3N0cyxcbiAgICAgICAgICAgICAgICAuLi5wb3N0XG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcG9zdHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMuc2VsZWN0U2luZ2xlICkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyBwb3N0X2lkIF07XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkUG9zdElkcyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIC4uLnBvc3RJZHMsIHBvc3RfaWQgXTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGRlc2lyZWQgcG9zdCBpZCB0byB0aGUgc2VsZWN0ZWRQb3N0SWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHBvc3RfaWRcbiAgICAgKi9cbiAgICByZW1vdmVQb3N0KHBvc3RfaWQpIHtcbiAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgLi4ucG9zdElkcyBdLmZpbHRlcihpZCA9PiBpZCAhPT0gcG9zdF9pZCk7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBzZWFyY2ggYm94IGlucHV0IHZhbHVlXG4gICAgICogQHBhcmFtIHN0cmluZyB0eXBlIC0gY29tZXMgZnJvbSB0aGUgZXZlbnQgb2JqZWN0IHRhcmdldC5cbiAgICAgKi9cbiAgICBoYW5kbGVJbnB1dEZpbHRlckNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTpmaWx0ZXIgPSAnJyB9ID0ge30gfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZpbHRlcmVkIHBvc3RzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJlZFBvc3RzOiBbXSwgZmlsdGVyaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb1Bvc3RGaWx0ZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3R1YWwgYXBpIGNhbGwgZm9yIHNlYXJjaGluZyBmb3IgcXVlcnksIHRoaXMgZnVuY3Rpb24gaXMgZGVib3VuY2VkIGluIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGRvUG9zdEZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXIgPSAnJyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwb3N0X2FyZ3MgPSB7fTtcblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5wb3N0U3RhdHVzICkge1xuICAgICAgICAgICAgcG9zdF9hcmdzLnN0YXR1cyA9IHRoaXMucHJvcHMucG9zdFN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoe1xuICAgICAgICAgICAgLi4ucG9zdF9hcmdzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBQb3N0U2VsZWN0b3IgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcG9zdExpc3QgPSB0aGlzLnN0YXRlLmZpbHRlcmluZyAmJiAhdGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nID8gdGhpcy5zdGF0ZS5maWx0ZXJQb3N0cyA6IFtdO1xuXG4gICAgICAgIGNvbnN0IGFkZEljb24gPSA8SWNvbiBpY29uPVwicGx1c1wiIC8+O1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gPEljb24gaWNvbj1cIm1pbnVzXCIgLz47XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoaW5wdXR1bmlxdWVJZCA9ICdzZWFyY2hpbnB1dC0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDE2KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBjb21wb25lbnRzLXBvc3Qtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZC0tc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntfXygnU2VhcmNoIFBvc3QnLCAndm9kaScpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9eyBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFBvc3RzXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnJlbW92ZVBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtyZW1vdmVJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfSBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdGV4dC1jb250cm9sX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VhcmNoaW5wdXR1bmlxdWVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCdQbGVhc2UgZW50ZXIgeW91ciBzZWFyY2ggcXVlcnkuLi4nLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Bvc3RMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ3x8dGhpcy5zdGF0ZS5sb2FkaW5nfHx0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZD17dGhpcy5zdGF0ZS5maWx0ZXJpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuYWRkUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2FkZEljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUGFuZWwsIEJ1dHRvbiwgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZXBlYXRlciBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcGVhdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUmVwZWF0ZXIgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMucmVuZGVyQWRkQnV0dG9uID0gdGhpcy5yZW5kZXJBZGRCdXR0b24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24gPSB0aGlzLnJlbmRlclJlbW92ZUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUFkZCA9IHRoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlID0gdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbkVsZW1lbnRzID0gdGhpcy5yZW5kZXJDaGlsZHJlbkVsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyQWRkQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8QnV0dG9uIGlzRGVmYXVsdCBjbGFzc05hbWU9XCJidXR0b24tZnVsbHdpZHRoXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGR9PlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJwbHVzXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEJ1dHRvbiBpc0Rlc3RydWN0aXZlIGNsYXNzTmFtZT1cImJ1dHRvbi1yZW1vdmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZX0+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImRpc21pc3NcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkKCkge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXMsIHVwZGF0ZVZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdmFsdWVzID0gdmFsdWVzID8gWyAuLi52YWx1ZXMsIHsgLi4uZGVmYXVsdFZhbHVlcyB9IF0gOiBbIHsgLi4uZGVmYXVsdFZhbHVlcyB9IF07XG4gICAgICAgIHVwZGF0ZVZhbHVlcyggY3VycmVudF92YWx1ZXMgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdmUoIGluZGV4ICkge1xuICAgICAgICBjb25zdCB7IHVwZGF0ZVZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdmFsdWVzID0gdmFsdWVzLmZpbHRlciggKCB2YWx1ZSwgaSApID0+IGkgIT0gaW5kZXggKTtcbiAgICAgICAgdXBkYXRlVmFsdWVzKCBjdXJyZW50X3ZhbHVlcyApO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmKCAhIHZhbHVlcyApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZV9idXR0b24gPSB0aGlzLnJlbmRlclJlbW92ZUJ1dHRvbigpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKCAoIHZhbHVlLCBpbmRleCApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRfY2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sICggY2hpbGQgKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkX3Byb3BzID0geyAuLi5jaGlsZC5wcm9wcyB9O1xuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZXNbaW5kZXhdW2NoaWxkLnByb3BzLm5hbWVdICkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZF9wcm9wc1tjaGlsZC5wcm9wcy52YWx1ZWtleV0gPSB2YWx1ZXNbaW5kZXhdW2NoaWxkLnByb3BzLm5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZF9wcm9wc1tjaGlsZC5wcm9wcy50cmlnZ2VyX21ldGhvZF9uYW1lXSA9ICh2YWx1ZSkgPT4gY2hpbGQucHJvcHNbY2hpbGQucHJvcHMudHJpZ2dlcl9tZXRob2RfbmFtZV0odmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KCBjaGlsZCwgeyAuLi5jaGlsZF9wcm9wcyB9ICk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRfcmVtb3ZlX2J1dHRvbiA9IFJlYWN0LmNsb25lRWxlbWVudCggcmVtb3ZlX2J1dHRvbiwgeyBrZXk6ICdyZXBlYXRlci1yZW1vdmUtJytpbmRleCwgb25DbGljazogKCkgPT4gcmVtb3ZlX2J1dHRvbi5wcm9wc1snb25DbGljayddKGluZGV4KSB9ICk7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBQYW5lbCwgeyBrZXk6ICdyZXBlYXRlci1jaGlsZC0nK2luZGV4IH0sIFt1cGRhdGVkX2NoaWxkcmVuLCB1cGRhdGVkX3JlbW92ZV9idXR0b25dKTtcbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFJlcGVhdGVyIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIHJlcGVhdGVyLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbkVsZW1lbnRzKCl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFkZEJ1dHRvbigpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IFBvc3RTZWxlY3RvciB9IGZyb20gJy4vUG9zdFNlbGVjdG9yJztcbmltcG9ydCB7IFRlcm1TZWxlY3RvciB9IGZyb20gJy4vVGVybVNlbGVjdG9yJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBSYW5nZUNvbnRyb2wsIFNlbGVjdENvbnRyb2wsIENoZWNrYm94Q29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcblxuLyoqXG4gKiBTaG9ydGNvZGVBdHRzIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgU2hvcnRjb2RlQXR0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFNob3J0Y29kZUF0dHMgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2VMaW1pdCA9IHRoaXMub25DaGFuZ2VMaW1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ29sdW1ucyA9IHRoaXMub25DaGFuZ2VDb2x1bW5zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VPcmRlcmJ5ID0gdGhpcy5vbkNoYW5nZU9yZGVyYnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU9yZGVyID0gdGhpcy5vbkNoYW5nZU9yZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VJZHMgPSB0aGlzLm9uQ2hhbmdlSWRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDYXRlZ29yeSA9IHRoaXMub25DaGFuZ2VDYXRlZ29yeS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlR2VucmUgPSB0aGlzLm9uQ2hhbmdlR2VucmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZlYXR1cmVkID0gdGhpcy5vbkNoYW5nZUZlYXR1cmVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VUb3BSYXRlZCA9IHRoaXMub25DaGFuZ2VUb3BSYXRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTGltaXQoIG5ld0xpbWl0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgbGltaXQ6IG5ld0xpbWl0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlQ29sdW1ucyggbmV3Q29sdW1ucyApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIGNvbHVtbnM6IG5ld0NvbHVtbnNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VPcmRlcmJ5KCBuZXdPcmRlcmJ5ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgb3JkZXJieTogbmV3T3JkZXJieVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU9yZGVyKCBuZXdPcmRlciApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIG9yZGVyOiBuZXdPcmRlclxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUlkcyggbmV3SWRzICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgaWRzOiBuZXdJZHMuam9pbignLCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlQ2F0ZWdvcnkoIG5ld0NhdGVnb3J5ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgY2F0ZWdvcnk6IG5ld0NhdGVnb3J5LmpvaW4oJywnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUdlbnJlKCBuZXdHZW5yZSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIGdlbnJlOiBuZXdHZW5yZS5qb2luKCcsJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGZWF0dXJlZCggbmV3RmVhdHVyZWQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBmZWF0dXJlZDogbmV3RmVhdHVyZWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VUb3BSYXRlZCggbmV3VG9wUmF0ZWQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICB0b3BfcmF0ZWQ6IG5ld1RvcFJhdGVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFNob3J0Y29kZUF0dHMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBwb3N0VHlwZSwgY2F0VGF4b25vbXksIG1pbkxpbWl0ID0gMSwgbWF4TGltaXQgPSAyMCwgbWluQ29sdW1ucyA9IDEsIG1heENvbHVtbnMgPSA2LCBoaWRlRmllbGRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGxpbWl0LCBjb2x1bW5zLCBvcmRlcmJ5LCBvcmRlciwgaWRzLCBjYXRlZ29yeSwgZ2VucmUsIGZlYXR1cmVkLCB0b3BfcmF0ZWQgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2xpbWl0JykgKSA/IChcbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTGltaXQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGxpbWl0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTGltaXQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLmxpbWl0Lm1pbicsIG1pbkxpbWl0ICkgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLmxpbWl0Lm1heCcsIG1heExpbWl0ICkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnY29sdW1ucycpICkgPyAoXG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0NvbHVtbnMnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGNvbHVtbnMgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VDb2x1bW5zIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgYXBwbHlGaWx0ZXJzKCAndm9kaS5jb21wb25lbnQuc2hvcnRjb2RlQXR0cy5jb2x1bW5zLm1pbicsIG1pbkNvbHVtbnMgKSB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IGFwcGx5RmlsdGVycyggJ3ZvZGkuY29tcG9uZW50LnNob3J0Y29kZUF0dHMuY29sdW1ucy5tYXgnLCBtYXhDb2x1bW5zICkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnb3JkZXJieScpICkgPyAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdPcmRlcmJ5JywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBvcmRlcmJ5IH1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdUaXRsZScsICd2b2RpJyksIHZhbHVlOiAndGl0bGUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnRGF0ZScsICd2b2RpJyksIHZhbHVlOiAoIHBvc3RUeXBlID09PSAnbW92aWUnID8gJ3JlbGVhc2VfZGF0ZScgOiAnZGF0ZScgKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0lEJywgJ3ZvZGknKSwgdmFsdWU6ICdpZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdSYW5kb20nLCAndm9kaScpLCB2YWx1ZTogJ3JhbmQnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VPcmRlcmJ5IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ29yZGVyJykgKSA/IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ09yZGVyJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBvcmRlciB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnQVNDJywgJ3ZvZGknKSwgdmFsdWU6ICdBU0MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnREVTQycsICd2b2RpJyksIHZhbHVlOiAnREVTQycgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU9yZGVyIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2lkcycpICkgPyAoXG4gICAgICAgICAgICAgICAgPFBvc3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBwb3N0VHlwZSA9IHsgcG9zdFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBvc3RJZHM9eyBpZHMgPyBpZHMuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRQb3N0SWRzPXsgdGhpcy5vbkNoYW5nZUlkcyB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgKCBwb3N0VHlwZSA9PT0gJ3ZpZGVvJyApICYmICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnY2F0ZWdvcnknKSApID8gKFxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgcG9zdFR5cGUgPSB7IHBvc3RUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXkgPSB7IGNhdFRheG9ub215IH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXJtSWRzPXsgY2F0ZWdvcnkgPyBjYXRlZ29yeS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZFRlcm1JZHM9eyB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICggISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdnZW5yZScpICkgPyAoXG4gICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBwb3N0VHlwZSA9IHsgcG9zdFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teSA9IHsgY2F0VGF4b25vbXkgfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRlcm1JZHM9eyBnZW5yZSA/IGdlbnJlLnNwbGl0KCcsJykubWFwKE51bWJlcikgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkVGVybUlkcz17IHRoaXMub25DaGFuZ2VHZW5yZSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgKSB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2ZlYXR1cmVkJykgKSA/IChcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRmVhdHVyZWQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICBoZWxwPXtfXygnQ2hlY2sgdG8gc2VsZWN0IGZlYXR1cmVkIHBvc3RzLicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBmZWF0dXJlZCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUZlYXR1cmVkIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ3RvcF9yYXRlZCcpICkgPyAoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1RvcCBSYXRlZCcsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIGhlbHA9e19fKCdDaGVjayB0byBzZWxlY3QgdG9wIHJhdGVkIHBvc3RzLicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyB0b3BfcmF0ZWQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VUb3BSYXRlZCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSBcIi4vSXRlbUxpc3RcIjtcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi91dGlscy9hcGknO1xuaW1wb3J0IHsgdW5pcXVlQnlJZCwgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy91c2VmdWwtZnVuY3MnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qKlxuICogVGVybVNlbGVjdG9yIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgVGVybVNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgVGVybVNlbGVjdG9yIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGVybXM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBwcm9wcy5wb3N0VHlwZSB8fCAncG9zdCcsXG4gICAgICAgICAgICB0YXhvbm9teTogcHJvcHMudGF4b25vbXkgfHwgJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIHRheG9ub21pZXM6IFtdLFxuICAgICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyVGVybXM6IFtdLFxuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkVGVybSA9IHRoaXMuYWRkVGVybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVRlcm0gPSB0aGlzLnJlbW92ZVRlcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb1Rlcm1GaWx0ZXIgPSBkZWJvdW5jZSh0aGlzLmRvVGVybUZpbHRlci5iaW5kKHRoaXMpLCAzMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgaXQgY2FsbHMgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBGZXRjaGVzIHRlcm1zIHRheG9ub21pZXMsIHNlbGVjdGVkIHRlcm1zIHRoZW4gbWFrZXMgZmlyc3QgY2FsbCBmb3IgdGVybXNcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBpLmdldFRheG9ub21pZXMoIHsgdHlwZTogdGhpcy5zdGF0ZS50eXBlIH0gKVxuICAgICAgICAgICAgLnRoZW4oKCByZXNwb25zZSApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbWllczogcmVzcG9uc2VcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVTZWxlY3RlZFRlcm1zKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldFRlcm1zIHdyYXBwZXIsIGJ1aWxkcyB0aGUgcmVxdWVzdCBhcmd1bWVudCBiYXNlZCBzdGF0ZSBhbmQgcGFyYW1ldGVycyBwYXNzZWQvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgLSBkZXNpcmVkIGFyZ3VtZW50cyAoY2FuIGJlIGVtcHR5KS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn1cbiAgICAgKi9cbiAgICBnZXRUZXJtcyhhcmdzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZFRlcm1JZHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdEFyZ3MgPSB7XG4gICAgICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnN0YXRlLnR5cGUsXG4gICAgICAgICAgICB0YXhvbm9teTogdGhpcy5zdGF0ZS50YXhvbm9teSxcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdEFyZ3VtZW50cyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRBcmdzLFxuICAgICAgICAgICAgLi4uYXJnc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3RBcmd1bWVudHMucmVzdEJhc2UgPSB0aGlzLnN0YXRlLnRheG9ub21pZXNbdGhpcy5zdGF0ZS50YXhvbm9teV0ucmVzdF9iYXNlO1xuXG4gICAgICAgIHJldHVybiBhcGkuZ2V0VGVybXMocmVxdWVzdEFyZ3VtZW50cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdEFyZ3VtZW50cy5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUZXJtczogcmVzcG9uc2UuZmlsdGVyKCh7IGlkIH0pID0+IHNlbGVjdGVkVGVybUlkcy5pbmRleE9mKGlkKSA9PT0gLTEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRlcm1zOiB1bmlxdWVCeUlkKFsuLi50aGlzLnN0YXRlLnRlcm1zLCAuLi5yZXNwb25zZV0pLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlIHRvIGNvbnRpbnVlIHRoZSBjaGFpblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHRlcm1zIGJ5IGlkIGZyb20gdGhlIGB0ZXJtc2Agc3RhdGUgb2JqZWN0IGFuZCBzb3J0cyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBzZWxlY3RlZCBhcnJheS5cbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBvYmplY3RzLlxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkVGVybXMoKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRUZXJtSWRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS50ZXJtc1xuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBzZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihpZCkgIT09IC0xKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhSW5kZXggPSB0aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkcy5pbmRleE9mKGEuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJJbmRleCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoYi5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4ID4gYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPCBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIG5lY2Vzc2FyeSBhcGkgY2FsbHMgdG8gZmV0Y2ggdGhlIHNlbGVjdGVkIHRlcm1zIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVNlbGVjdGVkVGVybXMoKSB7XG4gICAgICAgIGNvbnN0IHsgdGVybVR5cGUsIHNlbGVjdGVkVGVybUlkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB0YXhvbm9taWVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICggc2VsZWN0ZWRUZXJtSWRzICYmICFzZWxlY3RlZFRlcm1JZHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBhIGZha2UgcHJvbWlzZSB0aGF0IGF1dG8gcmVzb2x2ZXMuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXJtcyh7XG4gICAgICAgICAgICBpbmNsdWRlOiB0aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkcy5qb2luKCcsJyksXG4gICAgICAgICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgICAgICAgdGVybVR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBkZXNpcmVkIHRlcm0gaWQgdG8gdGhlIHNlbGVjdGVkVGVybUlkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSB0ZXJtX2lkXG4gICAgICovXG4gICAgYWRkVGVybSh0ZXJtX2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgdGVybSA9IHRoaXMuc3RhdGUuZmlsdGVyVGVybXMuZmlsdGVyKHAgPT4gcC5pZCA9PT0gdGVybV9pZCk7XG4gICAgICAgICAgICBjb25zdCB0ZXJtcyA9IHVuaXF1ZUJ5SWQoW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUudGVybXMsXG4gICAgICAgICAgICAgICAgLi4udGVybVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRlcm1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRUZXJtSWRzKFtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzLFxuICAgICAgICAgICAgdGVybV9pZFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGRlc2lyZWQgdGVybSBpZCB0byB0aGUgc2VsZWN0ZWRUZXJtSWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHRlcm1faWRcbiAgICAgKi9cbiAgICByZW1vdmVUZXJtKHRlcm1faWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFRlcm1JZHMoW1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHNcbiAgICAgICAgXS5maWx0ZXIoaWQgPT4gaWQgIT09IHRlcm1faWQpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBzZWFyY2ggYm94IGlucHV0IHZhbHVlXG4gICAgICogQHBhcmFtIHN0cmluZyB0eXBlIC0gY29tZXMgZnJvbSB0aGUgZXZlbnQgb2JqZWN0IHRhcmdldC5cbiAgICAgKi9cbiAgICBoYW5kbGVJbnB1dEZpbHRlckNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTpmaWx0ZXIgPSAnJyB9ID0ge30gfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZpbHRlcmVkIHRlcm1zXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJlZFRlcm1zOiBbXSwgZmlsdGVyaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb1Rlcm1GaWx0ZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3R1YWwgYXBpIGNhbGwgZm9yIHNlYXJjaGluZyBmb3IgcXVlcnksIHRoaXMgZnVuY3Rpb24gaXMgZGVib3VuY2VkIGluIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGRvVGVybUZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXIgPSAnJyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZ2V0VGVybXMoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgVGVybVNlbGVjdG9yIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGlzRmlsdGVyZWQgPSB0aGlzLnN0YXRlLmZpbHRlcmluZztcbiAgICAgICAgY29uc3QgdGVybUxpc3QgPSBpc0ZpbHRlcmVkICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclRlcm1zIDogW107XG4gICAgICAgIGNvbnN0IFNlbGVjdGVkVGVybUxpc3QgID0gdGhpcy5nZXRTZWxlY3RlZFRlcm1zKCk7XG5cbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IDxJY29uIGljb249XCJwbHVzXCIgLz47XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSA8SWNvbiBpY29uPVwibWludXNcIiAvPjtcblxuICAgICAgICBjb25zdCBzZWFyY2hpbnB1dHVuaXF1ZUlkID0gJ3NlYXJjaGlucHV0LScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTYpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtdGVybS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLS1zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e19fKCdTZWFyY2ggVGVybScsICd2b2RpJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17U2VsZWN0ZWRUZXJtTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMucmVtb3ZlVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3JlbW92ZUljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3NlYXJjaGlucHV0dW5pcXVlSWR9IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1BsZWFzZSBlbnRlciB5b3VyIHNlYXJjaCBxdWVyeS4uLicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGVybUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfHx0aGlzLnN0YXRlLmxvYWRpbmd8fHRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkPXtpc0ZpbHRlcmVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLmFkZFRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXthZGRJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwO1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIFBvc3RUeXBlcyBlbmRwb2ludC5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9zdFR5cGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiAnL3dwL3YyL3R5cGVzJyB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIGRlc2lyZWQgcG9zdCB0eXBlIGFuZCBidWlsZHMgdGhlIHF1ZXJ5IHN0cmluZyBiYXNlZCBvbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gcmVzdEJhc2UgLSByZXN0IGJhc2UgZm9yIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoeyByZXN0QmFzZSA9IGZhbHNlLCAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvJHtyZXN0QmFzZX0/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIFBvc3RUeXBlIFRheG9ub21pZXMgZW5kcG9pbnQuXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRheG9ub21pZXMgPSAoeyAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvdGF4b25vbWllcz8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgZGVzaXJlZCBwb3N0IHR5cGUgYW5kIGJ1aWxkcyB0aGUgcXVlcnkgc3RyaW5nIGJhc2VkIG9uIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSByZXN0QmFzZSAtIHJlc3QgYmFzZSBmb3IgdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUZXJtcyA9ICh7IHJlc3RCYXNlID0gZmFsc2UsIC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi8ke3Jlc3RCYXNlfT8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07IiwiLyoqXG4gKiBSZXR1cm5zIGEgdW5pcXVlIGFycmF5IG9mIG9iamVjdHMgYmFzZWQgb24gYSBkZXNpcmVkIGtleS5cbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IG9mIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ3xpbnR9IGtleSAtIGtleSB0byBmaWx0ZXIgb2JqZWN0cyBieVxuICovXG5leHBvcnQgY29uc3QgdW5pcXVlQnkgPSAoYXJyLCBrZXkpID0+IHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIHJldHVybiBhcnIuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGl0ZW1ba2V5XSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cy5wdXNoKGl0ZW1ba2V5XSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB1bmlxdWUgYXJyYXkgb2Ygb2JqZWN0cyBiYXNlZCBvbiB0aGUgaWQgcHJvcGVydHkuXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgLSBhcnJheSBvZiBvYmplY3RzIHRvIGZpbHRlci5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgdW5pcXVlQnlJZCA9IGFyciA9PiB1bmlxdWVCeShhcnIsICdpZCcpO1xuXG4vKipcbiAqIERlYm91bmNlIGEgZnVuY3Rpb24gYnkgbGltaXRpbmcgaG93IG9mdGVuIGl0IGNhbiBydW4uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2FpdCAtIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGhvdyBsb25nIGl0IHNob3VsZCB3YWl0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICB9XG59OyJdfQ==
