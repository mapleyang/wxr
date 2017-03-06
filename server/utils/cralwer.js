/**
 * Created by John on 2014/8/11.
 */
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');


let cralwer = {
    getData: (query, req, res) => {
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

        }
        else if (query.contentType === "text") {

        }
        else {

        }
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
                   // console.log("数据写入成功！");
                   // console.log("--------我是分割线-------------")
                   // console.log("读取写入的数据！");
                   // fs.readFile('input.txt', function (err, data) {
                   //    if (err) {
                   //       return console.error(err);
                   //    }
                   //    console.log("异步读取文件数据: " + data.toString());
                   // });
                    console.log("写入成功")
                });
            }
        })
    },
}

module.exports = cralwer;