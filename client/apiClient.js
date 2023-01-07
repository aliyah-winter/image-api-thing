const openai = require('openai')
const request = require('superagent')

export async function getImage(text) {
  const image = await openai.createImage({
    prompt: text,
    n: 1,
    size: '256x256',
  })
  return image
}

export function getBlakePoems() {
  return request.get('https://poetrydb.org/author/William Blake')
}
