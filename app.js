// app.js
App({
  onLaunch() {
    this.globalData.userInfo = wx.getStorageSync('userInfo') || null;
    this.globalData.studyData = wx.getStorageSync('studyData') || null;
    this.globalData.bookInfo = wx.getStorageSync('bookInfo') || null;
  },
  globalData: {
    loadingStr: '数据加载中...',
    userInfo: null,
    studyData: null,
    bookInfo: null,
    studyWord: null,
    studyPercent: 0,
  }
})
