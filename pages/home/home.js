// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isStudy: false,
    leadingStr: "我在龙卷风背单词",
    punchCale: "打卡日历 >",
    studyStateStr: "没有正在学的单词书",
    finishPresent: "已完成%",
    studyProgress: 0,
    wordNum: "/词",
    todayTask: "- 今日任务 -",
    newNum: "-",
    reviewNum: "-",
    unStudyNum: "-",
    backgroundImg: '../../images/book_sel_bg.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadStudyData();
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
    this.loadStudyData();
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
  // 加载学习数据
  loadStudyData: function () {
    let studyData = getApp().globalData.studyData
    let bookInfo = getApp().globalData.bookInfo
    if (studyData) {
      this.setData({
        isStudy: true,
        studyStateStr: bookInfo.name,
        finishPresent: "已完成" + studyData.finishPresent +"%",
        wordNum: studyData.studyNum +'/'+ bookInfo.num +"词",
        newNum: studyData.newNum,
        reviewNum: studyData.reviewNum,
        unStudyNum: studyData.unStudyNum,
        studyProgress: studyData.finishPresent,
      })
    }
  },
  // 更新学习数据并保存
  updateStudyDataAndSave: function(params) {
    let studyData = null;
    wx.setStorageSync('studyData', studyData);
  },

  // 选书
  onTapSelectBook: function (e) {
    wx.navigateTo({
      url: '/pages/home/select/book',
    })
  },
  // 点击去学习
  onTapStudy: function() {
    wx.navigateTo({
      url: '/pages/study/study',
    })
  },
  // 点击更换词典 
  onChangeDicTapped: function(params) {
    wx.navigateTo({
      url: '/pages/home/select/book',
    })
  }

})