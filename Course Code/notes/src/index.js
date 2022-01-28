import ReactDOM from 'react-dom'
import App from './App'

const ogNotes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  },
  {
    id: 4,
    content: 'This is a note',
    date: '2022-01-28T02:43:14.298Z',
    important: true
  }
]

ReactDOM.render(
  <App ogNotes={ogNotes} />,
  document.getElementById('root')
)