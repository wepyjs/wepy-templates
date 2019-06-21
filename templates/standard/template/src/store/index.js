{{#if_eq state "Vuex"}}
import Vuex from '@wepy/x';

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    }
  },
  actions: {
    increment ({ commit }) {
      commit('increment');
    },
    decrement ({ commit }) {
      commit('decrement');
    },
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment');
      }, 1000);
    }
  }
});
{{/if_eq}}
{{if_eq state "Redux"}}
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'

import rootReducer from './reducers';

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
{{/if_eq}}
