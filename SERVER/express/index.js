const express = require('express');
const connectDb = require('./db');
const app = express();
const { port } = require('./config');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

connectDb();

app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Melosynthia API',
      version: '1.0.0',
      description: 'Melosynthia API',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: [
    './index.js',
    './Routes/music/index.js',
    './Routes/lyrics/index.js',
    './Routes/melobot/index.js',
  ],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



/**
 *  @swagger
 *  /:
 *    get:
 *      summary: Welcome to MelosynthioAI!
 *      description: Welcome to MelosynthioAI!
 *      responses:
 *        200:
 *          description: Welcome to MelosynthioAI!
 */
app.get('/', (_, res) => {
  res.send('Welcome to MelosynthioAI!');
});

app.use('/music', require('./Routes/music/index.js'));
app.use('/lyrics', require('./Routes/lyrics/index.js'));
app.use('/melobot', require('./Routes/melobot/index.js'));


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
