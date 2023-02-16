// pages/home-profile/index.js
import { getUserInfo } from '../../service/api_login'
import { getSongMenuDetail } from '../../service/api_music'

Page({
  data: {

  },
  handleGetUser: async function(event) {
    const userInfo = await getUserInfo()
    console.log(userInfo)
  },
  handleGetPhoneNumber: function(event) {
    console.log(event)
  },
  getMyLove:function(){
    getSongMenuDetail(503717068).then((res)=>{
      console.log(res);
    })
  }
})