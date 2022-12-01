const getUIID = () => {
    let date = (new Date()).valueOf(); //获取时间戳
    let txt = '1234567890'; //生成的随机机器码
    let len = 13; //机器码有多少位
    let pwd = ''; //定义空变量用来接收机器码
    for (let i = 0; i < len; i++) {
        pwd += txt.charAt(Math.floor(Math.random() * txt.length)); //循环机器码位数随机填充
    }
    return date + pwd //相加生成唯一ID
}

export default  getUIID