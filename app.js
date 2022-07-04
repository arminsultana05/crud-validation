const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv');
dotenv.config();
const { connect } = require('mongoose');

//mongodb connected
connect(
    `mongodb+srv://${process.env.USER_ID}:${process.env.USER_PASS}@cluster0.pbmygbv.mongodb.net/signin?retryWrites=true&w=majority`).then(() => console.log('User connection successfull')).catch((error) => console.log(`Error to connect  ${error}`));

// morgan
const morgan = require('morgan')

const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/categories')

const app = express();

//express
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))
app.use('/user', userRoutes )
app.use('/category', categoryRoutes)

module.exports = app;