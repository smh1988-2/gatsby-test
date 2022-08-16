import React from "react";

function Footer() {
  return (
    <footer class="bg-accent">
      <div class="container footer-container">
        <div class="logo-social-icons-container">
          <img src="images/logo-white.svg" class="footer-logo" alt="" />
          <div class="social-icons-container">
            <a href="#">
              <img
                src="images/icon-facebook.svg"
                class="social-icon"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="images/icon-youtube.svg"
                class="social-icon"
                alt="Youtube"
              />
            </a>
            <a href="#">
              <img
                src="images/icon-twitter.svg"
                class="social-icon"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                src="images/icon-pinterest.svg"
                class="social-icon"
                alt="Pinterest"
              />
            </a>
            <a href="#">
              <img
                src="images/icon-instagram.svg"
                class="social-icon"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <nav class="footer-nav fs-300">
          <ul role="list" class="">
            <li class="footer-nav-item">
              <a href="#" class="footer-menu-link">
                About
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="footer-menu-link">
                Contact
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="footer-menu-link">
                Blog
              </a>
            </li>
          </ul>

          <ul role="list" class="">
            <li class="footer-nav-item">
              <a href="#" class="footer-menu-link">
                Careers
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="footer-menu-link">
                Support
              </a>
            </li>
            <li class="footer-nav-item">
              <a href="#" class="footer-menu-link">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>

        <div class="cta-legal-container">
          <a href="#" class="btn footer-cta fs-300 fw-regular">
            Request Invite
          </a>
          <p class="fs-200 text-primary">
            &copy; Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
