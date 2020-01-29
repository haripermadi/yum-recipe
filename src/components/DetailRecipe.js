import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class DetailRecipe extends React.Component {
  state = {
    detail: {},
    ingredients: []
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    this.handleDetail(id);
  }

  async handleDetail(id) {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    console.log("res----", response);

    let ingredients = [];
    let raw = response.data.meals[0];
    let oldUrl = raw.strYoutube.split("=");

    for (let i = 0; i < 20; i++) {
      let data = {};
      if (raw[`strIngredient${i}`]) {
        data["ingredient"] = raw[`strIngredient${i}`];
        data["qty"] = raw[`strMeasure${i}`];

        ingredients.push(data);
      }
    }

    this.setState({
      detail: response.data.meals[0],
      ingredients: ingredients,
      videoId: oldUrl[1]
    });
  }

  render() {
    console.log("detail------", this.state);
    if (!this.state.detail) {
      return <div>Loading....</div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${this.state.videoId}`;
    return (
      <div className="container mt-3">
        <Link to="/" className="title">
          {this.state.detail.strMeal}
        </Link>
        <hr />
        <div>
          <div className="row">
            <div className="col">
              <h5 className="title text-center">Ingredients</h5>
              <div className="mt-5 listContainerDetail">
                {this.state.ingredients.map(item => {
                  return (
                    <div className="listItem" key={item.ingredient}>
                      <p className="item text-center">
                        <span className="font-weight-bold">{item.qty}</span>{" "}
                        {item.ingredient}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col imageContainer">
              <img
                src={this.state.detail.strMealThumb}
                alt="food"
                className="detailImage"
              />
            </div>
          </div>
        </div>
        <div className="directionContainer">
          <div className="row">
            <div className="col-md-7 videoContainer">
              <iframe src={videoSrc} title="video title" className="video" />
            </div>
            <div className="col-md-5">
              <h5 className="title">Direction</h5>
              <p className="text">{this.state.detail.strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailRecipe;
