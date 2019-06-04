import React from 'react';
import ReactDOM from 'react-dom';
import nx from 'next-js-core2';
import delay from './components/delay';
import './assets/styles/index.scss';

class App extends React.Component {

  async componentDidMount() {
    console.log('start render!');
    await delay(3000);
    console.log(nx, nx.VERSION);
  }

  render() {
    return (
      <div className="clearfix container">
        <h1>Hello readers!</h1>
        <span className="r">RIGHT</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
