var speData = require("../../../data/spes.js");
Page({
  data: { fId:''
  },
  onLoad: function (options) {
    var fId = "spes_" + options.fId;
    var spes = speData[fId];
    this.setData({ speKey: spes, fId });
  },
  toDetail: function (event) {
    var sId = event.currentTarget.dataset.speId;
    //console.log(sid);
    wx.navigateTo({
      url: '../detail/detail?fId=' + this.data.fId + '&sId=' + sId
    })
  },

  onShareAppMessage: function () {

  }
})