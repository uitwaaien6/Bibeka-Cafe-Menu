import React from 'react';
import Food from './Food';
import '../styles/Foods.css';
import foodsData from '../data/foodsData.json';


class Foods extends React.Component {

    // foodsCategory represenets the name of the category, foodsCategoryObject represents the jSON object which contains the information about the foodsCategory

    constructor(props) {
        super(props);
        this.state = {
            foodsCategory: this.props.foodsCategory,
            foodsCategoryObject: foodsData[this.props.foodsCategory]
        }
    }

    componentDidMount() {
        this.setState({ foodsCategory: this.props.foodsCategory });
        this.setState({ foodsCategoryObject: foodsData[this.props.foodsCategory] });
    }

    configTitle(word) {
        switch (word) {
            case 'sogukicicekler'.toLowerCase():
                return <h1>Soguk Icicekler</h1>;
            case 'sicakicicekler'.toLowerCase():
                return <h1>Sicak Icicekler</h1>;
            case 'anayemekler'.toLowerCase():
                return <h1>Ana Yemekler</h1>;
            case 'gunebaslarken'.toLowerCase():
                return <h1>Gune Baslarken</h1>;
            case 'omletcesitleri'.toLowerCase():
                return <h1>Omlet Cesitleri</h1>;
            case 'gozlemecesitleri'.toLowerCase():
                return <h1>Gozleme Cesitleri</h1>;
            case 'tostcesitleri'.toLowerCase():
                return <h1>Tost Cesitleri</h1>;
            case 'sicaklar'.toLowerCase():
                return <h1 style={{ color: 'red' }}>Sicaklar</h1>;
            case 'soguklar'.toLowerCase():
                return <h1 style={{ color: 'blue' }}>Sogukler</h1>;
            default:
                return 'Default Title';
        }
    }


    displayTemperatureCategoryFoods(foodsCategory) {
        //with thisk approach we can display all the properties of foodsCategory if it is dividing to temperatures
        const temperatureCategories = Object.getOwnPropertyNames(foodsCategory);
        return temperatureCategories.map((temperatureCategory, temperatureCategoryIndex) => {
            return (
                <div
                    key={temperatureCategoryIndex}
                    className="foods__container"
                >
                    {this.configTitle(temperatureCategory)}
                    {
                        foodsCategory[temperatureCategory].map((food, foodIndex) => {
                            return (
                                <Food
                                    key={foodIndex}
                                    food={food}
                                    foodsCategoryURL={this.props.foods}
                                />
                            );
                        })
                    }
                </div>
            );
        });
    }

    displayFoods(foodsCategory) {
        if (foodsCategory) {
            return foodsCategory.map((item, index) => {
                return (
                    <Food
                        key={index}
                        food={item}
                        foodsCategoryURL={this.props.foods}
                    />
                );
            });
        } else {
            console.log(`foodsCategory Couldnt be found in Foods.js`)
            return null;
        }
    }

    // will automise the object management in the future
    configAndDisplayFoods(foodsCategory) {
        if (!Array.isArray(foodsCategory)) { // if it is not an array so it means that it has properties like sicak and soguk so it is dividing
            // if your foodsData[this.props.foods] has divided to sicaks and soguks you will enter that section
            return (
                this.displayTemperatureCategoryFoods(foodsCategory) // this approach is so efficient and better for displaying all the properties of the foodsData temperatures.
            );
        } else {
            return (
                this.displayFoods(foodsCategory)
            );
        }
    }

    render() {
        return (
            <div className="foods__container">
                {this.configTitle(this.props.foodsCategory)}
                {this.configAndDisplayFoods(this.state.foodsCategoryObject)} {/* Initialize this function here its going to config and display foods */}
            </div>
        );
    };
}

export default Foods;
