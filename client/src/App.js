import React, {Component} from 'react';
import Layout from './components/Layout';
import List from './components/List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <List></List>
        </Layout>
      </div>
    );
  }
}

export default App;