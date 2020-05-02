import React, {Component} from "react";
import Category from "./Category";
import firebase from "firebase";


class Categories extends Component {

    state = {categories : []}

    componentWillMount(){
        var categories = [];
        var categoriesRef = firebase.firestore().collection('categories');
        categoriesRef.get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                categories.push(doc.data());
                //console.log(doc.id, '=>', doc.data());
                this.setState({categories: categories});
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }



    render() {   
        
        return (
            <div className="categories">

                <h1> Categories </h1>

                <div className="categoriesList">
                    
                    { this.state.categories.map (category => 
                        <Category
                            title = {category.title}
                            desc = {category.desc}
                        />)
                    }
                    
                </div>

            </div>
        )
        
    }

}

export default Categories;