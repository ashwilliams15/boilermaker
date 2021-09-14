const { green, red } = require('chalk');
const db = require('./server/db/database');
const Ingredient = require('./server/db/ingredient');
const User = require('./server/db/user');

const seed = async () => {
  try {
    await db.sync({ force: true });

    const ingredient1 = await Ingredient.create({
      itemName: 'flour'
    })
    // const user1 = await User.create({
    //   id: 1,
    //   username: 'Preston',
    //   password: 'fun'
    // })
  } catch (err) {
    console.log(red(err));
  }
};

seed()
  .then(() => {
    console.log(green('Seeding success!'));
    db.close()
  })
  .catch(err => {
    console.error(red('Oh no! Something went wrong with seeding.'))
    console.error(err)
    db.close()
  })
