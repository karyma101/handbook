# React

## Advantages of using React
- Fast
- Modular, instead of writing large, dense files of code, you can write many smaller, reusable files.
- Scalable
- Flexible

## Notes

### JSX

- class attributes must be changed to className since class is reserved word in Javascript.
- must include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error
- Object properties are also often used to set attributes

```JSX
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
```

### ReactDOM

- ReactDOM.render() is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

### Virtual DOM

### [Events](https://reactjs.org/docs/events.html#supported-events)
- onClick
- onMouseMove

- **Functional Components**: Good for simple content
- **Class Components**: Good for just about everything else
  - States
  - Lifecycle Methods
    - Render happens again after componentDidUpdate
    - Recommend to place initial data loading in componentDidMount and not in the constructor
- Conditional Rendering
- Default State to array or object, ex. if map is used later on null it will result in an error
- key: function()
- If you don't specify ./index, webpack(puts all the files together) will automatically give you the index.js

### Rules of a Class Component

- Must be a Javascript Class
- Must Extend(Subclass) React.Component
- Must define a render method that returns some amount of JSX

### Rules of State

- Only usable with class components
- You will confuse props with state
- 'State' is an JS object that contains data relevant to a component
- Updating 'State' on a component causes the component to (almost) instantly rerender
- 'State' must be initialized when a component is created
- 'State' can only be updated using the function 'setState
- Super() must be called in constructor so it does not replace the constructor in react.component

- **Keys** are a way that React gives elements a stable identity. As things change very quickly in the virtual DOM, React needs an internal mechanism for keeping track of which items have been updated, which items have been removed, etc. Generally speaking, you want the key of each item to be a unique identifier, so that there aren't overlaps between the keys of multiple lists.

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

# React-Router-Dom

## Routers

- Traditional Servers will return 404 if page is not found, react dev servers will check dev resources, public directory if page is not found it will return the index.

- **BrowserRouter**: uses everything after the TLD (.com, .net) or port as the 'path'
  - localhost:3000/page
- **HashRouter**: uses everything after a # as the 'path'
  - localhost:3000/#/page
- **MemoryRouter**: doesn't use the URL to track navigation
  - localhost:3000/
