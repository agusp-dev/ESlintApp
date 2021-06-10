import logo from './logo.svg'
import './App.css'

function App () {

  const fun = () => {
    const num = 3
    switch (num) {
    case 1: {
      console.log('its 1')
      break
    }
    case 2: {
      console.log('asdf')
    }
    }
  }

  const e = 'asdf'
  console.log(e, fun)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
