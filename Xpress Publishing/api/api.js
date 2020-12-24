const express = require('express');
const artistsRouter = require('./artists');
const seriesRouter = require('./series');
const issuesRouter = require('./issues');

const apiRouter = express.Router();

apiRouter.use('/artists', artistsRouter);
apiRouter.use('/series', seriesRouter);
apiRouter.use('/:seriesId/issues', issuesRouter);

module.exports = apiRouter;