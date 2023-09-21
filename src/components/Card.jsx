// import React from 'react'
import "./card.css"
const Card = ({children,className,onClick}) => {
    // const {}
  return (
    <article className={`card ${className}`} onClick={onClick}>
      {children}
    </article>
  )
}

export default Card
