const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise');

const { dbConfig } = require('./config')

const gamesController = require('./controllers');
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const init = async () => {
    const connection = await mysql.createConnection(dbConfig)
    global.mysqlConnection = connection;
    app.listen(PORT, () => console.log(`App is on port: ${PORT}`))
}

init();

app.use('/', gamesController);

process.on('uncaughtException', (err, origin) => {
    console.log(err);
  });