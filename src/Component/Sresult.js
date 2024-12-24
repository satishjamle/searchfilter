import React from 'react'

export const Sresult = (props) => {

    // const img = `https://picsum.photos/200/300/?mango${props.name}`
    const img = `https://source.unsplash.com/collection/190727/40x300${props.name}`
  return (
    <>
    <img src={img} alt="search" />
    </>
  )
}


