(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Repeater = require("../components/Repeater");

var _DesignOptions = require("../components/DesignOptions");

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
    TextareaControl = _wp$components.TextareaControl;
registerBlockType('vodi/landing-tabs-features', {
  title: __('Landing Tabs Features ', 'vodi'),
  icon: 'editor-kitchensink',
  category: 'vodi-blocks',
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var tab_args = attributes.tab_args,
        design_options = attributes.design_options,
        action_text = attributes.action_text,
        action_link = attributes.action_link;

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

    var onChangeTabArgsTabContent = function onChangeTabArgsTabContent(newTabArgsTabContent, index) {
      var tab_args_updated = JSON.parse(tab_args);
      tab_args_updated[index].tab_content = newTabArgsTabContent;
      setAttributes({
        tab_args: JSON.stringify(_toConsumableArray(tab_args_updated))
      });
    };

    var onChangeTabArgsIconArgClass = function onChangeTabArgsIconArgClass(newTabArgsIconArgClass, index) {
      var tab_args_updated = JSON.parse(tab_args);
      tab_args_updated[index].icon_arg_class = newTabArgsIconArgClass;
      setAttributes({
        tab_args: JSON.stringify(_toConsumableArray(tab_args_updated))
      });
    };

    var onChangeDesignOptions = function onChangeDesignOptions(newDesignOptions) {
      setAttributes({
        design_options: _objectSpread({}, design_options, newDesignOptions)
      });
    };

    var onChangeActionText = function onChangeActionText(newActionText) {
      setAttributes({
        action_text: newActionText
      });
    };

    var onChangeActionLink = function onChangeActionLink(newActionLink) {
      setAttributes({
        action_link: newActionLink
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(_Repeater.Repeater, {
      title: __('Landing Tabs', 'vodi'),
      values: tab_args ? JSON.parse(tab_args) : [],
      defaultValues: {
        tab_title: '',
        icon_arg_class: '',
        tab_content: ''
      },
      updateValues: onChangeTabArgs
    }, wp.element.createElement(TextControl, {
      label: __('Tab Title', 'vodi'),
      name: "tab_title",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeTabArgsTabTitle
    }), wp.element.createElement(TextControl, {
      label: __('Title Icon Class', 'vodi'),
      name: "icon_arg_class",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeTabArgsIconArgClass
    }), wp.element.createElement(TextareaControl, {
      label: __('Tab content', 'vodi'),
      name: "tab_content",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeTabArgsTabContent
    })), wp.element.createElement(TextControl, {
      label: __('Action Text', 'vodi'),
      value: action_text,
      onChange: onChangeActionText
    }), wp.element.createElement(TextControl, {
      label: __('Action Link', 'vodi'),
      value: action_link,
      onChange: onChangeActionLink
    }), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: _objectSpread({}, design_options),
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, tab_args ? wp.element.createElement(ServerSideRender, {
      block: "vodi/landing-tabs-features",
      attributes: attributes
    }) : __('Add Tab', 'vodi')));
  },
  save: function save() {
    // Rendering in PHP
    return null;
  }
});

},{"../components/DesignOptions":2,"../components/Repeater":3}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvbGFuZGluZy10YWJzLWZlYXR1cmVzLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9EZXNpZ25PcHRpb25zLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9SZXBlYXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRVEsRSxHQUFPLEVBQUUsQ0FBQyxJLENBQVYsRTtJQUNBLGlCLEdBQXNCLEVBQUUsQ0FBQyxNLENBQXpCLGlCO0lBQ0EsaUIsR0FBc0IsRUFBRSxDQUFDLE0sQ0FBekIsaUI7SUFDQSxRLEdBQWEsRUFBRSxDQUFDLE8sQ0FBaEIsUTtxQkFDd0UsRUFBRSxDQUFDLFU7SUFBM0UsZ0Isa0JBQUEsZ0I7SUFBa0IsUSxrQkFBQSxRO0lBQVUsUyxrQkFBQSxTO0lBQVcsVyxrQkFBQSxXO0lBQWEsZSxrQkFBQSxlO0FBRTVELGlCQUFpQixDQUFFLDRCQUFGLEVBQWdDO0FBQzdDLEVBQUEsS0FBSyxFQUFFLEVBQUUsQ0FBQyx3QkFBRCxFQUEyQixNQUEzQixDQURvQztBQUc3QyxFQUFBLElBQUksRUFBRSxvQkFIdUM7QUFLN0MsRUFBQSxRQUFRLEVBQUUsYUFMbUM7QUFPN0MsRUFBQSxJQUFJLEVBQUksY0FBRSxLQUFGLEVBQWE7QUFBQSxRQUNULFVBRFMsR0FDcUIsS0FEckIsQ0FDVCxVQURTO0FBQUEsUUFDRyxhQURILEdBQ3FCLEtBRHJCLENBQ0csYUFESDtBQUFBLFFBRVQsUUFGUyxHQUU4QyxVQUY5QyxDQUVULFFBRlM7QUFBQSxRQUVDLGNBRkQsR0FFOEMsVUFGOUMsQ0FFQyxjQUZEO0FBQUEsUUFFaUIs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LEVBRUssS0FBSyxzQkFBTCxFQUZMLEVBR0ssS0FBSyxlQUFMLEVBSEwsQ0FESixDQURKO0FBU0g7Ozs7RUF0RnlCLFMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBSZXBlYXRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvUmVwZWF0ZXInO1xuaW1wb3J0IHsgRGVzaWduT3B0aW9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRGVzaWduT3B0aW9ucyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5lZGl0b3I7XG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBTZXJ2ZXJTaWRlUmVuZGVyLCBEaXNhYmxlZCwgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVGV4dGFyZWFDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3ZvZGkvbGFuZGluZy10YWJzLWZlYXR1cmVzJywge1xuICAgIHRpdGxlOiBfXygnTGFuZGluZyBUYWJzIEZlYXR1cmVzICcsICd2b2RpJyksXG5cbiAgICBpY29uOiAnZWRpdG9yLWtpdGNoZW5zaW5rJyxcblxuICAgIGNhdGVnb3J5OiAndm9kaS1ibG9ja3MnLFxuXG4gICAgZWRpdDogKCAoIHByb3BzICkgPT4ge1xuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB7IHRhYl9hcmdzLCBkZXNpZ25fb3B0aW9ucywgYWN0aW9uX3RleHQsIGFjdGlvbl9saW5rIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlVGFiQXJncyA9IG5ld1RhYkFyZ3MgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyB0YWJfYXJnczogSlNPTi5zdHJpbmdpZnkoWy4uLm5ld1RhYkFyZ3NdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VUYWJBcmdzVGFiVGl0bGUgPSAobmV3VGFiQXJnc1RhYlRpdGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRhYl9hcmdzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHRhYl9hcmdzICk7XG4gICAgICAgICAgICB0YWJfYXJnc191cGRhdGVkW2luZGV4XS50YWJfdGl0bGUgPSBuZXdUYWJBcmdzVGFiVGl0bGU7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHRhYl9hcmdzOiBKU09OLnN0cmluZ2lmeShbLi4udGFiX2FyZ3NfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVRhYkFyZ3NUYWJDb250ZW50ID0gKG5ld1RhYkFyZ3NUYWJDb250ZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICB2YXIgdGFiX2FyZ3NfdXBkYXRlZCA9IEpTT04ucGFyc2UodGFiX2FyZ3MgKTtcbiAgICAgICAgICAgIHRhYl9hcmdzX3VwZGF0ZWRbaW5kZXhdLnRhYl9jb250ZW50ID0gbmV3VGFiQXJnc1RhYkNvbnRlbnQ7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHRhYl9hcmdzOiBKU09OLnN0cmluZ2lmeShbLi4udGFiX2FyZ3NfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVRhYkFyZ3NJY29uQXJnQ2xhc3MgPSAobmV3VGFiQXJnc0ljb25BcmdDbGFzcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgdmFyIHRhYl9hcmdzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHRhYl9hcmdzICk7XG4gICAgICAgICAgICB0YWJfYXJnc191cGRhdGVkW2luZGV4XS5pY29uX2FyZ19jbGFzcyA9IG5ld1RhYkFyZ3NJY29uQXJnQ2xhc3M7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHRhYl9hcmdzOiBKU09OLnN0cmluZ2lmeShbLi4udGFiX2FyZ3NfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VBY3Rpb25UZXh0ID0gbmV3QWN0aW9uVGV4dCA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IGFjdGlvbl90ZXh0OiBuZXdBY3Rpb25UZXh0IH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZUFjdGlvbkxpbmsgPSBuZXdBY3Rpb25MaW5rID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgYWN0aW9uX2xpbms6IG5ld0FjdGlvbkxpbmsgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnTGFuZGluZyBUYWJzJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17IHRhYl9hcmdzID8gSlNPTi5wYXJzZSh0YWJfYXJncykgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVzPXsgeyB0YWJfdGl0bGU6ICcnLCBpY29uX2FyZ19jbGFzczogJycsIHRhYl9jb250ZW50OiAnJyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlcz17IG9uQ2hhbmdlVGFiQXJncyB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnVGFiIFRpdGxlJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0YWJfdGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVRhYkFyZ3NUYWJUaXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdUaXRsZSBJY29uIENsYXNzJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpY29uX2FyZ19jbGFzcydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZWtleT0ndmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyX21ldGhvZF9uYW1lPSdvbkNoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlVGFiQXJnc0ljb25BcmdDbGFzcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnVGFiIGNvbnRlbnQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RhYl9jb250ZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVla2V5PSd2YWx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJfbWV0aG9kX25hbWU9J29uQ2hhbmdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2VUYWJBcmdzVGFiQ29udGVudCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JlcGVhdGVyPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIFRleHQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBhY3Rpb25fdGV4dCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlQWN0aW9uVGV4dCB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBY3Rpb24gTGluaycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGFjdGlvbl9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2VBY3Rpb25MaW5rIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdEZXNpZ24gT3B0aW9ucycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0geyB7IC4uLmRlc2lnbl9vcHRpb25zIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlc2lnbk9wdGlvbnMgPSB7IG9uQ2hhbmdlRGVzaWduT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxEaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgeyB0YWJfYXJncyA/IChcbiAgICAgICAgICAgICAgICAgICAgPFNlcnZlclNpZGVSZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrPVwidm9kaS9sYW5kaW5nLXRhYnMtZmVhdHVyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogX18oJ0FkZCBUYWInLCAndm9kaScpIH1cbiAgICAgICAgICAgICAgICA8L0Rpc2FibGVkPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9ICksXG5cbiAgICBzYXZlKCkge1xuICAgICAgICAvLyBSZW5kZXJpbmcgaW4gUEhQXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59ICk7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogRGVzaWduT3B0aW9ucyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIERlc2lnbk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBEZXNpZ25PcHRpb25zIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgPSB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gPSB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nVG9wKCBuZXdvbkNoYW5nZVBhZGRpbmdUb3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3RvcDogbmV3b25DaGFuZ2VQYWRkaW5nVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ0JvdHRvbSggbmV3b25DaGFuZ2VQYWRkaW5nQm90dG9tICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19ib3R0b206IG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdMZWZ0KCBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19sZWZ0OiBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1JpZ2h0KCBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfcmlnaHQ6IG5ld29uQ2hhbmdlUGFkZGluZ1JpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luVG9wKCBuZXdvbkNoYW5nZU1hcmdpblRvcCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl90b3A6IG5ld29uQ2hhbmdlTWFyZ2luVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luQm90dG9tKCBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl9ib3R0b206IG5ld29uQ2hhbmdlTWFyZ2luQm90dG9tXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIERlc2lnbk9wdGlvbnMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHBhZGRpbmdfdG9wLCBwYWRkaW5nX2JvdHRvbSwgcGFkZGluZ19sZWZ0LCBwYWRkaW5nX3JpZ2h0LCBtYXJnaW5fdG9wLCBtYXJnaW5fYm90dG9tIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFRvcCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIEJvdHRvbSAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX2JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIExlZnQgKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19sZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFJpZ2h0IChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfcmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gVG9wIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl90b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gQm90dG9tIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl9ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFBhbmVsLCBCdXR0b24sIEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVwZWF0ZXIgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBlYXRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJlcGVhdGVyIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLnJlbmRlckFkZEJ1dHRvbiA9IHRoaXMucmVuZGVyQWRkQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uID0gdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBZGQgPSB0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cyA9IHRoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlckFkZEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEJ1dHRvbiBpc0RlZmF1bHQgY2xhc3NOYW1lPVwiYnV0dG9uLWZ1bGx3aWR0aFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwicGx1c1wiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJSZW1vdmVCdXR0b24oKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxCdXR0b24gaXNEZXN0cnVjdGl2ZSBjbGFzc05hbWU9XCJidXR0b24tcmVtb3ZlXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmV9PlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJkaXNtaXNzXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUFkZCgpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWVzLCB1cGRhdGVWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdXJyZW50X3ZhbHVlcyA9IHZhbHVlcyA/IFsgLi4udmFsdWVzLCB7IC4uLmRlZmF1bHRWYWx1ZXMgfSBdIDogWyB7IC4uLmRlZmF1bHRWYWx1ZXMgfSBdO1xuICAgICAgICB1cGRhdGVWYWx1ZXMoIGN1cnJlbnRfdmFsdWVzICk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3ZlKCBpbmRleCApIHtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdXJyZW50X3ZhbHVlcyA9IHZhbHVlcy5maWx0ZXIoICggdmFsdWUsIGkgKSA9PiBpICE9IGluZGV4ICk7XG4gICAgICAgIHVwZGF0ZVZhbHVlcyggY3VycmVudF92YWx1ZXMgKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbkVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiggISB2YWx1ZXMgKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVfYnV0dG9uID0gdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24oKTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCggKCB2YWx1ZSwgaW5kZXggKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkX2NoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoIGNoaWxkICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZF9wcm9wcyA9IHsgLi4uY2hpbGQucHJvcHMgfTtcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVzW2luZGV4XVtjaGlsZC5wcm9wcy5uYW1lXSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfcHJvcHNbY2hpbGQucHJvcHMudmFsdWVrZXldID0gdmFsdWVzW2luZGV4XVtjaGlsZC5wcm9wcy5uYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGRfcHJvcHNbY2hpbGQucHJvcHMudHJpZ2dlcl9tZXRob2RfbmFtZV0gPSAodmFsdWUpID0+IGNoaWxkLnByb3BzW2NoaWxkLnByb3BzLnRyaWdnZXJfbWV0aG9kX25hbWVdKHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCggY2hpbGQsIHsgLi4uY2hpbGRfcHJvcHMgfSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkX3JlbW92ZV9idXR0b24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoIHJlbW92ZV9idXR0b24sIHsga2V5OiAncmVwZWF0ZXItcmVtb3ZlLScraW5kZXgsIG9uQ2xpY2s6ICgpID0+IHJlbW92ZV9idXR0b24ucHJvcHNbJ29uQ2xpY2snXShpbmRleCkgfSApO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggUGFuZWwsIHsga2V5OiAncmVwZWF0ZXItY2hpbGQtJytpbmRleCB9LCBbdXBkYXRlZF9jaGlsZHJlbiwgdXBkYXRlZF9yZW1vdmVfYnV0dG9uXSk7XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBSZXBlYXRlciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCByZXBlYXRlci1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cygpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBZGRCdXR0b24oKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0=
