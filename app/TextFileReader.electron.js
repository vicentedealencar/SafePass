import React from 'react'

export default class TextFileReader extends React.Component {
  componentDidMount() {
    this.refs.reader.addEventListener(
      'change',
      evtInput => {
        const file = evtInput.target.files[0]
        const fileReader = new FileReader()
        fileReader.onload = evtReader =>
          this.props.onText(evtReader.target.result)
        fileReader.readAsText(file)
      },
      false
    )
  }

  render() {
    return <input type="file" ref="reader" encType="multipart/form-data" />
  }
}
