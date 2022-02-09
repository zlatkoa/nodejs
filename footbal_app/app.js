const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const agentsRouter = require('./routes/agents');
const clubsRouter = require('./routes/clubs');
const coachesRouter = require('./routes/coaches');
const leaguesRouter = require('./routes/leagues');
const playersRouter = require('./routes/players');


const agentsApiRouter = require('./routes/api/agents');
const clubsApiRouter = require('./routes/api/clubs');
const coachesApiRouter = require('./routes/api/coaches');
const leaguesApiRouter = require('./routes/api/leagues');
const playersApiRouter = require('./routes/api/players');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/footbal-app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/agents', agentsRouter);
app.use('/clubs', clubsRouter);
app.use('/coaches', coachesRouter);
app.use('/leagues', leaguesRouter);
app.use('/players', playersRouter);

app.use('/api/agents', agentsApiRouter);
app.use('/api/clubs', clubsApiRouter);
app.use('/api/coaches', coachesApiRouter);
app.use('/api/leagues', leaguesApiRouter);
app.use('/api/players', playersApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
