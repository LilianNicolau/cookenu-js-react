import { GlobalStyle } from '../global'
import Router from './router/Routes'
import GlobalState from './globalState/GlobalState'

function App() {

  return (
    <GlobalState>
      <Router/>
      <GlobalStyle/>
    </GlobalState>
  )
}

export default App
