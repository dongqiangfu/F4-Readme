var speData = require("../../../data/spes.js");
Page({
  data: {

  },
  onLoad: function (options) {
    let fId = options.fId;
    let sId = options.sId;
    let spes;
    switch (fId) {
      case 'spes_f01': spes = speData.spes_f01;break;
      case 'spes_f02': spes = speData.spes_f02;break;
      case 'spes_f03': spes = speData.spes_f03;break;
    }
    for (let spe of spes) {
      if (spe.speId === sId) {
        this.setData({
          speName: spe.speName,
          speImg: spe.speImg,
          speCon: spe.speCon,
          familyName: spe.familyName
        })
        break;
      }
    }
  },

  onShareAppMessage: function () {

  }
})