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
- An uncontrolled component is a component that maintains its own internal state. A controlled component is a component that does not maintain any internal state

### Component Life Cycle Methods

- mounting
  - componentWillMount
  - render
  - componentDidMount 
    - where you usually call external apis
- updating
  - componentWillReceiveProps 
    - automatically gets passed one argument, an object called nextProps. Can be used to check props received and set state before render.
  - shouldComponentUpdate 
    - return true or false, if shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update. None of the remaining lifecycle methods for that updating period will be called, including render.
    - The best way to use shouldComponentUpdate is to have it return false only under certain conditions. If those conditions are met, then your component will not update.
    - automatically receives two arguments, nextProps and nextState. It’s typical to compare nextProps and nextState to the current this.props and this.state, and use the results to decide what to do.
  - componentWillUpdate
    - You cannot call this.setState from the body of componentWillUpdate
    - The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.
  - render
  - componentDidUpdate
    - componentDidUpdate gets called after any rendered HTML has finished loading.
    - automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component’s props and state before the current updating period began. You can compare them to the current props and state.
    - usually used for interacting with things outside of the React environment, like the browser or APIs. It’s similar to componentWillUpdate in that way, except that it gets called after render instead of before.
- unmounting
  - componentWillUnmount
    - occurs when the component is removed from the DOM.
    - This could happen if the DOM is rerendered without the component, or if the user navigates to a different website or closes their web browser.
    - automatically gets passed two arguments: prevProps and prevState.

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
- this.setState() automatically calls .render()

### Styling

```JSX
// Inline Styling

<h1 style={{ color: 'red' }}>Hello world</h1>
```
```JSX
// Object Styling
const styles = {
  background: 'lightblue',
  color: 'darkred'
}

<h1 style={styles}>Hello World</h1>

```

### propTypes

```JSX
componentName.propTypes = {
  prop1: React.PropTypes.string.isRequired,
  prop2: React.PropTypes.object.isRequired,
  prop3: React.PropTypes.bool.isRequired,
  prop4: React.PropTypes.number.isRequired,
  prop5: React.PropTypes.func.isRequired,
  prop6: React.PropTypes.array.isRequired
}
```

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

