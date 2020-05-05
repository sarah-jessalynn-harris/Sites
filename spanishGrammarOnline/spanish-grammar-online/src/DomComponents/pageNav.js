import React, {Component} from "react";

class PageNav extends Component {

    render() {
        return(
            <div className="pageNav">
                   {
                    this.props.list.map 
                    ((item, key) =>
                    <a href={"#"+item} key={key} className="pageLink"> {item}</a>
                    )
                }
            </div>
        );
    }

}

export default PageNav;