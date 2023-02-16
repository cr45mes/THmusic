import { HYEventStore } from 'hy-event-store'
import { getRankings } from '../service/api_music'

const rankingMap = { 0: "newRanking", 1: "hotRanking", 2: "originRanking", 3: "upRanking" }

const rankingStore = new HYEventStore({
  state: {
    newRanking: {}, // 0: 新歌 3779629
    hotRanking: {}, // 1: 热门 3778678
    originRanking: {}, // 2: 原创 2884035
    upRanking: {} // 3: 飙升 19723756
  },
  actions: {
    getRankingDataAction(ctx) {
      // 0: 新歌榜 1: 热门榜 2: 原创榜 3: 飙升榜
      for (let i = 0; i < 4; i++) {
        switch(i) {
          case 0:
            getRankings(3779629).then(res => {         
              ctx.newRanking = res.playlist
            })
            break;
          case 1:
            getRankings(3778678).then(res => {   
              ctx.hotRanking = res.playlist
            })
            break;
          case 2:
            getRankings(2884035).then(res => {      
              ctx.originRanking = res.playlist
            })
            break;
          case 3:
            getRankings(19723756).then(res => {       
              ctx.upRanking = res.playlist
            })
            break;
        }
        // getRankings(i).then(res => {
        //   const rankingName = rankingMap[i]
        //   ctx[rankingName] = res.playlist          
        // })
      }
    }
  }
})

export {
  rankingStore,
  rankingMap
}
