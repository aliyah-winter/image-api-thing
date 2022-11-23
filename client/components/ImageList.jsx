import React, { useEffect } from 'react'
import Image from './Image'

function ImageList({ images, poem }) {
  const msg = new SpeechSynthesisUtterance()
  msg.text = poem.lines.join(' ')

  useEffect(() => {
    return window.speechSynthesis.speak(msg)
  })
  return (
    <div className="img-grid">
      <div className="img-div">
        {images.map((image, idx) => (
          <Image key={image.id} image={image} line={poem.lines[idx]} />
        ))}
      </div>
    </div>
  )
}

export default ImageList
