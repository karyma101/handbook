import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

// A <BrowserRouter> uses regular URL paths.These are generally the best - looking URLs, but they require your server to be configured correctly.Specifically, your web server needs to serve the same page at all URLs that are managed client - side by React Router.Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.

// A <HashRouter> stores the current location in the hash portion of the URL, so the URL looks something like http://example.com/#/your/page. Since the hash is never sent to the server, this means that no special server configuration is needed.