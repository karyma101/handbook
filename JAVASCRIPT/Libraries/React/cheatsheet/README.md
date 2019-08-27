# Mounting
```javascript
  //Before rendering
  constructor(props)	

  //Don’t use this
  componentWillMount()

  // Render	  
  render()	                   

  // After rendering (DOM available)                       
  componentDidMount()	

  // Before DOM removal
  componentWillUnmount()	

  //Catch errors (16+)
  componentDidCatch()	
```

# Updating
```javascript
// Use setState() here, but remember to compare props
componentDidUpdate(prevProps, prevState, snapshot)	

// Skips render() if returns false
shouldComponentUpdate (newProps, newState)	

//Render
render()

//Operate on the DOM here
componentDidUpdate (prevProps, prevState)	
```