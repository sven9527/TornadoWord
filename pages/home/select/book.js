// pages/home/select/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectStr: "Hi~请选择你要学习的单词书",
    tag_1: "热门",
    tag_2: "其它",
    hotList: [],
    otherList: [],
    hotStyle: '.item',
    otherStyle: '.item-other',
    selStyle: '.itemSel'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBookListInfo();
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
    this.getBookListInfo()
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

  // 获取可选单词书信息
  getBookListInfo: function() {
    wx.showLoading({
      title: getApp().globalData.loadingStr,
    })
    let that = this
    wx.request({
      url: 'https://www.baidu.com',
      method: 'GET',
      data: {},
      success (res) {
        wx.hideLoading();
        // TODO: 根据返回数据更新 hotList 和 otherList
        let hotList = ["小学", "初中", "高中", "大学"]
        let otherList = ["财会","留学","商务","旅游","计算机","影视英语","公共英语","文学作品"]
        let Hot = []
        let Other = []
        for (let index = 0; index < hotList.length; index++) {
          Hot.push({
            'index': index,
            'value': hotList[index],
            'style': that.data.hotStyle,
            'status': 0
          })
        }
        for (let index = 0; index < otherList.length; index++) {
          Other.push({
            'index': index,
            'value': otherList[index],
            'style': that.data.otherStyle,
            'status': 2
          })}
        that.setData({
          hotList: Hot,
          otherList: Other,
        })
      }
    })
  },

  // 选择单词书
  onItemTap: function(e) {
      let itemSel = e.target.dataset.item
      if (!itemSel) {
        console.log(e)
        return
      }
      let searchData
      if (itemSel.status <= 1) {
        searchData = this.data.hotList
      } else {
        searchData = this.data.otherList
      }
      for (let index = 0; index < searchData.length; index++) {
        if (itemSel.value == searchData[index].value) {
          if (itemSel.status <= 1) {
            searchData[index].style = itemSel.status == 1? this.data.hotStyle:this.data.selStyle
            searchData[index].status = itemSel.status == 1? 0 : 1
            this.setData({
              hotList: searchData
            })
            break
          } else {
            searchData[index].style = itemSel.status == 3? this.data.otherStyle:this.data.selStyle
            searchData[index].status = itemSel.status == 3? 2 : 3
            this.setData({
              otherList: searchData
            })
            break
          }
        }
        // go to select book page
        
      }

  }


})