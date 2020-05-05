import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import ExampleList from "../DomComponents/ExampleList";
import PageNav from "../DomComponents/pageNav";


class Articles extends Component {

    state = {articles : "", loading: true}

    componentWillMount(){
        var articles = [];
        var articlesRef = firebase.firestore().collection('articles').orderBy("title", "desc");
        articlesRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach((doc) => {
                articles.push(doc.data());
                itemsProcessed++;
                //  console.log(itemsProcessed, doc.id, '=>', doc.data());
                
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

        if(!this.state.loading) {

            var list = [];

            return <div className="pageDefaults infoPage articles">

                {
                    this.state.articles.map ((item, key) => {
                        list.push(item.title);

                        if(item.type == "intro"){
                            return <div>
                            <h1 id={item.title}> Articles </h1>
                            <Paragraph content={item.description}></Paragraph>
                            <PageNav list={list}></PageNav> </div>   
                        } else if (item.type == "info"){
                            return <div>
                                <h2 id={item.title}> {item.title} Articles</h2>
                                <Paragraph content={item.description}></Paragraph>
                                <ExampleList list={item.exampleList}></ExampleList>

                            </div>
                        }
                    })
                }

        </div>;
        } else {
            return <div className="pageDefaults infoPage articles">

                <h1> Articles </h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

        </div>
        }
        
    }

}

export default Articles;