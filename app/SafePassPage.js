import React from 'react'
import { Title, View } from './BaseComponents'
import SafePassFirstScreen from './SafePassFirstScreen'
import SafePassSecondScreen from './SafePassSecondScreen'

export default class SafePassPage extends React.Component {
  state = {
    screen: 'first',
    decoded: null,
    pass: null
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ maxWidth: 700, flex: 1 }}>
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
      </View>
    )
  }
}
