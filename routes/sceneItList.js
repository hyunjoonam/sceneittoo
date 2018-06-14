const express = require('express');
const router = express.Router();
const models = require('../models');

/* GET UserMovie (Scene It) List page.*/
router.get('/', function(req, res, next) {
    res.render('sceneItList', { title: 'Scene It Too?' });
  });


/* Render all Scene It movies */
router.get('/', function(req, res, next) {
    models.Usermovie.findAll({
        where: {
            UserId: req.user
        },
        include: [
            models.Movie,
        ]
    })
    .then(usermovies => {
        res.render('sceneItList', {
        title: 'Scene It List',
        usermovies: usermovies,
        // usermovies: [
        //     {
        //         sceneitlist: true,
        //         wishlist: false,
        //         movie: {

        //         }
        //     }
        // ]
        });
    })
});

/* Create button to add/remove from Ain't Scene List */

/* Create button to add/remove from Scene It List */



module.exports = router;