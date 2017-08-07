'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multiparty = require('multiparty');

var _multiparty2 = _interopRequireDefault(_multiparty);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
    var list = {
        babp: "dsf"
    };
    res.json(list);
});

router.post('/upload', function (req, res) {

    console.log("upload post");

    // res.send("got data");

    var form = new _multiparty2.default.Form();
    form.on('field', function (name, value) {
        console.log('normal filed / name = ', name, ', value = ', value);
    });

    form.on('part', function (part) {
        var filename = void 0;
        var size = void 0;

        //First Stream?
        if (part.filename) {
            filename = part.filename;
            size = part.byteCount;

            console.log("part : ", part);
            console.log("file name : ", filename);
            console.log("file size : ", size);
        } else {
            part.resume();
        }

        console.log("Write Streaming File : ", filename);
        var writeStream = _fs2.default.createWriteStream('./DB/' + filename);
        writeStream.filename = filename;
        part.pipe(writeStream);

        // part.on('data', (chunk) => {
        //     console.log("read", chunk.length, 'bytes');
        // });

        part.on('end', function () {
            console.log(filename, "part reading complete");
            writeStream.end();
        });
    });

    form.on('progress', function (byteRead, byteExcepted) {
        console.log("Form on Progress Function : ", byteRead / byteExcepted * 100.0, "%");
    });

    form.on('close', function () {
        console.log("upload complete");
        res.status(200).send('Upload Complete');
    });

    form.parse(req);
});

exports.default = router;