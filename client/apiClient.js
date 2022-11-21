const deepai = require('deepai')
const request = require('superagent')

deepai.setApiKey('3973aaa4-a9de-4a87-bb2a-a169e0922cf0')

export async function getImage(text) {
  const image = await deepai.callStandardApi('text2img', {
    text: text,
  })
  return image
}

export function getRandomBlake() {
  return request.get('https://poetrydb.org/author/William Blake')
}
