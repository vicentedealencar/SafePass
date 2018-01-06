import React from 'react'
import {
  Text,
  View as RNView,
  Button as RNButton,
  TextInput as RNInput
} from 'react-native'

export const Button = RNButton

export const View = RNView

export const TextInput = props => (
  <RNInput
    style={{ borderColor: 'black', borderWidth: 1, padding: 3 }}
    {...props}
  />
)

export const Title = props => (
  <Text
    style={{
      fontWeight: 'bold',
      fontSize: 30,
      padding: 10
    }}
    {...props}
  />
)

export const ViewBox = props => (
  <RNView
    style={{
      borderWidth: 1,
      borderColor: 'black',
      padding: 10
    }}
    {...props}
  />
)

export const ViewSpaced = props => (
  <RNView
    style={{
      marginBottom: 10
    }}
    {...props}
  />
)
