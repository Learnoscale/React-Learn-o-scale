import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
export  const Footer = () => (
    <div>
      {/* ======= Footer ======= */}
      <footer id="footer" className='ps-2'>
     
        <div className="row" style={{ display: "flex !important" }}>
          <div className=" col-sm-4 col-md-4 col-sm-4 col-lg-4">
            <h5 className="headin5_amrc col_white_amrc pt2">About us</h5>
            <text className="mb10">
              SmartOnlineExam.com is proudly considered as a meaning of success.
              The main motive of this company is to bring NTPC SM Aptitude Test
              Series and NTPC SM/TA Psycho Test Series with the help of innovative
              technologies.
            </text><br /><br />
            <text>Monday to Saturday 09am-6pm</text><br /><br />
            <text>
              <i className="fa fa-mobile" /> &nbsp;{" "}
              <a id='a' href="tel:+91 9587901199">Call us at +91 95879 01199</a>
            </text><br /><br />
            <text>
              <i className="fa fa fa-envelope" />&nbsp; info@smartonlineexam.com
            </text><br /><br />
          </div>
          <div className=" col-sm-4  col-md-3  col-lg-3 ">
            <h5 className="headin5_amrc col_white_amrc pt2">COMPANY PROFILE</h5>
            <ul className="footer_ul_amrc">
              <li>
                <Link id='a' to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link id='a' to={"/blog"}>Blog</Link>
              </li>
              <li>
              <Link id='a' to={"/Advertise-with-us"}>
                  Advertise With Us
                </Link>
              </li>
              <li>
                <Link id='a' to={"/careers"}>Careers</Link>
              </li>
              <li>
                <Link id='a' to={"/disclaimer"}>
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link id='a' to={"/privacy-policy"}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col-sm-4  col-md-3  col-lg-3 ">
            <h5 className="headin5_amrc col_white_amrc pt2">
              SHIPPING &amp; POLICY
            </h5>
            <ul className="footer_ul_amrc">
              <li>
                <Link id='a' to={"/customer-service"}>
                  Customer Services
                </Link>
              </li>
              <li>
                <Link id='a' to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link id='a' to={"/payment-methods"}>
                  Payment Methods
                </Link>
              </li>
              {/* <li><a href="${pageContext.request.contextPath}/cancellation">Cancellation,Exchange & Return</a></li> */}
              <li>
                <Link id='a' to={"/term-and-conditions"}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className=" col-sm-4 col-md-2  col-lg-2 ">
            <h5 className="headin5_amrc col_white_amrc pt2">CONTACT US</h5>
            <ul className="footer_ul_amrc">
              <li>
                <Link id='a' to={"/Reseller"}>Reseller</Link>
              </li>
              <li>
                <Link id='a' to={"/school-college-partnership-program"}>
                  School/College
                </Link>
              </li>
              <li>
                <Link id='a' to={"/coaching"}>Coaching</Link>
              </li>
              <li>
                <Link id='a' to="/inquiry">Inquiry</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-fluid">
          <div className="copyright">
            © Copyright <strong>Vision Infotech</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by{" "}
            <a id='a' href="www.snteducaion.com/">Snt Super Net Technology Pvt Ltd</a>
          </div>
        </div>
        <a id='a'
          href="sa"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </footer>
    </div>
  )