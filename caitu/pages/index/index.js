//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    msgList: [{
        id: "1",
        title: "编号100*0239发布求购"
      },
      {
        id: "2",
        title: "编号101*0237发布求购"
      },
      {
        id: "3",
        title: "编号102*0237发布求购"
      }
    ],
    bannerImg: [{
        id: 1,
        bannerimg: '../image/banner.png'
      },
      {
        id: 2,
        bannerimg: '../image/banner.png'
      },
      {
        id: 3,
        bannerimg: '../image/banner.png'
      }
    ],
    qiugouList: [{
        id: 1,
        weight: '1200',
        name: '镀锌板彩涂卷',
        bianhao: '112hh',
        guige: '厚0.5/宽1000',
        color: '非标'
      },
      {
        id: 2,
        weight: '1200',
        name: '镀锌板彩涂镀锌板彩涂卷镀锌板彩涂卷卷',
        bianhao: '112hh',
        guige: '厚0.5/宽1000',
        color: '非标'
      }
    ],
    pingouList: [{
        id: 1,
        weight: '1200',
        name: '镀锌板彩涂镀锌板彩涂卷镀锌板彩涂卷卷',
        bianhao: '112hh',
        guige: '厚0.5/宽1000',
        color: '非标',
        img: '../image/top.png'
      },
      {
        id: 2,
        weight: '1200',
        name: '镀锌板彩涂镀锌板彩涂卷镀锌板彩涂卷卷',
        bianhao: '112hh',
        guige: '厚0.5/宽1000',
        color: '非标',
        img: '../image/top1.png'
      },
      {
        id: 3,
        weight: '1200',
        name: '镀锌板彩涂镀锌板彩涂卷镀锌板彩涂卷卷',
        bianhao: '112hh',
        guige: '厚0.5/宽1000',
        color: '非标',
        img: '../image/top.png'
      }
    ],
    zixunList: [{
        id: 1,
        name: '宝山地区致良知学习会',
        content: '聚是一团火，散是满天星，共读一本书，幸福一家人，温暖一座城。',
        date: '2020.03.06',
        img: '../image/zixun.png'
      },
      {
        id: 2,
        name: '宝山地区致良知学习会',
        content: '宝钢中央研究院分析测试研究中心通过了中国合格评定国家认可委员会（CNAS）评审考核。',
        date: '2020.03.06',
        img: '../image/zixun1.png'
      }
    ]

  },

  onLoad: function() {
    // this.showModal1()
  },
  hall: function() {
    wx.switchTab({
      url: '../hall/hall'
    })
  },
  // 跳转到计算器页面
  calculator: function() {
    wx.navigateTo({
      url: '../calculator/calculator',
    })
  },
  // 跳转到认证信息页面
  renzhengInfo: function() {
    this.hideModal1()
    wx.navigateTo({
      url: '../renzhengInfo/renzhengInfo',
    })
  },
  // 跳转到求购发布页面
  qiugouSubmit: function() {
    wx.navigateTo({
      url: '../qiugouSubmit/qiugouSubmit',
    })
  },
  // 跳转到拼购发布页面
  pingouSubmit: function() {
    wx.navigateTo({
      url: '../pingouSubmit/pingouSubmit',
    })
  },
  // 跳转到库存管理页面
  kucunManage: function() {
    wx.navigateTo({
      url: '../kucunManage/kucunManage',
    })
  },
  // 跳转到求购详情页面
  qiugouDetails: function() {
    wx.navigateTo({
      url: '../qiugouDetails/qiugouDetails',
    })
  },
  //跳转到拼购详情页面
  pingouDetails: function() {
    wx.navigateTo({
      url: '../pingouDetails/pingouDetails',
    })
  },
  //跳转到尾货信息页面
  weihuoDetails: function() {
    wx.navigateTo({
      url: '../weihuoDetails/weihuoDetails',
    })
  },
  // 跳转到更多咨询页面
  zixunMore: function() {
    wx.navigateTo({
      url: '../zixunMore/zixunMore',
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
})