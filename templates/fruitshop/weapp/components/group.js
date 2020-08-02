"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import GroupItem from './groupitem'
_core["default"].component({
  props: {
    grouplist: {},
    index: {}
  },
  methods: {
    tap: function tap() {
      this.grouplist.name = "Parent Random(".concat(Math.random(), ")");
      var groups = this.$parent.$children.filter(function (com) {
        return com.$is === 'components/group';
      });
      var index = groups.indexOf(this);
      console.log("Clicked Group ".concat(index, ", ID is ").concat(this.grouplist.id));
    }
  }
}, {info: {"components":{"groupitem":{"path":"./groupitem"}},"on":{}}, handlers: {'8-0': {"tap": function proxy () {
  var $wx = arguments[arguments.length - 1].$wx;
  var $event = ($wx.detail && $wx.detail.arguments) ? $wx.detail.arguments[0] : arguments[arguments.length -1];
  var $args = $wx.detail && $wx.detail.arguments;
  var _vm=this;
  return (function () {
    _vm.tap.apply(_vm, $args || [$event]);
  })();
}}}, models: {}, refs: undefined });