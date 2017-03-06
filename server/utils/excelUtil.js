let excelPort = require('excel-export');
let fs = require("fs");

let ExcelUtil = {

  write: () => {
      // var datas = req.datas;
      var conf = {};
      var filename = 'filename';  //只支持字母和数字命名

      
      // conf.cols = [
      //    {caption:'名称', type:'string', width:20},
      //    {caption:'简介', type:'string', width:40},
      //    {caption:'报酬', type:'string', width:20},
      //    {caption:'时间', type:'date', width:40},
      //    {caption:'人员', type:'string', width:30},
      //    {caption:'编号', type:'string', width:30},
      //    {caption:'金额', type:'number', width:30},
      //    {caption:'手机号', type:'string', width:30}
      // ];

      
      // var array = [];
      // array[0] = [
      //     1,2,3,4,5,6,7,8
      // ];


      // conf.rows = array;
      // // var result = excelPort.execute(conf);

      // var random = Math.floor(Math.random()*10000+0);

      // var uploadDir = '/pay';
      // var filePath = uploadDir + filename + random + ".xlsx";

      // fs.writeFile("text.text", "", 'binary',function(err){
      //     if(err){
      //         console.log(err);
      //     }
      // });

    //   fs.mkdir("./files/",function(err){
    //      if (err) {
    //          return console.error(err);
    //      }
    //      console.log("目录创建成功。");
    //   });
    //   fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
    //    if (err) {
    //        return console.error(err);
    //    }
    //    console.log("数据写入成功！");
    //    console.log("--------我是分割线-------------")
    //    console.log("读取写入的数据！");
    //    fs.readFile('input.txt', function (err, data) {
    //       if (err) {
    //          return console.error(err);
    //       }
    //       console.log("异步读取文件数据: " + data.toString());
    //    });
    // });
  }
}

module.exports = ExcelUtil;