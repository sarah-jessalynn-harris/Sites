import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import PageNav from "../DomComponents/pageNav";
import Examples from "../DomComponents/Examples";
import ExampleList from "../DomComponents/ExampleList";

class Auxiliary extends Component {

    state = {auxiliary : [], loading: true}

    componentWillMount(){
        var auxiliary = [];
        var auxiliaryRef = firebase.firestore().collection('auxiliary');
        auxiliaryRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                auxiliary.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({auxiliary: auxiliary});

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

            return  <div className="pageDefaults infoPage auxiliary">

            {
                this.state.auxiliary.map((item, key) => {
                    list.push(item.title);

                    if(item.type == "intro" || item.type == "introEng" || item.type == "introSpan") {
                       return <div>
                            <h1 id={item.title}> {item.header} </h1>

                            <Paragraph content={item.description}></Paragraph>

                            {item.type =="intro" ? <PageNav list={list}></PageNav> : null}

                            {item.type =="introSpan" ? <PageNav list={["Haber", "Estar", "Ser"]}></PageNav> : null}

                            {item.type == "introEng" ? <div> 

                                <Paragraph content={item.qTitle}></Paragraph>
                                <ExampleList list={item.qList}></ExampleList>

                                <Paragraph content={item.verbTitle}></Paragraph>
                                <ExampleList list={item.verbList}></ExampleList>

                            </div> : null}

                        </div>
            
                    } else if (item.type == "u1" || item.type == "u2" || item.type == "u3") {
                        return <div>
                            <h2 id={item.title}>{item.title}</h2>
                            <Paragraph content={item.description}></Paragraph>

                            {item.type == "u1" ? <div>

                                <ExampleList list={item.tenseList}></ExampleList>

                            </div> : null}

                            {item.type == "u2" || item.type == "u3" ? <div>

                               {item.type == "u2" ? <Paragraph content={item.ex1}> </Paragraph>: null}
                               <Examples engEx={item.engEx1} spanEx={item.spanEx1}></Examples>
                               {item.type == "u2" ? <Paragraph content={item.ex2}> </Paragraph>: null}
                               <Examples engEx={item.engEx2} spanEx={item.spanEx2}></Examples>

                            </div> : null}

                        </div>
                    }
                })
            }

        </div>
        } else {
            return <div className="pageDefaults infoPage auxiliary"> 
                <h1> Auxiliary Verbs </h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }

}

export default Auxiliary;