import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import PageNav from "../DomComponents/pageNav";
import Examples from "../DomComponents/Examples";

class Participles extends Component {
    state = {participles : [], loading: true}

    componentWillMount(){
        var participles = [];
        var participlesRef = firebase.firestore().collection('participles');
        participlesRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                participles.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({participles: participles});

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

            return  <div className="pageDefaults infoPage participles">

            {
                this.state.participles.map((item, key) => {
 

                    if(item.type == "intro") {
                       return <div>
                            <h1 id={item.title}> {item.header} </h1>

                            <Paragraph content={item.description}></Paragraph>

                        </div>
            
                    } 
                })
            }

        </div>
        } else {
            return <div className="pageDefaults infoPage participles"> 
                <h1> Participles</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }

}

export default Participles;