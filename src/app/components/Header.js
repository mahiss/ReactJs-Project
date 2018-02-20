import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">Project ReactJs</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home/"} activeClassName={"active"}>Home</Link></li>
                        <li><Link to={"/user/10/Mahi"} activeClassName={"active"}>User</Link></li>
                        <li><Link to={"/form"} activeClassName={"active"} >Form</Link></li>
                        <li><Link to={"/listapihome"} activeClassName={"active"} >API</Link></li>
                        <li><Link to={"/comments"} activeClassName={"active"} >Comments</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
