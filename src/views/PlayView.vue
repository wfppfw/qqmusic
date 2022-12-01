<template>
    <div class="playBg" :onmouseup="dotCancel">
        <!-- <img clss="maskImg" ref="ImgMask" src="../assets/logo.png"> -->
        <!-- :style="{'background-color':songsArray.length>0?songsArray[songIndex].bgColor:'#000'}"  -->

        <h1 class="player_logo">
            <a target="_blank">
                <img src="../assets/player_logo.png" alt="QQ music">
            </a>
        </h1>

        <div class="bg_play_mask"></div>
        <div class="bg_player"
            :style="[`display: block; background-image: url(${songsArray.length>0?songsArray[songIndex].imgUrl:''});background-color: rgb(17, 17, 17);`]">

        </div>



        <div class="mod_player_login">
            <a class="player_login__link">
                <img :style="{'display':user.avatar_url.length>0?'':'none'}"
                    :src="[`${user.avatar_url.length>0?user.avatar_url:''}`]" class="player_login_cover">
                <img :src="[`${user.avatar_url.length>0?user.icon:''}`]" class="player_login__icon">
                <span @click="showLogin" class="player_login__txt">{{user.login.length>0?user.login:'登录'}}</span>
            </a>
            <a @click="showSets" class="player_login__link player_login__link--set">
                <span class="player_login__txt">设置</span>
            </a>
            <a @click="loginOut" :class="user.login.length>0?'player_login__out':'noStyle'">
                退出
            </a>
        </div>



        <div class="mod_player">
            <div class="player__hd"></div>
            <div class="player__bd">
                <div :style="[`display:${onlyStyle?'none':''}`]" class="player_style_normal">
                    <div class="mod_songlist_toolbar">
                        <a @click="likeSong" class="mod_btn"><i class="mod_btn_green__icon_like"></i>收藏<span
                                class="mod_btn__border"></span></a>
                        <a @click="addList" class="mod_btn"><i class="mod_btn_green__icon_add"></i>添加到<span
                                class="mod_btn__border"></span></a>
                        <a @click="downLoad" class="mod_btn"><i class="mod_btn_green__icon_down"></i>下载<span
                                class="mod_btn__border"></span></a>
                        <a @click="deleteSongs" class="mod_btn"><i class="mod_btn_green__icon_delete"></i>删除<span
                                class="mod_btn__border"></span></a>
                        <a @click="deleteSongs(-1)" class="mod_btn"><i class="mod_btn_green__icon_clear"></i>清空列表<span
                                class="mod_btn__border"></span></a>
                    </div>


                    <div class="sb_scrollable sb_main sb_viewport">
                        <div class="sb_overview">
                            <div class="mod_songlist mod_songlist--edit">
                                <ul class="songlist__header">
                                    <li :class="[`sprite songlist__edit songlist__edit${1>0?'--check':''}`]">
                                        <input type="checkbox" class="songlist__checkbox" />
                                    </li>
                                    <li class="songlist__header_name">歌曲</li>
                                    <li class="songlist__header_author">歌手</li>
                                    <li class="songlist__header_time">时长</li>
                                </ul>
                                <ul class="songlist__list">
                                    <li v-for="[songObj,Index] in songsArray.map((i,k)=>[i,k])" :key="songObj.index">

                                        <div
                                            :class="[`songlist__item songlist__item--even ${songIndex===songObj.index&&playStatus===true?'songlist__item--playing':''}`]">
                                            <div @click="changeChoosed(Index)"
                                                :class="[`sprite songlist__edit songlist__edit${songObj.choosed?'--check':''}`]">
                                                <input type="checkbox" class="songlist__checkbox">
                                                {{audio}}
                                            </div>
                                            <div class="songlist__number songlist__number--top">{{Index+1}}</div>
                                            <div class="songlist__songname">
                                                <a :style="{'display':songObj.mv?'':'none'}"
                                                    class="songlist__icon songlist__icon_mv sprite" title="MV"><span
                                                        class="icon_txt">MV</span>
                                                </a>
                                                <i :style="{'display':songObj.vip?'':'none'}"
                                                    class="songlist__icon songlist__icon_vip sprite" title="VIP">
                                                </i>

                                                <span class="songlist__songname_txt">
                                                    <a :title="[`${songObj.name}`]">{{songObj.name}}</a>
                                                </span>
                                                <div class="mod_list_menu"><a @click="playOrPause(Index)"
                                                        class="list_menu__item list_menu__play" title="播放"><i
                                                            :class="playStatus&&Index==songIndex?'list_menu__icon_pause':'list_menu__icon_play'"></i><span
                                                            class="icon_txt">播放</span></a>
                                                    <a @click="addList(songObj.id)"
                                                        class="list_menu__item list_menu__add" title="添加到歌单"><i
                                                            class="list_menu__icon_add"></i><span
                                                            class="icon_txt">添加到歌单</span></a>

                                                    <a class="list_menu__item list_menu__share" title="分享"><i
                                                            class="list_menu__icon_share"></i><span
                                                            class="icon_txt">分享</span></a>
                                                </div>
                                            </div>
                                            <div class="songlist__artist"><a class="playlist__author"
                                                    :title="[`${songObj.singer}`]">
                                                    {{songObj.singer}}
                                                </a>
                                                <!-- /<a class="playlist__author" title="Lara梁心颐"
                                                   >Lara梁心颐</a> -->
                                            </div>
                                            <div class="songlist__time songlist__time_delete">{{songObj.durtation}}
                                            </div><a @click="deleteSongs(Index)" class="songlist__delete"><span
                                                    class="icon_txt">删除</span></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mod_song_info">
                        <div class="song_info__info"><a class="song_info__cover" href="" target="_blank"
                                rel="noopener noreferrer"><img class="song_info__pic" loading="lazy"
                                    :src="songsArray.length>0?songsArray[songIndex].imgUrl:'https://y.qq.com/mediastyle/yqq/extra/player_cover.png?max_age=31536000'" /></a>
                            <div class="song_info__name">歌曲名：<a target="_blank"
                                    rel="noopener noreferrer">{{songsArray.length>0?songsArray[songIndex].name:""}}</a>
                            </div>
                            <div class="song_info__singer">歌手：<a class="playlist__author"
                                    :title="[`${songsArray.length>0?songsArray[songIndex].singer:''}`]">{{songsArray.length>0?songsArray[songIndex].singer:""}}</a>
                            </div>
                            <div class="song_info__album">专辑：<a target="_blank"
                                    rel="noopener noreferrer">{{songsArray.length>0?songsArray[songIndex].album:""}}
                                </a></div>

                        </div>
                        <!-- 歌词显示 -->
                        <div class="song_info__lyric">
                            <div @scroll="scrollTo" class="song_info__lyric_box" id="js_lyric_box">
                                <div class="song_info__lyric_inner"
                                    :style="{'transition':'transform 0.1s ease-out','transform':'translateY('+(0-tranY)+'px)'}"
                                    id="qrc_ctn" @scroll="scrollTo">
                                    <p v-for="[timeStart,timeEnd,content] in songsArray[songIndex]?.lyr"
                                        :key='timeStart'
                                        :class="{'on':audioTime*1000>timeStart && audioTime*1000<timeEnd}">
                                        <span>{{content}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div :style="[`display:${!onlyStyle?'none':''}`]" class="player_style_only">
                    <div class="mod_only_lyric">
                        <div class="only_lyric__inner" id="qrc_ctn"
                            style="transition: transform 0.1s ease-out 0s; transform: translateY(-98.4px);">
                            <p data-id="line_null">&nbsp;</p>
                            <p v-for="[timeStart,timeEnd,content] in lyrContent" :key='timeStart'
                                :class="{'on':audioTime*1000>timeStart && audioTime*1000<timeEnd}">
                                <span>{{content}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="player__ft">
                <a @click="prevSong" class="btn_big_prev"><span class="icon_txt">上一首</span></a>
                <a :class="{'btn_big_play':true,'btn_big_play--pause':playStatus}" @click="playOrPause(-1)"><span
                        class="icon_txt">播放</span></a>
                <a @click="nextSong" class="btn_big_next"><span class="icon_txt">下一首</span></a>
                <div class="player_music">
                    <div class="player_music__info" style="padding-right: 90px;"><a title="Back at One" target="_blank"
                            rel="noopener noreferrer">{{songsArray.length>0?songsArray[songIndex].name:''}}</a>
                        - <a class="playlist__author"
                            :title="[`${songsArray.length>0?songsArray[songIndex].name:''}`]">{{songsArray.length>0?songsArray[songIndex].singer:''}}</a>
                    </div>
                    <div class="player_music__time">{{audioCurrent}} / {{audioDuration}}</div>
                    <div class="player_progress" >
                        <div  class="player_progress__inner" @click="clickProgress">
                            <div class="player_progress__load" :style="{'width':0+'px','margin-left':0}"></div>
                            <div class="player_progress__play" :style="{'width':playProgress+0+'px','margin-left':0}">
                                <i :onmouseup="dotCancel" :onmousedown="dotMouse" class="player_progress__dot"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <a @click="changeStyle" :class="[`btn_big_style_${play_style[play_index][0]}`]"
                    :title="[`${play_style[play_index][1]}`]"><span
                        class="icon_txt">{{play_style[play_index][1]}}</span></a>
                <a @click="clickLike" :class="[`btn_big_like ${indexLike?'btn_big_like--like':''}`]"><span
                        class="icon_txt">喜欢</span></a>
                <a @click="downLoad(songIndex)" class="btn_big_down"><span class="icon_txt">下载</span></a>
                <a @click="changeOnly" :class="[`btn_big_only ${onlyStyle?'btn_big_only--on':''}`]"><span
                        class="icon_txt">{{onlyStyle?'关闭':'打开'}}纯洁模式</span></a>
                <a class="mod_btn_comment"><span class="icon_txt">无评论</span></a>
                <div class="player_progress player_voice">
                    <a @click="changeVoice" :class="[`btn_big_voice ${noVoice?'btn_big_voice--no':''}`]"><span
                            class="icon_txt">关闭声音</span></a>
                    <div @click="clickVolume"  class="player_progress__inner">
                        <div class="player_progress__load" style="width: 20.28%; margin-left: 0%;"></div>
                        <div class="player_progress__play" :style="[`width: ${noVoice?0:playerVolume*100}%; margin-left: 0%;`]"><i
                        :onmouseup="dotCancel" :onmousedown="volumeMouse"
                                class="player_progress__dot"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <audio @ended="endMusic" @canplay="endLoad" class="audio" ref="audio" @timeupdate="updateMsg"
         preload="auto"
            style="width: 0px; height: 0px;" >
            <source :src="songsArray[songIndex]?.audioUrl?songsArray[songIndex].audioUrl:''">
        </audio>
        <canvas id="canvas" ref="ImgColor"></canvas>
        <tips :time="tipsTime" :msg="tipsMsg"></tips>
        <sets :isShow="showSetPopup" @showSets="showSets"></sets>
        <login :isShowLogin="isShowLogin" @showLogin="showLogin" :msg="returnUIID()"></login>
    </div>
</template>


<script>
    import {
        defineComponent,
        reactive,
        ref,
        onMounted,
        onUnmounted,
        getCurrentScope,
        getCurrentInstance
    } from 'vue';
    import API from '../plugins/index';
    import axios from 'axios';
    import tips from '../components/popup/PopupTips.vue';
    import sets from '../components/popup/PopupSet.vue';
    import tool from '../util/playMusic/index';
    import login from '../components/popup/PopupLogin.vue';
    import {
        apiGetSongInfo
    } from '../api/qqmusic/getSong.ts';
    import {
        useStore
    } from 'vuex';
    import getUIID from '../util/jsUIID';

    // import './mock'
    export default defineComponent({
        name: 'Play',
        props: {

        },
        components: {
            tips,
            sets,
            login
        },
        //         beforeRouteEnter: (to, from, next) => {
        //     next(vm => {
        //       // 第一次登陆显示公告
        //       if (from.name === 'Login') {
        //         vm.message = 'test'
        //       }
        //    })
        //   },

        setup() {
            const store = useStore();
            const user = ref({
                login: '',
                id: '',
                avatar_url: '',
                icon: 'https://avatars.githubusercontent.com/in/15368?s=64&v=4'

            }); //用户对象
            let audio = ref(null); //当前音频对象
            const speedVisible = ref(false); // 设置音频播放速度弹窗
            const audioRef = ref(); // 音频标签对象
            const activeSpeed = ref(1); // 音频播放速度
            let audioDuration = ref(0); // 音频总时长
            let audioCurrent = ref('00:00'); // 音频当前播放时间
            const audioVolume = ref(1); // 音频声音，范围 0-1
            const playStatus = ref(false); // 音频播放状态：true 播放，false 暂停
            const playProgress = ref(0); // 音频播放进度
            const timeInterval = ref(); // 获取音频播放进度定时器
            const lyrContent = ref([]); //当前歌词内容和时间点
            let audioTime = ref(0);
            let tranY = ref(-88); //歌词移动位移
            let songsArray = ref([]); //歌曲数组
            let songIndex = ref(0); //当前歌曲index值;
            let noVoice = ref(false); //静音
            let play_style = ref([
                ["list", "列表循环"],
                ["single", "单曲循环"],
                ["random", "随机播放"],
                ["order", "顺序播放"]
            ]); //播放模式
            let play_index = ref(0); //当前播放模式循环随机单曲
            let audioPaused = ref(false);
            let tipsTime = ref(0);
            let showSetPopup = ref(false); //是否显示设置弹出框
            let onlyStyle = ref(false); //是否纯净模式
            let indexLike = ref(false); //当前歌曲是否喜欢
            let isShowLogin = ref(false); //是否显示登录框
            let tipsMsg = ref(""); //提示词
            let playerVolume = ref(1); //音量0-1；
            let moving = false;//鼠标是否在按下移动
            let moveEndTime = ref(0);
            // songsArray.value = [{
            //     id:'2',
            //     audioUrl: "../static/music/任然-飞鸟和蝉.mp4",
            //     lyrBase64: "",
            //     name: "飞鸟和蝉",
            //     singer: "任然",
            //     album: "飞鸟和蝉",
            //     bgColor: "#292a2b",
            //     mvUrl: "",
            //     mv: true,
            //     vip: true,
            //     index: "1",
            //     choosed: false,
            //     songDetail: "04:56",
            //     durtation: "04:56",
            //     imgUrl: 'https://y.qq.com/music/photo_new/T002R300x300M000004C9Kg7275J7H_1.jpg?max_age=2592000'
            // }];
            //解码歌词
            let parseLyric = (text) => {
                text = decodeURIComponent(escape(atob(text)));
                let lrc = text.split('\n').map(i => i.trim());
                //因为lrc分为两部分，所以我们需要正则表达式提取这两部分，特别是对时间的提取。
                //转换成数组,然后通过foreach遍历
                let start = new Date().getTime();
                let regx = /\[(\d{2}):(\d{2})\.(\d{2})](.*)/;
                let newregx = /\[\w{2}:(.*)]/;
                //因为lrc分为两部分，所以我们需要正则表达式提取这两部分，特别是对时间的提取。
                //转换成数组,然后通过foreach遍历
                let timeEnd = 0;
                let lyrObj = [];
                lrc.forEach((value) => {
                    let str = regx.exec(value);

                    if (str) {
                        //  regx中的{2}是因为时，分，秒都会存在两位数，不会只有一位数。下面的newregx                        // 是        对歌词开头的一些其他部分的处理。可以忽略！
                        //下面是时间的处理，需要将时分秒转换为ms。所以有以下代码的存在
                        let minute = parseFloat(str[1]);
                        let second = parseFloat(str[2]);
                        let millisecond = parseFloat(str[3]);
                        let content = str[4];
                        let end = new Date().getTime();
                        timeEnd = minute * 60 * 1000 + second * 1000 + millisecond;
                        // let time = minute * 60 * 1000 + second * 1000 + millisecond - (end - start);
                        if (lyrObj.length > 1) {
                            lyrObj[lyrObj.length - 1][1] = timeEnd;
                        }
                        lyrObj = [...lyrObj, [minute * 60 * 1000 + second *
                            1000 + millisecond, timeEnd, content
                        ]]

                    } else {
                        let deputy = newregx.exec(value);
                        if (deputy) {
                            // console.log(deputy[1], 'p');
                        }
                    }
                })

                lyrObj[lyrObj.length - 1][1] = timeEnd + 100;
                lyrObj[0][1] = lyrObj[1][0];
                lyrObj = lyrObj.filter(i => i[2] != '')
                lyrContent.value = [...lyrObj]
                return [...lyrObj];



            }
            let lyrLine = ref(0);
            //唯一标识客户端
            let returnUIID = () => {
                return store.state.jsUIID;
            }
            //监听歌词滑动事件
            let scrollTo = (e) => {
                tranY.value = e.target.scrollTop;
            };
            //音量点击
            let clickVolume = (e)=>{
                // 950-1032
                // audioVolume.value = audio.value.volume;
                    
                // playerVolume.value = 100*(e.clientX-950)/82;
                audio.value.volume = (e.clientX-950)/82;
                console.log(audio.value.volume)
                playerVolume.value = audio.value.volume
                // playerVolume.value = 
            }
            //音乐进度改变变化触发事件
            let updateMsg = (e) => {
                console.log("lyrContent:",audio.value.readyState,lyrLine.value);
                if (audio.value?.readyState === 4) {
                 
                    audioCurrent.value = tool.formatTime(tool.transTime(e.target.currentTime));
                    if(!moving){
                        playProgress.value = tool.percenTage(e.target.currentTime, e.target.duration, 312);
                    }
                    
                    audioTime.value = e.target.currentTime;
                    let sTime = e.target.currentTime * 1000;
                    if (lyrContent.value[lyrLine.value][0] <= sTime && sTime <= lyrContent.value[lyrLine
                            .value][
                            1
                        ] && lyrLine.value <= (lyrContent.value.length - 1)) {
                        tranY.value = tranY.value + 34;
                        lyrLine.value += 1;
                    }
                }

            }
            let lyrTo = (songLyr) => {
                return decodeURI(atob(songLyr))
            }
            //修改歌曲选中状态
            let changeChoosed = (index) => {
                songsArray.value[index].choosed = !songsArray.value[index].choosed;
            }
            //修改播放纯净模式
            let changeOnly = () => {
                onlyStyle.value = !onlyStyle.value;
            }
            //点击喜欢歌曲
            let clickLike = () => {
                indexLike.value = !indexLike.value;
            }
            //音源加载完毕触发
            let endLoad = async (e) => {
                // parseLyric(songsArray.value[songIndex.value].lyrBase64);

                audioDuration.value = tool.formatTime(tool.transTime(e.target.duration));

                try {
                    // let res = await audio.value.play();
                } catch (err) {
                    console.log(err);
                }

                //   console.log("audioDuration:",audioDuration.value);
            }
            //进度条点击,修改audio的当前时间
            let clickProgress = (e) => {
                audio.value.currentTime = 100;
                console.log('s')
                if (e.clientX >= 268 && e.clientX <= 585) {
                    // audioCurrent.value = 
                    // let timeC = audio.value.duration * (e.clientX - 268) / 312
                    // audio.value.currentTime = timeC;
                }
            }
            //改变播放模式,随机循环
            let changeStyle = (e) => {
                play_index.value = (play_index.value + 1) % 4;
            }
            let moveLyr = () => {

            }

            let getImgColor = (url) => {

            }
            let dotCancel = (e) => {
                console.log("cancel",moveEndTime.value);
                //audio.value.volume = playerVolume.value;
                // audio.value.currentTime = moveEndTime.value;
                window.onmousemove = null;
                //console.log("audio.value.currentTime",audio.value.currentTime,audio.value.duration,moveEndTime.value);
                // moving = false;
                
            }
            let volumeMouse = (e)=>{
                // moving = true;
                               // 获取按下鼠标时 盒子与页面的距离
                               
                var originBoxX = e.target.offsetLeft;
                var originBoxY = e.target.offsetTop;
                // 获取按下鼠标时 鼠标与页面的距离
                var mouseX = e.pageX;
                var mouseY = e.pageY;
                // 在页面上移动
                window.onmousemove = function (e) {
                    // 鼠标滑动的距离 = 鼠标移动后的位置 - 按下鼠标时的位置
                    var distanceX = e.pageX - mouseX;
                    var distanceY = e.pageY - mouseY;
                    // 给元素重新赋值 上左定位的位置

                    // console.log(originBoxX + distanceX,originBoxY + distanceY)
                    if(originBoxX + distanceX+3>=0&&originBoxX + distanceX+1<=75){
                        playerVolume.value = (originBoxX + distanceX+3)/78;
                        audio.value.volume = playerVolume.value;
                        if(audio.value.volume===0){
                            noVoice.value = true;
                        }else{
                            noVoice.value = false;
                        }
                    }
                    // if (originBoxX + distanceX < 301) {

                    // }

                }
            }
            let dotMouse = (e) => {
                // 获取按下鼠标时 盒子与页面的距离
                var originBoxX = e.target.offsetLeft;
                var originBoxY = e.target.offsetTop;
                // 获取按下鼠标时 鼠标与页面的距离
                var mouseX = e.pageX;
                var mouseY = e.pageY;
                // 在页面上移动
                window.onmousemove = function (e) {
                    // 鼠标滑动的距离 = 鼠标移动后的位置 - 按下鼠标时的位置
                    var distanceX = e.pageX - mouseX;
                    var distanceY = e.pageY - mouseY;
                    // 给元素重新赋值 上左定位的位置
                    console.log(originBoxX + distanceX,originBoxY + distanceY)
                    if (originBoxX + distanceX < 301) {
                        playProgress.value = tool.percenTage(originBoxX + distanceX + 7, 315, 312);
                        // audio.value.currentTime = tool.percenTage(originBoxX + distanceX + 7, 315, audio
                        //     .value.duration);
                        moveEndTime.value =  audio.value.duration*(originBoxX + distanceX + 7)/315;

                        console.log(originBoxX + distanceX + 7, 315, audio.value.duration,'ssss',moveEndTime.value)

                        // dotCancel = (e)=>{
                        //     console.log('sdsdfs')
                        //     audio.value.currentTime = tool.percenTage(originBoxX + distanceX+7,315,audio.value.duration);
                        //     window.onmousemove = null;
                        // }
                    }

                    // -14,301
                    // e.target.style.left = originBoxX + distanceX + "px";
                    // box.style.top = originBoxY + distanceY + "px";
                }
                // 鼠标松开取消事件
                // dotCancel = function (){
                // // 解绑在页面上滚动的事件
                // window.onmousemove = null;

                // }
            }
            let instance = null;
            const testData = reactive({
                list: []
            });
            //设置弹出提示语框
            let tipsTool = (msg) => {
                tipsTime.value = 1;
                tipsMsg.value = msg;
                setTimeout(() => {
                    tipsTime.value = 0;
                }, 2000)
            }
            //是否喜欢该歌曲，添加或取消到喜欢歌单
            let likeSong = () => {
                // audio.value.currentTime = 5
                console.log(audio.value.volume)
                // tipsTool("请选择歌曲");
            }
            //添加到歌单
            let addList = () => {
                tipsTool("登陆后添加歌单");
            }
            //音乐播放结束事件
            let endMusic = () => {
                console.log("endMusic")
            }
            //下载歌曲按钮
            let downLoad = (id) => {


                if (typeof id === 'number') {
                    axios({
                        method: 'get',
                        url: songsArray.value[songIndex.value].audioUrl,
                        responseType: 'blob',
                    }).then((res) => {
                        // 为blob设置文件类型
                        let blob = new Blob([res.data]);
                        // 创建一个临时的url指向blob对象
                        let url = window.URL.createObjectURL(blob);
                        //创建一个a标签，用来下载
                        let a = document.createElement("a");
                        a.href = url;
                        a.download = songsArray.value[songIndex.value].name + '-' + songsArray
                            .value[songIndex.value].singer + '.mp4';
                        a.click();
                        // 释放这个临时的对象url
                        window.URL.revokeObjectURL(url);
                    })
                }
            }
            // 删除歌曲按钮
            let deleteSongs = (id) => {
                if (id >= 0) {
                    songsArray.value = songsArray.value.filter((i, k) => k != id);
                } else {
                    songsArray.value = [];
                }
            }
            //是否显示登录弹框
            let showLogin = () => {
                isShowLogin.value = !isShowLogin.value;
            }
            //是否显示设置弹框
            let showSets = () => {
                showSetPopup.value = !showSetPopup.value;
            }
            let changeVoice = () => {
                noVoice.value = !noVoice.value;
                if (noVoice.value) {
                    // audioVolume.value = audio.value.volume;
                    audio.value.volume = 0;
                } else {
                    audio.value.volume = playerVolume.value;
                }
            }
            const getData = () => {
                // API({
                //     url: '/yqqmusic',
                //     method: 'get'
                // }).then((res) => {
                //     alert('请求成功!');
                //     testData.list = res.data.dataList;
                // });
            }
            const playOrPause = async (id = -1) => {
                // console.log(id, songIndex.value, '1')
                // await audio.value.play();
                if (id > -1 && songIndex.value != id) {
                    songIndex.value = id;
                    playStatus.value = false;
                    playProgress.value = 0;
                    // await audio.value.play();
                    console.log(id, songIndex.value, '2')
                }

                if (!playStatus.value) {
                    //音频播放完毕，重新播放
                    // if (playProgress.value === 100) {
                    //     audio.value.currentTime = 0;
                    // }
                    console.log(id, songIndex.value, '3')
                    await audio.value.play();
                    // console.log(id, songIndex.value, '4')
                    playStatus.value = true;
                } else {
                    console.log(id, songIndex.value, '5')
                    await audio.value.pause();
                    // console.log(id, songIndex.value, '6')
                    playStatus.value = false;
                }
                // console.log(id, songIndex.value, '7')
            }
            //下一首
            let prevSong = (index) => {
                //找到当前播放的歌曲数组index
                if (songIndex.value - 1 < 0) {
                    songIndex.value = songsArray.value.length;
                }
                songIndex.value = (songIndex.value - 1) % (songsArray.value.length);
            }
            //上一首
            let nextSong = () => {
                // console.log(songIndex.value, songsArray.value.length - 1);
                songIndex.value = (songIndex.value + 1) % (songsArray.value.length);
            }
            //退出
            const loginOut = ()=>{
                window.localStorage.removeItem('githubUserMusic');
                user.value = {
                login: '',
                id: '',
                avatar_url: '',
                icon: 'https://avatars.githubusercontent.com/in/15368?s=64&v=4'

            }
            }





            let ws = null;
            let ico = '';
            onMounted(async () => {
                // console.log(window.document)

                let $favicon = window.document.querySelector('link[rel="icon"]');
                ico = $favicon.href;
                if ($favicon !== null) {
                    $favicon.href = 'https://y.qq.com/favicon.ico?max_age=2592000';
                } else {
                    $favicon = window.document.createElement("link");
                    $favicon.rel = "icon";
                    $favicon.href = 'https://y.qq.com/favicon.ico?max_age=2592000';
                    window.document.head.appendChild($favicon);
                }
                store.commit('setjsUIID', getUIID())
                let res = await apiGetSongInfo();
                res.forEach((v, i) => {
                    v.index = i;
                    v.choosed = false;
                    v.lyr = parseLyric(v.lyrBase64);

                });
                songsArray.value = res;
                songIndex.value = 0;



                if (!window.localStorage.getItem('githubUserMusic')) {
                    //没有用户信息发起websocket连接
                    ws = new WebSocket(`ws://localhost:3000?github=1&&id=` + store.state.jsUIID);
                    ws.onopen = () => {
                        console.log('连接建立');
                        //想服务端发送数据
                        ws.send('start!');
                        ws.onmessage = e => {
                            //接收消息并处理
                            console.log("接收到的消息：", e);
                            try {
                                let data = JSON.parse(e.data[0]);
                                const token = e.data[1];
                                user.value = {
                                    ...data,
                                    icon: 'https://avatars.githubusercontent.com/in/15368?s=64&v=4'
                                };
                                showLogin();
                                window.localStorage.setItem('githubUserMusic',JSON.stringify(user.value));
                                window.localStorage.setItem('githubUserToken',token);

                            } catch (err) {
                                console.log(err)
                            }

                        }
                    }
                }else{
                            try {
                                
                                let temp =JSON.parse(window.localStorage.getItem('githubUserMusic'));

                                //判断是否token过期

                                //没有过期

                                //过期

                                //后续
                                user.value = temp;

                                // showLogin();
                                // window.localStorage.setItem('githubUserMusic',JSON.stringify(user.value));
                            } catch (err) {
                                console.log(err)
                            }
                }


                





                //  let audio = audio.value();
                // audio.play();
                //         let img = instance.refs.ImgMask;
                //         let canvas = instance.refs.ImgColor;
                //         let ctx = canvas.getContext('2d');
                //         img.onload = function (){
                // }
                // 主色调
                // img.crossOrigin="anonymous";
                // img.src="../assets/logo.png"   
            })

            onUnmounted(async () => {
                let $favicon = window.document.querySelector('link[rel="icon"]');
                $favicon.href = ico;
            })
            return {
                volumeMouse,
                playerVolume,
                clickVolume,
                nextSong,
                prevSong,
                user,
                returnUIID,
                tipsMsg,
                scrollTo,
                isShowLogin,
                showLogin,
                testData,
                getData,
                playOrPause,
                audio,
                playStatus,
                audioCurrent,
                updateMsg,
                audioDuration,
                endLoad,
                playProgress,
                clickProgress,
                dotMouse,
                dotCancel,
                lyrContent,
                audioTime,
                tranY,
                play_index,
                play_style,
                changeStyle,
                songsArray,
                songIndex,
                changeChoosed,
                likeSong,
                deleteSongs,
                downLoad,
                endMusic,
                addList,
                tipsTime,
                showSets,
                showSetPopup,
                onlyStyle,
                changeOnly,
                indexLike,
                clickLike,
                noVoice,
                changeVoice,
                loginOut

            }
        }

    });
</script>

<style scoped>
    @import "../assets/css/player/yPlay1.css";
    @import "../assets/css/player/yPlay2.css";
    @import "../assets/css/player/yPlay3.css";

    .noStyle {
        display: none;
    }

    .maskImg {
        z-index: 100;
        display: none;
        width: 100px;
        height: 100px;
    }

    .player_login__icon {
        position: absolute;
        width: 12px;
        height: 12px px;
        top: 18px;
        left: 18px;
    }

    .player_login_cover {
        width: 30px;
        height: 30px;
        border-radius: 90px;
        margin-right: 5px;
        vertical-align: -10px;
    }

    .playBg {
        /* background: royalblue; */
        min-width: 1100px;
        background-color: #292a2b;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
</style>