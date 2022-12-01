// 音频播放时间换算
const transTime = (value: number) => {
    let time = "";
    let h = parseInt(String(value / 3600));
    value %= 3600;
    let m = parseInt(String(value / 60));
    let s = parseInt(String(value % 60));
    if (h > 0) {
      time = formatTime(h + ":" + m + ":" + s);
    } else {
      time = formatTime(m + ":" + s);
    }
    return time;
  };
  // 格式化时间显示，补零对齐
  const formatTime = (value: string) => {
    let time = "";
    let s = value.split(":");
    let i = 0;
    for (; i < s.length - 1; i++) {
      time += s[i].length == 1 ? "0" + s[i] : s[i];
      time += ":";
    }
    time += s[i].length == 1 ? "0" + s[i] : s[i];
   
    return time;
  };
  //计算百分比
  const percenTage = (dividend:number,divisor:number,num:number = 1)=>{
      return num*dividend/divisor;
  }

// base64转字符串
 const getEncode64 = (str:string)=>{
  // 对字符串进行编码
  const encode = encodeURI(str);
  // 对编码的字符串转化base64
  const base64 = btoa(encode);
  return base64;
}
  //解码
function b64Decode(str:string) {
  // btoa
  // return Buffer.from(str, 'base64').toString('utf-8');
}
  // lrc解码
  // function 

  //lrc歌词分析
  function parseLyric(text:string) {
    text = `[ti:飞鸟和蝉]
    [ar:任然]
    [al:飞鸟和蝉]
    [by:]
    [offset:0]
    [00:00.00]飞鸟和蝉 - 任然
    [00:01.07]词：耕耕
    [00:02.14]曲：Kent王健
    [00:03.21]编曲：侯江浩
    [00:04.28]吉他：陈麒元
    [00:05.36]混音：张栩赫（Ethan）
    [00:06.43]录音：Kent王健
    [00:07.50]和声编写/和声：Kent王健
    [00:08.57]制作人：Kent王健
    [00:09.64]配唱制作人：kent王健
    [00:10.72]录音工作室：1803 Studio
    [00:11.79]混音工作室：Hot Music Studio
    [00:12.86]监制：三千
    [00:13.93]OP：千和世纪
    [00:15.01]（版权所有未经许可请勿使用）
    [00:29.59]你说青涩最搭初恋
    [00:36.17]如小雪落下海岸线
    [00:42.34]第五个季节某一天上演
    [00:49.10]我们有相遇的时间
    [00:55.56]你说空瓶适合许愿
    [01:01.90]在风暖月光的地点
    [01:08.38]第十三月你就如期出现
    [01:14.92]海之角也不再遥远
    [01:22.79]你骄傲的飞远 我栖息的夏天
    [01:29.19]听不见的宣言 重复过很多年
    [01:35.67]北纬线的思念被季风吹远
    [01:40.55]吹远默念的侧脸
    [01:44.19]吹远鸣唱的诗篇
    [01:48.74]你骄傲的飞远 我栖息的叶片
    [01:55.20]去不同的世界 却从不曾告别
    [02:01.73]沧海月的想念羽化我昨天
    [02:06.63]在我成熟的笑脸
    [02:10.16]你却未看过一眼
    [02:29.48]你说空瓶适合许愿
    [02:35.95]在风暖月光的地点
    [02:42.27]第十三月你就如期出现
    [02:48.82]海之角也不再遥远
    [02:53.66]你骄傲的飞远 我栖息的夏天
    [02:59.85]听不见的宣言 重复过很多年
    [03:06.48]北纬线的思念被季风吹远
    [03:11.34]吹远默念的侧脸
    [03:14.95]吹远鸣唱的诗篇
    [03:19.43]你骄傲的飞远 我栖息的叶片
    [03:25.98]去不同的世界 却从不曾告别
    [03:32.47]沧海月的想念羽化我昨天
    [03:37.33]在我成熟的笑脸
    [03:40.98]你却未看过一眼
    [03:45.36]你骄傲的飞远 我栖息的夏天
    [03:51.89]听不见的宣言 重复过很多年
    [03:58.47]北纬线的思念被季风吹远
    [04:03.30]吹远默念的侧脸
    [04:06.92]吹远鸣唱的诗篇
    [04:11.30]你骄傲的飞远 我栖息的叶片
    [04:17.74]去不同的世界 却从不曾告别
    [04:24.39]沧海月的想念羽化我昨天
    [04:29.24]在我成熟的笑脸
    [04:32.88]你却未看过一眼
    `;
    let lrcArray = text.split('\n');
    console.log("ppp")
}
  export default{
    transTime,
    formatTime,
    percenTage
  }
  