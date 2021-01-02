require('dotenv').config();
const app = require('./app.js');

const PORT = process.env.PORT || 5000;

require('./config.js')
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
