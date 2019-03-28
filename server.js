//copy and pasted from the documentation. 

// // Require the framework and instantiate it
// const fastify = require('fastify')({
//     logger: true
//   })

  //imports
  const fastify = require('fastify')();
  // Declare a route
  fastify.register(require('./routes/users'), );
  //listener
  fastify.listen(3000, function (err, address) {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log('Server is running, Brotato-chip');
    }
  });

  
  // Run the server!
  fastify.listen(3000, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`server listening on ${address}`)
  })