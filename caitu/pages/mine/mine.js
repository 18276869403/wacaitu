// pages/mine/mine.js
//index.js
//获取应用实例
const app = getApp()
// var qingqiu = require('../../config/request.js')
// var api = require('../../config/config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function() {

  },
  // 跳转到我的求购页面
  myqiugou: function() {
    wx.navigateTo({
      url: '../myqiugou/myqiugou',
    })
  },
  // 跳转到我的拼购页面
  mypingou: function() {
    wx.navigateTo({
      url: '../mypingou/mypingou',
    })
  },
  // 弹窗显示
  showModal1: function() {
    this.setData({
      hasMask: true
    })
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation

    animation.opacity(0).rotateX(-100).step();
    this.setData({
      animationData: animation.export(),
      showModalStatus1: true
    })
    setTimeout(function() {
      animation.opacity(1).rotateX(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  //弹窗关闭
  hideModal1: function() {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    // flag = 0;
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      hasMask: false
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus1: false
      })
    }.bind(this), 200)
  },


  // 跳转到我的
  myEmploy: function() {
    wx.navigateTo({
      url: '../myEmploy/myEmploy',
    })
  },

  // 跳转到我的信息页面
  myInfo: function() {
    wx.navigateTo({
      url: '../myInfo/myInfo',
    })
  },
  // 跳转到我的需求页面
  myNeeds: function() {
    wx.navigateTo({
      url: '../myNeeds/myNeeds',
    })
  },
  // 跳转到我的晒活页面
  showwork: function() {
    wx.navigateTo({
      url: '../showwork/showwork',
    })
  },
  // 跳转到我留言页面
  myMessage: function() {
    wx.navigateTo({
      url: '../myMessage/myMessage',
    })
  },
  // 跳转到我的商品页面
  myGoods: function() {
    wx.navigateTo({
      url: '../myGoods/myGoods',
    })
  },
  // 跳转到我的推荐页面
  myRecommend: function() {
    wx.navigateTo({
      url: '../myRecommend/myRecommend',
    })
  },
  // 跳转到我的库存盘点页面
  mykucunpandian: function() {
    wx.navigateTo({
      url: '../mykucunpandian/mykucunpandian',
    })
  },
  // 跳转到联系我们页面
  aboutUs: function() {
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  },
  // 跳转到计算历史页面
  jisuanHistory:function(){
    wx.navigateTo({
      url: '../jisuanHistory/jisuanHistory',
    })
  },
  // 拨打电话
  phonecall: function() {
    this.hideModal1()
    wx.makePhoneCall({
      phoneNumber: '17656453456' //仅为示例，并非真实的电话号码
    })
  }

})