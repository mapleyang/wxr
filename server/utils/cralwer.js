/**
 * Created by John on 2014/8/11.
 */
let request = require('request');
let cheerio = require('cheerio');
let fs = require('fs');


let cralwer = {
    getData: (url) => {
        let promise = new Promise((resolve, reject) => {
            // let url = 'http://www.ss.pku.edu.cn/index.php/newscenter/news/2391';
            //request(url).pipe((fs.createWriteStream('suren.html')));
            request(url.url, function (error, res, body) {
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
                                console.log(el.data)
                                arr.push(el.data)
                            }
                        })
                    }
                    getChilren($._root.children)
                    resolve(arr)
                }
            })
        }) 
        return promise;
    },
}

module.exports = cralwer;