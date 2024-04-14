import 'dotenv/config'
import crypto from 'crypto'

const algorithm = 'aes-256-ctr'
const secretKey = process.env.SECRET_KEY_ENCRYPT || ''
const iv = crypto.randomBytes(16)

export const encrypt = (text: string): string => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv)
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()])
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`
}

export const decrypt = (hash: string): string => {
  const [iv, content] = hash.split(':').map((part) => Buffer.from(part, 'hex'))
  const decipher = crypto.createDecipheriv(algorithm, secretKey, iv)
  const decrypted = Buffer.concat([decipher.update(content), decipher.final()])
  return decrypted.toString()
}
