import React from "react";
import { Link } from "react-router-dom";

const ListRecipes = ({ lists }) => {
  console.log("list-----", lists);
  // const dataraw = lists.slice(0, 20);

  const renderList = lists.map(item => {
    return (
      <Link
        to={`/detail/${item.idMeal}`}
        key={item.idMeal}
        className="card  listContainer "
      >
        <img
          className="card-img-top"
          src={item.strMealThumb}
          alt={item.idMeal}
          loading="lazy"
        />
        <div className="card-body p-1">
          <h5 className="title">{item.strMeal}</h5>
          <p className="subTitle">{item.strArea}</p>
        </div>
      </Link>
    );
  });
  return (
    <div
      className="row"
      style={{
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {renderList}
    </div>
  );
};

export default ListRecipes;
