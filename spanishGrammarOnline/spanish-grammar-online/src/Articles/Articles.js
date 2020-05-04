import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import ExampleList from "../DomComponents/ExampleList";


class Articles extends Component {

    state = {articles : "", loading: true}

    componentWillMount(){
        var articles = [];
        var articlesRef = firebase.firestore().collection('articles');
        articlesRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach((doc) => {
                articles.push(doc.data());
                itemsProcessed++;
                console.log(itemsProcessed, doc.id, '=>', doc.data());
                
                this.setState({articles: articles});

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
        console.log(this.state.loading);

        if(!this.state.loading) {
            return <div className="articles">
            
            <h1> Articles </h1>
            <Paragraph content={this.state.articles[2].description}></Paragraph>

            <h2> Definite Articles</h2>
            <Paragraph content={this.state.articles[0].description}></Paragraph>
            <ExampleList list={this.state.articles[0].exampleList}></ExampleList>

            <h2> Indefinite Articles</h2>
            <Paragraph content={this.state.articles[1].description}></Paragraph>
            <ExampleList list={this.state.articles[1].exampleList}></ExampleList>

        </div>;
        } else {
            return <div className="articles">

            <h1> Articles </h1>
            <Paragraph content="Loading, please wait..."></Paragraph>

        </div>
        }
        
        return(
            <div></div>
        )
        
    }

}

export default Articles;