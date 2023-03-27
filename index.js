import express from 'express';
const { pkg } = express;
import sequelize from './config/configDataBase.js'

import  router  from './router.js';
const app=express();

const PORT= process.env.PORT||3001

app.use(router)

app.listen(PORT,()=>console.log(`the server runing on ${PORT}`))

await sequelize.authenticate()

console.log("Testing the database connection..");

