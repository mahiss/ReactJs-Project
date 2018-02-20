import React from "react";

import {Header} from "./Header";
import {Sidebar} from "./Sidebar";
import {Breadcrumb} from "./Breadcrumb";
import {Home} from "./Home";
export class Root extends React.Component {
       render() {
        var user = "Home";
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <Sidebar/>
                        </div>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <Breadcrumb name={user}/>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
