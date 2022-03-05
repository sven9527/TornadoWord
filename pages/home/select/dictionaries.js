// pages/home/select/dictionaries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookSel: "小学",
    booklist: [
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
      {name: '小学词汇汇总', num:646},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getBooklistBySel(options);
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

  // 作假数据展示
  makeFakeData: function(param) {

  },

  // 根据用户选择获取book详细列表
  getBooklistBySel: function (param) {
    if (!param) {
      return
    }
    let bookSel = param.book;
    if (bookSel && bookSel == this.data.bookSel && this.data.booklist) {
      return
    }
    // 拉去选择类目对应的单词书列表
    wx.showLoading({
      title: getApp().globalData.loadingStr,
    })
    // 闭包的原因回调函数内不能使用this
    let that = this
    wx.request({
      url: 'https://www.baidu.com',
      data: {
        bookSel: bookSel
      },
      method: "GET",
      success (res) {
        wx.hideLoading()
        // TODO：根据返回数据设置boolist
          
      }
    })
    
  },
  // 
  findBookInfoByName: function(name) {
    for (let index = 0; index < this.data.booklist.length; index++) {
      if (name == this.data.booklist[index].name) {
        return this.data.booklist[index]
      }
    }
  },

  // 点击选择词典
  onBookSelected: function(e) {
    console.log("onBookSelected: ", e.currentTarget)
    let bookName = e.currentTarget.dataset.select;
    let bookInfo = this.findBookInfoByName(bookName);
    // TODO下载对应词典
    // 存储选择信息
    wx.setStorageSync('bookInfo', bookInfo);
    let studyData = {
      finishPresent: 0,
      studyNum: 0,
      newNum: 10,
      reviewNum: 15,
      unStudyNum: bookInfo.num
    }
    wx.setStorageSync('studyData', studyData);
    getApp().globalData.bookInfo = bookInfo
    getApp().globalData.studyData = studyData

    // 跳转学单词页面
    wx.switchTab({
      url: '/pages/home/home?bookInfo' + bookInfo,
    })
  },

})