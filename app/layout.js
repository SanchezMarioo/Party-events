// layout.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import Link from 'next/link'



export const metadata = {
  title: 'Party Events',
  description: 'Shop ejemplo sobre Next.js',
}

const Layout = ({ children }) => {
  return (
    <html>
      <body>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Party Events
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/todos">
                Todo los eventos
              </Link>
              <a className="nav-link" href="/instalaciones">
                Instalaciones
              </a>
            </div>
          </div>
        </div>
      </nav>
        {children}
      </body>
    </html>
  );
};

export default Layout;