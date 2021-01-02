const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./routes/user.js');
const eventRouter = require('./routes/event.js');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/user', userRouter);
app.use('/api/event', eventRouter);

app.use(function errorHandler(err, req, res, next) {
  console.error(err);
});

