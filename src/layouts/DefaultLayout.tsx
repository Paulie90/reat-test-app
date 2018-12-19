import React, { StatelessComponent } from "react";
import { NavLink } from "react-router-dom";

export const DefaultLayout: StatelessComponent = props => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">App</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/music">Search music</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/playlists">Playlists</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}