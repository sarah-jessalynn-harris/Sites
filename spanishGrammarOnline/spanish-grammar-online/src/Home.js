import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import Category from "./Categories/Category";
import firebase from "firebase";
import Paragraph from "./DomComponents/Paragraph";

class Home extends Component {

    state = {cards : "", loading: true}

    componentWillMount(){
        var cards = [];
        var cardsRef = firebase.firestore().collection('home');
        cardsRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach((doc) => {
                cards.push(doc.data());
                itemsProcessed++;
                //  console.log(itemsProcessed, doc.id, '=>', doc.data());
                
                this.setState({cards: cards});

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
            return   <div className="pageDefaults home">
            <h1> Home </h1>

            <div className="cards">
                {
                    this.state.cards.map ((card, key) => 
                    <Category key={key}
                        title = {card.title}
                        desc = {card.desc}
                        link = {card.link}
                    />)
                }
            </div>
        </div>;
        } else {
            return <div className="pageDefaults infoPage articles">

                <h1> Home </h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

        </div>
        }
    }

}

export default Home;