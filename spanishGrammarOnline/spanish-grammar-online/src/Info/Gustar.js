import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import PageNav from "../DomComponents/pageNav";
import Examples from "../DomComponents/Examples";

class Gustar extends Component {
    state = {gustar : [], loading: true}

    componentWillMount(){
        var gustar = [];
        var gustarRef = firebase.firestore().collection('gustar');
        gustarRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                gustar.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({gustar: gustar});

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

            return  <div className="pageDefaults infoPage gustar">

            {
                this.state.gustar.map((item, key) => {
                    list.push(item.title);

                    if(item.type == "intro") {
                       return <div>
                            <h1 id={item.title}> {item.header} </h1>

                            <Paragraph content={item.description}></Paragraph>
    
                            <PageNav list={list}></PageNav>
                        </div>
            
                    } else if(item.type == "u" || item.type == "u2") {
                        return <div>
                            <h2 id={item.title}>{item.title}</h2>
                            <Paragraph content={item.description}></Paragraph>
                            <Paragraph content={item.verb}></Paragraph>
                            <Examples engEx={item.engEx} spanEx={item.spanEx}></Examples>
                            <Paragraph content={item.exEng}></Paragraph>

                            {item.type == "u2" ? <div>
                            <Paragraph content={item.description2}></Paragraph>
                            <Paragraph content={item.verb2}></Paragraph>
                            <Examples engEx={item.engEx2} spanEx={item.spanEx2}></Examples>
                            <Paragraph content={item.exEng2}></Paragraph>
                            </div> : null}
                        </div>
                    } 
                })
            }

        </div>
        } else {
            return <div className="pageDefaults infoPage gustar"> 
                <h1> Gustar Verbs</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }

}

export default Gustar;