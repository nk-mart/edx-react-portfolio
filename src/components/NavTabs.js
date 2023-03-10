import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "../AppStyle.css"


const mystyle = {
color: "white"
  } 



function NavTabs() {
  return (
    <ul    className="nav d-flex justify-content-center bg-light bg-opacity-10">
      <li   className="nav-item fs-3 ">
        <NavLink
          to="/edx-react-portfolio/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active text-reset ' : 'nav-link text-reset'
           }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item fs-3">
        <NavLink
          to="/edx-react-portfolio/about"
          className={({ isActive }) =>
            isActive ? 'nav-link active text-reset ' : 'nav-link text-reset'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item fs-3">
        <NavLink
          to="/edx-react-portfolio/projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active text-reset' : 'nav-link text-reset'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item fs-3">
        <NavLink
          to="/edx-react-portfolio/contact"
          
          className={({ isActive }) =>
            isActive ? 'nav-link active text-reset' : 'nav-link text-reset'
          }
        >
          Contact
        </NavLink>
      </li>
    
    </ul>
  );
}

export default NavTabs;
