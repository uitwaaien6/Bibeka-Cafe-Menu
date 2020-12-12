import React from 'react';
import Header from '../components/Header';
import '../styles/FoodPage.css';
import foodsData from '../data/foodsData.json';
import Footer from '../components/Footer';
import { connect } from 'react-redux';


class FoodPage extends React.Component {
    

    state = {
        food: this.configFoodState()
    }

    configFoodState() {
        if (foodsData[this.props.match.params.foodsCategory].sicaklar) {
            return foodsData[this.props.match.params.foodsCategory].sicaklar.find(item => item.urlName === this.props.match.params.food);
        } else if (foodsData[this.props.match.params.foodsCategory].soguklar) {
            return foodsData[this.props.match.params.foodsCategory].soguklar.find(item => item.urlName === this.props.match.params.food);
        } else {
            return foodsData[this.props.match.params.foodsCategory].find(item => item.urlName === this.props.match.params.food);
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="food-page__container">
                <Header />

                <div 
                    className="food-page__content"
                    onClick={() => {
                        this.props.closeSideBar();
                    }}
                >
                    <img alt="food" src={this.state.food.image} />

                    <div className="food-page__name">
                        <p>{this.state.food.name}</p>
                    </div>

                    <div className="food-page__table">
                        <table>
                            <thead>

                            </thead>
                            <tbody>
                                <tr>
                                    <th>{this.state.food.price.yarim ? "Yarim" : null}</th>
                                    <th>{this.state.food.price.tam ? "Tam" : null}</th>
                                </tr>
                                <tr>
                                    <td>{this.state.food.price.yarim ? `${this.state.food.price.yarim} TL` : null}</td>
                                    <td>{this.state.food.price.tam ? `${this.state.food.price.tam} TL` : `${this.state.food.price} TL`}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="food-page__des">

                        <p>{this.state.food.description}</p>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        showSideBar: state.general.showSideBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchSideBar: () => {
            dispatch({ type: 'SWITCH_SIDEBAR' });
        },
        closeSideBar: () => {
            dispatch({ type: 'CLOSE_SIDEBAR' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodPage);
