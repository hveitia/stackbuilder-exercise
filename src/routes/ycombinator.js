const express = require('express');
const router = express.Router();

const ycombinatorController = require('../controllers/ycombinatorController');

router.route('/ycombinator')
    .get(ycombinatorController.getYcombinatorEntries);


module.exports = router;
