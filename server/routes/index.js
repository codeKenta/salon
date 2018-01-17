const express   = require('express'),
      router    = express.Router(),
      mongoose  = require('mongoose');


router.get('/saloons', (req, res, next) => {
      // res.json({user: user});
      res.send("hello");
});


module.exports = router;
