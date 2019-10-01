# React

## Advantages of using React
- Fast
- Modular, instead of writing large, dense files of code, you can write many smaller, reusable files.
- Scalable
- Flexible

## Notes

### [JSX](https://reactjs.org/docs/jsx-in-depth.html)

- class attributes must be changed to className since class is reserved word in Javascript.
- must include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error
- Object properties are also often used to set attributes
- cannot use if statements in jsx but can use ternary operators
- Every JSX element is secretly a call to React.createElement(), more [indepth](https://reactjs.org/docs/react-api.html#react.createelement)

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

### Components

- components are a small, reusable chunk of code that is responsible for one job.
- components class variable names must begin with capital letters

### Props

```JSX

// this.props.children: will return values in between component JSX Tags

<Component>
  <li>Child</li>
  <li>Child</li>
</Component>
```
```JSX

// .defaultProps

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Example.defaultProps = { text: 'hello' }; 
```

### State

- this.setState() takes an object, and merges that object with the component’s current state. If there are properties in the current state that aren’t part of that object, then those properties remain how they were.















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

