import React from 'react'
import {
  TextInput,
  Title,
  ViewBox,
  ViewSpaced,
  Button,
  View
} from './BaseComponents'
import { encode, decode } from './utils'

class SafePassEncoder extends React.Component {
  state = {
    pass: '',
    textarea: 'Nothing yet :(',
    encoded: ''
  }

  render() {
    return (
      <ViewBox>
        <Title>Encoder</Title>
        <ViewSpaced>
          pass:
          <TextInput
            placeholder="Password"
            onChangeText={pass => this.setState({ pass })}
            value={this.state.pass}
          />
        </ViewSpaced>
        <ViewSpaced>
          content:
          <TextInput
            multiline
            onChangeText={textarea => this.setState({ textarea })}
            value={this.state.textarea}
          />
        </ViewSpaced>
        <ViewSpaced>
          <Button
            title="encode!"
            onPress={encode(this.state.pass, this.state.textarea, encoded =>
              this.setState({ encoded })
            )}
          />
        </ViewSpaced>
        <ViewSpaced>
          encoded:
          <TextInput readOnly value={this.state.encoded} />
        </ViewSpaced>
      </ViewBox>
    )
  }
}

class SafePassDecoder extends React.Component {
  state = {
    pass: '',
    textarea: 'shrubs',
    decoded: ''
  }

  render() {
    return (
      <ViewBox>
        <Title>Decoder</Title>
        <ViewSpaced>
          pass:
          <TextInput
            placeholder="Password"
            onChangeText={pass => this.setState({ pass })}
            value={this.state.pass}
          />
        </ViewSpaced>
        <ViewSpaced>
          content:
          <TextInput
            onChangeText={textarea => this.setState({ textarea })}
            value={this.state.textarea}
          />
        </ViewSpaced>
        <ViewSpaced>
          <Button
            title="decode!"
            onPress={decode(this.state.pass, this.state.textarea, decoded =>
              this.setState({ decoded })
            )}
          />
        </ViewSpaced>
        <ViewSpaced>
          decoded:
          <TextInput multiline readOnly value={this.state.decoded} />
        </ViewSpaced>
      </ViewBox>
    )
  }
}

export default class SafePassSandbox extends React.Component {
  render() {
    return (
      <View>
        <Title>SAFEPASS</Title>
        <SafePassEncoder />
        <SafePassDecoder />
      </View>
    )
  }
}
