import React from 'react'
import { Button } from './BaseComponents'

const download = text => {
  const d = new Date()
  const date =
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getDay() +
    '-' +
    d.getHours() +
    '-' +
    d.getMinutes()
  const a = document.createElement('a')
  a.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  )
  a.setAttribute('download', 'safepass-' + date + '.txt')
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
