import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Recipe extends Component {

    state = {id: null, loading: true}

    componentDidMount() {

        var index = this.props.userData.findIndex(x => x.id === this.props.id);

        this.setState({id : index});
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading) {

            return (
              <div className="loadingScreen">
                
                <p> Loading...</p>
      
              </div>
            );
      
          } else {

            return(

                
                <div className="recipe">

                    <div className="recipeData">
                        <div className="title">
                            <h1>{this.props.userData[this.state.id].name}</h1>

                            <span className="topBar">&nbsp;</span>

                            <div className="imgHolder">
                                <img src={this.props.userData[this.state.id].image} alt={this.props.userData[this.state.id].name}/>
                            </div>

                            <p>{this.props.userData[this.state.id].description}</p>
                        </div>

         
                        <div className="listRecipeData">
                                <div className="ingredientsDisplay">
                                        <h3>Ingredients</h3>

                                        {this.props.userData[this.state.id].ingredients.map ((item, index) => 
                                            <p key={index}>{item.amount + " " + item.label + " " + item.name}</p>
                                            
                                        )}

                                </div>

                                <div className="instructionsDisplay">
                                    <h3>Instructions</h3>

                                        {
                                            this.props.userData[this.state.id].instructions.map(function (item, x){
                                                return <div key={x} className="instructionsWrapper">
                                                    <p>Step {x + 1}: </p> &nbsp; <p>{item}</p>
                                                </div>

                                            })
                                        }

                                </div>
                        </div>
                    </div>

                    <div className="recipeOptions">
                        <NavLink className="button" to={"/recipe/edit/" + this.props.id}> Edit </NavLink>
                        <NavLink className="button" to={"/recipe/delete/" + this.props.id}> Delete </NavLink>
                        <NavLink exact className="button" activeClassName="active" to={"/recipes"}> Return </NavLink>
                    </div>
            </div>
            );
        }
    }

}

export default Recipe;