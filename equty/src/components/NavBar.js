import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">TradeFantasy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active text-light" href="#">My Sessions</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" to="/learn">Learn</Link>
                            </li>
                            
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light text-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar