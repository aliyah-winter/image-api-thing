const { Configuration, OpenAIApi } = require('openai')
const request = require('superagent')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

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
