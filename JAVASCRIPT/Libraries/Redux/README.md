# Redux

## Middleware in Redux

- Function that gets called with every action we dispatch
- Has the ability to STOP, MODIFY, or otherwise mess around with actions
- Tons of open source middleware exist
- Most popular use of middleware is for dealing with async actions
- We are going to use a middleware called redux-thunk to solve our async issues

### Redux-Thunk

- If Action is return with a function, it gets invoked with dispatch, once request is complete we manually dispatch action, new action object.
- If Action is return with an object it goes straight to the reducer

### Rules of Actions

- Actions Creators must return action objects
- Must have a type property
- Can optionally have a payload

### Rules of Reducers

- Must return any value besides 'undefined'
- Produces 'state' or data to be used inside of your app using only previous state and the actions (reducers are pure)
- Must not return reach 'out of itself' to decide what value to return
- Must not mutate its input 'state' argument
