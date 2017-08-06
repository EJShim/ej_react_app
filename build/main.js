'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// HTTP REQUEST LOGGER
var http = require('http'); // PARSE HTML BODY
// import mongoose from 'mongoose';


var server = http.createServer(function (request, response) {

    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello Shit!");
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

// //Router
// import api from './routes';

// const devPort = 4000;

// /*
//     Express Codes
// */

// // if(process.env.NODE_ENV == 'development') {
// //     console.log('Server is running on development mode');
// //     const config = require('../webpack.dev.config');
// //     const compiler = webpack(config);
// //     const devServer = new WebpackDevServer(compiler, config.devServer);
// //     devServer.listen(
// //         devPort, () => {
// //             console.log('webpack-dev-server is listening on port', devPort);
// //         }
// //     );
// // }


// const app = express();
// const port = process.env.PORT || 1337;

// //MongoDB
// // app.use(morgan('dev'));
// // app.use(bodyParser.json());

// // /* mongodb connection */
// // const db = mongoose.connection;
// // db.on('error', console.error);
// // db.once('open', () => { console.log('Connected to mongodb server'); });
// // // mongoose.connect('mongodb://username:password@host:port/database=');
// // mongoose.connect('mongodb://localhost/codelab');

// // /* use session */
// // app.use(session({
// //     secret: 'CodeLab1$1$234',
// //     resave: false,
// //     saveUninitialized: true
// // }));


// //Main Page
// app.use('/', express.static(path.join(__dirname, '../public')));

// //Router
// app.use('/api', api);

// /* support client-side routing */
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './../public/index.html'));
// });


// /* handle error */
// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });


// ///Open Server
// app.listen(port, () => {
//     console.log('Express is listening on port', port);
// });