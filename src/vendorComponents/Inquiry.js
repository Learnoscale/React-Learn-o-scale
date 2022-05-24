import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import { Link } from 'react-router-dom'
import './Inquiry.css'

export default function Inquiry() {

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
      backgroundSize: "cover"
    }}
  >
    <div className="overlay overlay-bg" />
    <div className="container-fluid">
      <div className="align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white" style={{ textTransform: "uppercase" }}>
            Inquiry
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to="inquiry">Inquiry</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div
    className="container-fluid"
    style={{
      boxShadow: "1px 2px 3px 2px #cdc6c6",
      marginTop: "2%",
      backgroundColor: "ghostwhite",
      marginBottom: 20
    }}
  >
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <div className="col-sm-6 col-md-6 col-xs-12 col-lg-6">
          <input type="hidden" id="hiddenid" defaultValue="{msg}" />
          <div className="form-group">
            <div style={{}}>
              <label htmlFor="name">Full Name:</label>
            </div>
            <span id="nameid" className=" font-weight-bold " />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="email">Email Address/Phone No.:</label>
            </div>
            <span id="emailphoneid" className="font-weight-bold " />
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="subject">Select Category:</label>
            </div>
            <option value="none">Select Category</option>
            <option value="school">School</option>
            <option value="ReSeller">ReSeller</option>
            <option value="Bulk Purchase">Bulk Purchase</option>
            <option value="Coaching">Coaching</option>
            <option value="Technical Supports">Technical Supports</option>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="subject">Subject:</label>
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="msg">Message:</label>
            </div>
          </div>
          <div className="form-group">
            <div>
              <label htmlFor="code">Captcha:</label>
            </div>
            <div
              className="col-md-12 col-sm-12"
              style={{ padding: "0px !important" }}
            >
              <div
                className="col-md-6 col-sm-6 col-xs-6"
                style={{ padding: "0px !important", marginBottom: 20 }}
              >
                <input
                  type="text"
                  className="form-control"
                  id="mainCaptcha"
                  disabled="disabled"
                  style={{ height: "83px !important" }}
                />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <span
                  className="fa fa-refresh rotate"
                  style={{ display: "inline-block" }}
                  id="refresh"
                  onclick="Captcha();"
                />
              </div>
            </div>
            <div
              style={{
                marginTop: 10,
                color: "red",
                borderRadius: 7,
                marginBottom: 7
              }}
              id="log"
              className="col-xs-12 col-md-12"
            />
            <input
              style={{ marginTop: 10 }}
              type="text"
              className="form-control"
              placeholder="Enter captcha"
              name="captcha"
              id="txtInput"
              required="required"
            />
          </div>
          <br />
          <input
            type="submit"
            name="submit"
            defaultValue="submit"
            className="btn btn-info"
            style={{ marginBottom: "2%", width: "40%" }}
            onclick="return validation()"
          />
        </div>
        <div
          className="col-sm-6 col-md-6 col-xs-12 col-lg-6"
          style={{ marginTop: "2%" }}
        >
          <aside className="sidebar">
            <div className="single contact-info">
              <h3 className="side-title">Contact Information</h3>
              <ul className="list-unstyled">
                <li>
                  <div className="icon">
                    <img
                      alt="img"
                      src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon17.png"
                      style={{ height: 53 }}
                    />
                  </div>
                  <div className="info">
                    <p>
                      SMART ONLINE EXAM
                      <br /> 2nd Floor,Vaishali Tower
                      <br />
                      Station Road,Near Gaushala
                      <br /> Alwar, Rajasthan 301001
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      alt="img"
                      src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon18.png"
                      style={{ height: 53 }}
                    />
                  </div>
                  <div className="info">
                    <p>
                      0144-4901512
                      <br />
                      9587901199
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      alt="img"
                      src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon16.png"
                      style={{ height: 53 }}
                    />
                  </div>
                  <div className="info">
                    <p>info@smartonlineexam.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
  <Link
    to="#"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </Link>
</>
  )}
