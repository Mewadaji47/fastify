const adminController = require('../controller/adminController')

async function adminRoutes(fastify, options) {
    fastify.get('/total-registered', adminController.totalregisterd);
   
  }

module.exports = adminRoutes