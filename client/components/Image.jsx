import React, { useState, useEffect } from 'react'
import { getImage } from '../apiClient'

function Image({ line }) {
  const msg = new SpeechSynthesisUtterance()
  msg.text = line
  const [image, setImage] = useState({})
  useEffect(() => {
    window.speechSynthesis.speak(msg)
    getImage(line)
      .then((res) => {
        setImage(res.output_url)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <img src={image} alt="generated" className="img" />
      {/* <p className="pink-text">{line}</p> */}
    </>
  )
}

export default Image
