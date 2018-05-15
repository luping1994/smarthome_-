//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    grids: [{ name: "保护告警", value: "60" }, { name: "离线设备", value: "61" }, { name: "能耗采集异常", value: "62" }],
    devices: [{ name: "十通道", type: "4100", img: "../../image/4100.jpg" }, { name: "六通道", type: "4300", img: "../../image/4300.jpg" }, { name: "第六感", type: "6300", img: "../../image/6300.jpg" }, { name: "RTU", type: "RTU", img: "../../image/rtu.jpg" }, { name: "单相电表", type: "meter1", img: "../../image/meter1.jpg" }, { name: "三相电表", type: "meter3", img: "../../image/meter3.jpg" }]

  },

  //设备item点击事件
  clickDevicesItem: function (e) {
    var $type = e.currentTarget.dataset.vtype;
    console.log($type);
  },
  //下拉刷新
  onPullDownRefresh: function (e) {
    setTimeout(function () { wx.stopPullDownRefresh(); }, 2000)
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
