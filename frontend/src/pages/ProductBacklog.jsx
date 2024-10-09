import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductBacklog.css"; // Optional: if you have specific styles for this page

function ProductBacklog() {
    const user = { is_authenticated: true, is_superuser: true, is_staff: true }; // Mock user object for demonstration

    const filterTasks = () => {
        // Implement filter logic here
    };

    return (
        <div className="product-backlog">
            <h1>Product Backlog</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTopNav" aria-controls="navbarTopNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTopNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <div className="nav-link">
                                {user.is_superuser || user.is_staff ? (
                                    <button className="btn btn-light nav-link" type="button" onClick={() => window.location.href='/create_task'}>
                                        + New Task
                                    </button>
                                ) : null}
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="nav-link">
                                <button className="btn btn-light dropdown-toggle" type="button" id="sortDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-sort" aria-hidden="true"></i> Sort by
                                </button>
                                <div className="dropdown">
                                    <div className="dropdown-menu" aria-labelledby="sortDropdown">
                                        <Link className="dropdown-item" to="?sort_by=oldest_date">Date of Creation (Oldest to Newest)</Link>
                                        <Link className="dropdown-item" to="?sort_by=newest_date">Date of Creation (Newest to Oldest)</Link>
                                        <Link className="dropdown-item" to="?sort_by=priority_low">Priority (Low to High)</Link>
                                        <Link className="dropdown-item" to="?sort_by=priority_high">Priority (High to Low)</Link>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">
                                <button className="btn btn-light dropdown-toggle" type="button" id="filterDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-filter" aria-hidden="true"></i> Filter by
                                </button>
                                <div className="dropdown">
                                    <div className="dropdown-menu" aria-labelledby="filterDropdown">
                                        <label className="dropdown-item"><input type="checkbox" value="API" className="filter-checkbox" /> API</label>
                                        <label className="dropdown-item"><input type="checkbox" value="Frontend" className="filter-checkbox" /> Frontend</label>
                                        <label className="dropdown-item"><input type="checkbox" value="Backend" className="filter-checkbox" /> Backend</label>
                                        <label className="dropdown-item"><input type="checkbox" value="Testing" className="filter-checkbox" /> Testing</label>
                                        <div className="dropdown-divider"></div>
                                        <button className="btn btn-primary dropdown-item" onClick={filterTasks}>Apply Filters</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {user.is_authenticated ? (
                <div className="container product-backlog-page">
                    <div className="row">
                        <div className="col-md-4 custom-column">
                            {/* Include task cards for 'Not Started' status */}
                        </div>
                        <div className="col-md-4 custom-column">
                            {/* Include task cards for 'In Progress' status */}
                        </div>
                        <div className="col-md-4 custom-column completed-cards">
                            {/* Include task cards for 'Completed' status */}
                        </div>
                    </div>
                </div>
            ) : (
                <h3>Login <Link to="/login">Here</Link></h3>
            )}
        </div>
    );
}

export default ProductBacklog;