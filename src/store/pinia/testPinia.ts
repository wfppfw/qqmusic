import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Options } from 'vue-class-component';

interface OptionsCount {

}

// defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象
//Option Store
export const useOptionStore = defineStore('OptionStore', {
  state: () => ({
    count : 0,
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
//Setup Store
export const useSetupStore = defineStore('SetupStore', () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }
  return { count, increment };
});
