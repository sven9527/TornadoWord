// pages/study/playground/playground.js
const innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isForget: 0,
    word: 'dock',
    soundmark: '/dɑːk/',
    mean_cn: 'n.码头；船坞；被告席；  v.进港；扣工资；剪短（动物的尾巴）',
    mean_en: 'a part of a port where ships are repaired, or where goods are put onto or taken off them',
    sentence: "The boat is berthed at the dock.",
    sentence_trans: "这艘船停靠在码头边。",
    audioUrl: 'http://dict.youdao.com/dictvoice?audio=',
    exampleUrl: 'https://cdn.jsdelivr.net/gh/lyc8503/baicizhan-word-meaning-API/data/words/',
    examType: '',
    sentences: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let studyWord = getApp().globalData.studyWord
    if (options && options.forget && studyWord) {
      this.setData({
        isForget: options.forget,
        word: studyWord.word,
        examType: studyWord.examType,
        soundmark: studyWord.soundmark,
        mean_cn: studyWord.mean_cn,
        mean_en: studyWord.mean_en,
        sentence: studyWord.sentence,
        sentence_trans: studyWord.sentence_trans,
        sentences: studyWord.sentences
      })
    }
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

  onWordAudioTap: function() {
    innerAudioContext.src = this.data.audioUrl + this.data.word
    innerAudioContext.play()
  },

  onNextTap: function() {
    wx.navigateBack()
  }

})