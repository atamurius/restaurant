import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'

const Test = props =>
  <div className="container">
    <h1>It works!</h1>
    <p>This should be bootstrap-styled.</p>
  </div>

ReactDOM.render(<Test/>, document.getElementById('container'))
