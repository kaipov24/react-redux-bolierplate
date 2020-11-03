import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import List from "./list"
import { getProducts } from "../redux/reducers/example"

const Main = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div>
      <List />

    </div>
  )
}

export default React.memo(Main)
