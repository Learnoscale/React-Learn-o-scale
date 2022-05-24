import React from 'react';
import './Advertise.css';
import Menu from './Menu';
import {Footer} from './Footer';
import { Link } from 'react-router-dom';
export default function Advertise() {

return(


<>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N78442F"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager (noscript) */}
    <Menu/>
  <section
    className="banner-area relative about-banner b-opacity"
    id="home"
    style={{
      background:
        'url("https://soe-buck-lb.storage.googleapis.com/front-end/images/banner-aws-1024x350.png") center',
      backgroundSize: "cover"
    }}
  >
    <div className="overlay overlay-bg" />
    <div className="container-fluid">
      <div className="align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-black" style={{ textTransform: "uppercase" }}>
            Advertise
          </h1>
          <p className="text-black link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to={"Advertise"}> Advertise</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container-fluid">
      <div className="row mbr-justify-content-center">
        <div className="col-lg-6 mbr-col-md-10">
          <div className="wrap" style={{ height: 282 }}>
            <div className="ico-wrap" style={{ padding: "20px !important" }}>
              <img
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/iconabout1.png"
                style={{ height: 50 }}
                alt="onlineexam"
              />
            </div>
            <div className="text-wrap vcenter">
              <h2 className="mbr-fonts-style text1 mbr-text mbr-bold mbr-section-title3 display-5">
                About Smart Online Exam
              </h2>
              <p className="mbr-fonts-style text1 mbr-text display-6"></p>
              <ul>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Pioneers in Online Test Preparation
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Core team of Engineers and MBAs
                </li>
                <li style={{ display: "flex" }}>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Providing Self-Assessment systems to 1000+ coaching
                  institutes, schools and colleges
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Only company in India to provide course material for 300+
                  exams.
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mbr-col-md-10">
          <div className="wrap" style={{ height: 282 }}>
            <div className="ico-wrap" style={{ padding: "20px !important" }}>
              <img
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/iconabout2.png"
                style={{ height: 50 }}
                alt="why us"
              />
            </div>
            <div className="text-wrap vcenter">
              <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                Why Us
              </h2>
              <p className="mbr-fonts-style text1 mbr-text display-6"></p>
              <ul>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  150000+ Registered Users
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  1000+ Coaching / School / College partners
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  1 Million+ visitors
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  8 minutes+ Average time spent on WebSite
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Only company in India to provide test series in Hindi &amp;
                  English mediums.
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mbr-col-md-10">
          <div className="wrap" style={{ height: 282 }}>
            <div className="ico-wrap" style={{ padding: "20px !important" }}>
              <img
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/iconabout3.png"
                style={{ height: 50 }}
                alt="Advertising"
              />
            </div>
            <div className="text-wrap vcenter">
              <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                Advertising Options
              </h2>
              <p className="mbr-fonts-style text1 mbr-text display-6"></p>
              <ul>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  As part of our mission to advance content practice then
                  Advertise with us
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Banners
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Exclusive E-mailers
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  SMSes
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Expert Chats
                </li>
                <li>
                  <i
                    className="fa fa-hand-o-right"
                    style={{ color: "#044d71", marginRight: 9 }}
                  />
                  Quizzes
                </li>
              </ul>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  {/* Footer */}
    <Footer/>
  {/* Footer End */}
  <a
    href="we"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>
)}
