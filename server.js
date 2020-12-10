require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const routes = require('./routes');
const cors = require('cors');
const helmet = require('helmet');
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(routes);

app.use(function errorHandler(err, req, res, next) {
  console.error(err);
});

require('./config.js')
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
