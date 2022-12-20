import React, { useEffect, useState } from 'react'
import { getImage, getBlakePoems } from '../apiClient'
import ImageList from './ImageList'

function App() {
  const [poem, setPoem] = useState({})
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])

  const randomInt = Math.floor(Math.random() * 25)

  useEffect(async () => {
    setLoading(true)
    const poems = await getBlakePoems()
    const randomPoems = poems.body.filter((poem) => poem.lines.length < 20)
    setPoem(() => randomPoems[randomInt])
    const images = randomPoems[randomInt].lines.map(
      async (line) => await getImage(line)
    )
    Promise.all(images)
      .then((images) => setImages(images))
      .finally(() => setLoading(false))
      .catch((err) => console.error(err.message))
  }, [])

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
      {images.length && <ImageList images={images} poem={poem} />}
    </>
  )
}

export default App
