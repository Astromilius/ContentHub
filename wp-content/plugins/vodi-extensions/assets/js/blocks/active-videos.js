(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ShortcodeAtts = require("../components/ShortcodeAtts");

var _DesignOptions = require("../components/DesignOptions");

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
registerBlockType('vodi/active-videos', {
  title: __('Active Videos Block', 'vodi'),
  icon: 'video-alt2',
  category: 'vodi-blocks',
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var section_title = attributes.section_title,
        shortcode_atts = attributes.shortcode_atts,
        section_background = attributes.section_background,
        design_options = attributes.design_options;

    var onChangeSectionTitle = function onChangeSectionTitle(newSectionTitle) {
      setAttributes({
        section_title: newSectionTitle
      });
    };

    var onChangeShortcodeAtts = function onChangeShortcodeAtts(newShortcodeAtts) {
      setAttributes({
        shortcode_atts: _objectSpread({}, shortcode_atts, newShortcodeAtts)
      });
    };

    var onChangeSectionBackground = function onChangeSectionBackground(newSectionBackground) {
      setAttributes({
        section_background: newSectionBackground
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
    }), wp.element.createElement(SelectControl, {
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
    }), wp.element.createElement(PanelBody, {
      title: __('Videos Attributes', 'vodi'),
      initialOpen: true
    }, wp.element.createElement(_ShortcodeAtts.ShortcodeAtts, {
      postType: "video",
      catTaxonomy: "video_cat",
      hideFields: ['top_rated'],
      attributes: _objectSpread({}, shortcode_atts),
      updateShortcodeAtts: onChangeShortcodeAtts
    })), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: _objectSpread({}, design_options),
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, wp.element.createElement(ServerSideRender, {
      block: "vodi/active-videos",
      attributes: attributes
    })));
  },
  save: function save() {
    // Rendering in PHP
    return null;
  }
});

},{"../components/DesignOptions":2,"../components/ShortcodeAtts":6}],2:[function(require,module,exports){
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

},{"../utils/api":8,"../utils/useful-funcs":9,"./ItemList":4}],6:[function(require,module,exports){
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

},{"./PostSelector":5,"./TermSelector":7}],7:[function(require,module,exports){
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

},{"../utils/api":8,"../utils/useful-funcs":9,"./ItemList":4}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvYWN0aXZlLXZpZGVvcy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvRGVzaWduT3B0aW9ucy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSXRlbS5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSXRlbUxpc3QuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1Bvc3RTZWxlY3Rvci5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvU2hvcnRjb2RlQXR0cy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvVGVybVNlbGVjdG9yLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvdXRpbHMvYXBpLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvdXRpbHMvdXNlZnVsLWZ1bmNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7Ozs7O0lBRVEsRSxHQUFPLEVBQUUsQ0FBQyxJLENBQVYsRTtJQUNBLGlCLEdBQXNCLEVBQUUsQ0FBQyxNLENBQXpCLGlCO0lBQ0EsaUIsR0FBc0IsRUFBRSxDQUFDLE0sQ0FBekIsaUI7SUFDQSxRLEdBQWEsRUFBRSxDQUFDLE8sQ0FBaEIsUTtxQkFDc0UsRUFBRSxDQUFDLFU7SUFBekUsZ0Isa0JBQUEsZ0I7SUFBa0IsUSxrQkFB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V1A7Ozs7Ozs7OztBQUtPLElBQU0sVUFBVSxHQUFHLFNBQWIsVUFBYSxDQUFBLEdBQUc7QUFBQSxTQUFJLFFBQVEsQ0FBQyxHQUFELEVBQU0sSUFBTixDQUFaO0FBQUEsQ0FBdEI7QUFFUDs7Ozs7Ozs7OztBQU1PLElBQU0sUUFBUSxHQUFHLFNBQVgsUUFBVyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWdCO0FBQ3BDLE1BQUksT0FBTyxHQUFHLElBQWQ7QUFFQSxTQUFPLFlBQVk7QUFDZixRQUFNLE9BQU8sR0FBRyxJQUFoQjtBQUNBLFFBQU0sSUFBSSxHQUFHLFNBQWI7O0FBRUEsUUFBTSxLQUFLLEdBQUcsU0FBUixLQUFRLEdBQU07QUFDaEIsTUFBQSxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQVgsRUFBb0IsSUFBcEI7QUFDSCxLQUZEOztBQUlBLElBQUEsWUFBWSxDQUFDLE9BQUQsQ0FBWjtBQUNBLElBQUEsT0FBTyxHQUFHLFVBQVUsQ0FBQyxLQUFELEVBQVEsSUFBUixDQUFwQjtBQUNILEdBVkQ7QUFXSCxDQWRNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgU2hvcnRjb2RlQXR0cyB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2hvcnRjb2RlQXR0cyc7XG5pbXBvcnQgeyBEZXNpZ25PcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EZXNpZ25PcHRpb25zJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmVkaXRvcjtcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFNlcnZlclNpZGVSZW5kZXIsIERpc2FibGVkLCBQYW5lbEJvZHksIFRleHRDb250cm9sLCBTZWxlY3RDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3ZvZGkvYWN0aXZlLXZpZGVvcycsIHtcbiAgICB0aXRsZTogX18oJ0FjdGl2ZSBWaWRlb3MgQmxvY2snLCAndm9kaScpLFxuXG4gICAgaWNvbjogJ3ZpZGVvLWFsdDInLFxuXG4gICAgY2F0ZWdvcnk6ICd2b2RpLWJsb2NrcycsXG5cbiAgICBlZGl0OiAoICggcHJvcHMgKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgc2V0QXR0cmlidXRlcyB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IHsgc2VjdGlvbl90aXRsZSwgc2hvcnRjb2RlX2F0dHMsIHNlY3Rpb25fYmFja2dyb3VuZCwgZGVzaWduX29wdGlvbnMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGUgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX3RpdGxlOiBuZXdTZWN0aW9uVGl0bGUgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2hvcnRjb2RlQXR0cyA9IG5ld1Nob3J0Y29kZUF0dHMgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzaG9ydGNvZGVfYXR0czogeyAuLi5zaG9ydGNvZGVfYXR0cywgLi4ubmV3U2hvcnRjb2RlQXR0cyB9IH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25CYWNrZ3JvdW5kID0gbmV3U2VjdGlvbkJhY2tncm91bmQgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX2JhY2tncm91bmQ6IG5ld1NlY3Rpb25CYWNrZ3JvdW5kIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTZWN0aW9uIFRpdGxlJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VjdGlvbl90aXRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU2VjdGlvblRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQmFja2dyb3VuZCBDb2xvcicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHNlY3Rpb25fYmFja2dyb3VuZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdEZWZhdWx0JywgJ3ZvZGknKSwgdmFsdWU6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0RhcmsnLCAndm9kaScpLCB2YWx1ZTogJ2RhcmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ01vcmUgRGFyaycsICd2b2RpJyksIHZhbHVlOiAnZGFyayBtb3JlLWRhcmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0xlc3MgRGFyaycsICd2b2RpJyksIHZhbHVlOiAnZGFyayBsZXNzLWRhcmsnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0xpZ2h0JywgJ3ZvZGknKSwgdmFsdWU6ICdsaWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnTW9yZSBMaWdodCcsICd2b2RpJyksIHZhbHVlOiAnbGlnaHQgbW9yZS1saWdodCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25CYWNrZ3JvdW5kIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdWaWRlb3MgQXR0cmlidXRlcycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnRjb2RlQXR0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ3ZpZGVvJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdFRheG9ub215ID0gJ3ZpZGVvX2NhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRlRmllbGRzID0geyBbJ3RvcF9yYXRlZCddIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0geyB7IC4uLnNob3J0Y29kZV9hdHRzIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNob3J0Y29kZUF0dHMgPSB7IG9uQ2hhbmdlU2hvcnRjb2RlQXR0cyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdEZXNpZ24gT3B0aW9ucycsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0geyB7IC4uLmRlc2lnbl9vcHRpb25zIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlc2lnbk9wdGlvbnMgPSB7IG9uQ2hhbmdlRGVzaWduT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxEaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgPFNlcnZlclNpZGVSZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrPVwidm9kaS9hY3RpdmUtdmlkZW9zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM9eyBhdHRyaWJ1dGVzIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Rpc2FibGVkPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9ICksXG5cbiAgICBzYXZlKCkge1xuICAgICAgICAvLyBSZW5kZXJpbmcgaW4gUEhQXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59ICk7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogRGVzaWduT3B0aW9ucyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIERlc2lnbk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBEZXNpZ25PcHRpb25zIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgPSB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gPSB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nVG9wKCBuZXdvbkNoYW5nZVBhZGRpbmdUb3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3RvcDogbmV3b25DaGFuZ2VQYWRkaW5nVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ0JvdHRvbSggbmV3b25DaGFuZ2VQYWRkaW5nQm90dG9tICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19ib3R0b206IG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdMZWZ0KCBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19sZWZ0OiBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1JpZ2h0KCBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfcmlnaHQ6IG5ld29uQ2hhbmdlUGFkZGluZ1JpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luVG9wKCBuZXdvbkNoYW5nZU1hcmdpblRvcCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl90b3A6IG5ld29uQ2hhbmdlTWFyZ2luVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luQm90dG9tKCBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl9ib3R0b206IG5ld29uQ2hhbmdlTWFyZ2luQm90dG9tXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIERlc2lnbk9wdGlvbnMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHBhZGRpbmdfdG9wLCBwYWRkaW5nX2JvdHRvbSwgcGFkZGluZ19sZWZ0LCBwYWRkaW5nX3JpZ2h0LCBtYXJnaW5fdG9wLCBtYXJnaW5fYm90dG9tIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFRvcCAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIEJvdHRvbSAocHgpJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX2JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIExlZnQgKHB4KScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19sZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFJpZ2h0IChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfcmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gVG9wIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl90b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gQm90dG9tIChweCknLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl9ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIlxuLyoqXG4gKiBJdGVtIENvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbVRpdGxlIC0gQ3VycmVudCBpdGVtIHRpdGxlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xpY2tIYW5kbGVyIC0gdGhpcyBpcyB0aGUgaGFuZGxpbmcgZnVuY3Rpb24gZm9yIHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGl0ZW1JZCAtIEN1cnJlbnQgaXRlbSBJRFxuICogQHBhcmFtIGljb25cbiAqIEByZXR1cm5zIHsqfSBJdGVtIEhUTUwuXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtID0gKHsgdGl0bGU6IHsgcmVuZGVyZWQ6IGl0ZW1UaXRsZSB9ID0ge30sIG5hbWUsIGNsaWNrSGFuZGxlciwgaWQ6IGl0ZW1JZCwgaWNvbiB9KSA9PiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYm9keVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIml0ZW0tdGl0bGVcIj57aXRlbVRpdGxlfXtuYW1lfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihpdGVtSWQpfT57aWNvbn08L2J1dHRvbj5cbiAgICA8L2FydGljbGU+XG4pOyIsImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL0l0ZW0nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEl0ZW1MaXN0IENvbXBvbmVudFxuICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIENvbXBvbmVudCBwcm9wcy5cbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtTGlzdCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IGZpbHRlcmVkID0gZmFsc2UsIGxvYWRpbmcgPSBmYWxzZSwgaXRlbXMgPSBbXSwgYWN0aW9uID0gKCkgPT4ge30sIGljb24gPSBudWxsIH0gPSBwcm9wcztcblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLWl0ZW1zXCI+e19fKCdMb2FkaW5nIC4uLicsICd2b2RpJyl9PC9wPjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyZWQgJiYgaXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8cD57X18oJ1lvdXIgcXVlcnkgeWllbGRlZCBubyByZXN1bHRzLCBwbGVhc2UgdHJ5IGFnYWluLicsICd2b2RpJyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCAhIGl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA8IDEgKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJuby1pdGVtc1wiPntfXygnTm90IGZvdW5kLicsICd2b2RpJyl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0XCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiA8SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSBjbGlja0hhbmRsZXI9e2FjdGlvbn0gaWNvbj17aWNvbn0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTsiLCJpbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gJy4vSXRlbUxpc3QnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyB1bmlxdWVCeUlkLCBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzL3VzZWZ1bC1mdW5jcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcblxuLyoqXG4gKiBQb3N0U2VsZWN0b3IgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQb3N0U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBQb3N0U2VsZWN0b3IgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnBvc3RUeXBlIHx8ICdwb3N0JyxcbiAgICAgICAgICAgIHR5cGVzOiBbXSxcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclBvc3RzOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkUG9zdCA9IHRoaXMuYWRkUG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVBvc3QgPSB0aGlzLnJlbW92ZVBvc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb1Bvc3RGaWx0ZXIgPSBkZWJvdW5jZSh0aGlzLmRvUG9zdEZpbHRlci5iaW5kKHRoaXMpLCAzMDApO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgaXQgY2FsbHMgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBGZXRjaGVzIHBvc3RzIHR5cGVzLCBzZWxlY3RlZCBwb3N0cyB0aGVuIG1ha2VzIGZpcnN0IGNhbGwgZm9yIHBvc3RzXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwaS5nZXRQb3N0VHlwZXMoKVxuICAgICAgICAgICAgLnRoZW4oKCByZXNwb25zZSApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlU2VsZWN0ZWRQb3N0cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoIHNlbGVjdGVkUG9zdHMgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHNlbGVjdGVkUG9zdHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogc2VsZWN0ZWRQb3N0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRQb3N0cyB3cmFwcGVyLCBidWlsZHMgdGhlIHJlcXVlc3QgYXJndW1lbnQgYmFzZWQgc3RhdGUgYW5kIHBhcmFtZXRlcnMgcGFzc2VkL1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIC0gZGVzaXJlZCBhcmd1bWVudHMgKGNhbiBiZSBlbXB0eSkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD59XG4gICAgICovXG4gICAgZ2V0UG9zdHMoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBcmdzID0ge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS50eXBlLFxuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0QXJndW1lbnRzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdEFyZ3MsXG4gICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFyZ3VtZW50cy5yZXN0QmFzZSA9IHRoaXMuc3RhdGUudHlwZXNbdGhpcy5zdGF0ZS50eXBlXS5yZXN0X2Jhc2U7XG5cbiAgICAgICAgcmV0dXJuIGFwaS5nZXRQb3N0cyhyZXF1ZXN0QXJndW1lbnRzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0QXJndW1lbnRzLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclBvc3RzOiByZXNwb25zZS5maWx0ZXIoKHsgaWQgfSkgPT4gcG9zdElkcy5pbmRleE9mKGlkKSA9PT0gLTEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiB1bmlxdWVCeUlkKFsuLi50aGlzLnN0YXRlLnBvc3RzLCAuLi5yZXNwb25zZV0pLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlIHRvIGNvbnRpbnVlIHRoZSBjaGFpblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHBvc3RzIGJ5IGlkIGZyb20gdGhlIGBwb3N0c2Agc3RhdGUgb2JqZWN0IGFuZCBzb3J0cyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBzZWxlY3RlZCBhcnJheS5cbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBvYmplY3RzLlxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUG9zdElkcygpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZFBvc3RJZHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYoIHNlbGVjdGVkUG9zdElkcyApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJZHMgPSBBcnJheS5pc0FycmF5KCBzZWxlY3RlZFBvc3RJZHMgKSA/IHNlbGVjdGVkUG9zdElkcyA6IHNlbGVjdGVkUG9zdElkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RJZHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcG9zdHMgYnkgaWQgZnJvbSB0aGUgYHBvc3RzYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRQb3N0cyggcG9zdElkcyApIHtcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyUG9zdHNMaXN0ID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmcgJiYgIXRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZyA/IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMgOiBbXTtcbiAgICAgICAgY29uc3QgcG9zdExpc3QgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmlsdGVyUG9zdHMsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3RzXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RzID0gcG9zdExpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gcG9zdElkcy5pbmRleE9mKGlkKSAhPT0gLTEpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHBvc3RJZHMuaW5kZXhPZihhLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiSW5kZXggPSBwb3N0SWRzLmluZGV4T2YoYi5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4ID4gYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPCBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBzZWxlY3RlZFBvc3RzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgbmVjZXNzYXJ5IGFwaSBjYWxscyB0byBmZXRjaCB0aGUgc2VsZWN0ZWQgcG9zdHMgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU2VsZWN0ZWRQb3N0cygpIHtcbiAgICAgICAgY29uc3QgeyBwb3N0VHlwZSwgc2VsZWN0ZWRQb3N0SWRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHR5cGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpLmpvaW4oJywnKTtcblxuICAgICAgICBpZiAoICEgcG9zdElkcyApIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBhIGZha2UgcHJvbWlzZSB0aGF0IGF1dG8gcmVzb2x2ZXMuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zdF9hcmdzID0ge1xuICAgICAgICAgICAgaW5jbHVkZTogcG9zdElkcyxcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsXG4gICAgICAgICAgICBwb3N0VHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnBvc3RTdGF0dXMgKSB7XG4gICAgICAgICAgICBwb3N0X2FyZ3Muc3RhdHVzID0gdGhpcy5wcm9wcy5wb3N0U3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zdHMoe1xuICAgICAgICAgICAgLi4ucG9zdF9hcmdzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZGVzaXJlZCBwb3N0IGlkIHRvIHRoZSBzZWxlY3RlZFBvc3RJZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zdF9pZFxuICAgICAqL1xuICAgIGFkZFBvc3QocG9zdF9pZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnN0YXRlLmZpbHRlclBvc3RzLmZpbHRlcihwID0+IHAuaWQgPT09IHBvc3RfaWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3RzLFxuICAgICAgICAgICAgICAgIC4uLnBvc3RcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb3N0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5zZWxlY3RTaW5nbGUgKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIHBvc3RfaWQgXTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgLi4ucG9zdElkcywgcG9zdF9pZCBdO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGVzaXJlZCBwb3N0IGlkIHRvIHRoZSBzZWxlY3RlZFBvc3RJZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zdF9pZFxuICAgICAqL1xuICAgIHJlbW92ZVBvc3QocG9zdF9pZCkge1xuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyAuLi5wb3N0SWRzIF0uZmlsdGVyKGlkID0+IGlkICE9PSBwb3N0X2lkKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHNlYXJjaCBib3ggaW5wdXQgdmFsdWVcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHR5cGUgLSBjb21lcyBmcm9tIHRoZSBldmVudCBvYmplY3QgdGFyZ2V0LlxuICAgICAqL1xuICAgIGhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOmZpbHRlciA9ICcnIH0gPSB7fSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZmlsdGVyZWQgcG9zdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkUG9zdHM6IFtdLCBmaWx0ZXJpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvUG9zdEZpbHRlcigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdHVhbCBhcGkgY2FsbCBmb3Igc2VhcmNoaW5nIGZvciBxdWVyeSwgdGhpcyBmdW5jdGlvbiBpcyBkZWJvdW5jZWQgaW4gY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgZG9Qb3N0RmlsdGVyKCkge1xuICAgICAgICBjb25zdCB7IGZpbHRlciA9ICcnIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBvc3RfYXJncyA9IHt9O1xuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnBvc3RTdGF0dXMgKSB7XG4gICAgICAgICAgICBwb3N0X2FyZ3Muc3RhdHVzID0gdGhpcy5wcm9wcy5wb3N0U3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRQb3N0cyh7XG4gICAgICAgICAgICAuLi5wb3N0X2FyZ3NcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFBvc3RTZWxlY3RvciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwb3N0TGlzdCA9IHRoaXMuc3RhdGUuZmlsdGVyaW5nICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclBvc3RzIDogW107XG5cbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IDxJY29uIGljb249XCJwbHVzXCIgLz47XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSA8SWNvbiBpY29uPVwibWludXNcIiAvPjtcblxuICAgICAgICBjb25zdCBzZWFyY2hpbnB1dHVuaXF1ZUlkID0gJ3NlYXJjaGlucHV0LScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTYpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtcG9zdC1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLS1zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e19fKCdTZWFyY2ggUG9zdCcsICd2b2RpJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkUG9zdHNdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMucmVtb3ZlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3JlbW92ZUljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3NlYXJjaGlucHV0dW5pcXVlSWR9IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1BsZWFzZSBlbnRlciB5b3VyIHNlYXJjaCBxdWVyeS4uLicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17cG9zdExpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfHx0aGlzLnN0YXRlLmxvYWRpbmd8fHRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkPXt0aGlzLnN0YXRlLmZpbHRlcmluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5hZGRQb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQb3N0U2VsZWN0b3IgfSBmcm9tICcuL1Bvc3RTZWxlY3Rvcic7XG5pbXBvcnQgeyBUZXJtU2VsZWN0b3IgfSBmcm9tICcuL1Rlcm1TZWxlY3Rvcic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUmFuZ2VDb250cm9sLCBTZWxlY3RDb250cm9sLCBDaGVja2JveENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IGFwcGx5RmlsdGVycyB9ID0gd3AuaG9va3M7XG5cbi8qKlxuICogU2hvcnRjb2RlQXR0cyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFNob3J0Y29kZUF0dHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBTaG9ydGNvZGVBdHRzIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlTGltaXQgPSB0aGlzLm9uQ2hhbmdlTGltaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNvbHVtbnMgPSB0aGlzLm9uQ2hhbmdlQ29sdW1ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlT3JkZXJieSA9IHRoaXMub25DaGFuZ2VPcmRlcmJ5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VPcmRlciA9IHRoaXMub25DaGFuZ2VPcmRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlSWRzID0gdGhpcy5vbkNoYW5nZUlkcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkgPSB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUdlbnJlID0gdGhpcy5vbkNoYW5nZUdlbnJlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGZWF0dXJlZCA9IHRoaXMub25DaGFuZ2VGZWF0dXJlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlVG9wUmF0ZWQgPSB0aGlzLm9uQ2hhbmdlVG9wUmF0ZWQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUxpbWl0KCBuZXdMaW1pdCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIGxpbWl0OiBuZXdMaW1pdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUNvbHVtbnMoIG5ld0NvbHVtbnMgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBjb2x1bW5zOiBuZXdDb2x1bW5zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlT3JkZXJieSggbmV3T3JkZXJieSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIG9yZGVyYnk6IG5ld09yZGVyYnlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VPcmRlciggbmV3T3JkZXIgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBvcmRlcjogbmV3T3JkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VJZHMoIG5ld0lkcyApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIGlkczogbmV3SWRzLmpvaW4oJywnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZUNhdGVnb3J5KCBuZXdDYXRlZ29yeSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTaG9ydGNvZGVBdHRzKHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiBuZXdDYXRlZ29yeS5qb2luKCcsJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VHZW5yZSggbmV3R2VucmUgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBnZW5yZTogbmV3R2VucmUuam9pbignLCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRmVhdHVyZWQoIG5ld0ZlYXR1cmVkICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgZmVhdHVyZWQ6IG5ld0ZlYXR1cmVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlVG9wUmF0ZWQoIG5ld1RvcFJhdGVkICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgdG9wX3JhdGVkOiBuZXdUb3BSYXRlZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBTaG9ydGNvZGVBdHRzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgcG9zdFR5cGUsIGNhdFRheG9ub215LCBtaW5MaW1pdCA9IDEsIG1heExpbWl0ID0gMjAsIG1pbkNvbHVtbnMgPSAxLCBtYXhDb2x1bW5zID0gNiwgaGlkZUZpZWxkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBsaW1pdCwgY29sdW1ucywgb3JkZXJieSwgb3JkZXIsIGlkcywgY2F0ZWdvcnksIGdlbnJlLCBmZWF0dXJlZCwgdG9wX3JhdGVkIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdsaW1pdCcpICkgPyAoXG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0xpbWl0JywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBsaW1pdCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUxpbWl0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgYXBwbHlGaWx0ZXJzKCAndm9kaS5jb21wb25lbnQuc2hvcnRjb2RlQXR0cy5saW1pdC5taW4nLCBtaW5MaW1pdCApIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgYXBwbHlGaWx0ZXJzKCAndm9kaS5jb21wb25lbnQuc2hvcnRjb2RlQXR0cy5saW1pdC5tYXgnLCBtYXhMaW1pdCApIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2NvbHVtbnMnKSApID8gKFxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdDb2x1bW5zJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBjb2x1bW5zIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlQ29sdW1ucyB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IGFwcGx5RmlsdGVycyggJ3ZvZGkuY29tcG9uZW50LnNob3J0Y29kZUF0dHMuY29sdW1ucy5taW4nLCBtaW5Db2x1bW5zICkgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLmNvbHVtbnMubWF4JywgbWF4Q29sdW1ucyApIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ29yZGVyYnknKSApID8gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnT3JkZXJieScsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgb3JkZXJieSB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnVGl0bGUnLCAndm9kaScpLCB2YWx1ZTogJ3RpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0RhdGUnLCAndm9kaScpLCB2YWx1ZTogKCBwb3N0VHlwZSA9PT0gJ21vdmllJyA/ICdyZWxlYXNlX2RhdGUnIDogJ2RhdGUnICkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdJRCcsICd2b2RpJyksIHZhbHVlOiAnaWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnUmFuZG9tJywgJ3ZvZGknKSwgdmFsdWU6ICdyYW5kJyB9LFxuICAgICAgICAgICAgICAgICAgICBdIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlT3JkZXJieSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdvcmRlcicpICkgPyAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdPcmRlcicsICd2b2RpJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgb3JkZXIgfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0FTQycsICd2b2RpJyksIHZhbHVlOiAnQVNDJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBsYWJlbDogX18oJ0RFU0MnLCAndm9kaScpLCB2YWx1ZTogJ0RFU0MnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VPcmRlciB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdpZHMnKSApID8gKFxuICAgICAgICAgICAgICAgIDxQb3N0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgcG9zdFR5cGUgPSB7IHBvc3RUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0SWRzPXsgaWRzID8gaWRzLnNwbGl0KCcsJykubWFwKE51bWJlcikgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUG9zdElkcz17IHRoaXMub25DaGFuZ2VJZHMgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICggcG9zdFR5cGUgPT09ICd2aWRlbycgKSAmJiAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2NhdGVnb3J5JykgKSA/IChcbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0geyBwb3N0VHlwZSB9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215ID0geyBjYXRUYXhvbm9teSB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVybUlkcz17IGNhdGVnb3J5ID8gY2F0ZWdvcnkuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRUZXJtSWRzPXsgdGhpcy5vbkNoYW5nZUNhdGVnb3J5IH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnZ2VucmUnKSApID8gKFxuICAgICAgICAgICAgICAgIDxUZXJtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgcG9zdFR5cGUgPSB7IHBvc3RUeXBlIH1cbiAgICAgICAgICAgICAgICAgICAgdGF4b25vbXkgPSB7IGNhdFRheG9ub215IH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXJtSWRzPXsgZ2VucmUgPyBnZW5yZS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZFRlcm1JZHM9eyB0aGlzLm9uQ2hhbmdlR2VucmUgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnICkgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdmZWF0dXJlZCcpICkgPyAoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0ZlYXR1cmVkJywgJ3ZvZGknKX1cbiAgICAgICAgICAgICAgICAgICAgaGVscD17X18oJ0NoZWNrIHRvIHNlbGVjdCBmZWF0dXJlZCBwb3N0cy4nLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgZmVhdHVyZWQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VGZWF0dXJlZCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCd0b3BfcmF0ZWQnKSApID8gKFxuICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdUb3AgUmF0ZWQnLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICBoZWxwPXtfXygnQ2hlY2sgdG8gc2VsZWN0IHRvcCByYXRlZCBwb3N0cy4nLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgdG9wX3JhdGVkIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlVG9wUmF0ZWQgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gXCIuL0l0ZW1MaXN0XCI7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IHVuaXF1ZUJ5SWQsIGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMvdXNlZnVsLWZ1bmNzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIFRlcm1TZWxlY3RvciBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFRlcm1TZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFRlcm1TZWxlY3RvciBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRlcm1zOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMucG9zdFR5cGUgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgdGF4b25vbXk6IHByb3BzLnRheG9ub215IHx8ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB0YXhvbm9taWVzOiBbXSxcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclRlcm1zOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZFRlcm0gPSB0aGlzLmFkZFRlcm0uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVUZXJtID0gdGhpcy5yZW1vdmVUZXJtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9UZXJtRmlsdGVyID0gZGVib3VuY2UodGhpcy5kb1Rlcm1GaWx0ZXIuYmluZCh0aGlzKSwgMzAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjb21wb25lbnQgbW91bnRzIGl0IGNhbGxzIHRoaXMgZnVuY3Rpb24uXG4gICAgICogRmV0Y2hlcyB0ZXJtcyB0YXhvbm9taWVzLCBzZWxlY3RlZCB0ZXJtcyB0aGVuIG1ha2VzIGZpcnN0IGNhbGwgZm9yIHRlcm1zXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwaS5nZXRUYXhvbm9taWVzKCB7IHR5cGU6IHRoaXMuc3RhdGUudHlwZSB9IClcbiAgICAgICAgICAgIC50aGVuKCggcmVzcG9uc2UgKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub21pZXM6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlU2VsZWN0ZWRUZXJtcygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRUZXJtcyB3cmFwcGVyLCBidWlsZHMgdGhlIHJlcXVlc3QgYXJndW1lbnQgYmFzZWQgc3RhdGUgYW5kIHBhcmFtZXRlcnMgcGFzc2VkL1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIC0gZGVzaXJlZCBhcmd1bWVudHMgKGNhbiBiZSBlbXB0eSkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD59XG4gICAgICovXG4gICAgZ2V0VGVybXMoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRUZXJtSWRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBcmdzID0ge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS50eXBlLFxuICAgICAgICAgICAgdGF4b25vbXk6IHRoaXMuc3RhdGUudGF4b25vbXksXG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RBcmd1bWVudHMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0QXJncyxcbiAgICAgICAgICAgIC4uLmFyZ3NcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0QXJndW1lbnRzLnJlc3RCYXNlID0gdGhpcy5zdGF0ZS50YXhvbm9taWVzW3RoaXMuc3RhdGUudGF4b25vbXldLnJlc3RfYmFzZTtcblxuICAgICAgICByZXR1cm4gYXBpLmdldFRlcm1zKHJlcXVlc3RBcmd1bWVudHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RBcmd1bWVudHMuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVGVybXM6IHJlc3BvbnNlLmZpbHRlcigoeyBpZCB9KSA9PiBzZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihpZCkgPT09IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXJtczogdW5pcXVlQnlJZChbLi4udGhpcy5zdGF0ZS50ZXJtcywgLi4ucmVzcG9uc2VdKSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZSB0byBjb250aW51ZSB0aGUgY2hhaW5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCB0ZXJtcyBieSBpZCBmcm9tIHRoZSBgdGVybXNgIHN0YXRlIG9iamVjdCBhbmQgc29ydHMgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgc2VsZWN0ZWQgYXJyYXkuXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygb2JqZWN0cy5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFRlcm1zKCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkVGVybUlkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUudGVybXNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoaWQpICE9PSAtMSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYUluZGV4ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihhLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiSW5kZXggPSB0aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkcy5pbmRleE9mKGIuaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA+IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4IDwgYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBuZWNlc3NhcnkgYXBpIGNhbGxzIHRvIGZldGNoIHRoZSBzZWxlY3RlZCB0ZXJtcyBhbmQgcmV0dXJucyBhIHByb21pc2UuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmV0cmlldmVTZWxlY3RlZFRlcm1zKCkge1xuICAgICAgICBjb25zdCB7IHRlcm1UeXBlLCBzZWxlY3RlZFRlcm1JZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdGF4b25vbWllcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIHNlbGVjdGVkVGVybUlkcyAmJiAhc2VsZWN0ZWRUZXJtSWRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSBmYWtlIHByb21pc2UgdGhhdCBhdXRvIHJlc29sdmVzLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGVybXMoe1xuICAgICAgICAgICAgaW5jbHVkZTogdGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMuam9pbignLCcpLFxuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHRlcm1UeXBlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZGVzaXJlZCB0ZXJtIGlkIHRvIHRoZSBzZWxlY3RlZFRlcm1JZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gdGVybV9pZFxuICAgICAqL1xuICAgIGFkZFRlcm0odGVybV9pZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnN0YXRlLmZpbHRlclRlcm1zLmZpbHRlcihwID0+IHAuaWQgPT09IHRlcm1faWQpO1xuICAgICAgICAgICAgY29uc3QgdGVybXMgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnRlcm1zLFxuICAgICAgICAgICAgICAgIC4uLnRlcm1cbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkVGVybUlkcyhbXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkcyxcbiAgICAgICAgICAgIHRlcm1faWRcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBkZXNpcmVkIHRlcm0gaWQgdG8gdGhlIHNlbGVjdGVkVGVybUlkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSB0ZXJtX2lkXG4gICAgICovXG4gICAgcmVtb3ZlVGVybSh0ZXJtX2lkKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRUZXJtSWRzKFtcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzXG4gICAgICAgIF0uZmlsdGVyKGlkID0+IGlkICE9PSB0ZXJtX2lkKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgc2VhcmNoIGJveCBpbnB1dCB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdHJpbmcgdHlwZSAtIGNvbWVzIGZyb20gdGhlIGV2ZW50IG9iamVjdCB0YXJnZXQuXG4gICAgICovXG4gICAgaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6ZmlsdGVyID0gJycgfSA9IHt9IH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlclxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmaWx0ZXJlZCB0ZXJtc1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRUZXJtczogW10sIGZpbHRlcmluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZG9UZXJtRmlsdGVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0dWFsIGFwaSBjYWxsIGZvciBzZWFyY2hpbmcgZm9yIHF1ZXJ5LCB0aGlzIGZ1bmN0aW9uIGlzIGRlYm91bmNlZCBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBkb1Rlcm1GaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyID0gJycgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmdldFRlcm1zKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFRlcm1TZWxlY3RvciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpc0ZpbHRlcmVkID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmc7XG4gICAgICAgIGNvbnN0IHRlcm1MaXN0ID0gaXNGaWx0ZXJlZCAmJiAhdGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nID8gdGhpcy5zdGF0ZS5maWx0ZXJUZXJtcyA6IFtdO1xuICAgICAgICBjb25zdCBTZWxlY3RlZFRlcm1MaXN0ICA9IHRoaXMuZ2V0U2VsZWN0ZWRUZXJtcygpO1xuXG4gICAgICAgIGNvbnN0IGFkZEljb24gPSA8SWNvbiBpY29uPVwicGx1c1wiIC8+O1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gPEljb24gaWNvbj1cIm1pbnVzXCIgLz47XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoaW5wdXR1bmlxdWVJZCA9ICdzZWFyY2hpbnB1dC0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDE2KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBjb21wb25lbnRzLXRlcm0tc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZC0tc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntfXygnU2VhcmNoIFRlcm0nLCAndm9kaScpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e1NlbGVjdGVkVGVybUxpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnJlbW92ZVRlcm19XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtyZW1vdmVJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfSBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdGV4dC1jb250cm9sX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VhcmNoaW5wdXR1bmlxdWVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCdQbGVhc2UgZW50ZXIgeW91ciBzZWFyY2ggcXVlcnkuLi4nLCAndm9kaScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Rlcm1MaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ3x8dGhpcy5zdGF0ZS5sb2FkaW5nfHx0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZD17aXNGaWx0ZXJlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5hZGRUZXJtfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJjb25zdCB7IGFwaUZldGNoIH0gPSB3cDtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBQb3N0VHlwZXMgZW5kcG9pbnQuXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBvc3RUeXBlcyA9ICgpID0+IHtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogJy93cC92Mi90eXBlcycgfSApO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBkZXNpcmVkIHBvc3QgdHlwZSBhbmQgYnVpbGRzIHRoZSBxdWVyeSBzdHJpbmcgYmFzZWQgb24gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IHJlc3RCYXNlIC0gcmVzdCBiYXNlIGZvciB0aGUgcXVlcnkuXG4gKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gKHsgcmVzdEJhc2UgPSBmYWxzZSwgLi4uYXJncyB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoYXJnID0+IGAke2FyZ309JHthcmdzW2FyZ119YCkuam9pbignJicpO1xuXG4gICAgbGV0IHBhdGggPSBgL3dwL3YyLyR7cmVzdEJhc2V9PyR7cXVlcnlTdHJpbmd9Jl9lbWJlZGA7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6IHBhdGggfSApO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBQb3N0VHlwZSBUYXhvbm9taWVzIGVuZHBvaW50LlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUYXhvbm9taWVzID0gKHsgLi4uYXJncyB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoYXJnID0+IGAke2FyZ309JHthcmdzW2FyZ119YCkuam9pbignJicpO1xuXG4gICAgbGV0IHBhdGggPSBgL3dwL3YyL3RheG9ub21pZXM/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIGRlc2lyZWQgcG9zdCB0eXBlIGFuZCBidWlsZHMgdGhlIHF1ZXJ5IHN0cmluZyBiYXNlZCBvbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gcmVzdEJhc2UgLSByZXN0IGJhc2UgZm9yIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGVybXMgPSAoeyByZXN0QmFzZSA9IGZhbHNlLCAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvJHtyZXN0QmFzZX0/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59OyIsIi8qKlxuICogUmV0dXJucyBhIHVuaXF1ZSBhcnJheSBvZiBvYmplY3RzIGJhc2VkIG9uIGEgZGVzaXJlZCBrZXkuXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgLSBhcnJheSBvZiBvYmplY3RzLlxuICogQHBhcmFtIHtzdHJpbmd8aW50fSBrZXkgLSBrZXkgdG8gZmlsdGVyIG9iamVjdHMgYnlcbiAqL1xuZXhwb3J0IGNvbnN0IHVuaXF1ZUJ5ID0gKGFyciwga2V5KSA9PiB7XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICByZXR1cm4gYXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgaWYgKGtleXMuaW5kZXhPZihpdGVtW2tleV0pICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXMucHVzaChpdGVtW2tleV0pO1xuICAgIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdW5pcXVlIGFycmF5IG9mIG9iamVjdHMgYmFzZWQgb24gdGhlIGlkIHByb3BlcnR5LlxuICogQHBhcmFtIHthcnJheX0gYXJyIC0gYXJyYXkgb2Ygb2JqZWN0cyB0byBmaWx0ZXIuXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHVuaXF1ZUJ5SWQgPSBhcnIgPT4gdW5pcXVlQnkoYXJyLCAnaWQnKTtcblxuLyoqXG4gKiBEZWJvdW5jZSBhIGZ1bmN0aW9uIGJ5IGxpbWl0aW5nIGhvdyBvZnRlbiBpdCBjYW4gcnVuLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdhaXQgLSBUaW1lIGluIG1pbGxpc2Vjb25kcyBob3cgbG9uZyBpdCBzaG91bGQgd2FpdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQpID0+IHtcbiAgICBsZXQgdGltZW91dCA9IG51bGw7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgfVxufTsiXX0=
