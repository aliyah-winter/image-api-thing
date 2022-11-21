import React, { useEffect, useState } from 'react'
import Image from './Image'

import { getRandomBlake } from '../apiClient'

function App() {
  const [poem, setPoem] = useState([])

  useEffect(() => {
    ;(async () => {
      const poem = await getRandomBlake()
      setPoem(poem.body[3].lines)
    })()

    return () => {}
  }, [])

  return (
    <div className="img-div">
      {poem.map((line) => (
        <Image key={line} line={line} />
      ))}
    </div>
  )
}

export default App
