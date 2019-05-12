import React from 'react'
import { Route } from 'react-router-dom'
import { StreamList, StreamCreate, StreamEdit, StreamDelete, StreamShow } from './streams'
import Header from './Header'

const App = () => {
  return (
    <div className="ui container">
      <Header />
      <div>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact render={() => <StreamCreate />} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </div>
    </div>
  )
}

export default App
