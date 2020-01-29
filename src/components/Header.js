import React, { useState } from "react";
import "./main.css";

const Header = props => {
  const [search, setSearch] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("header---->", event, search);
    // alert(search);
    props.onSubmit(search);
  };

  return (
    <div className="headerContainer">
      <h1 className="headerTitle">Find a recipe</h1>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="icon">
              <i className="fa fa-search fa-2x"></i>
            </div>
            <input
              type="search"
              placeholder="Search recipes..."
              value={search}
              className="form-control searchInput"
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
