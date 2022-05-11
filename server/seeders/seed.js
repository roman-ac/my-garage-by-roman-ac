const db = require('../config/connection');
const { User, Car, Service } = require('../models');
const userSeeds = require('./userSeeds.json');
// const thoughtSeeds = require('./thoughtSeeds.json');
const carSeeds = require('./carSeeds.json');
const serviceSeeds = require('./serviceSeeds.json');

// db.once('open', async () => {
//   try {
//     await Thought.deleteMany({});
//     await User.deleteMany({});


//     await User.create(userSeeds);

//     for (let i = 0; i < thoughtSeeds.length; i++) {
//       const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//       const user = await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         {
//           $addToSet: {
//             thoughts: _id,
//           },
//         }
//       );
//     }
    
    

//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });

db.once('open', async () => {
  
    await User.deleteMany({});
    await Car.deleteMany({});
    await Service.deleteMany({});

    // bulk create each model
  const users = await User.insertMany(userSeeds);
  const cars = await Car.insertMany(carSeeds);
  const services = await Service.insertMany(serviceSeeds);

    
  for (newCar of cars) {
    // randomly add each car to a user
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.cars.push(newCar._id);
    await tempUser.save();

    // randomly add services to each car
    const tempService = services[Math.floor(Math.random() * services.length)];
    newCar.service = tempService._id;
    await newCar.save();
  }

  console.log('all done!');
  process.exit(0);
});

