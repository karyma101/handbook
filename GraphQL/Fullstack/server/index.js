const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const app = express()

app.use('/graphql', () => graphqlHTTP({
  graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Now Listening on port ' + PORT)
})

app.get('/', (req,res) => {
  res.send('Hello')
})