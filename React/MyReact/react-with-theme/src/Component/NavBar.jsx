import React from 'react';
import Header from './Header';

function NavBar() {
    return (
        <div>
            <Header/>
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
                                    <a href="index.html">
                                        <i className="fa fa-dashboard" /> <span>Dashboard</span>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="widgets.html">
                                        <i className="fa fa-th" /> <span>Widgets</span>
                                        <small className="label pull-right label-info">08</small>
                                    </a>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-edit" /> <span>Forms</span>
                                        <i className="fa fa-angle-left pull-right" />
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="forms.html"><i className="fa fa-angle-right" /> General Forms</a></li>
                                        <li><a href="validation.html"><i className="fa fa-angle-right" /> Form Validations</a></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-table" /> <span>Tables</span>
                                        <i className="fa fa-angle-left pull-right" />
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="tables.html"><i className="fa fa-angle-right" /> Simple tables</a></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-envelope" /> <span>Mailbox </span>
                                        <i className="fa fa-angle-left pull-right" /><small className="label pull-right label-info1">08</small><span className="label label-primary1 pull-right">02</span></a>
                                    <ul className="treeview-menu">
                                        <li><a href="inbox.html"><i className="fa fa-angle-right" /> Mail Inbox </a></li>
                                        <li><a href="compose.html"><i className="fa fa-angle-right" /> Compose Mail </a></li>
                                    </ul>
                                </li>
                                <li className="treeview">
                                    <a href="#">
                                        <i className="fa fa-folder" /> <span>Examples</span>
                                        <i className="fa fa-angle-left pull-right" />
                                    </a>
                                    <ul className="treeview-menu">
                                        <li><a href="login.html"><i className="fa fa-angle-right" /> Login</a></li>
                                        <li><a href="signup.html"><i className="fa fa-angle-right" /> Register</a></li>
                                        <li><a href="404.html"><i className="fa fa-angle-right" /> 404 Error</a></li>
                                        <li><a href="500.html"><i className="fa fa-angle-right" /> 500 Error</a></li>
                                        <li><a href="blank-page.html"><i className="fa fa-angle-right" /> Blank Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default NavBar