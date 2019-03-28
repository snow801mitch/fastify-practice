async function routes (fastify, options) {
    //create the database calls in the fastify.get
    fastify.get('/:id', async (req, res) => {
        res.send({
            id: req.params.id,
            firstName: "Mitch",
            lastName: "Snow",
        });
    });

};
module.exports = routes;