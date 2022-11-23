import React from 'react'

function Image({ image, line }) {
  return (
    image && (
      <>
        <div className="img-div">
          <img src={image.output_url} alt={line} className="img" />
          <p className="pink-text">{line}</p>
        </div>
      </>
    )
  )
}

export default Image
