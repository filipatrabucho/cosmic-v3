import React from "react";
import { NavLink } from "react-router-dom";
import "./routemap.css";

function Routemap({ routes }) {
  const routeLength = Object.keys(routes).length;
  return (
    <div className="routemap">
      {routes.map((info, index) => {
        return (
          <NavLink className="routemap__text" to={info.href}>
            <p key={info.name}>
              {info.name}
              {routeLength === index + 1 ? null : <span>&nbsp;&gt;&nbsp;</span>}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Routemap;
