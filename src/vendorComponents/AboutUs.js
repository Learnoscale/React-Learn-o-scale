import React from 'react'
import './About.css'
import './style.css'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import {Footer} from './Footer'

 export default function AboutUs() {

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
        'url("https://soe-buck-lb.storage.googleapis.com/front-end/images/books.jpg") center',
      backgroundSize: "cover", 
    
    }}
  >
    <div className="overlay overlay-bg" />
    <div className="container-fluid">
      <div className="align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white">About Us</h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to={"about-us"}> About Us</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <p>&nbsp;</p>
  <div className="container-fluid">
    <div className=" row-margin-bottom">
      <div className="col-md-12 no-padding lib-item" data-category="view">
        <div className="lib-panel">
          <div className="row box-shadow">
            <div className="col-md-5 col-sm-12 col-xs-12">
              <img
                className="lib-img-show img-responsive"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/images/aboutus.jpg"
                alt="about"
              />
            </div>
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="lib-row lib-header headingstyle">
                About Smart Online Exam
                <div className="lib-header-seperator" />
              </div>
              <div
                className="lib-row lib-desc midstyle"
                style={{ height: "60%" }}
              >
                <span className="midcontent">SmartOnlineExam</span>, one of
                India's foremost digital education portal was founded with a
                mission to Revolutionize Education through the adoption of
                technologies. Our aim to provide the best learning resources to
                every student so that the studies become more interesting and
                rewarding.
                <br />
                <br /> At present,{" "}
                <span className="midcontent">SmartOnlineExam</span>
                is the only one of portal who focusing on content delivery in
                major languages like Hindi &amp; English or both for the
                students evaluation system with deep level analysis like Rank,
                Obtained Marks, Questions Level, Time report, Difficulty level
                etc.
                <br />
                <br /> SmartOnlineExam.com is highly renowned for offering more
                than <span className="midcontent">
                  200+ online test series
                </span>{" "}
                for various subjects and courses for Competition and Entrance
                exams in <span className="midcontent">100+ </span> coaching
                institute and around{" "}
                <span className="midcontent">75,000+ </span>
                students to enable for crack all the Exams.
                <br />
                <br /> The SmartOnlineExam portal is not only for cover tests/
                assessments on each topics and subjects but its helps in
                improving time management and accuracy which is key to any exam.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-md-12  col-sm-12 col-xs-12 no-padding lib-item"
        data-category="ui"
      >
        <div className="lib-panel">
          <div className="row box-shadow">
            <div className="col-md-7 col-sm-12 col-xs-12">
              <div className="lib-row lib-header headingstyle">
                Why Choose Us
                <div className="lib-header-seperator" />
              </div>
              <div
                className="lib-row lib-desc midstyle"
                style={{ height: "50%" }}
              >
                <ul>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Dedicated team for different- different Projects.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Strong support.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Developed by experts.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Maximum services are delivered immediately.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Best team of this Industry.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Use world’s most advanced technologies.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    All products in affordable price.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Project delivered in given time.
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    100% legal company (GST Registered).
                  </li>
                  <li>
                    <i
                      className="fa fa-hand-o-right"
                      style={{ color: "#044d71", marginRight: 9 }}
                    />
                    Pearson VUE Authorised Test Center for many Global Exams.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-xs-12 col-sm-12">
              <img
                className="lib-img"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/images/why_choose_us.jpg"
                height="300px"
                alt="why choose us"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
      <Footer/>
  {/* Footer End */}
  <a
    href="gf"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>
    )
}