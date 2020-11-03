import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { Switch, Route } from "react-router-dom"
import history from "./history"
import Main from "./components/main.js"


function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Main} />

      </Switch>
    </ConnectedRouter>
  )
}

export default App
