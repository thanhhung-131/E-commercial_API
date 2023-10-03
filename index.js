const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const route = require('./routes/index')
const cors = require('cors')

dotenv.config()
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected!')
  })
  .catch(err => {
    console.log(err)
  })
app.use(express.json())
app.use(cors())
route(app)
app.listen(process.env.PORT || 5000, () => {
  console.log('listening on', process.env.PORT || 5000)
})
