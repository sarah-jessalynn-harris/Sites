import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import PageNav from "../DomComponents/pageNav";
import Examples from "../DomComponents/Examples";

class Infinitives extends Component {

    state = {infinitives : [], loading: true}

    componentWillMount(){
        var infinitives = [];
        var infinitivesRef = firebase.firestore().collection('infinitives');
        infinitivesRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                infinitives.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({infinitives: infinitives});

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

            return  <div className="pageDefaults infoPage infinitives">

            {
                this.state.infinitives.map((item, key) => {
                    list.push(item.title);

                    if(item.type == "intro") {
                       return <div>
                            <h1 id={item.title}> {item.header} </h1>

                            <Paragraph content={item.description}></Paragraph>
    
                            <PageNav list={list}></PageNav>
                        </div>
            
                    } else if(item.type == "types") {
                        return <div>
                                    <h2 id={this.state.infinitives[1].title}>Infinitive Types</h2>
                                    <Paragraph content={item.description}></Paragraph>
                                    <Paragraph content={this.state.infinitives[1].firstConj[0]}></Paragraph>
                                    <Paragraph content={this.state.infinitives[1].firstConj[1]}></Paragraph>                
                                    <Paragraph content={this.state.infinitives[1].secondConj[0]}></Paragraph>
                                    <Paragraph content={this.state.infinitives[1].secondConj[1]}></Paragraph>
                                    <Paragraph content={this.state.infinitives[1].thirdConj[0]}></Paragraph>
                                    <Paragraph content={this.state.infinitives[1].thirdConj[1]}></Paragraph>
                        </div>
                    } else if (item.type == "info") {
                        return <div>
                            <h1 id={item.title}> {item.header} </h1>

                            <Paragraph content={item.description}></Paragraph>
                        </div>
                    } else if (item.type == "infoEx") {
                        return <div>
                            <h2 id={item.title}>{item.title}</h2>
                            <Paragraph content={item.description}></Paragraph>
                            <Examples engEx={item.engEx1} spanEx={item.spanEx1}></Examples>
                            <Examples engEx={item.engEx2} spanEx={item.spanEx2}></Examples>

                        </div>
                    }
                })
            }

        </div>
        } else {
            return <div className="pageDefaults infoPage infinitives"> 
                <h1> Infinitives</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
        
    }

}

export default Infinitives;