<template>
    <div class="container">
        <div>
            已完成{{isComplete}}/全部完成{{all}}
        </div>
        <button @click="clear" v-if="isComplete>0">清除已完成</button>
    </div>
</template>
<script>
    import {
        defineComponent,
        ref
    } from 'vue'
    export default defineComponent({
        name: 'navFooter',

        setup() {
            let isComplete = ref(1);
            let all = ref(3);
            let clear = () => {
                console.log(clear);
            }
            return {
                isComplete,
                all,
                clear
            }
        }
    })
</script>
<style scoped lang="scss">
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>