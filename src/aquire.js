const { Component } = require('react')

function aquire(WrappedComponent) {
  class Aquire extends Component {
    render() {
      return (
        <WrappedComponent {...this.context} />
      )
    }
  }
  Aquire.displayName = `Aquire(${WrappedComponent.name || WrappedComponent.displayName})`
}

module.exports = aquire
