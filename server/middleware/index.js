const _ = require('lodash');

const validComment = (req, res, next) => {
    const { comment, gameID } = req.body;
    if (_.isString(comment) && comment.length < 200 && _.isNumber(Number(gameID))) {
        return next();
    }
    return res.sendStatus(400);
}

module.exports = {
    validComment,
}