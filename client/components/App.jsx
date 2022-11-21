import React, { useEffect, useState } from 'react'
import { getRandomBlake } from '../apiClient'
import ImageList from './ImageList'

function App() {
  const [poem, setPoem] = useState({})
  const [loading, setLoading] = useState(true)
  const msg = new SpeechSynthesisUtterance()

  useEffect(() => {
    setLoading(() => true)
    getRandomBlake()
      .then((res) => {
        setPoem(() => res.body[51])
        msg.text = poem.lines.join(' ')
        window.speechSynthesis.speak(msg)
      })
      .finally(() => {
        setLoading(() => false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  console.log(poem)
  return loading ? (
    <div className="img-div">
      <img
        src="https://thumbs.gfycat.com/SparseMenacingAkitainu-size_restricted.gif"
        alt="burning demon"
        className="img"
      />
    </div>
  ) : (
    <>
      <div className="title">
        <h1>{poem.title}</h1>
      </div>
      {poem.lines && <ImageList poem={poem} />}
    </>
  )
}

export default App
