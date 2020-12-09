import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Layout from './components/Layout/layout'
import Burger_builder from './containers/burgerbuilder/burger_builder'



class App extends Component {
  render() {

    return (
      <div className="App">

        <Layout>
          <Burger_builder  />
        </Layout>

      </div>
    );

  }
 
}

export default App;
