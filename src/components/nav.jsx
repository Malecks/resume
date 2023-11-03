import React from "react";
import {
  NavLink,
} from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
        <ul>
            <li>
                <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>About</NavLink>
            </li>
            <li>
                <NavLink to='/resume' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Resumé</NavLink>
            </li>
            {/* <li>
                <NavLink to='/projects' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Projects</NavLink>
            </li> */}
        </ul>
      </div>
    )
}

export default Nav