import React, { useState } from 'react'
import "../styles/ReadMore.css"

const ReadMore = ({children, limit}) => {

  const [isReadMoreShown, setReadMoreShown] = 
  useState(false)

  const toggleButton = () => {
    setReadMoreShown(prevState => !prevState)
  }

  return (
    <div className="read-more-read-less">
      {/* {children} */}
      {isReadMoreShown ? children : children.substr(0, limit)}
      <br /><br />
      <button className='readmorebtn' onClick={toggleButton}> {isReadMoreShown ? 'Read Less' : 'Read More'} </button>
    </div>
  )
}

export default ReadMore