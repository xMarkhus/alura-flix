import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle"
import AppRoutes from "./routes/routes"

const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </>
)

export default App
