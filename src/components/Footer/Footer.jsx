import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebook, faTwitter, faInstagram);

const Footer = () => {
  return (
    <div className="py-4">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <p>
            Job Mingle
            <br />
            <span className="text-xs">
              Providing job circular and give environment <br /> to apply for
              the job since 1992
            </span>
          </p>
          <div className="flex gap-3 mt-3">
            <FontAwesomeIcon className="fa-2x" icon={faFacebook} />
            <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
            <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Live Chat</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="px-10 bg-neutral text-neutral-content">
        <hr />
      </div>
      <div className="flex flex-col lg:flex-row justify-between bg-neutral text-neutral-content p-10">
        <div>
          <p className="text-xs">&copy; 2023 Job Mingle. All Rights Reserved</p>
        </div>
        <div>
          <p className="text-xs">Powered by Job Mingle</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
