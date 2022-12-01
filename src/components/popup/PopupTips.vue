<template>
        <div class="mod_popup_tips" id="popup" :style="[`z-index: 2147483647; margin-left: -81px; margin-top: -73px; display:${time>0?'':'none'};`]">
            <i class="popup_tips__icon popup_tips__icon_warning"></i>
            <h2 class="popup_tips__tit">{{msg}}</h2>
        </div>
</template>
<script>
    import {
        defineComponent,
        ref
    } from 'vue';

    export default defineComponent({
        name: 'tips',
        props: {
            msg:{
                //类型数据校验
                type:String,
                required:false,
                default:'请选择歌曲'
            },
            time:{
                types:Number,
                require:false,
                default:0
            }
        },
        setup(props, ctx) {
            let childmsg = ref('子组件数据');
            // console.log(props);
            // let send = ()=>{
            //     //ctx.emit分发事件，emit第一个参数是事件名称
            //     ctx.emit('send',childmsg)
            // }
            return {
    
            }
        },
    });
</script>

<style scoped>

</style>