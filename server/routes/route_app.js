let url = require('url');  
let dealFn = require('./dealfn.js');
let cralwer = require('../utils/cralwer.js')
let ExcelUtil = require('../utils/excelUtil.js');
let fs = require('fs');

function sendDataFn(req, res, filename, needcity) {
    let query = url.parse(req.url, true).query,
        name = query.name || '',
        city = query.city,
        readFileName = '',
        sendData = {
            errno: 0,
            success: true,
            city: city,
            msg: 'ok',
            data: "test"
        };
    console.log(query)
    if (needcity) {
        readFileName = city + filename;
    } else {
        readFileName = filename;
    }
    cralwer.getData(query, req, res);
    // ExcelUtil.write();
    // cralwer.getData(query, req, res).then((value) => {
    //     sendData.data = value;
    //     if(value.length === 0) {
    //         sendData.success = false;
    //         sendData.msg = "当前 URL 无效。"
    //     }
    //     // res.send(JSON.stringify(sendData));
    //       // var fileName = req.params.fileName;
    //       // var filePath = path.join(__dirname, fileName);
    //       var stats = fs.statSync(filePath); 
    //       if(stats.isFile()){
    //         res.set({
    //           'Content-Type': 'application/octet-stream',
    //           'Content-Disposition': 'attachment; filename='+fileName,
    //           'Content-Length': stats.size
    //         });
    //         fs.createReadStream(filePath).pipe(res);
    //       } else {
    //         res.end(404);
    //       }
    // })
    // dealFn.readFileData(name + readFileName).then((data) => {
    //     sendData.data = data;
    //     res.send(JSON.stringify(sendData));
    // }, (msg) => {
    //     sendData.errno = -1;
    //     sendData.msg = '暂时没有数据';
    //     res.send(JSON.stringify(sendData));
    // })
}

exports.index = (req, res) => {
    console.log(req)
    var test = {
        test: "hello"
    }
   sendDataFn(req, res, 'coming.json', false);
}

exports.coming = (req, res, next) => {
    let query = url.parse(req.url, true).query,
        limit = query.limit,
        offset = query.offset;
    if (limit && offset) {
        next();
    } else {
        sendDataFn(req, res, 'coming.json', false);
    }
}

exports.comingLimit = (req, res) => {
    let query = url.parse(req.url, true).query,
        limit = +query.limit,
        offset = +query.offset,
        sendData = {
            errno: 0,
            total: 0,
            limit: limit,
            offset: offset,
            msg: 'ok',
            data: {}
        };
    dealFn.readFileData('coming.json').then((data) => {
        let list = data.data.returnValue
        let sendList = list.slice(offset, offset + limit)
        data.data.returnValue = sendList
        sendData.data = data;
        sendData.total = list.length
        res.send(JSON.stringify(sendData));
    }, (msg) => {
        sendData.errno = -1;
        sendData.msg = '暂时没有数据';
        res.send(JSON.stringify(sendData));
    })
}

exports.cinema = (req, res) => {
    sendDataFn(req, res, '_cinema.json', true);
}

exports.hot = (req, res) => {
    sendDataFn(req, res, '_hot.json', true);
}

exports.info = (req, res) => {
    sendDataFn(req, res, '_info.json', false);
}

exports.evaluation = (req, res) => {
    sendDataFn(req, res, '_evaluation.json', false);
}

exports.swiper = (req, res) => {
    sendDataFn(req, res, 'swiper.json', false);
}

exports.city = (req, res) => {
    sendDataFn(req, res, 'city.json', false);
}

exports.cinema_detail = (req, res) => {
    sendDataFn(req, res, 'cinema_detail.json', false);
}
