import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';

class App extends React.Component {

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => this.setState({
        products: data,
        filteredProducts: data
      }));
    if (localStorage.getItem('cartItems')) {
      this.setState({ cartItems: JSON.parse(localStorage.getItem('cartItems')) })
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>Ecommerce Base</h1>
          <hr />
          <div className="row">
            <div className="col-md-8">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-4">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
