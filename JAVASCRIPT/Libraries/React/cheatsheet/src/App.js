import React from 'react'
import Classes from './components/Classes'
import Functions from './components/Functions'
import Children from './components/Classes/Children'

const App = () => {
  return (
    <div>
      <Classes />
      <Functions hello={'Hello'} />
      <Children />
    </div>
  )
}

export default App