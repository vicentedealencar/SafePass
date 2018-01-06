import cryptorjs from 'cryptorjs'

export const encode = (pass, content, cb) => e => {
  const myCryptor = new cryptorjs(pass)

  const encoded = myCryptor.encode(content)

  cb(encoded)
}

export const decode = (pass, encoded, cb) => e => {
  const myCryptor = new cryptorjs(pass)

  const decoded = myCryptor.decode(encoded)
  console.log(encoded, decoded)

  cb(decoded)
}
