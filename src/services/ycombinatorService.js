const cheerio = require('cheerio');
const axios = require('axios');
const ycombinatorModel = require('../models/ycombinatorModel');
const {URL, SELECTOR, ENTRIES_COUNT, WORDS_COUNT} = require('../configs/globalConfigs');


exports.getYcombinatorEntries = async () => {

    try {

        const response = await axios.get(URL);

        const $ = cheerio.load(response.data);

        const selector = SELECTOR;

        let ycombinatorList = [];

        $(selector).each(function (index, value) {

            if(index < ENTRIES_COUNT){

                    const commentFull = value.next.children[1].children[11].children[0].data.split('');
                    let comment = [];
                    commentFull.forEach(char => {
                        if (!isNaN(char)) {
                            comment.push(char);
                        }
                    });

                    const data = {
                        title: value.children[4].children[1].prev.children[0].data,
                        orderNumber: value.children[1].children[0].children[0].data.split('.')[0],
                        commentsAmount: comment.join('').trim(),
                        points: value.next.children[1].children[1].children[0].data.split(' ')[0],
                    };

                    const model = ycombinatorModel.getYcombinatorEntry(data);

                    ycombinatorList.push(model);

                }else{

                    return false;
                }
        });

        return {
            ycombinatorListFull: ycombinatorList,
            entriesOrderedByCommentsMoreThanWords: ycombinatorModel.getEntriesOrderedByCommentsMoreThanWords(WORDS_COUNT, ycombinatorList),
            entriesOrderedByPointsLessThanOrEqualWords: ycombinatorModel.getEntriesOrderedByPointsLessThanOrEqualWords(WORDS_COUNT, ycombinatorList),
        }

    }catch(error){

        throw  error;
    }

};

