const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

mongoose.connect('mongodb+srv://kary:test123@cluster0-ocvof.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once('open', () => {
  console.log('Connected to Database')
})



app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Now Listening on port ' + PORT)
})
