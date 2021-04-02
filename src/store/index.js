import Vue from 'vue'
import Vuex from 'vuex'

import curriculumList from './modules/curriculumList'
import searchPage from './modules/searchPage'
import loginPage from "./modules/loginPage";
import homePage from "./modules/homePage";
import profilePage from "./modules/profilePage";

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    targetURL:'http://www.narotoconan.top:25565'
  },
  mutations:{},
  actions:{},
  getters:{},
  modules: {
    curriculumList,
    searchPage,
    loginPage,
    homePage,
    profilePage
  }
})
