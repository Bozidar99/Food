
import { Outlet } from "react-router-dom"
import  NavBarComponent  from "./components/NavBarComonent"
import FooterComponent from "./components/FooterComponent"

function App() {


  return (
    <> 
      <NavBarComponent />


      <Outlet />

      <FooterComponent />
    </>
  )
}

export default App
