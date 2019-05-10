import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Nav.css';

const Nav = (props) => {

    return(

        <div className="nav">
            <Link className={props.location.pathname === '/' ? 'active nav-link' : 'nav-link'} to="/">
                Home
            </Link>

            <Link className={props.location.pathname === '/resume' ? 'active nav-link' : 'nav-link'} to="/resume">
                Resume
            </Link>

            <Link className={props.location.pathname === '/design' ? 'active nav-link' : 'nav-link'} to="/design">
                Design Projects
            </Link>

            <Link className={props.location.pathname === '/development' ? 'active nav-link' : 'nav-link'} to="/development">
                Development Projects
            </Link>
        </div>
    )
}

export default withRouter(Nav);