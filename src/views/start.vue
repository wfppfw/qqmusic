<template>
    <div>
        <h1>This is an start page</h1>
        <button @click="start">开始任务</button>
    </div>
</template>

<script>
    import {
        defineComponent,
        ref
    } from 'vue';
    import {
        useRouter
    } from 'vue-router';
    export default defineComponent({
        name: 'start',
        setup() {
            let num = ref(10);
            let router = useRouter();
            //params 需要用name而不是path,不显示url上，query两者都可以
            let start = () => {
                router.push({
                    // path: '/home'
                    name:'home',
                    params:{
                        num:num.value
                    }
                });
            }
            return {
                start
            }
        }
    })
</script>

<style></style>