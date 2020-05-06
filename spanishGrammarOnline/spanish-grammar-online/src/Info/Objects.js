import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import PageNav from "../DomComponents/pageNav";
import Examples from "../DomComponents/Examples";

class Objects extends Component {
    state = {objects : [], loading: true}

    componentWillMount(){
        var objects = [];
        var objectsRef = firebase.firestore().collection('object');
        objectsRef.get()
        .then(snapshot => {
            var itemsProcessed = 0;

            snapshot.forEach(doc => {
                objects.push(doc.data());
                itemsProcessed++;
                console.log(doc.id, '=>', doc.data());
                this.setState({objects: objects});

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

                        return  <div className="pageDefaults infoPage objects">

                {
                    this.state.objects.map((item, key) => {
                        list.push(item.title);

                        if(item.type == "intro") {
                        return <div>
                                <h1 id={item.title}> {item.header} </h1>

                                <Paragraph content={item.description}></Paragraph>
        
                                <PageNav list={list}></PageNav>
                            </div>
                
                        } else if(item.type == "use") {
                            return <div>
                                <h2 id={item.title}>{item.title}</h2>
                                <Paragraph content={item.description}></Paragraph>
                                <Examples engEx={item.engEx1} spanEx={item.spanEx1}></Examples>
                                
                                <Paragraph content={item.description2}></Paragraph>
                                <Examples engEx={item.engEx2} spanEx={item.spanEx2}></Examples>

                                <Examples engEx={item.engEx3} spanEx={item.spanEx3}></Examples>
                                <p className="spanEx">{item.exSpan3}</p>
                                <Examples engEx={item.engEx4} spanEx={item.spanEx4}></Examples>
                                <p className="spanEx">{item.exSpan4}</p>

                                <Paragraph content={item.note}></Paragraph>
                            </div>
                        } 
                    })
                }

        </div>
        } else {
            return <div className="pageDefaults infoPage objects"> 
                <h1> Objects</h1>
                <Paragraph content="Loading, please wait..."></Paragraph>

            </div>
        }
    }

}

export default Objects;