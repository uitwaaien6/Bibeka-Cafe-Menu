import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Category.css';

class Category extends React.Component {
    render() {
        return (
            <div className="category__container">
                <Link to={`/${this.props.info.urlName}`}>
                    <img alt="food-category" src={this.props.info.image} />

                </Link>
                <Link to={`/${this.props.info.urlName}`}>
                    <p className="category__title">{this.props.info.name}</p>
                </Link>
            </div>
        );
    };
}

export default Category;
