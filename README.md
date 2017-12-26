# react-provider-standalone
The standalone React components &lt;Provider /> wrapper.

## Usage

Make something global by wrapping your root react component with a `<Provider />`:

```js
// index.js
ReactDOM.render(
  <Provider color={'#aaa'}>
    <App />
  </Provider>
, document.querySelector('#root'));
```

```js
// MyComponent.js
Adding a decorator for your own react component to get what is provided

@acquire
class MyComponent extends React.Component {
  // ...
  render() {
    return (<h1 style={{ color: this.props.color}}>Hello World!</h1>)
  }
}

export default MyComponent;
```

or (if you don't use decorator):

```js
export default acquire(MyComponent);
```

## Clarification

This is however considered a bad practice in react, in that it violates the single-porps-flow principle. Only use it if you are a library author / maintainer, or after considering carefully the side effect.
