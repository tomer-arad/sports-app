const HTTP_STATUS = {
    SUCCESS: 200,
    FAIL: 400
};

const errorHandler = (err, res) => {
    console.error(err.message);
    res.sendStatus(HTTP_STATUS.FAIL);
}

module.exports = {
    errorHandler,
}
