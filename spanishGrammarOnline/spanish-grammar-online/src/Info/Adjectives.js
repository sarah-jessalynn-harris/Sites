import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import ExampleList from "../DomComponents/ExampleList";

class Adjectives extends Component {

    state = {adjectives : [], loading: true}

    componentWillMount(){
        var adjectives = [];
        var adjectivesRef = firebase.firestore().collection('adjectives');
        adjectivesRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                adjectives.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({adjectives: adjectives});

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
            return(
                <div className="pageDefaults infoPage adjectives">

                <h1> {this.state.adjectives[0].title}</h1>
                <Paragraph content={this.state.adjectives[0].description}></Paragraph>
                <ExampleList list={this.state.adjectives[0].list}></ExampleList>
                
                </div>
            );
        } else {
            return <div className="pageDefaults infoPage adjectives"> 
                <h1> Adjectives</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }
    

}

export default Adjectives;