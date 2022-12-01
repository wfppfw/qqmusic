import { createStore, storeKey } from 'vuex'
import ModuleGithubUser from './user/githubUser'
export default createStore({
  //定义所需要的状态
   // 1、 存储所有全局数据
  state: {
    jsUIID:'',
    name:'jack',
    list:[{
      title: '吃饭',
      complete: false
  },
  {
      title: '睡觉',
      complete: false
  },
  {
      title: '喝水',
      complete: false
  },

]
  },
  
   // 2、 需要通过计算获取state里的内容获取的数据
  // 只能读取不可修改
  getters: {
  },
  

  //  3、定义对state的各种操作
  // why不直接实现在mutation里需要写到action里?
  // mtations不能执行异步操作。aq:从云端获取信息-->(等待云端反馈)更新到state异步操作
  // 因此说:对于异步操作需要放到action里，简单的直接赋值操作可以直接放到mutation里
  mutations: {
    setjsUIID(state,payload){
      state.jsUIID = payload
    },






    addToto(state,payload){
      state.list.push(payload);
    },
    setName(state,payload){
      state.name = payload;
    },
    delTodo(state,playload){
      state.list.splice(playload,1);
    },
    clear(state,payload){
      state.list = payload;

    }
  },
  

    // 3、定义对state的各种操作
  // actions无法直接修改state，需要在mutations里更新
  // mutation不支持异步，所以需要在action里写api到url
  actions: {
    asyncSetName(store,params){
      setTimeout(()=>{
        store.commit('setName',params)
      },2000)
    }
  },
   // state中信息过长时
  // 用来将state进行分割
  // 如下，将state树分割出一个user state。
  modules: {
    githubUser: ModuleGithubUser,
  }
})
