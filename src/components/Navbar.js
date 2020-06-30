import React from "react";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Cart-Counter
        <span className="badge badge-pill badge-secondary m-2">
          {props.totalCounters}
        </span>
        <button className="btn btn-secondary m-2" onClick={props.onAddItems}>
          Add Items
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
