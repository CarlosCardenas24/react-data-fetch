import React from 'react';
import './style.css';
{
  /* https://jsonplaceholder.typicode.com/posts */
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <J />
      </div>
    );
  }
}
export default App;

class J extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.JsonRender = this.JsonRender.bind(this);
  }
  JsonRender() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: JSON.stringify(data)
        });
      });
  }
  render() {
    return (
      <div>
        <button onClick={this.JsonRender}>Button </button>
        <p>{this.state.data}</p>
      </div>
    );
  }
}
