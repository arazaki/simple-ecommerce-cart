import React, { Component } from 'react'
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from '../actions/productActions';

export class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    {this.props.filteredProducts.length} products found.
               </div>
                <div className="col-md-4">
                    <label>
                        Order by
                    <select
                            className="form-control"
                            value={this.props.sort}
                            onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">lowest to highest</option>
                            <option value="highest">highest to lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col-md-4">
                    <label>
                        Filter size
                    <select
                            className="form-control"
                            value={this.props.size}
                            onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">All</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </label>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
});

export default connect(mapStateToProps, { filterProducts, sortProducts })(Filter)
