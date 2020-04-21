const ycombinatorService = require('../services/ycombinatorService');
const genericResponse = require('../utils/genericResponse');

exports.getYcombinatorEntries = async (req, res) => {

    try {
        const result = await ycombinatorService.getYcombinatorEntries(req, res);

        genericResponse.success(res, result);

    }catch (error) {
        genericResponse.success(res, error.message);
    }



};
