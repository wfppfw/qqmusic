<template>
    <div :style="[`display:${isShowLogin?'':'none'}`]" >
        <div class="yqq-dialog-root">
            <div class="yqq-dialog-mask"></div>
            <div tabindex="-1" class="yqq-dialog-wrap" role="dialog">
                <div role="document" class="yqq-dialog yqq-dialog_centered" style="width: 700px; height: 488px;">
                    <div tabindex="0" aria-hidden="true"
                        style="width: 0px; height: 0px; overflow: hidden; outline: none;"></div>
                    <div class="yqq-dialog-content"><button @click="closeLogin" type="button" aria-label="Close"
                            class="yqq-dialog-close"><span class="yqq-dialog-close-x"></span></button>
                        <div class="yqq-dialog-body">
                            <div class="login-box">
                                <div class="login-box-hd">
                                    <h2 class="login-box-tit"><a class="login-box-tit__item current">第三方登陆</a><a
                                            class="login-box-tit__item">用户登录</a></h2>
                                </div>
                                <div class="login-box-bd">
                                    <div class="login-box-bd__item current">
                                        <!-- <iframe frameborder="0" width="100%"
                                            height="400" scrolling="no"
                                            src="https://github.com/login/oauth/authorize?client_id=62d4c5e678fa67817d41&redirect_uri=http://localhost:3000/github/"
                                            id="login_frame" name="login_frame"
                                            class="login-box-bd__ifr login-box-bd__ifr_qq">
                                            
                                            </iframe> -->
                                            <a target="_blank"  
                                            :href='[`https://github.com/login/oauth/authorize?client_id=62d4c5e678fa67817d41&redirect_uri=http://localhost:3000/github?id=${msg}`]'
                                            > 
                                               <span ></span>
                                                login
                                            </a>

                                            <div>
                                                <a @click="openIfream('github')">
                                                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
                                                </a>
                                            </div>

                                            
                                            </div>
                                    <div class="login-box-bd__item">
                                        <div class="login-box-bd__wx-tips">QQ与微信账号的音乐资产、付费特权不互通</div>
                                    </div>
                                </div>
                                <div class="login-box-download"><a class="login-box-download__btn">下载客户端 体验更多内容</a>
                                </div>
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
        name: 'login',
        props: {
            isShowLogin:{
                type:Boolean,
                default:false,
            },
            msg:{
                //类型数据校验
                type:String,
                required:false,
            },
            // time:{
            //     types:Number,
            //     require:false,
            //     default:0
            // }
        },
        setup(props, ctx) {
            // let childmsg = ref('子组件数据');
            // console.log(props);
            // let send = ()=>{
            //     //ctx.emit分发事件，emit第一个参数是事件名称
            //     ctx.emit('send',childmsg)
            // }
            // console.log(msg);
            let closeLogin = ()=>{
                ctx.emit('ShowLogin');
            }
            let openIfream = (value)=>{
                if(value==='github'){
                        window.open("https://github.com/login/oauth/authorize?client_id=62d4c5e678fa67817d41&redirect_uri=http://localhost:3000/github/", "_blank", "height=622, width=1000,scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes");

                }

            }
            return {
                closeLogin,
                openIfream
            }
        },
    });
</script>

<style scoped>

</style>