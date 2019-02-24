
<template>
  <div class="app">
    <div class="container">
      <header></header>
      <add @add="add"></add>
      <list :todos="todos" @toggle="toggleTodo" @delete="deleteTodo"></list>
    </div>
  </div>
</template>

<script{{#ts}} lang="typescript"{{/ts}}>
  import wepy from '@wepy/core';

  {{#if ts}}
  declare type TodoItem = {
    title: string,
    done: boolean
  };

  declare type TodoList = Array<TodoItem>;
  {{/if}}

  wepy.page({
    data: {
      todos: {{#if ts}}<TodoList>{{/if}}[],
      newTodo: '',
      focus: false
    },
    methods: {
      add (todo{{#if ts}}: string{{/if}}) {
        this.todos.push({
          title: todo,
          done: false
        });
        wx.setStorageSync('_todos_', this.todos);
      },
      toggleTodo(index{{#if ts}}: number{{/if}}) {
        this.todos[index].done = true;  
        wx.setStorageSync('_todos_', this.todos);
      },
      deleteTodo(index{{#if ts}}: number{{/if}}) {
        this.todos.splice(index, 1);
        wx.setStorageSync('_todos_', this.todos);
      }
    },
    created () {
      let cache = {{#if ts}}<TodoList | null>{{/if}}wx.getStorageSync('_todos_');
      if (cache) {
        this.todos = cache;
      }
    }
  });
</script>
<config>
{
    navigationBarTitleText: 'WePY Todo List',
    usingComponents: {
      header: '~@/components/header',
      add: '~@/components/add',
      list: '~@/components/list'
    }
}
</config>
