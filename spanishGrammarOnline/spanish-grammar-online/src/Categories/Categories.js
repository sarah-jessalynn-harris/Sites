import React, {Component} from "react";
import Category from "./Category";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";


class Categories extends Component {

    state = {categories : [], loading: true}

    componentWillMount(){
        var categories = [];
        var categoriesRef = firebase.firestore().collection('categories');
        categoriesRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                categories.push(doc.data());
                itemsProcessed++;
                //console.log(doc.id, '=>', doc.data());
                this.setState({categories: categories});

                if(itemsProcessed === snapshot.docs.length) {
                    this.setState({loading: false});
                  }
            });
        })
        .catch(err => {
            console.log('Error getting documents', err);
        });
    }



    render() {   

        if(!this.state.loading) {
            return  <div className="pageDefaults categories">

            <h1> Categories </h1>

            <div className="categoriesList">
                
                { this.state.categories.map ((category, key) => 
                    <Category key={key}
                        title = {category.title}
                        desc = {category.desc}
                        link = {category.link}
                    />)
                }
                
            </div>

        </div>
        } else {
            return <div className="pageDefaults infoPage categories"> 
                <h1> Categories</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
        
    }

}

export default Categories;