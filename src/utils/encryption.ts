import crypto from 'crypto-js'

const KEY = 'DontWorry!ThisIsNotSecret!'

export const encrypt = (text: string) => {
  return crypto.AES.encrypt(text, KEY).toString()
}

export const decrypt = (encryptedText: string) => {
  return crypto.AES.decrypt(encryptedText, KEY).toString(crypto.enc.Utf8)
}
