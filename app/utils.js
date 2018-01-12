import cryptorjs from 'cryptorjs'

export const encode = (pass, content) => {
  const myCryptor = new cryptorjs(pass)

  const encoded = myCryptor.encode(content)

  return encoded
}

export const decode = (pass, encoded) => {
  const myCryptor = new cryptorjs(pass)

  const decoded = myCryptor.decode(encoded)

  return decoded
}
