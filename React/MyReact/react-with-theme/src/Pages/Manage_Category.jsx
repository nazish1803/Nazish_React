import React from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'

function Manage_Category() {
    return (
        <>
            <NavBar />
            <div id="page-wrapper">
                <div className="main-page">
                    <div className="panel-body widget-shadow">

                        <div className="tables">
                            <h2 style={{ 'margin-bottom': '20px' }}>Cateories</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Category Name</th>
                                        <th>Description</th>
                                        <th>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Manage_Category