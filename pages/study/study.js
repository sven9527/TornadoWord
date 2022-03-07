// pages/study/study.js
const list = require('../../assets/word-list.js')
const vocList = require('../../assets/vocabulary.js')
const innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayReview: "0/0",
    todayNew: 0,
    studyTime: "0min",
    currentWord: "today",
    soundmark: "[təˈdeɪ]",
    exampleSentence: "Today is her tenth birthday.",
    showExample: false,
    studyPercent: getApp().globalData.studyPercent,  // 学习进度
    audioUrl: 'http://dict.youdao.com/dictvoice?audio=',
    exampleUrl: 'https://cdn.jsdelivr.net/gh/lyc8503/baicizhan-word-meaning-API/data/words/',
    wangyiUrl: "https://dict.youdao.com/jsonapi_s?doctype=json&jsonversion=4&le=en&t=0&client=web&sign=6e19702c02f6910169dd4df323ba2848&keyfrom=webdict&q=",
    startIndex: 0,
    worldListMax: 999,
    vocListMax: 12346,
    forgetTimes: 0,
    sentences: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.nextWord()
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
  nextWord: function () {
    // 从缓存里随机取词
    var idx = Math.floor(Math.random() * this.data.worldListMax) + 1
    var word = list.wordList[idx]
    this.searchWord(word.content)
    // content: word.content,
    // pron: word.pron,
    // definition: word.definition,
    this.setData({
      forgetTimes: 0,
      currentWord: word.content,
      soundmark: '/' + word.pron + '/',
      showExample: false,
    })
    this.onPlaySoundTap()
  },
  // 查找单词含义和例句
  searchWord: function(word) {
    let that = this
    wx.request({
      // url: this.data.exampleUrl + word + '.json',
      url: this.data.wangyiUrl + word,
      method: 'GET',
      success(respond){
        console.log('searchUrl: ', that.data.wangyiUrl + word)
        console.log('searchWord exam_type:', respond.data.ec.exam_type)
        console.log('searchWord ecword:', respond.data.ec.word)
        console.log('searchWord eeword:', respond.data.ee.word.trs)
        console.log('searchWord blng_sents_part:', respond.data.blng_sents_part)
        
        
        if (!respond || !respond.data.ec.word) {
          return
        }
        let rsword = respond.data.ec.word
        let eeword = respond.data.ee.word.trs[0].tr[0].tran
        let exam_type = ''
        let blng_sents_part = respond.data.blng_sents_part["sentence-pair"]
        // 拼接词语所属考试范围 
        for (let index = 0; index < respond.data.ec.exam_type.length; index++) {
          exam_type += respond.data.ec.exam_type[index] + ' | ';
        }
        // 拼接例句
        let sentences = []
        for (let index = 0; index < blng_sents_part.length; index++) {
          let preFix = (index+1) + '. '
          sentences[index] = {
            s: preFix+blng_sents_part[index].sentence,
            trans: blng_sents_part[index]['sentence-translation'],
          }
        }
        that.data.studyPercent += 5
        that.setData({
          exampleSentence: blng_sents_part[0].sentence,
          studyPercent: that.data.studyPercent
        });
        getApp().globalData.studyWord = {
          word: rsword["return-phrase"],
          examType: exam_type,
          soundmark: '/' + rsword.usphone + '/',
          mean_cn: rsword.trs[0].pos + rsword.trs[0].tran,
          mean_en: eeword,
          sentence: blng_sents_part[0].sentence,
          sentence_trans: blng_sents_part[0]['sentence-translation'],
          sentences: sentences,
          studyPercent: that.data.studyPercent
        };
        console.log('searchWord success studyWord:', getApp().globalData.studyWord)
      },
    })
  },
  // 点击单词发音
  onPlaySoundTap: function() {
    innerAudioContext.src = this.data.audioUrl + this.data.currentWord
    innerAudioContext.play()
  },

  // 点击想起来了
  onRemenberTap: function(e) {
    console.log('onRemenberTap')
    wx.navigateTo({
      url: '/pages/study/playground/playground?forget='+'0',
    })
  },
  // 点击忘记
  onForgetTap: function(e) {
    console.log('onForgetTap=', this.data.forgetTimes)
    
    if (this.data.forgetTimes >= 1) {
      wx.navigateTo({
        url: '/pages/study/playground/playground?forget='+'1',
      })
      return
    }
    this.setData({
      showExample: true,
      forgetTimes: 1
    })
  }

})