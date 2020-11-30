import React from 'react';
import Category from './Category';
import '../styles/Categories.css';

class Categories extends React.Component {

    state = {
        categoryInfos: [
            { image: '../images/image_kofte.jpg', name: 'Ana Yemekler', urlName: 'anayemekler' },
            { image: '../images/image_ekmek_domates.jpg', name: 'Baslangiclar', urlName: 'baslangiclar' },
            { image: '../images/image_chicken_wrap.jpg', name: 'Salatalar', urlName: 'salatalar' },
            { image: '../images/image_makarna_sebze.jpg', name: 'Makarnalar', urlName: 'makarnalar' },
            { image: '../images/image_sahanda.jpg', name: 'Kahvaltilar', urlName: 'kahvaltilar' },
            { image: '../images/image_mozaik.jpg', name: 'Tatlilar', urlName: 'tatlilar' },
            { image: '../images/image_sahlep.jpg', name: 'Sicak Icicekler', urlName: 'sicakicicekler' },
            { image: '../images/image_sahlep.jpg', name: 'Soguk Icicekler', urlName: 'sogukicicekler' }
        ]
    }

    displayCategories() {
        return this.state.categoryInfos.map((categoryInfo) => {
            return (
                <Category
                    key={Math.random().toString()}
                    info={categoryInfo}
                />
            );
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="categories__container">
                <h1>Menu</h1>
                {this.displayCategories()}
            </div>
        );
    };
}

export default Categories;