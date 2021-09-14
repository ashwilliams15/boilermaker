const db = require('./server/db/database');
const app = require('./server/app');

const port = process.env.PORT || 1337;

db.sync()
  .then(function() {
    console.log('db synced')
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
