import React from 'react'
import { PassInput, ViewBox, ViewSpaced, Button } from './BaseComponents'
import { decode } from './utils'
import TextFileReader from './TextFileReader'

export default class SafePassFirstScreen extends React.Component {
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
