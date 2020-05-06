import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import ExampleList from "../DomComponents/ExampleList";

class prepositions extends Component {
    state = {prepositions : [], loading: true}

    componentWillMount(){
        var prepositions = [];
        var prepositionsRef = firebase.firestore().collection('prepositions');
        prepositionsRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                prepositions.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({prepositions: prepositions});

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

            return  <div className="pageDefaults infoPage prepositions">

            {
                this.state.prepositions.map((item, key) => {
 

                    if(item.type == "intro") {
                       return <div>
                            <h1 id={item.title}> {item.title} </h1>

                            <Paragraph content={item.description}></Paragraph>

                            <Paragraph content={item.heading}></Paragraph>

                            <ExampleList list={item.preps}></ExampleList>

                        </div>
            
                    } 
                })
            }

        </div>
        } else {
            return <div className="pageDefaults infoPage prepositions"> 
                <h1> Prepositions</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }

}

export default prepositions;