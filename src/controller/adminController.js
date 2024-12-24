const User = require('../models/student.model')
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 600, checkperiod: 60 });

// async function totalregisterd(req, reply) {
//     try {
//       // Check if data is available in the cache
//       const cachedData = cache.get('totalStudents');
//       if (cachedData) {
//         console.log('Returning cached data');
//         return reply.status(200).send({
//           status: 200,
//           total: cachedData,
//           cached: true,  // Indicating this was from cache
//         });
//       }
  
//       // If cache is not available, fetch from database
//       const total = await User.find();
  
//       // Store the result in the cache
//       cache.set('totalStudents', total);
  
//       console.log('Returning fresh data');
//       reply.status(200).send({
//         status: 200,
//         total: total,
//         cached: false,  // Indicating this was fresh data
//       });
  
//     } catch (error) {
//       console.error(error);
//       reply.status(500).send({
//         status: 500,
//         message: 'Error retrieving total registered students',
//       });
//     }
//   }




async function totalregisterd(req , reply){
    try {
       const total =await User.find({});
  
       reply.status(200).send({
          status:200,
          total:total
       })
      
    } catch (error) {
        reply.status(500).send({
                    status: 500,
                     message:'Error retrieving total registered students',
      });
    }
  }
  
  




module.exports = { totalregisterd}