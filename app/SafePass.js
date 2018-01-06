import React from 'react'
import {
  TextInput,
  Title,
  ViewBox,
  ViewSpaced,
  Button,
  View
} from './BaseComponents'
//import { encode, decode } from './utils'

class SafePassPage extends React.Component {
  state = {
    screen: 'first',
    decoded: null,
    pass: null
  }

  render() {
    return (
      <View>
        <Title>SAFEPASS</Title>
        {this.state.screen === 'first' ? (
          <SafePassFirstScreen
            onNext={(decoded, pass) =>
              this.setState({ screen: 'second', decoded, pass })
            }
          />
        ) : (
          <SafePassSecondScreen
            onNext={() => this.setState({ screen: 'first' })}
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
    pass: ''
  }

  render() {
    return (
      <ViewBox>
        <Title>pass and file:</Title>

        <ViewSpaced>
          pass:
          <TextInput
            value={this.state.pass}
            onChangeText={pass => this.setState({ pass })}
          />
        </ViewSpaced>
        <ViewSpaced>//TODO file picker (?)</ViewSpaced>
        <Button
          title="go"
          onPress={() =>
            this.props.onNext('//TODO secret decoded msg', this.state.pass)
          }
        />
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
        <Title>decoded content and pass:</Title>
        <ViewSpaced>
          content:
          <TextInput
            multiline
            onChangeText={textarea => this.setState({ textarea })}
            value={this.state.textarea || this.props.content}
          />
        </ViewSpaced>
        <ViewSpaced>
          pass:
          <TextInput
            value={this.state.pass || this.props.pass}
            onChangeText={pass => this.setState({ pass })}
          />
        </ViewSpaced>
        <Button title="go" onPress={this.props.onNext} />
      </ViewBox>
    )
  }
}

export default SafePassPage
