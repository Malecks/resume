import React from "react";
import {
  NavLink,
} from "react-router-dom";

function Nav() {
    return (
        <div className='nav'>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/resume' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>Resume</NavLink>
                </li>
                {/* <li>
                    <NavLink to='/about' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>About</NavLink>
                </li> */}
            </ul>
        </div>
    )
}

export default Nav