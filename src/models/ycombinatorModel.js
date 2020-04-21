

exports.getYcombinatorEntry = (data) => {

    const { title, orderNumber, commentsAmount, points } = data || {};

    return {
        title,
        orderNumber,
        commentsAmount,
        points,
    };

};

exports.getEntriesOrderedByCommentsMoreThanWords = (wordsCount, entriesList) =>{

    const result = entriesList.filter(entry => entry.title.split(' ').length > wordsCount );

    return result.sort((a, b) => {

        if (parseInt(a.commentsAmount) > parseInt(b.commentsAmount)) {
            return -1;
        }
        if (parseInt(a.commentsAmount) < parseInt(b.commentsAmount)) {
            return 1;
        }

        return 0;
    });

};

exports.getEntriesOrderedByPointsLessThanOrEqualWords = (wordsCount, entriesList) =>{

    const result = entriesList.filter(entry => entry.title.split(' ').length <= wordsCount );

    return result.sort((a, b) => {

        if (parseInt(a.points) > parseInt(b.points)) {
            return -1;
        }
        if (parseInt(a.points) < parseInt(b.points)) {
            return 1;
        }

        return 0;
    });

};
