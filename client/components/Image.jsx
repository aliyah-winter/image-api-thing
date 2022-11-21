import React, { useState, useEffect } from 'react'
import { getImage } from '../apiClient'

function Image({ line }) {
  const [image, setImage] = useState({})

  useEffect(() => {
    getImage(line)
      .then((res) => {
        setImage(() => res.output_url)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    image && (
      <>
        <div className="img-div">
          <img src={image} alt={line} className="img" />
          <p className="pink-text">{line}</p>
        </div>
      </>
    )
  )
}

export default Image
