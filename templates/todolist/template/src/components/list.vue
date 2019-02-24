<template>
<div class="row">
  <div class="collection">
    <div class="collection-item" v-for="(todo, index) in todos" :key="todo.id">
      <checkbox-group @change="finishTodo(index)">
        <checkbox type="checkbox" :checked="todos[index].done" />
      </checkbox-group>
      <span class="title">\\{{todo.title}}</span>
      <span>
          <div @click="deleteTodo(index)">
          <image class="delete" src="../images/delete.png"></image>
          </div>
      </span>
    </div>
  </div>
</div>
</template>
<script{{#ts}} lang="typescript"{{/ts}}>
import wepy from '@wepy/core';

wepy.component({
  props: {
    todos: Array
  },
  methods: {
    finishTodo (index) {
      this.$emit('toggle', index);
    },
    deleteTodo (index) {
      this.$emit('delete', index);
    }
  }
});
</script>
<style lang="less">
@import '~@/common/style/variable.less';
.collection {
  border: 2rpx solid #e0e0e0;
  margin: 20rpx;
  padding: 0 20rpx;
  border-radius: 2rpx;
  overflow: hidden;
  position: relative
}

.collection .collection-item {
  background-color: #fff;
  padding: 20rpx 40rpx;
  height: 60rpx;
  margin: 0;
  border-bottom: 2rpx solid #e0e0e0;
  display: flex;
  align-items: center;
  &:last-child {
    border: none;
  }
  .title {
    width: 100%;
    font-size: 32rpx;
    color: @gray;
    margin-left: 40rpx;
  }
  .delete {
    width: 48rpx;
    height: 48rpx;
    margin-top: 20rpx;
  }
}

.collection .collection-item.avatar {
  min-height: 84*2rpx;
  padding-left: 72*2rpx;
  position: relative;
}
</style>
