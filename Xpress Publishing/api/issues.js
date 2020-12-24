const express = require('express');
const sqlite3 = require('sqlite3');

const issuesRouter = express.Router({mergeParams: true});

const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

issuesRouter.get('/', (req, res, next) => {
    db.all('SELECT * FROM Issue', (err, issues) => {
        if(err) {
            next(err);
        } else {
            res.status(200).json({issues: issues});
        }
    });
});

module.exports = issuesRouter;