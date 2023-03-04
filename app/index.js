import 'dotenv/config';
import fastify from "fastify";

const app = fastify()

app.get('/', async (request, reply) => {
  await reply.send({
    message: 'hello 👋'
  })
})

const port = process.env.PORT
app.listen({ port, host: '0.0.0.0' })

console.log('Listening on port', port)