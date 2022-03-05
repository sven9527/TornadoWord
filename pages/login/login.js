// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_name: '龙卷风单词',
    title_desc: '和小伙伴们一起背单词',
    btn_name: '立刻体验'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("login onLoad===========")
    this.setData({
      userInfo: (wx.getStorageSync('UserData') || null)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("login onReady===========")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("login onShow===========")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("login onHide===========")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("login onUnload===========")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  getUserProfile: function() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        // save data to local and globaldata
        wx.setStorageSync('userInfo', res.userInfo);
        getApp().globalData.userInfo = res.userInfo;
        // SwitchTab用于跳转带tab页面
        wx.switchTab({
          url: '/pages/home/home',
        })
      }
    })
  },
  /**
   * 点击登录按钮
   * @param {*} e 
   */
  onLoginBtnTapped: function (e) {
    console.log(this.data.userInfo)
    if (!this.data.userInfo || this.data.userInfo.length == 0) {
      this.getUserProfile()
    }
  }


})