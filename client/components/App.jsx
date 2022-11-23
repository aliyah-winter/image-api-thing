import React, { useEffect, useState } from 'react'
import { getImage, getRandomBlake } from '../apiClient'
import ImageList from './ImageList'

function App() {
  const [poem, setPoem] = useState({})
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])

  useEffect(async () => {
    setLoading(true)
    const randomPoem = await getRandomBlake()
    setPoem(() => randomPoem.body[3])
    const images = randomPoem.body[3].lines.map(
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
