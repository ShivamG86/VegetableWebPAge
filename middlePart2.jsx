import React, { Component } from "react";

class MiddlePart2 extends Component {
  render() {
    const socialIcons = ["twitter", "facebook", "instagram"];
    const footerLinks = {
      menu: ["Shop", "About", "Journal", "Contact Us"],
      help: ["Shipping Information", "Returns & Exchange", "Terms & Conditions", "Privacy Policy", "FAQs", "Contact"]
    };
    const addressInfo = {
      location: "203 Fake St. Mountain View, San Francisco, California, USA",
      phone: "+2 392 3929 210",
      email: "info@yourdomain.com"
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel">
                  <span className="ion-ios-arrow-up"></span>
                </div>
              </a>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">GREEN</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  {socialIcons.map((icon, index) => (
                    <li key={index} className="ftco-animate fadeInUp ftco-animated">
                      <a href="#">
                        <span className={`icon-${icon}`}></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  {footerLinks.menu.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="py-2 d-block text-dark">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    {footerLinks.help.slice(0, footerLinks.help.length / 2).map((link, index) => (
                      <li key={index}>
                        <a href="#" className="py-2 d-block text-dark">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="list-unstyled">
                    {footerLinks.help.slice(footerLinks.help.length / 2).map((link, index) => (
                      <li key={index}>
                        <a href="#" className="py-2 d-block text-dark">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">{addressInfo.location}</span>
                    </li>
                    <li>
                      <a href="#" className="text-dark">
                        <span className="icon icon-phone"></span>
                        <span className="text">{addressInfo.phone}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-dark">
                        <span className="icon icon-envelope"></span>
                        <span className="text">{addressInfo.email}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. Copyright ©
                <script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with{" "}
                <i className="icon-heart color-danger" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MiddlePart2;
