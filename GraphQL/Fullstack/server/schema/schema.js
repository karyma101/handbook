const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
})

const rootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: { 
      type: BookType, 
      args: { id: { type: GraphQLString } } ,
      resolve: (parent, args) => {
        console.log(args)
        //code to get data from db / other source
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})