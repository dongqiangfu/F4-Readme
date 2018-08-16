var faData = require("../../data/family.js");

Page({
  data: {
  },
  toSpecies:function(event){
    var fId = event.currentTarget.dataset.familyId;
    wx.navigateTo({         url: '../tujian-family/species/species?fId='+fId     
    })
  },
  
  onLoad: function (options) {
    this.setData({familyKey:faData.familys});     
  },

  onShareAppMessage: function (res) {
       
  }
})
