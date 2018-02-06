import React from 'react'
import {
  TextInput,
  PassInput,
  ViewBox,
  ViewSpaced,
  Button
} from './BaseComponents'
import { encode } from './utils'
import DownloadButton from './DownloadButton'

export default class SafePassSecondScreen extends React.Component {
  state = {
    pass: '',
    textarea: null
  }

  render() {
    return (
      <ViewBox>
        <ViewSpaced>
          <PassInput
            value={this.state.pass || this.props.pass}
            onChangeText={pass => this.setState({ pass })}
            placeholder="senha"
          />
        </ViewSpaced>
        <ViewSpaced>
          <TextInput
            multiline
            numberOfLines={10}
            onChangeText={textarea => this.setState({ textarea })}
            value={
              this.state.textarea === ''
                ? ''
                : this.state.textarea || this.props.content
            }
            placeholder="conteúdo secreto"
          />
        </ViewSpaced>
        <ViewSpaced>
          <DownloadButton
            title="codificar & baixar"
            disabled={
              !(this.state.pass || this.props.pass) ||
              !(this.state.textarea || this.props.content)
            }
            encode={() =>
              encode(
                this.state.pass || this.props.pass,
                this.state.textarea || this.props.content
              )
            }
          />
          {this.state.encoded}
        </ViewSpaced>
        <Button title="voltar" onPress={this.props.onNext} color="#53acf3" />
      </ViewBox>
    )
  }
}
