<template>
    <div>
        <input placeholder="请输入任务名称" v-model="value" @keydown.enter="enter">
    </div>
</template>
<script>
    import {
        defineComponent,
        ref
    } from 'vue';
    export default defineComponent({
        name: 'navHeader',
        setup(props) {
            let value = ref('');
            let enter = () => {
                console.log(value.value)
            }
            return {
                value,
                enter
            }
        }
    })
</script>
<style>

</style>