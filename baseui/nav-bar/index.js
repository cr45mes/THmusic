// baseui/nav-bar/index.js
const globalData = getApp().globalData

Component({
  options: {
    multipleSlots: true//设置这个属性才能使用多个插槽
  },

  properties: {
    title: {
      type: String,
      value: "默认标题"
    }
  },
  data: {
    statusBarHeight: globalData.statusBarHeight,
    navBarHeight: globalData.navBarHeight
  },
  methods: {
    handleLeftClick: function() {
      this.triggerEvent('click')
    }
  }
})
