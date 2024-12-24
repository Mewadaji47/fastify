// const Fastify = require('fastify')();
const db = require('./src/config/db');
const PORT = process.env.PORT || 3027;
const adminRoutes = require('./src/routes/admin.routes')

const fastify = require('fastify')({
  logger: true
})
// Register routes (if any)
fastify.register(adminRoutes, { prefix: '/admin' })



// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Server is running at http://localhost:${PORT}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

db.connect().then(()=>{
    start();
})

