(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Repeater = require("../components/Repeater");

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
    TextareaControl = _wp$components.TextareaControl;
registerBlockType('vodi/faq-section', {
  title: __('Faq Section ', 'vodi'),
  icon: 'editor-kitchensink',
  category: 'vodi-blocks',
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var faq_args = attributes.faq_args,
        design_options = attributes.design_options;

    var onChangeDesignOptions = function onChangeDesignOptions(newDesignOptions) {
      setAttributes({
        design_options: _objectSpread({}, design_options, newDesignOptions)
      });
    };

    var onChangeFaqArgs = function onChangeFaqArgs(newFaqArgs) {
      setAttributes({
        faq_args: JSON.stringify(_toConsumableArray(newFaqArgs))
      });
    };

    var onChangeFaqArgsTitle = function onChangeFaqArgsTitle(newFaqArgsTitle, index) {
      var faq_args_updated = JSON.parse(faq_args);
      faq_args_updated[index].title = newFaqArgsTitle;
      setAttributes({
        faq_args: JSON.stringify(_toConsumableArray(faq_args_updated))
      });
    };

    var onChangeFaqArgsDesc = function onChangeFaqArgsDesc(newFaqArgsDesc, index) {
      var faq_args_updated = JSON.parse(faq_args);
      faq_args_updated[index].desc = newFaqArgsDesc;
      setAttributes({
        faq_args: JSON.stringify(_toConsumableArray(faq_args_updated))
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(_Repeater.Repeater, {
      title: __('Landing Faqs', 'vodi'),
      values: faq_args ? JSON.parse(faq_args) : [],
      defaultValues: {
        title: '',
        desc: ''
      },
      updateValues: onChangeFaqArgs
    }, wp.element.createElement(TextControl, {
      label: __('Faq Title', 'vodi'),
      name: "title",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeFaqArgsTitle
    }), wp.element.createElement(TextareaControl, {
      label: __('Faq Desc', 'vodi'),
      name: "desc",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeFaqArgsDesc
    })), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: _objectSpread({}, design_options),
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, faq_args ? wp.element.createElement(ServerSideRender, {
      block: "vodi/faq-section",
      attributes: attributes
    }) : __('Add Faq', 'vodi')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvZmFxLXNlY3Rpb24uanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0Rlc2lnbk9wdGlvbnMuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1JlcGVhdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFUSxFLEdBQU8sRUFBRSxDQUFDLEksQ0FBVixFO0lBQ0EsaUIsR0FBc0IsRUFBRSxDQUFDLE0sQ0FBekIsaUI7SUFDQSxpQixHQUFzQixFQUFFLENBQUMsTSxDQUF6QixpQjtJQUNBLFEsR0FBYSxFQUFFLENBQUMsTyxDQUFoQixRO3FCQUN3RSxFQUFFLENBQUMsVTtJQUEzRSxnQixrQkFBQSxnQjtJQUFrQixRLGtCQUFBLFE7SUFBVSxTLGtCQUFBLFM7SUFBVyxXLGtCQUFBLFc7SUFBYSxlLGtCQUFBLGU7QUFFNUQsaUJBQWlCLENBQUUsa0JBQUYsRUFBc0I7QUFDbkMsRUFBQSxLQUFLLEVBQUUsRUFBRSxDQUFDLGNBQUQsRUFBaUIsTUFBakIsQ0FEMEI7QUFHbkMsRUFBQSxJQUFJLEVBQUUsb0JBSDZCO0FBS25DLEVBQUEsUUFBUSxFQUFFLGFBTHlCO0FBT25DLEVBQUEsSUFBSSxFQUFJLGNBQUUsS0FBRixFQUFhO0FBQUEsUUFDVCxVQURTLEdBQ3FCLEtBRHJCLENBQ1QsVUFEUztBQUFBLFFBQ0csYUFESCxHQUNxQixLQURyQixDQUNHLGFBREg7QUFBQSxRQUVULFFBRlMsR0FFb0IsVUFGcEIsQ0FFVCxRQUZTO0FBQUEsUUFFQyxjQUZELEdBRW9CLFVBRnBCLENBRUMsY0FGRDs7QUFJakIsUUFBTSxxQkFBcUIsR0FB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O0FBQ0QsVUFBQSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQU4sQ0FBWSxtQkFBYixDQUFYLEdBQStDLFVBQUMsS0FBRDtBQUFBLG1CQUFXLEtBQUssQ0FBQyxLQUFOLENBQVksS0FBSyxDQUFDLEtBQU4sQ0FBWSxtQkFBeEIsRUFBNkMsS0FBN0MsRUFBb0QsS0FBcEQsQ0FBWDtBQUFBLFdBQS9DOztBQUNBLGlCQUFPLEtBQUssQ0FBQyxZQUFOLENBQW9CLEtBQXBCLG9CQUFnQyxXQUFoQyxFQUFQO0FBQ0gsU0FQd0IsQ0FBekI7QUFTQSxZQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxZQUFOLENBQW9CLGFBQXBCLEVBQW1DO0FBQUUsVUFBQSxHQUFHLEVBQUUscUJBQW1CLEtBQTFCO0FBQWlDLFVBQUEsT0FBTyxFQUFFO0FBQUEsbUJBQU0sYUFBYSxDQUFDLEtBQWQsQ0FBb0IsU0FBcEIsRUFBK0IsS0FBL0IsQ0FBTjtBQUFBO0FBQTFDLFNBQW5DLENBQTlCO0FBRUEsZUFBTyxLQUFLLENBQUMsYUFBTixDQUFxQixLQUFyQixFQUE0QjtBQUFFLFVBQUEsR0FBRyxFQUFFLG9CQUFrQjtBQUF6QixTQUE1QixFQUE4RCxDQUFDLGdCQUFELEVBQW1CLHFCQUFuQixDQUE5RCxDQUFQO0FBQ0gsT0FiTSxDQUFQO0FBY0g7QUFFRDs7Ozs7OzZCQUdTO0FBQ0wsYUFDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDSTtBQUFPLFFBQUEsU0FBUyxFQUFDO0FBQWpCLFNBQW1ELEtBQUssS0FBTCxDQUFXLEtBQTlELENBREosRUFFSyxLQUFLLHNCQUFMLEVBRkwsRUFHSyxLQUFLLGVBQUwsRUFITCxDQURKLENBREo7QUFTSDs7OztFQXRGeUIsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IFJlcGVhdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBlYXRlcic7XG5pbXBvcnQgeyBEZXNpZ25PcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EZXNpZ25PcHRpb25zJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFNlcnZlclNpZGVSZW5kZXIsIERpc2FibGVkLCBQYW5lbEJvZHksIFRleHRDb250cm9sLCBUZXh0YXJlYUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCAndm9kaS9mYXEtc2VjdGlvbicsIHtcbiAgICB0aXRsZTogX18oJ0ZhcSBTZWN0aW9uICcsICd2b2RpJyksXG5cbiAgICBpY29uOiAnZWRpdG9yLWtpdGNoZW5zaW5rJyxcblxuICAgIGNhdGVnb3J5OiAndm9kaS1ibG9ja3MnLFxuXG4gICAgZWRpdDogKCAoIHByb3BzICkgPT4ge1xuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB7IGZhcV9hcmdzLCBkZXNpZ25fb3B0aW9ucyB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VGYXFBcmdzID0gbmV3RmFxQXJncyA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IGZhcV9hcmdzOiBKU09OLnN0cmluZ2lmeShbLi4ubmV3RmFxQXJnc10pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZUZhcUFyZ3NUaXRsZSA9IChuZXdGYXFBcmdzVGl0bGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgZmFxX2FyZ3NfdXBkYXRlZCA9IEpTT04ucGFyc2UoZmFxX2FyZ3MgKTtcbiAgICAgICAgICAgIGZhcV9hcmdzX3VwZGF0ZWRbaW5kZXhdLnRpdGxlID0gbmV3RmFxQXJnc1RpdGxlO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBmYXFfYXJnczogSlNPTi5zdHJpbmdpZnkoWy4uLmZhcV9hcmdzX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VGYXFBcmdzRGVzYyA9IChuZXdGYXFBcmdzRGVzYywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBmYXFfYXJnc191cGRhdGVkID0gSlNPTi5wYXJzZShmYXFfYXJncyApO1xuICAgICAgICAgICAgZmFxX2FyZ3NfdXBkYXRlZFtpbmRleF0uZGVzYyA9IG5ld0ZhcUFyZ3NEZXNjO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBmYXFfYXJnczogSlNPTi5zdHJpbmdpZnkoWy4uLmZhcV9hcmdzX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdMYW5kaW5nIEZhcXMnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgZmFxX2FyZ3MgPyBKU09OLnBhcnNlKGZhcV9hcmdzKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM9eyB7IHRpdGxlOiAnJywgZGVzYzogJycgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZXM9eyBvbkNoYW5nZUZhcUFyZ3MgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0ZhcSBUaXRsZScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZUZhcUFyZ3NUaXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRmFxIERlc2MnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2MnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZUZhcUFyZ3NEZXNjIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnRGVzaWduIE9wdGlvbnMnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZXNpZ25PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHsgeyAuLi5kZXNpZ25fb3B0aW9ucyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXNpZ25PcHRpb25zID0geyBvbkNoYW5nZURlc2lnbk9wdGlvbnMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICAgICAgICA8RGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIHsgZmFxX2FyZ3MgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2ZXJTaWRlUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jaz1cInZvZGkvZmFxLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogX18oJ0FkZCBGYXEnLCAndm9kaScpIH1cbiAgICAgICAgICAgICAgICA8L0Rpc2FibGVkPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9ICksXG5cbiAgICBzYXZlKCkge1xuICAgICAgICAvLyBSZW5kZXJpbmcgaW4gUEhQXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59ICk7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogRGVzaWduT3B0aW9ucyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIERlc2lnbk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBEZXNpZ25PcHRpb25zIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgPSB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gPSB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nVG9wKCBuZXdvbkNoYW5nZVBhZGRpbmdUb3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3RvcDogbmV3b25DaGFuZ2VQYWRkaW5nVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ0JvdHRvbSggbmV3b25DaGFuZ2VQYWRkaW5nQm90dG9tICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19ib3R0b206IG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdMZWZ0KCBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19sZWZ0OiBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1JpZ2h0KCBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfcmlnaHQ6IG5ld29uQ2hhbmdlUGFkZGluZ1JpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luVG9wKCBuZXdvbkNoYW5nZU1hcmdpblRvcCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl90b3A6IG5ld29uQ2hhbmdlTWFyZ2luVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luQm90dG9tKCBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl9ib3R0b206IG5ld29uQ2hhbmdlTWFyZ2luQm90dG9tXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIERlc2lnbk9wdGlvbnMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHBhZGRpbmdfdG9wLCBwYWRkaW5nX2JvdHRvbSwgcGFkZGluZ19sZWZ0LCBwYWRkaW5nX3JpZ2h0LCBtYXJnaW5fdG9wLCBtYXJnaW5fYm90dG9tIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFRvcCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIEJvdHRvbSAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX2JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIExlZnQgKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19sZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFJpZ2h0IChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfcmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gVG9wIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl90b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gQm90dG9tIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl9ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCwgQ2hpbGRyZW4gfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFBhbmVsLCBCdXR0b24sIEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogUmVwZWF0ZXIgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBlYXRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJlcGVhdGVyIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLnJlbmRlckFkZEJ1dHRvbiA9IHRoaXMucmVuZGVyQWRkQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uID0gdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVBZGQgPSB0aGlzLmhhbmRsZUFkZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVJlbW92ZSA9IHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cyA9IHRoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlckFkZEJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEJ1dHRvbiBpc0RlZmF1bHQgY2xhc3NOYW1lPVwiYnV0dG9uLWZ1bGx3aWR0aFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwicGx1c1wiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXJSZW1vdmVCdXR0b24oKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxCdXR0b24gaXNEZXN0cnVjdGl2ZSBjbGFzc05hbWU9XCJidXR0b24tcmVtb3ZlXCIgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmV9PlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJkaXNtaXNzXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGhhbmRsZUFkZCgpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWVzLCB1cGRhdGVWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdXJyZW50X3ZhbHVlcyA9IHZhbHVlcyA/IFsgLi4udmFsdWVzLCB7IC4uLmRlZmF1bHRWYWx1ZXMgfSBdIDogWyB7IC4uLmRlZmF1bHRWYWx1ZXMgfSBdO1xuICAgICAgICB1cGRhdGVWYWx1ZXMoIGN1cnJlbnRfdmFsdWVzICk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVtb3ZlKCBpbmRleCApIHtcbiAgICAgICAgY29uc3QgeyB1cGRhdGVWYWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjdXJyZW50X3ZhbHVlcyA9IHZhbHVlcy5maWx0ZXIoICggdmFsdWUsIGkgKSA9PiBpICE9IGluZGV4ICk7XG4gICAgICAgIHVwZGF0ZVZhbHVlcyggY3VycmVudF92YWx1ZXMgKTtcbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbkVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiggISB2YWx1ZXMgKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVfYnV0dG9uID0gdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24oKTtcblxuICAgICAgICByZXR1cm4gdmFsdWVzLm1hcCggKCB2YWx1ZSwgaW5kZXggKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkX2NoaWxkcmVuID0gQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoIGNoaWxkICkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZF9wcm9wcyA9IHsgLi4uY2hpbGQucHJvcHMgfTtcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVzW2luZGV4XVtjaGlsZC5wcm9wcy5uYW1lXSApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfcHJvcHNbY2hpbGQucHJvcHMudmFsdWVrZXldID0gdmFsdWVzW2luZGV4XVtjaGlsZC5wcm9wcy5uYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGRfcHJvcHNbY2hpbGQucHJvcHMudHJpZ2dlcl9tZXRob2RfbmFtZV0gPSAodmFsdWUpID0+IGNoaWxkLnByb3BzW2NoaWxkLnByb3BzLnRyaWdnZXJfbWV0aG9kX25hbWVdKHZhbHVlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCggY2hpbGQsIHsgLi4uY2hpbGRfcHJvcHMgfSApO1xuICAgICAgICAgICAgfSApO1xuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkX3JlbW92ZV9idXR0b24gPSBSZWFjdC5jbG9uZUVsZW1lbnQoIHJlbW92ZV9idXR0b24sIHsga2V5OiAncmVwZWF0ZXItcmVtb3ZlLScraW5kZXgsIG9uQ2xpY2s6ICgpID0+IHJlbW92ZV9idXR0b24ucHJvcHNbJ29uQ2xpY2snXShpbmRleCkgfSApO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggUGFuZWwsIHsga2V5OiAncmVwZWF0ZXItY2hpbGQtJytpbmRleCB9LCBbdXBkYXRlZF9jaGlsZHJlbiwgdXBkYXRlZF9yZW1vdmVfYnV0dG9uXSk7XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBSZXBlYXRlciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCByZXBlYXRlci1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+e3RoaXMucHJvcHMudGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW5FbGVtZW50cygpfVxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBZGRCdXR0b24oKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0=
