// pages/Fruit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    FruitList: [
      {Index:0, name: "香蕉", number: 10, price: 1, buy_num: 0, image: '../image/banana.jpg' },
      {Index:1, name: "苹果", number: 10, price: 3, buy_num: 0, image: '../image/apple.jpg' },
      {Index:2, name: "橘子", number: 10, price: 2, buy_num: 0, image: '../image/orange.jpg' },
      {Index:3, name: "芒果", number: 10, price: 4, buy_num: 0, image: '../image/mango.jpg' },
      {Index:4, name: "火龙果", number: 10, price: 5, buy_num: 0, image: '../image/dragonfruit.jpg'},
      {Index:5, name: "梨子", number: 10, price: 2.5, buy_num: 0, image: '../image/pear.jpg' }
    ],
    sum: 0


  },
  compute:{},
 
    // 减少数量
    decrease:function(event) {
      const Index = event.currentTarget.dataset.index;
     
      this.setData({
        ['FruitList['+Index+'].buy_num']:--this.data.FruitList[Index].buy_num,
        ['FruitList['+Index+'].number']:++this.data.FruitList[Index].number,
        'sum':this.data.sum-this.data.price
      })
    },
    

    // 增加数量
    increase:function(event) {
      console.log(event);
      const Index = event.currentTarget.dataset.index;
      console.log('view tap')
      console.log(this.data)
      this.setData({
        ['FruitList['+Index+'].buy_num']:++this.data.FruitList[Index].buy_num,
        ['FruitList['+Index+'].number']:--this.data.FruitList[Index].number,
        'sum':this.data.sum+this.data.price
      })

    },
    
    goNext:function() {
      
      wx.navigateTo({
        url: './Pay?money='+this.sum
      })
    }
  ,

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
  event(){}
})
