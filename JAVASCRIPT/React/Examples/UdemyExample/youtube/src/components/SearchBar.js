import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = { term: '' }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Video Search</label>
            <input name='term' value={this.state.term} type='text' onChange={this.onChange} />
          </div>
        </form>
      </div>
    )
  }
}
