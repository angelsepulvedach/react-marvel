import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return(
      <div>
          <footer className="text-while py-4 bg-dark">
              <div className="container">
                  <nav className="row">
                      <Link to="/" className="col-6 d-flex align-items-center justify-content-lg-center">
                          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                                alt="Marvel"
                                className="mx-2"
                                width="150"
                          />
                      </Link>
                      <ul className="col-6 list-unstyled text-white">
                          <li className="font-weight-bold mb-2 text-center">Marvel</li>
                          <li className="text-center">Este sitio web podras encontrar informacion sobre los personajes del mundo de marvel</li>
                      </ul>
                  </nav>
              </div>
          </footer>
      </div>
    )
};


export  default Footer;