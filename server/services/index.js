const _ = require('lodash');

const FETCH_GAMES = 'SELECT `id`, `teamA` as "Team A", `teamB` as "Team B", `scoreA` as "Score A", `scoreB` as "Score B", `time` as "Date", `category` as "Category" FROM `games`';
const GAME_BY_CATEGORY = 'SELECT `id`, `teamA` as "Team A", `teamB` as "Team B", `scoreA` as "Score A", `scoreB` as "Score B", `time` as "Date", `category` as "Category" FROM `games` WHERE category = ?';
const INSERT_COMMENT = 'INSERT INTO `comments`(`comment`, `gameID`, `time`, `category`) VALUES (?,?,?,?)';
const GAME_BY_ID = 'SELECT * FROM `games` WHERE id = ?';
const COMMENT_BY_ID = 'SELECT * FROM `comments` WHERE gameID = ?';

const allGames = () => global.mysqlConnection.execute(FETCH_GAMES, []);

const gamesByCategory = (category) => global.mysqlConnection.execute(GAME_BY_CATEGORY, [category]);

const addComment = async (data) => {
    const now = new Date().toISOString();
    const { comment, gameID } = data;
    const [ results ] = await global.mysqlConnection.execute(GAME_BY_ID, [gameID]);
    const { category } = results[0];
    return global.mysqlConnection.execute(INSERT_COMMENT, [comment, gameID, now, category]);
}

const gameComments = (id) => global.mysqlConnection.execute(COMMENT_BY_ID, [id]);

module.exports = {
    allGames,
    gamesByCategory,
    addComment,
    gameComments
}