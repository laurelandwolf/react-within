import {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import within from 'within'

class Within extends Component {

  static propTypes = {
    style: PropTypes.object
  }

  static defaultProps = {
    style: {}
  }

  componentDidMount () {

    this.cancel = within(ReactDOM.findDOMNode(this))
  }

  componentDidReceiveProps () {

    this.cancel()
    this.cancel = within(ReactDOM.findDOMNode(this))
  }

  componentWillUnmount () {

    this.cancel()
  }

  render () {

    return <div style={this.props.style}>{this.props.children}</div>
  }
}

export default Within
