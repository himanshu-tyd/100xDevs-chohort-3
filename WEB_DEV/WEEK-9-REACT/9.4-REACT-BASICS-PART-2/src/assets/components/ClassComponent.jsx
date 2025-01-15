import React from "react";

class Counter extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  hanldeIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.hanldeIncrement}>count {this.state.count}</button>
      </div>
    );
  }
}
