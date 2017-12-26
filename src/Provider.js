const { Component, Children } = require('react')

class Provider extends Component {
  getChildContext() {
    return {...this.props}
  }

  render() {
    return Children.only(this.props.children)
  }
}

module.exports = Provider
