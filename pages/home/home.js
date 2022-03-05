// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leadingStr: "我在龙卷风背单词",
    punchCale: "打卡日历 >",
    studyStateStr: "没有正在学的单词书",
    finishPresent: "已完成%",
    wordNum: "/词",
    todayTask: "- 今日任务 -",
    newNum: "99",
    reviewNum: "-",
    unStudyNum: "-",
    backgroundImg: '../../images/book_sel_bg.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  onTapSelectBook: function (e) {
    wx.navigateTo({
      url: '/pages/home/select/book',
    })
  }

})