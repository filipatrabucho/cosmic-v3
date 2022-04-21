import React from "react";
import { NavLink } from "react-router-dom";
import "./routemap.css";

function Routemap(props) {
  const routeLength = Object.keys(props.routes).length;
  return (
    <div className="routemap">
      {props.routes.map((info, index) => {
        return (
          <NavLink className="text" to={info.href}>
            <p key={info.name}>
              {info.name}
              {routeLength === index + 1 ? null : (
                <span> &nbsp;&gt;&nbsp;</span>
              )}
            </p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Routemap;
