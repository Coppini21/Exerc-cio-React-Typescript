import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles"
import { Home } from "./pages/Home/Home"
import Rotas from "./routes"



function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <GlobalStyle/>  
    </BrowserRouter>
  )
}

export default App
