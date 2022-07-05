import React from 'react'
import { Link } from 'wouter'

export default function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/#">
          App
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/#">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/#">
                      Pricing
                    </Link>
                  </li>
                </ul>
                <Link className="btn btn-outline-info my-2 my-sm-0" to="/login">
                  Login
                </Link>
                <Link
                  className="btn btn-outline-info my-2 my-sm-0 ml-3"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </nav>
  )
}
