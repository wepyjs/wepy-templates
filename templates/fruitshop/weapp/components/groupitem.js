"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    gitem: {}
  },
  data: {},
  methods: {
    tap: function tap() {
      this.gitem.childname = "Child Random(".concat(Math.random(), ")");
      var index = this.$parent.$children.indexOf(this);
      console.log("Item ".concat(index, ", ID is ").concat(this.gitem.childid));
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });