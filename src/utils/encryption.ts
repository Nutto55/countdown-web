import crypto from 'crypto-js'

const KEY = 'DontWorry!ThisIsNotSecret!'

export const encrypt = (text: string) => {
  const encodedJson = crypto.AES.encrypt(text, KEY).toString()
  const encodedData = crypto.enc.Base64.stringify(crypto.enc.Utf8.parse(encodedJson))
  return encodedData
}

export const decrypt = (encryptedText: string) => {
  const decodedData = crypto.enc.Base64.parse(encryptedText).toString(crypto.enc.Utf8)
  const bytes = crypto.AES.decrypt(decodedData, KEY).toString(crypto.enc.Utf8)
  return bytes
}
