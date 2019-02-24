<template>
  <div class="main">
    <div class="input-field" :class="{'active': focus}">
      <image src="{{focus ? '../images/menu-active.png' : '../images/menu.png'}}"></image>
      <input v-model="newTodo" class="input" @focus="focus = true" @blur="clear" />
      <span class="placeholder">What to do?</span>
    </div>
    <button hover-class="button_hover" class="btn waves-effect col s12" @tap="submitTodo">Add</button>
  </div>
</template>
<script{{#ts}} lang="typescript"{{/ts}}>
import wepy from '@wepy/core';
import { String } from '../common/lib/stringOpration'; 

  wepy.component({
    data: {
      newTodo: '',
      focus: false
    },
    methods: {
      clear () {
        this.focus = false;
        // Can not remove it directly, otherwise v-model will set to empty before submit.
        setTimeout(() => this.newTodo = '', 10);
      },
      submitTodo () {
        if (this.newTodo !== String.Empty) {
          this.$emit('add', this.newTodo);
        }
      }
    }
  })
</script>
<style lang="less">
@import '~@/common/style/variable.less';
.main {
  padding: 20rpx;
  .input-field {
    display: flex;
    position: relative;
    align-items: center;
    image {
      width: 56rpx;
      height: 48rpx;
    }
    .input {
      margin-left: 40rpx;
      margin-bottom: 30rpx;
      height: 100rpx;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #9e9e9e;
      border-radius: 0;
      outline: none;
      height: 3rem;
      width: 100%;
      font-size: 32rpx;
      padding: 0;
      -webkit-box-shadow: none;
      box-shadow: none;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      -webkit-transition: border .3s,-webkit-box-shadow .3s;
      transition: border .3s,-webkit-box-shadow .3s;
      transition: box-shadow .3s,border .3s;
      transition: box-shadow .3s,border .3s,-webkit-box-shadow .3s
    }
    .placeholder {
      position: absolute;
      display: block;
      top: 10px;
      left: 84rpx;
      color: @gray;
      font-size: 28rpx;
      cursor: text;
      -webkit-transition: color .2s ease-out,-webkit-transform .2s ease-out;
      transition: color .2s ease-out,-webkit-transform .2s ease-out;
      transition: transform .2s ease-out,color .2s ease-out;
      transition: transform .2s ease-out,color .2s ease-out,-webkit-transform .2s ease-out;
      -webkit-transform-origin: 0 100%;
      transform-origin: 0 100%;
      text-align: initial;
      -webkit-transform: translateY(12px);
      transform: translateY(12px)
    }
    &.active {
      .input {
        border-bottom: 1px solid #26a69a;
        -webkit-box-shadow: 0 1px 0 0 #26a69a;
        box-shadow: 0 1px 0 0 #26a69a
      }
      .placeholder {
        -webkit-transform: translateY(-14px) scale(.8);
        transform: translateY(-14px) scale(.8);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        color: #26a69a;
      }
    }
  }
}
</style>
