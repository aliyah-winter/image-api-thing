import React, { useState, useEffect } from 'react'
import { getImage } from '../apiClient'

function Image({ line }) {
  const [loading, setLoading] = useState(true)
  const [image, setImage] = useState({})
  const msg = new SpeechSynthesisUtterance()
  msg.text = line

  useEffect(() => {
    setLoading(() => true)
    getImage(line)
      .then((res) => {
        setImage(res.output_url)
      })
      .finally(() => {
        setLoading(() => false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  window.speechSynthesis.speak(msg)
  return (
    <>
      {loading ? (
        <img
          src="https://thumbs.gfycat.com/SparseMenacingAkitainu-size_restricted.gif"
          alt={line}
          className="img"
        />
      ) : (
        <>
          <div className="img-div">
            <img src={image} alt={line} className="img" />
            <p className="pink-text">{line}</p>
          </div>
        </>
      )}
    </>
  )
}

export default Image
