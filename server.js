require('dotenv').config();
const PORT = process.env.PORT;

require('./config.js')
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.error(err));
