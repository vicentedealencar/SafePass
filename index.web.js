import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

import Root from './app/Root'

class ReactNativeWeb extends Component {
  render() {
    return <Root />
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb)
AppRegistry.runApplication('ReactNativeWeb', {
  rootTag: document.getElementById('react-app')
})
