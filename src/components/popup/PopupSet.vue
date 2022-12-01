<template>
    <div :style="[`display:${isShow?'':'none'}`]">
        <div class="yqq-dialog-root">
            <div class="yqq-dialog-mask"></div>
            <div tabindex="-1" class="yqq-dialog-wrap" role="dialog">
                <div role="document" class="yqq-dialog yqq-dialog_centered" style="width: 600px;">
                    <div tabindex="0" aria-hidden="true"
                        style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
                    <div class="yqq-dialog-content"><button @click="showSets" type="button" aria-label="Close"
                            class="yqq-dialog-close"><span class="yqq-dialog-close-x"></span></button>
                        <div class="yqq-dialog-body">
                            <div class="mod_popup popup_player">
                                <div class="popup__hd">
                                    <h2 class="popup__tit">播放器设置</h2>
                                </div>
                                <div class="popup__bd">
                                    <div class="form__part">
                                        <div class="form__label">历史播放列表</div><span class="mod_form_check"><label
                                                class="form_check__label"><span
                                                    class="form_check__checkbox sprite form_check__checkbox--check"><input
                                                        type="checkbox" name="privacy"
                                                        class="form_check__check"></span>保留（勾选后，每次新打开播放器，将保留上次关闭时的播放列表）</label></span>
                                    </div>
                                    <div class="form__part">
                                        <div class="form__label">播放设置</div><span class="mod_form_radio"><label
                                                class="form_radio__label"><span
                                                    class="form_radio__radiobox sprite form_radio__radiobox--check"><input
                                                        type="radio" name="privacy"
                                                        class="form_radio__radio"></span>立即播放<span
                                                    class="c_tx_thin">(默认添加到播放队列最顶部)</span></label></span><span
                                            class="mod_form_radio"><label class="form_radio__label"><span
                                                    class="form_radio__radiobox sprite "><input type="radio"
                                                        name="privacy"
                                                        class="form_radio__radio"></span>添加到播放队列末尾</label></span><span
                                            class="mod_form_radio"><label class="form_radio__label"><span
                                                    class="form_radio__radiobox sprite "><input type="radio"
                                                        name="privacy"
                                                        class="form_radio__radio"></span>下一首播放</label></span>
                                    </div>
                                </div>
                                <div class="popup__ft"><button class="upload_btns__item mod_btn">取消</button><button
                                        class="upload_btns__item mod_btn_green">确定</button></div>
                            </div>
                        </div>
                    </div>
                    <div tabindex="0" aria-hidden="true"
                        style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        defineComponent,
        ref
    } from 'vue';

    export default defineComponent({
        name: 'sets',
        props: {
            isShow:{
                                //类型数据校验
                type:Boolean,
                required:false,
                default:false
            },
            // closed:{
            //     type:Function,
            //     required:false,
            // }
            // msg:{
            //     //类型数据校验
            //     type:String,
            //     required:false,
            //     default:'请选择歌曲'
            // },
            // time:{
            //     types:Number,
            //     require:false,
            //     default:0
            // }
        },
        // emits:[showSets],
        setup(props, ctx) {
            let childmsg = ref('子组件数据');
            // console.log(props);
            let showSets = ()=>{
                //ctx.emit分发事件，emit第一个参数是事件名称
                console.log("ss")
                ctx.emit('showSets')
            }
            return {
               showSets
            }
        },
    });
</script>

<style scoped>

</style>