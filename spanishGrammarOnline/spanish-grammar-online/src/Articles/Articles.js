import React, {Component} from "react";
import firebase from "firebase";
import Paragraph from "../DomComponents/Paragraph";
import ExampleList from "../DomComponents/ExampleList";


class Articles extends Component {

    render() {   
        
        return (
            <div>

                <Paragraph content="bluh"></Paragraph>
                <ExampleList listItem="d"></ExampleList>

            </div>
        )
        
    }

}

export default Articles;