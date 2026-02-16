import React from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      count: 0
    }
  }
  render(){
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
      </div>
    )
  }
}
export default Counter;