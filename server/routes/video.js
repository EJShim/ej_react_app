import express from 'express';
import request from 'request';
import cheerio from 'cheerio';
import Spooky from 'spooky';

const router = express.Router();




router.get('/', (req, res) => {
    let url = "https://www.youtube.com/user/soulrommel/videos?shelf_id=0&sort=dd&view=0";
    let list = [];



    // USE REQUEST
    // Get Video List of ID :Soulrommel' and send response
    request(url, function (error, response, html) {
        if (!error) {
            let $ = cheerio.load(html);

            $('.yt-lockup-thumbnail>span>a').each(function () {
                let addr = $(this).attr("href");
                let key = addr.split("=")[1];

                // list.push("http://youtube.com/" + $(this).attr('href'))
                list.push("https://www.youtube.com/embed/" + key)
            });
            res.send(list);
        }
    });
});

export default router