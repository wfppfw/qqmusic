<template>
    <div>
        <nav-header></nav-header>
        <nav-main></nav-main>
        <nav-footer></nav-footer>
        <div @click="click1">{{name}}</div>
        <div @click="click2">{{num}}</div>
        <div>{{arr + add}}</div>
        <div>{{list}}</div>
        <button @click="goto">执行任务</button>
        <div>{{count}}</div>
        <button @click="increment"> 增加+</button>
    </div>
</template>
<script>
    import {
        defineComponent,
        ref,
        reactive,
        toRefs,
        computed
    } from 'vue';
    import NavHeader from '@/components/navHeader/navHeader';
    import NavMain from '@/components/navMain/navMain';
    import NavFooter from '@/components/navFooter/navFooter';
    import {
        useStore
    } from 'vuex';
    import {
      useRoute,
        useRouter
    } from 'vue-router';
    import {storeToRefs} from 'pinia';
    import {useOptionStore} from '@/store/pinia/testPinia';
    export default defineComponent({
        name: 'Home', //
        props: {

        },
        components: {
            NavHeader,
            NavMain,
            NavFooter
        },
        setup(props, ctx) {
            let num = ref(10);
            let name = ref('wfp');
            let arr = ref([1, 2, 3, 4]);
            let add = computed(() => {

                return num.value + name.value
            });
            let obj = ref({msg:'start'})
            let click1 = () => {
                num.value++
                console.log(num.value)
            }
        

            let data = reactive({
                name: 'javk',
                num: 20,
                obj: {
                    price: 20
                },
                arr: ['a', 'b', 'c', 'd']
            })
            let click2 = () => {
                console.log(data.name);
            }
            let store = useStore();
            console.log(store)
            let list = computed(() => {
                return store.state.list
            })
            let router = useRouter();
            let route = useRoute();
            console.log(route.params)
            let goto = () => {
                router.push({
                    path: '/detail',
                    query:{
                        name:name.value,
                        obj:JSON.stringify(obj)
                    }
                })
            }

            const store1 = useOptionStore();
            const {increment} = store1;
            const {count} = storeToRefs(store1);
            return {
                increment,
                count,
                // num,
                // name,
                // arr,
                ...toRefs(data),
                click1,
                click2,
                add,
                list,
                goto,

            }
        }
    });
</script>

<style>

</style>