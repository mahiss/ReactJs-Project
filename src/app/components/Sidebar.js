import React from "react";
import {Link} from "react-router";

export const Sidebar = (props) => {
    return (
        // sidebar div
            <ul className="nav nav-sidebar">
                <li><Link to={"/sampledata"} activeClassName={"active"}>Overview <span
                    className="sr-only">(current)</span></Link></li>
                <li><Link to={"/sampledata"} activeClassName={"active"}>Reports</Link></li>
                <li><Link to={"/sampledata"} activeClassName={"active"}>Analytics</Link></li>
                <li><Link to={"/sampledata"} activeClassName={"active"}>Export</Link></li>
            </ul>
        );
};