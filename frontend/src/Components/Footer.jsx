import React from "react";
import { BsInstagram,BsFacebook,BsLinkedin,BsTwitter,BsGithub } from "react-icons/bs";
const Footer = () => {
return(

  <footer
          className="text-center text-lg-start  style-primary w-100  bottom-0 mt-2"
          >
    <section
             className="d-flex justify-content-between p-4 style-primary "
             >
      <div className="me-5 ">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" className="  style-primary me-4">
            <BsFacebook></BsFacebook>
        </a>
        <a href="" className="  style-primary me-4">
            <BsTwitter></BsTwitter>
        </a>
        <a href="" className="  style-primary me-4">
            <BsInstagram></BsInstagram>
        </a>
        <a href="" className=" style-primary me-4">
            <BsLinkedin></BsLinkedin>
        </a>
        <a href="" className="  style-primary me-4">
            <BsGithub></BsGithub>
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold ">Kolona Lel Watan</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 style-primary">
            <h6 className="text-uppercase fw-bold">Events</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p>
              <a href="#!" className=" style-primary ">Volunteering</a>
            </p>
            <p>
              <a href="#!" className=" style-primary">Donation</a>
            </p>
            <p>
              <a href="#!" className=" style-primary">Fundraisers</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 style-primary">
         
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p>
              <a href="#!" className=" style-primary">Your Account</a>
            </p>
            <p>
              <a href="#!" className=" style-primary">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className=" style-primary">Help and Support</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 style-primary">
         
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    <div
         className="text-center p-3 d-flex justify-content-center"
         >
      © 2020 Copyright:
      <p>Website</p>
    </div>
  </footer>
);
};

export default Footer;