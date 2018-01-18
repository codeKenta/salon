const express     = require('express'),
      router      = express.Router(),
      mongoose    = require('mongoose'),
      Salon       = require('../models/salon');

// Route for getting all salons
router.get('/', (req, res, next) => {
  Salon.find({}, (err, salons) => {
    if (err) throw err;
    res.json(salons);
  });
});

// Route for getting one salon by the identityname
router.get('/:identityname', (req, res, next) => {
  Salon.findOne({identityname: req.params.identityname}, (err, salon) => {
    if (err) throw err;
    res.json(salons);
  });
});

// Route for adding new salons to the database
router.post('/', (req, res, next) => {

  newSalon = new Salon(req.body);

  newSalon.save((err, createdSalon) => {
    if (err) {
      res.json({success: false, msg: 'Salon could not be created'});
    } else {
      res.json({success: true, msg: 'Salon was successfully created'});
    }
  });
});


module.exports = router;
