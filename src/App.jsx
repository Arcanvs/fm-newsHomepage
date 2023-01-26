import logo from './assets/logo.svg'
import HomePage from './components/pages/HomePage'

function App() {
  return (
    <main className="App">
      <HomePage />
      News Home Page <img src={logo} className="logo W" alt="Logo News HomePage" />
    </main>
  )
}

export default App
