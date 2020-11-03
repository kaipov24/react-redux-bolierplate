import React from "react"
import { useSelector } from "react-redux"

const List = () => {
  const products = useSelector((store) => store.example.products)

  return (
    <div>
      {products.map((it) => {
        return <div key={it.id}>{it.name}</div>
      })}
    </div>
  )
}

export default React.memo(List)
