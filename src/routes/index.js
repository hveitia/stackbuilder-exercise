const express = require('express');
const router = express.Router();

router.get('/health', function(req, res) {
    res.send({status: "UP!"});
});


module.exports = router;
