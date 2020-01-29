import React from "react";

import recipe from "../api/recipe";
import Header from "./Header";
import ListRecipes from "./ListRecipes";

class Home extends React.Component {
  state = {
    listRecipes: []
  };

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch = async (search = "a") => {
    let response = await recipe.get(`/search.php?s=${search}`);

    console.log("res--APP search---", response);
    if (response.data.meals) {
      this.setState({
        listRecipes: response.data.meals
      });
    } else {
      this.setState({
        listRecipes: []
      });
    }
  };

  render() {
    console.log("HOME----state----->", this.state);
    return (
      <React.Fragment>
        <Header onSubmit={this.handleSearch} />
        <div className="container-fluid mt-5 min-vh-100">
          {this.state.listRecipes.length > 0 ? (
            <ListRecipes lists={this.state.listRecipes} />
          ) : (
            <div className="empty">
              <div className="icon-empty">
                <i className="fab fa-earlybirds"></i>
              </div>
              <h3 className="text-empty">Recipe not found</h3>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
