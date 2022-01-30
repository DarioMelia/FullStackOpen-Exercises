import ReactDOM from 'react-dom'
import App from './App'

import axios from 'axios'

axios
  .get('http://localhost:3001/notes')
  .then(res => {
    const notes = res.data
    ReactDOM.render(
      <App ogNotes={notes} />,
      document.getElementById('root')
    )
  })

