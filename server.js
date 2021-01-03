require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app.js');
const { PORT, MONGODB_URI } = require('./config.js');

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
