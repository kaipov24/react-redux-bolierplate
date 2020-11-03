import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import example from "./example"

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    example,
  })

export default createRootReducer
