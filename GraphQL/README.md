# GraphQL

Strongly typed query language and runtime for your data created by facebook.

## Creating Queries
1. Create query type in the schema using SDL
1. Add fields to the query type
1. Create resolvers that for the fields

## Resolving Queries
1. Resolver names must match the exact field name on your schema types
1. Resolvers must return the value type declared for the matching field
1. Resolvers can be async
1. Can retrieve data from any source

## Definitions 
- Schema Definition Language(SDL)
- Types: a construct defining a shape with fields
- Fields: keys on a Type that have a name and value type
- Scalars: primitive value type built into GraphQL
- Query: type that defines how clients can access data
- Mutation: types that defines how clients can modify or create data