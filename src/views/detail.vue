<template>
    <div>
        <h1>This is an detail page {{name}}</h1>
        <button @click="back">返回</button>
        <child :msg='msg' @send='send'></child>
    </div>
</template>

<script>
    import {
        defineComponent, onMounted,ref,onUnmounted
    } from 'vue';
    import child from '../components/child/Child.vue';
    import {
        useRouter,useRoute
    } from 'vue-router';
    export default defineComponent({
        name: 'detail',
        components:{
            child
        },
        setup() {
            //setup

            console.log('setup');
            //全局路由对象
            let name = ref('');
            let router = useRouter();
            //当前路由对象
            let route = useRoute();

            let msg = ref('这是父组件的数据');
                        //  生命周期
             onMounted(()=>{
                // onMounted比setup晚一些
                // 组件挂载过程，数据 dom...
                //数据初始化。接受路由传过来的参数处理
                //发请求
                name.value = route.query.name+' hello';
                console.log('onMounted')
             })
            
            onUnmounted(()=>{
                // 组件卸载，清除定时器，闭包变量

                // name.value = route.query.name+' hello';
                // console.log('onMounted')
             })
            console.log(route.query)
            let back = () => {
                router.back();
            }
            let send = (value)=>{
                console.log(value)
            }
            return {
                back,
                name,
                msg,
                send
            }
        }
    })
</script>

<style></style>