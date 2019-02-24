<script{{#ts}} lang="typescript"{{/ts}}>
import wepy from '@wepy/core'

wepy.app({
  onLaunch() {
    console.log('on launch')
  }
});
</script>
<config>
{
    pages: [
      'pages/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WePY Todo List',
      navigationBarTextStyle: 'black'
    }
  }
</config>
<style lang="less">
@import "~@/common/style/variable.less";
page, .container {
    width: 100%;
    height: 100%;
    margin: 0;
}
/*checkbox 整体大小  */
/*checkbox 选项框大小  */
checkbox .wx-checkbox-input {
  width: 36rpx;
  height: 36rpx;
  z-index: 0;
  border: 6rpx solid #5a5a5a;
  border-radius: 2rpx;
  -webkit-transition: .2s;
  transition: .2s;
}
/*checkbox选中后样式  */
checkbox .wx-checkbox-input.wx-checkbox-input-checked {
  border: none;
}
/*checkbox选中后图标样式  */
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
  width: 40rpx;
  height: 40rpx;
  line-height: 40rpx;
  text-align: center;
  font-size: 48rpx;
  color: @color;
  background: transparent;
  transform: translate(-50%, -50%) scale(1);
  -webkit-transform: translate(-50%, -50%) scale(1);
}
button { 
  font-size: 36rpx;
  text-decoration: none;
  color: #fff;
  background-color: #26a69a;
  text-align: center;
  letter-spacing: 1rpx;
  -webkit-transition: background-color .2s ease-out;
  transition: background-color .2s ease-out;
  cursor: pointer;
  border: none;
  border-radius: 2rpx;
  display: inline-block;
  height: 72rpx;
  line-height: 72rpx;
  padding: 0 32rpx;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  z-index: 1;
  -webkit-transition: .3s ease-out;
  transition: .3s ease-out;
  -webkit-box-shadow: 0 4rpx 4rpx 0 rgba(0,0,0,.14),0 6rpx 2rpx -4rpx rgba(0,0,0,.12),0 2rpx 10rpx 0 rgba(0,0,0,.2);
  box-shadow:  0 4rpx 4rpx 0 rgba(0,0,0,.14),0 6rpx 2rpx -4rpx rgba(0,0,0,.12),0 2rpx 10rpx 0 rgba(0,0,0,.2);
}
.button_hover {
  background-color: #1d7d74;
  -webkit-box-shadow: 0 6px 6px 0 rgba(0,0,0,.14),0 2px 14px 0 rgba(0,0,0,.12),0 6px 2px -2px rgba(0,0,0,.2);
  box-shadow:  0 6px 6px 0 rgba(0,0,0,.14),0 2px 14px 0 rgba(0,0,0,.12),0 6px 2px -2px rgba(0,0,0,.2);
}
</style>
