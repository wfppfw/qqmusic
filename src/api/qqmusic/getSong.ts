// 导入axios实例
import httpRequest from '@/request/index'
// import { apiGetUserInfo } from '@/apis/user'
// 定义接口的传参

// interface songInfoParam {
// 	userID: string,
// 	userName: string
// }

// 获取用户信息
export const apiGetSongInfo = ()=> {
    return httpRequest({
		url: 'http://localhost:3000/createSong',
		method: 'get',
		// data: param,
	})
}

// 获取用户信息
export const apiSearchSong = ()=> {
    return httpRequest({
		url: 'http://localhost:3000/createSong',
		method: 'get',
		// data: param,
	})
}