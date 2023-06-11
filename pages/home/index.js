// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      "/static/banner-1.png",
      "/static/banner-2.png",
      "/static/banner-3.png",
      "/static/banner-4.png",
      "/static/banner-5.png",
      "/static/banner-6.png",
      "/static/banner-7.png",
    ],
    gridSwiper: [
      [{
          text: "电子社保卡",
          src: "/static/dzsbk.svg",
          ur: ""
        },
        {
          text: "医保电子凭证",
          src: "/static/ybdzpz.svg",
          url: ""
        },
        {
          text: "公积金账户信息查询",
          src: "/static/gjjzh.svg",
          url: ""
        },
        {
          text: "全国互联网账号一证通查",
          src: "/static/qghlwzh.png",
          url: ""
        },
        {
          text: "普通高等学校本科专业查询",
          src: "/static/ptgdxx.png",
          url: ""
        },
        {
          text: "电子无偿献血证",
          src: "/static/dzwcxx.svg",
          url: ""
        },
        {
          text: "普通话水平测试成绩查询",
          src: "/static/pthcx.svg",
          url: ""
        },
        {
          text: "国家智慧教育公共服务平台",
          src: "/static/gjzhjy.png",
          url: ""
        },
        {
          text: "公积金贷款信息",
          src: "/static/gjj.svg",
          url: ""
        },
        {
          text: "职业技能证书查询核验",
          src: "/static/gjj.svg",
          url: ""
        },
        {
          text: "信用信息查询",
          src: "/static/xyxxcx.png",
          url: ""
        },
        {
          text: "新冠病毒疫苗接种信息查询",
          src: "/static/xyxxcx.png",
          url: ""
        },
      ],
      [{
          text: "电子社保卡",
          src: "/static/dzsbk.svg",
          ur: ""
        },
        {
          text: "医保电子凭证",
          src: "/static/ybdzpz.svg",
          url: ""
        },
        {
          text: "公积金账户信息查询",
          src: "/static/gjjzh.svg",
          url: ""
        },
        {
          text: "全国互联网账号一证通查",
          src: "/static/qghlwzh.png",
          url: ""
        },
        {
          text: "普通高等学校本科专业查询",
          src: "/static/ptgdxx.png",
          url: ""
        },
        {
          text: "电子无偿献血证",
          src: "/static/dzwcxx.svg",
          url: ""
        },
        {
          text: "普通话水平测试成绩查询",
          src: "/static/pthcx.svg",
          url: ""
        },
        {
          text: "国家智慧教育公共服务平台",
          src: "/static/gjzhjy.png",
          url: ""
        },
        {
          text: "公积金贷款信息",
          src: "/static/gjj.svg",
          url: ""
        },
        {
          text: "职业技能证书查询核验",
          src: "/static/gjj.svg",
          url: ""
        },
        {
          text: "信用信息查询",
          src: "/static/xyxxcx.png",
          url: ""
        },
        {
          text: "新冠病毒疫苗接种信息查询",
          src: "/static/xyxxcx.png",
          url: ""
        },
      ],
    ],
    tabs:{
      activeId:0,
      tab:[
        {
          id:0,
          text:"专区"
        },
        {
          id:1,
          text:"服务"
        }
      ]
    },
    zqBanner:[
      [
        "/static/zq-banner-1.png",
        "/static/zq-banner-2.png",
        "/static/zq-banner-3.png",
        "/static/zq-banner-4.png",
        "/static/zq-banner-5.png",
        "/static/zq-banner-6.png",
      ],
      [
        "/static/zq-banner-7.png",
        "/static/zq-banner-8.png",
        "/static/zq-banner-9.png",
        "/static/zq-banner-10.png",
        "/static/zq-banner-11.png",
        "/static/zq-banner-12.png",
      ],
      [
        "/static/zq-banner-2.png",
        "/static/zq-banner-6.png",
      ],
    ],
    miniProgra:[
      {
        title:"省级小程序",
        count:"28",
        path:"/pages/province-mini-program/index",
        item:[
          {
            text:"北京市",
            src:"/static/bj.svg"
          },
          {
            text:"天津市",
            src:"/static/tj.svg"
          },
          {
            text:"河北省",
            src:"/static/hb.svg"
          },
          {
            text:"山西省",
            src:"/static/sx.svg"
          },
        ]
      },
      {
        title:"部门小程序",
        count:"16",
        path:"/pages/department-mini-program/index",
        item:[
          {
            text:"司法部",
            src:"/static/sfb.svg"
          },
          {
            text:"海关总署",
            src:"/static/hgzs.svg"
          },
          {
            text:"税务总局",
            src:"/static/swzb.svg"
          },
          {
            text:"移民局",
            src:"/static/ymj.svg"
          },
        ]
      },
    ],
    servers:[
      {
        title:"医保服务",
        item:[
          {
            text:"医保电子凭证",
            url:""
          },
          {
            text:"跨省异地就医备案",
            url:""
          },
          {
            text:"定点医疗机构查询",
            url:""
          },
          {
            text:"医保统筹地区开通",
            url:""
          },
        ]
      },
      {
        title:"交通运输",
        item:[
          {
            text:"道路运政从业人员",
            url:""
          },
          {
            text:"道路运政从业人员",
            url:""
          },
          {
            text:"道路运政从业人员",
            url:""
          },
          {
            text:"道路运政从业人员",
            url:""
          },
        ]
      },
      {
        title:"人社服务",
        item:[
          {
            text:"电子社保卡",
            url:""
          },
          {
            text:"职业资格证书联网",
            url:""
          },
          {
            text:"失业补助金网上申领",
            url:""
          },
          {
            text:"失业补助金网上申领",
            url:""
          },
        ]
      },
      {
        title:"公积金",
        item:[
          {
            text:"公积金账户信息查询",
            url:""
          },
          {
            text:"公积金贷款查询",
            url:""
          },
        ]
      },
      {
        title:"助残服务",
        item:[
          {
            text:"残疾人证新办证",
            url:""
          },
          {
            text:"残疾人证换领",
            url:""
          },
          {
            text:"残疾人证迁移",
            url:""
          },
          {
            text:"残疾人证注销",
            url:""
          },
        ]
      },
      {
        title:"教育服务",
        item:[
          {
            text:"普通话水平测试成绩查询",
            url:""
          },
          {
            text:"中小学教师资格考试",
            url:""
          },
          {
            text:"高等教育学历证书查询",
            url:""
          },
          {
            text:"国（境）外学历学校查询",
            url:""
          },
        ]
      },
      {
        title:"市场监督",
        item:[
          {
            text:"12315",
            url:""
          },
          {
            text:"冷链食品追溯",
            url:""
          },
          {
            text:"计量服务中小企业",
            url:""
          },
          {
            text:"电子营业执照",
            url:""
          },
        ]
      },
      {
        title:"国家金融监督管理总局",
        item:[
          {
            text:"银行业金融机构许可证查询",
            url:""
          },
        ]
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  handleTabChange({currentTarget}){
    const {tab} = currentTarget.dataset
    this.setData({
      'tabs.activeId':tab.id
    })
  },
  handleClickToMoreMiniProgram({currentTarget}){
    const {path} = currentTarget.dataset
    wx.navigateTo({
      url: path,
      fall(){
        wx.showToast({
          title: '当前路由跳转失败',
          icon:"none"
        })
      }
    })
  }
})