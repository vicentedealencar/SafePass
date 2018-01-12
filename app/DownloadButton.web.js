import React from 'react'
import { Button } from './BaseComponents'

const download = text => {
  const a = document.createElement('a')
  a.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  )
  a.setAttribute('download', 'safepass.txt')
  a.style.dosplay = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export default class extends React.Component {
  render() {
    const { encode, ...otherProps } = this.props

    return (
      <Button
        title="encode & download"
        {...otherProps}
        onPress={e => {
          const encoded = encode()
          this.setState({
            encoded
          })
          download(encoded)
        }}
      />
    )
  }
}
