import React from 'react'
import {
  TextInput,
  PassInput,
  Title,
  ViewBox,
  ViewSpaced,
  Button,
  View
} from './BaseComponents'
import { encode, decode } from './utils'
import TextFileReader from './TextFileReader'
import DownloadButton from './DownloadButton'

class SafePassPage extends React.Component {
  state = {
    screen: 'first',
    decoded: null,
    pass: null
  }

  render() {
    return (
      <View style={{ alignSelf: 'center' }}>
        <Title>SAFEPASS</Title>
        {this.state.screen === 'first' ? (
          <SafePassFirstScreen
            onNext={(decoded, pass) =>
              this.setState({ screen: 'second', decoded, pass })
            }
            onNew={() =>
              this.setState({
                screen: 'second',
                decoded: '',
                pass: ''
              })
            }
          />
        ) : (
          <SafePassSecondScreen
            onNext={() =>
              this.setState({
                screen: 'first',
                decoded: null,
                pass: null
              })
            }
            content={this.state.decoded}
            pass={this.state.pass}
          />
        )}
      </View>
    )
  }
}

class SafePassFirstScreen extends React.Component {
  state = {
    pass: '',
    encoded: null
  }

  render() {
    return (
      <ViewBox>
        <ViewSpaced>
          pass:
          <PassInput
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
          />
        </ViewSpaced>
        <ViewSpaced>
          <TextFileReader onText={encoded => this.setState({ encoded })} />
        </ViewSpaced>
        <ViewSpaced>
          <Button
            title="decode!"
            disabled={!this.state.pass || !this.state.encoded}
            onPress={() =>
              this.props.onNext(
                decode(this.state.pass, this.state.encoded),
                this.state.pass
              )
            }
          />
        </ViewSpaced>
        <Button title="novo arquivo" onPress={this.props.onNew} />
      </ViewBox>
    )
  }
}

class SafePassSecondScreen extends React.Component {
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
            value={this.state.textarea || this.props.content}
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

export default SafePassPage
