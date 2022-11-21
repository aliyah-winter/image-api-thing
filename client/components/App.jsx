import React, { useEffect, useState } from 'react'
import Image from './Image'

import { getRandomBlake } from '../apiClient'

function App() {
  const [poem, setPoem] = useState([])

  useEffect(() => {
    getRandomBlake()
      .then((res) => {
        setPoem(() => res.body[51].lines)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <div className="img-grid">
        {poem && poem.map((line) => <Image key={line} line={line} />)}
      </div>
    </>
  )
}

export default App
