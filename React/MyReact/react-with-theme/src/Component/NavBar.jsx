import React from 'react';
import Header from './Header';
import { Outlet, Link } from "react-router-dom";
function NavBar() {
    return (
        <div>
            <Header />
            <div className="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
                {/*left-fixed -navigation*/}
                <aside className="sidebar-left">
                    <nav className="navbar navbar-inverse">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".collapse" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <h1><a className="navbar-brand" href="index.html"><span className="fa fa-area-chart" /> Glance<span className="dashboard_text">Design dashboard</span></a></h1>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="sidebar-menu">
                                <li className="header">MAIN NAVIGATION</li>
                                <li className="treeview">
                                    <Link to="/dashboard">
                                        <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/add-category">
                                        <i className="fa fa-dashboard" /> <span>Add Category</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/manage-category">
                                        <i className="fa fa-dashboard" /> <span>Manage Category</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/add-customer">
                                        <i className="fa fa-edit" /> <span>Add Customer</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/manage-customer">
                                        <i className="fa fa-dashboard" /> <span>Manage Customer</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/add-product">
                                        <i className="fa fa-dashboard" /> <span>Add Product</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/manage-product">
                                        <i className="fa fa-dashboard" /> <span>Manage Product</span>
                                    </Link >
                                </li>
                                <li className="treeview">
                                    <Link to="/tables">
                                        <i className="fa fa-table" /> <span>Tables</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </nav>
                    <Outlet />
                </aside>
            </div>
        </div>
    )
}

export default NavBar