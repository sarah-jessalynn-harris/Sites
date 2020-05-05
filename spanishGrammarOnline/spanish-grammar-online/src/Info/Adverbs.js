import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import PageNav from "../DomComponents/pageNav";
import Examples from "../DomComponents/Examples";

class Adverbs extends Component {

    state = {adverbs : [], loading: true}

    componentWillMount(){
        var adverbs = [];
        var adverbsRef = firebase.firestore().collection('adverbs');
        adverbsRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                adverbs.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({adverbs: adverbs});

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

            return  <div className="pageDefaults infoPage adverbs">

            {
                this.state.adverbs.map((item, key) => {
                    list.push(item.title);

                    if(item.type == "intro") {
                       return <div>
                            <h1 id={item.title}> {item.header} </h1>

                            <Paragraph content={item.description}></Paragraph>
    
                            <PageNav list={list}></PageNav>
                        </div>
            
                    } else if(item.type == "use1") {
                        return <div>
                                    <h2 id={item.title}>{item.title}</h2>
                                    <Paragraph content={item.description}></Paragraph>
                                    <Examples engEx={item.engEx1} spanEx={item.spanEx1}></Examples>
                                    <Examples engEx={item.engEx2} spanEx={item.spanEx2}></Examples>
                                    
                        </div>
                    } else if (item.type == "use2") {
                        return <div>
                            <h2 id={item.title}>{item.title}</h2>
                            <Paragraph content={item.description}></Paragraph>
                            <Examples engEx={item.engEx} spanEx={item.spanEx}></Examples>

                        </div>
                    }
                })
            }

        </div>
        } else {
            return <div className="pageDefaults infoPage adverbs"> 
                <h1> Adverbs</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }

}

export default Adverbs;