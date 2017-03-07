/**
 * Created by John on 2014/8/11.
 */
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');
let path = require('path');
let mime = require('mime');

function textRequest (query, req, resq, fileName, time) {
   request(query.url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
          let $ = cheerio.load(body);
          let arr = [];
          let getChilren = (children) => {
            children.forEach((el) => {
                if(el.children && el.children.length > 0) {
                    getChilren(el.children)
                }
                if(el.next && el.next.length > 0) {
                    getChilren(el.next)
                }
                if(el.prev && el.prev.length > 0) {
                    getChilren(el.prev)
                }
                if(el.data && el.data.match("\n") === null) {
                    arr.push(el.data)
                }
            })
          }
          getChilren($._root.children)
          let num = Math.random() * 100000000000000000;
          fs.writeFile(fileName + num + ".txt", arr,  function(err) {
             if (err) {
                 return console.error(err);
             }
              console.log("写入成功")
              let file = path.join(__dirname, '../files/' + query.fileName + time + "/" + num + ".txt");
              console.log(file + "------")
              let filename = path.basename(file);
              let mimetype = mime.lookup(file);        //匹配文件格式

              resq.setHeader('Content-disposition', 'attachment; filename=' + filename);
              resq.setHeader('Content-type', mimetype);

              let filestream = fs.createReadStream(file);
              filestream.on('data', function(chunk) {
                resq.write(chunk);
              });
              filestream.on('end', function() {
                resq.end();
              });
          });
      }
  })
}

function (query, req, resq, fileName, time) {
  request(query.url, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      var $ = cheerio.load(body);
      var img = $('img');
      img.each(function (value) {
        var src = img.attr('src');
        console.log("img:", src);
      })
    }
  })
}

let cralwer = {
    getData: (query, req, resq) => {
        let date = new Date();
        let time = date.getTime();
        // let url = 'http://www.ss.pku.edu.cn/index.php/newscenter/news/2391';
        //request(url).pipe((fs.createWriteStream('suren.html')));
        let fileName = "./files/" + query.fileName + time + "/";
        fs.mkdir(fileName, function(err){
            if (err) {
                return console.error(err);
            }
            console.log("目录创建成功。");
        });
        if(query.contentType === "all") {
          textRequest(query, req, resq, fileName, time);
        }
        else if(query.contentType === "image") {

        }
    },
}

module.exports = cralwer;