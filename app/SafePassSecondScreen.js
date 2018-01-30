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
          pass:
          <PassInput
            value={this.state.pass || this.props.pass}
            onChangeText={pass => this.setState({ pass })}
          />
        </ViewSpaced>
        <ViewSpaced>
          content:
          <TextInput
            multiline
            numberOfLines={10}
            onChangeText={textarea => this.setState({ textarea })}
            value={this.state.textarea === '' ? '' : this.state.textarea || this.props.content}
          />
        </ViewSpaced>
        <ViewSpaced>
          <DownloadButton
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
        <Button title="voltar" onPress={this.props.onNext} />
      </ViewBox>
    )
  }
}
