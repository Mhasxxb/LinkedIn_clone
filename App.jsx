import Header from './Header.jsx'
import Home from "./Home.jsx"
import {Routes, Route} from "react-router"

function App() {

  return (
    <>
      <Header /> 
      <Routes>
        <Route   path = "/" element = {<Home/>} />
      </Routes>  
    </>
  )
}

export default App
