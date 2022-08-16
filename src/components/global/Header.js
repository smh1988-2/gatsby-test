import React from "react";
import { Link } from "gatsby";

function Header() {
  return (
    <header>
      <div class="header-container container">
        <Link to="/" className="text-primary">
          <img src="logo.svg" alt="" />
        </Link>

        <nav>
          <ul role="list" class="header-menu fs-300">
            <li class="header-nav-item">
              <Link to="/" className="text-primary">
                Home
              </Link>
            </li>
            <li class="header-nav-item">
              <Link to="/about" className="text-primary">
                About
              </Link>
            </li>
            <li class="header-nav-item">
              <Link to="/contact" className="text-primary">
                Contact
              </Link>
            </li>
            <li class="header-nav-item">
              <Link to="/blog" className="text-primary">
                Blog
              </Link>
            </li>
            <li class="header-nav-item">
              <Link to="/careers" className="text-primary">
                Careers
              </Link>
            </li>
          </ul>
        </nav>

        <a href="#" class="btn fs-300 fw-regular">
          Request Invite
        </a>
      </div>
    </header>
  );
}

export default Header;
