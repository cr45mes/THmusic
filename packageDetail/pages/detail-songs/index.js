// pages/detail-songs/index.js
import { rankingStore, playerStore } from '../../../store/index'
import { getSongMenuDetail } from '../../../service/api_music'

Page({
  data: {
    type: "",
    ranking: "",
    songInfo: {}
  },
  onLoad: function (options) {
    const type = options.type
    this.setData({ type })

    if (type === "menu") {
      const id = options.id
      getSongMenuDetail(id).then(res => {
        this.setData({ songInfo: res.playlist })
      })
    } else if (type === "rank") {
      const ranking = options.ranking
      this.setData({ ranking })

      // 1.获取数据
      rankingStore.onState(ranking, this.getRankingDataHanlder)//这里的ranking没有加引号，不是监听“ranking”，而是监听ranking对应的值，从上一层传过来的ranking值是不同的
    }
  },

  handleSongItemClick: function(event) {
    const index = event.currentTarget.dataset.index
    playerStore.setState("playListSongs", this.data.songInfo.tracks)
    playerStore.setState("playListIndex", index)
  },


  onUnload: function () {
    if (this.data.ranking) {
      rankingStore.offState(this.data.ranking, this.getRankingDataHanlder)
    }
  },

  getRankingDataHanlder: function(res) {
    this.setData({ songInfo: res })
  } 
})