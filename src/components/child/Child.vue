<template>
    <div>
        <h1>child组件</h1>
        父组件传过来的数据：{{msg}}
        <button @click="send">
            传值给父组件
        </button>
    </div>
</template>
<script>
import { defineComponent,ref } from 'vue';

export default defineComponent({
    name:'Child',
    props:{
        msg:{
            //类型数据校验
            type:String,
            required:false,
            default:'默认值'
        }
    },
    setup(props,ctx) {
        let childmsg = ref('子组件数据');
        console.log(props);
        let send = ()=>{
            //ctx.emit分发事件，emit第一个参数是事件名称
            ctx.emit('send',childmsg)
        }
        return {
            send,
            childmsg
        }
    },
})
</script>
