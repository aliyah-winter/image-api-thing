import React, { useEffect } from 'react'
import Image from './Image'

function ImageList({ poem }) {
  const msg = new SpeechSynthesisUtterance()
  msg.text = poem.lines.join(' ')

  useEffect(() => {
    window.speechSynthesis.speak(msg)
  }, [])

  return (
    <div className="img-grid">
      {poem.lines.map((line) => (
        <Image key={line} line={line} />
      ))}
    </div>
  )
}

export default ImageList
