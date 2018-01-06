import React from 'react'
import cryptorjs from 'cryptorjs'
import { Text, View, Button, TextInput as RNInput } from 'react-native'

const TextInput = props => (
  <RNInput
    style={{ borderColor: 'black', borderWidth: 1, padding: 3 }}
    {...props}
  />
)

const Title = props => (
  <Text
    style={{
      fontWeight: 'bold',
      fontSize: 30,
      padding: 10
    }}
    {...props}
  />
)

const ViewCoder = props => (
  <View
    style={{
      borderWidth: 1,
      borderColor: 'black',
      padding: 10
    }}
    {...props}
  />
)

const ViewSpaced = props => (
  <View
    style={{
      marginBottom: 10
    }}
    {...props}
  />
)

const encode = (pass, content, cb) => e => {
  const myCryptor = new cryptorjs(pass)

  const encoded = myCryptor.encode(content)

  cb(encoded)
}

const decode = (pass, encoded, cb) => e => {
  const myCryptor = new cryptorjs(pass)

  const decoded = myCryptor.decode(encoded)
  console.log(encoded, decoded)

  cb(decoded)
}

class SafePassEncoder extends React.Component {
  state = {
    pass: '',
    textarea: 'Nothing yet :(',
    encoded: ''
  }

  render() {
    return (
      <ViewCoder>
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
      </ViewCoder>
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
      <ViewCoder>
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
      </ViewCoder>
    )
  }
}

// eslint-disable-next-line
class SafePassSandbox extends React.Component {
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
      <ViewCoder>
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
      </ViewCoder>
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
      <ViewCoder>
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
      </ViewCoder>
    )
  }
}

export default SafePassPage
