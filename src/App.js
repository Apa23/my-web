import './App.scss'
import NavMenu from './components/NavMenu'
import { itemsMenu } from './menu-items'

function App() {
  return (
    <div className="App">
      <NavMenu items={itemsMenu} />
      <div className="container main-container">
        <div className="row">Section 1</div>
        <div className="row">Section 1</div>
        <div className="row">Section 1</div>
      </div>
    </div>
  )
}

export default App
