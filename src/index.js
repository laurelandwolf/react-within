import React, {Component, PropTypes} from 'react';
import within from 'within';

class Within extends Component {

  static propTypes = {
    style: PropTypes.object
  };

  static defaultProps = {
    style: {}
  };

  componentDidMount () {

    this.cancel = within(React.findDOMNode(this));
  }

  componentDidReceiveProps () {

    this.cancel();
    this.cancel = within(React.findDOMNode(this));
  }

  componentWillUnmount () {

    this.cancel();
  }

  render () {

    return <div style={this.props.style}>{this.props.children}</div>;
  }
}

export default Within;
