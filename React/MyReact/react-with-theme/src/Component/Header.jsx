import React from 'react'

function Header() {
   
    return (
        <div className="sticky-header header-section ">
            <div className="header-left">
                <button id="showLeftPush"><i className="fa fa-bars" /></button>
                <div className="profile_details_left">
                    <ul className="nofitications-dropdown">
                        <li className="dropdown head-dpdn">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-envelope" /><span className="badge">4</span></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="notification_header">
                                        <h3>You have 3 new messages</h3>
                                    </div>
                                </li>
                                <li><a href="#">
                                    <div className="user_img"><img src="images/1.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet</p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li className="odd"><a href="#">
                                    <div className="user_img"><img src="images/4.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet </p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li><a href="#">
                                    <div className="user_img"><img src="images/3.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet </p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li><a href="#">
                                    <div className="user_img"><img src="images/2.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet </p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li>
                                    <div className="notification_bottom">
                                        <a href="#">See all messages</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown head-dpdn">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-bell" /><span className="badge blue">4</span></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="notification_header">
                                        <h3>You have 3 new notification</h3>
                                    </div>
                                </li>
                                <li><a href="#">
                                    <div className="user_img"><img src="images/4.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet</p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li className="odd"><a href="#">
                                    <div className="user_img"><img src="images/1.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet </p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li><a href="#">
                                    <div className="user_img"><img src="images/3.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet </p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li><a href="#">
                                    <div className="user_img"><img src="images/2.jpg" alt /></div>
                                    <div className="notification_desc">
                                        <p>Lorem ipsum dolor amet </p>
                                        <p><span>1 hour ago</span></p>
                                    </div>
                                    <div className="clearfix" />
                                </a></li>
                                <li>
                                    <div className="notification_bottom">
                                        <a href="#">See all notifications</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown head-dpdn">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i className="fa fa-tasks" /><span className="badge blue1">8</span></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="notification_header">
                                        <h3>You have 8 pending task</h3>
                                    </div>
                                </li>
                                <li><a href="#">
                                    <div className="task-info">
                                        <span className="task-desc">Database update</span><span className="percentage">40%</span>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="progress progress-striped active">
                                        <div className="bar yellow" style={{ width: '40%' }} />
                                    </div>
                                </a></li>
                                <li><a href="#">
                                    <div className="task-info">
                                        <span className="task-desc">Dashboard done</span><span className="percentage">90%</span>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="progress progress-striped active">
                                        <div className="bar green" style={{ width: '90%' }} />
                                    </div>
                                </a></li>
                                <li><a href="#">
                                    <div className="task-info">
                                        <span className="task-desc">Mobile App</span><span className="percentage">33%</span>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="progress progress-striped active">
                                        <div className="bar red" style={{ width: '33%' }} />
                                    </div>
                                </a></li>
                                <li><a href="#">
                                    <div className="task-info">
                                        <span className="task-desc">Issues fixed</span><span className="percentage">80%</span>
                                        <div className="clearfix" />
                                    </div>
                                    <div className="progress progress-striped active">
                                        <div className="bar  blue" style={{ width: '80%' }} />
                                    </div>
                                </a></li>
                                <li>
                                    <div className="notification_bottom">
                                        <a href="#">See all pending tasks</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="clearfix"> </div>
                </div>
                {/*notification menu end */}
                <div className="clearfix"> </div>
            </div>
            <div className="header-right">
                {/*search-box*/}
                <div className="search-box">
                    <form className="input">
                        <input className="sb-search-input input__field--madoka" placeholder="Search..." type="search" id="input-31" />
                        <label className="input__label" htmlFor="input-31">
                            <svg className="graphic" width="100%" height="100%" viewBox="0 0 404 77" preserveAspectRatio="none">
                                <path d="m0,0l404,0l0,77l-404,0l0,-77z" />
                            </svg>
                        </label>
                    </form>
                </div>{/*//end-search-box*/}
                <div className="profile_details">
                    <ul>
                        <li className="dropdown profile_details_drop">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <div className="profile_img">
                                    <span className="prfil-img"><img src="images/2.jpg" alt /> </span>
                                    <div className="user-name">
                                        <p>Admin Name</p>
                                        <span>Administrator</span>
                                    </div>
                                    <i className="fa fa-angle-down lnr" />
                                    <i className="fa fa-angle-up lnr" />
                                    <div className="clearfix" />
                                </div>
                            </a>
                            <ul className="dropdown-menu drp-mnu">
                                <li> <a href="#"><i className="fa fa-cog" /> Settings</a> </li>
                                <li> <a href="#"><i className="fa fa-user" /> My Account</a> </li>
                                <li> <a href="#"><i className="fa fa-suitcase" /> Profile</a> </li>
                                <li> <a href="#"><i className="fa fa-sign-out" /> Logout</a> </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="clearfix"> </div>
        </div>
    )
}

export default Header