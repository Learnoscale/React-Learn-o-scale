import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import {Footer} from '../Footer'

 export default function JeeMains() {
   

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
              <h1 className="text-white">Jee Mains Demo</h1>
              <p className="text-white link-nav">
                {" "}
                <Link to={"/"}>Home </Link>{" "}
                <span className="fa fa-arrow-right" />{" "}
                <Link to="jee-mains-demo"> Jee Mains Demo</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="box">
        <div className="container-fluid">
          <div style={{ boxShadow: "0px 0px 10px #4bc6ff" }}>
            <div className="col-md-12">
              <div style={{ width: "100%" }}>
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <th style={{ width: "1%" }}>SN</th>
                      <th style={{ width: "" }}>Test Name</th>
                      <th style={{ width: "1%" }}>Action</th>
                    </tr>
                    <tr>
                      <td>
                        ${"{"}count = count+1{"}"}
                      </td>
                      <td>
                        ${"{"}test.testName{"}"}
                      </td>
                      <td>
                        <a href="ss">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" /> START
                            TEST
                          </button>
                        </a>
                        <a href="sd">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" /> START
                            TEST
                          </button>
                        </a>
                        <a href="sf">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" /> START
                            TEST
                          </button>
                        </a>
                        <a href="sp">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" /> START
                            TEST
                          </button>
                        </a>
                        <a href="sg">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" />{" "}
                            Report
                          </button>
                        </a>
                        <a href="ss">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" />{" "}
                            Resume TEST
                          </button>
                        </a>
                        <a href="ss">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" />{" "}
                            Resume TEST
                          </button>
                        </a>
                        <a href="df">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" />{" "}
                            Resume TEST
                          </button>
                        </a>
                        <a href="sa">
                          <button className="btn btn-success tablodugmeler">
                            {" "}
                            <span className="fa fa-send" aria-hidden="true" />{" "}
                            Resume TEST
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <div>
                          {" "}
                          <a href="we" id="button" onclick="showhide()">
                            {" "}
                            ${"{"}PackageDetails.shopAllPackageName{"}"}{" "}
                            <i
                              className="fa fa-angle-right"
                              style={{ float: "right" }}
                            />{" "}
                          </a>
                          <br />{" "}
                          <span>
                            <i className="fa fa-eye" />${"{"}PackageDetails.descTest
                            {"}"}
                          </span>
                        </div>
                      </td>
                      <td>
                        <button
                          id="rzp-button1"
                          value="dd"
                          className="btn btn-success"
                        >
                          <i className="fa fa-lock" style={{ color: "#ffffff" }} />
                          BUY NOW
                        </button>
                      </td>
                      <td>
                        <font
                          color="red"
                          className="btn btn btn-danger"
                          style={{ fontFamily: "monospace", fontWeight: "bolder" }}
                        >
                          ${"{"}PackageDetails.activationCodeStatus{"}"}
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12" id="newpost" style={{ display: "none" }}>
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <th style={{ width: "1%" }}>SN</th>
                    <th style={{ width: "" }}>Test Name</th>
                    <th style={{ width: "1%" }}>Action</th>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>
                      ${"{"}counter = counter+1{"}"}
                    </td>
                    <td>
                      ${"{"}test.testName{"}"}
                    </td>
                    <td>
                      <button
                        id="rzp-button1"
                        value="ww"
                        className="btn btn-success"
                      >
                        <i className="fa fa-lock" style={{ color: "#ffffff" }} />
                        BUY NOW
                      </button>
                    </td>
                    <td>
                      <font
                        color="red"
                        className="btn btn btn-danger"
                        style={{ fontFamily: "monospace", fontWeight: "bolder" }}
                      >
                        ${"{"}PackageDetails.activationCodeStatus{"}"}
                      </font>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p>&nbsp;</p>
      <div className="container-fluid" style={{ marginTop: "2%", marginBottom: 20 }}>
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="test-area-item">
              <div className="test-area-wrap">
                <div className="test-area-content">
                  <div className="conta">
                    <img
                      alt="img"
                      src="#"
                      style={{ height: 187, width: "100%" }}
                    />
                    <div className="content" id="home_quicklinks">
                      <h1
                        style={{
                          color: "white",
                          fontSize: 25,
                          margin: "-39px 0px 10px 0px"
                        }}
                      >
                        Silver Package
                      </h1>
                      <Link className="quicklink link1" to="#">
                        {" "}
                        <span className="ql_caption">
                          {" "}
                          <span className="outer">
                            {" "}
                            <span className="inner">
                              <h2>
                                ${"{"}first.discount{"}"} % Off
                              </h2>{" "}
                            </span>{" "}
                          </span>
                        </span>{" "}
                        <span className="ql_top" /> <span className="ql_bottom" />
                      </Link>
                    </div>
                  </div>
                  <div className="test-area-info">
                    <ul
                      className="list-group list-group-flush text-center"
                      style={{ height: 91, padding: 0, marginTop: 10 }}
                    >
                      <li
                        className="list-group-item"
                        style={{ padding: 0, border: "none !important" }}
                      >
                        <p className="testpara">
                          ${"{"}first.descTest{"}"}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-info">
                    <ul
                      className="list-group list-group-flush text-center"
                      style={{ height: 91, padding: 0, textAlign: "left" }}
                    >
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Based on New Pattern
                          <img
                            alt=""
                            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/New.png"
                            style={{ marginTop: "-14px" }}
                          />
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Instant Activation
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Get All India Rank
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Instant Result with Solution
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-footer fix">
                    <ul className="pull-left" style={{ listStyle: "none" }}>
                      <li>
                        <span className="btn btn-sm btn-success subpackageprice">
                          Price: ₹ ${"{"}first.sellingPrice{"}"}
                        </span>
                      </li>
                    </ul>
                    <ul className="pull-right" style={{ listStyle: "none" }}>
                      <li>
                        <button
                          id="rzp-button1"
                          value="value"
                          className="btn btn-sm btn-success subpackagebuy"
                        >
                          BUY NOW
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="test-area-item">
              <div className="test-area-wrap">
                <div className="test-area-content">
                  <div className="conta">
                    <img
                      alt=""
                      src="#"
                      style={{ height: 187, width: "100%" }}
                    />
                    <div className="content" id="home_quicklinks">
                      <h1
                        style={{
                          color: "white",
                          fontSize: 25,
                          margin: "-39px 0px 10px 0px"
                        }}
                      >
                        Gold Package
                      </h1>
                      <Link className="quicklink link1" to="#">
                        {" "}
                        <span className="ql_caption">
                          {" "}
                          <span className="outer">
                            {" "}
                            <span className="inner">
                              <h2>
                                ${"{"}second.discount{"}"} % Off
                              </h2>{" "}
                            </span>{" "}
                          </span>
                        </span>{" "}
                        <span className="ql_top" /> <span className="ql_bottom" />
                      </Link>
                    </div>
                  </div>
                  <div className="test-area-info">
                    <ul
                      className="list-group list-group-flush text-center"
                      style={{ height: 91, padding: 0, marginTop: 10 }}
                    >
                      <li
                        className="list-group-item"
                        style={{ padding: 0, border: "none !important" }}
                      >
                        <p className="testpara">
                          ${"{"}second.descTest{"}"}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-info">
                    <ul
                      className="list-group list-group-flush text-center"
                      style={{ height: 91, padding: 0, textAlign: "left" }}
                    >
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Based on New Pattern
                          <img
                            alt=""
                            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/New.png"
                            style={{ marginTop: "-14px" }}
                          />
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Instant Activation
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Get All India Rank
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Instant Result with Solution
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-footer fix">
                    <ul className="pull-left" style={{ listStyle: "none" }}>
                      <li>
                        <span className="btn btn-sm btn-success subpackageprice">
                          Price: ₹ ${"{"}second.sellingPrice{"}"}
                        </span>
                      </li>
                    </ul>
                    <ul className="pull-right" style={{ listStyle: "none" }}>
                      <li>
                        <button
                          id="rzp-button1"
                          value="value"
                          className="btn btn-sm btn-success subpackagebuy"
                        >
                          BUY NOW
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="test-area-item">
              <div className="test-area-wrap">
                <div className="test-area-content">
                  <div className="conta">
                    <img
                      alt=""
                      src="#"
                      style={{ height: 187, width: "100%" }}
                    />
                    <div className="content" id="home_quicklinks">
                      <h1
                        style={{
                          color: "white",
                          fontSize: 25,
                          margin: "-39px 0px 10px 0px"
                        }}
                      >
                        Diamond Package
                      </h1>
                      <Link className="quicklink link1" to="#">
                        {" "}
                        <span className="ql_caption">
                          {" "}
                          <span className="outer">
                            {" "}
                            <span className="inner">
                              <h2>
                                ${"{"}PackageDetails.discount{"}"} % Off
                              </h2>{" "}
                            </span>{" "}
                          </span>
                        </span>{" "}
                        <span className="ql_top" /> <span className="ql_bottom" />
                      </Link>
                    </div>
                  </div>
                  <div className="test-area-info">
                    <ul
                      className="list-group list-group-flush text-center"
                      style={{ height: 91, padding: 0, marginTop: 10 }}
                    >
                      <li
                        className="list-group-item"
                        style={{ padding: 0, border: "none !important" }}
                      >
                        <p className="testpara">
                          ${"{"}PackageDetails.descTest{"}"}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-info">
                    <ul
                      className="list-group list-group-flush text-center"
                      style={{ height: 91, padding: 0, textAlign: "left" }}
                    >
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Based on New Pattern
                          <img
                            alt=""
                            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/New.png"
                            style={{ marginTop: "-14px" }}
                          />
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Instant Activation
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Get All India Rank
                        </p>
                      </li>
                      <li
                        className="list-group-item"
                        style={{
                          padding: 0,
                          border: "0px solid #ddd",
                          fontWeight: 500
                        }}
                      >
                        <p
                          style={{
                            fontSize: 13,
                            border: "none !important",
                            fontWeight: "bold",
                            lineHeight: 2.0
                          }}
                        >
                          {" "}
                          <i
                            className="fa fa-circle"
                            style={{ fontSize: "xx-small !important" }}
                          />{" "}
                          &nbsp; Instant Result with Solution
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-footer fix">
                    <ul className="pull-left" style={{ listStyle: "none" }}>
                      <li>
                        <span className="btn btn-sm btn-success subpackageprice">
                          Price: ₹ ${"{"}PackageDetails.sellingPrice{"}"}
                        </span>
                      </li>
                    </ul>
                    <ul className="pull-right" style={{ listStyle: "none" }}>
                      <li>
                        <button
                          id="rzp-button1"
                          value="value"
                          className="btn btn-sm btn-success subpackagebuy"
                        >
                          BUY NOW
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingLeft: 10 }}>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "white",
            boxShadow: "1px 1px 5px 3px whitesmoke",
            padding: 0
          }}
        >
          <div
            className="row"
            style={{ paddingLeft: "0px !important", paddingRight: 0, padding: 0 }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: 26,
                backgroundColor: "#f0ebeb"
              }}
            >
              <b>Package Features</b> <i className="fa fa-hand-o-down" />
            </h3>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="box-part text-center">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon25.png"
                  style={{ height: 95 }}
                  alt="Standard Exam Platform"
                />
                <div className="title">
                  <h4>Standard Exam Platform</h4>
                </div>
                <div className="text">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      <i className="fa fa-angle-right" /> Join the best online test
                      series
                    </li>
                    <li>
                      <i className="fa fa-angle-right" />
                      Test Series interface similar to the actual exam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="box-part text-center">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon26.png"
                  style={{ height: 95 }}
                  alt="Latest Pattern & Syllabus"
                />
                <div className="title">
                  <h4>Latest Pattern &amp; Syllabus</h4>
                </div>
                <div className="text">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      <i className="fa fa-angle-right" />
                      Test Series Based On Latest exam pattern
                    </li>
                    <li>
                      <i className="fa fa-angle-right" />
                      This online test series prepared by experts Team
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="box-part text-center">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon27.png"
                  style={{ height: 95 }}
                  alt="All India Rank"
                />
                <div className="title">
                  <h4>All India Rank</h4>
                </div>
                <div className="text">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      <i className="fa fa-angle-right" />
                      Check where are you standing?
                    </li>
                    <li>
                      <i className="fa fa-angle-right" />
                      Get the All India rank among thousand of students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="box-part text-center">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon28.png"
                  style={{ height: 95 }}
                  alt="Instant Result & Report"
                />
                <div className="title">
                  <h4>Instant Result &amp; Reports</h4>
                </div>
                <div className="text">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      <i className="fa fa-angle-right" />
                      Get instant result
                    </li>
                    <li>
                      <i className="fa fa-angle-right" />
                      Get detailed Reports as you finished the exam
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="box-part text-center">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon29.png"
                  style={{ height: 95 }}
                  alt="Performance Analysis"
                />
                <div className="title">
                  <h4>Performance Analysis</h4>
                </div>
                <div className="text">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      <i className="fa fa-angle-right" />
                      Detailed analysis of your performance
                    </li>
                    <li>
                      <i className="fa fa-angle-right" />
                      Like Score card,time management,question Reports
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
              <div className="box-part text-center">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon30.png"
                  style={{ height: 95 }}
                  alt="Self Analysis & Compare"
                />
                <div className="title">
                  <h4>Self Analysis &amp; Compare</h4>
                </div>
                <div className="text">
                  <ul style={{ textAlign: "justify" }}>
                    <li>
                      <i className="fa fa-angle-right" />
                      Get the detailed representation of your performance
                    </li>
                    <li>
                      <i className="fa fa-angle-right" />
                      compare with toppers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>&nbsp;</p>
      <div className="" style={{ paddingLeft: 10 }}>
        <div className="container-fluid" style={{ backgroundColor: "white", padding: 0 }}>
          <div className="row">
            <div className="col-sm-12" style={{}}>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: 26,
                  backgroundColor: "#f0ebeb"
                }}
              >
                <b>Exam Pattern</b> <i className="fa fa-hand-o-down" />
              </h3>
              <table
                id="table-coloumn"
                className="table table-bordered table-hover table-condensed table-striped exam_ptrn "
              >
                <tbody>
                  <tr>
                    <td valign="middle" align="center" className="coloumn-black">
                      Package Name
                    </td>
                    <td valign="middle" align="center" className="coloumn-black">
                      Subject Name
                    </td>
                    <td valign="middle" align="center" className="coloumn-black">
                      No. of Question
                    </td>
                    <td valign="middle" align="center" className="coloumn-black">
                      Marks (Max.)
                    </td>
                    <td valign="middle" align="center" className="coloumn-black">
                      Total Time
                    </td>
                  </tr>
                  <tr>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                      rowSpan={8}
                    >
                      JEE Mains
                    </td>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      <b id="sectionName1">Physics</b>
                    </td>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      30&nbsp;
                    </td>
                    <td
                      width="10%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      120.0&nbsp;
                    </td>
                    <td width="10%" className="coloumn-black" rowSpan={8}>
                      <span>180.0 &nbsp;min</span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      <b id="sectionName2">Chemistry</b>
                    </td>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      30 &nbsp;
                    </td>
                    <td
                      width="10%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      120.0
                    </td>
                  </tr>
                  <tr>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      <b id="sectionName3">Mathematics</b>
                    </td>
                    <td
                      width="15%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      30 &nbsp;
                    </td>
                    <td
                      width="10%"
                      valign="middle"
                      align="center"
                      className="coloumn-black"
                    >
                      120.0&nbsp;
                    </td>
                  </tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p>&nbsp;</p>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 5px 3px whitesmoke",
          padding: 0,
          marginBottom: 40
        }}
      >
        <div className="contentmatter">
          <div className="col-sm-12" style={{ padding: 0 }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: 26,
                backgroundColor: "#f0ebeb"
              }}
            >
              <b>Syllabus</b> <i className="fa fa-hand-o-down" />
            </h3>
            <p style={{ marginLeft: 19, marginTop: 18, marginBottom: 20 }} className={'fs-5'}>
              <strong className='fs-4 my-1' style={{color:'black'}} >Mathematics</strong>
              <br />
              Sets, relations and functions, Complex numbers and quadratic
              equations, Matrices and determinants, Mathematical reasoning,
              Mathematical induction, Permutations and combinations, Sequences and
              series, Limit, continuity and differentiability, Integral calculus,
              Differential equations, Binomial theorem and its simple applications,
              Three-dimensional geometry, Vector algebra, Co-ordinate geometry,
              Statistics and probability, Trigonometry
              <br />
              <strong className='fs-4 my-1' style={{color:'black'}}>Physics</strong>
              <br />
              <strong className='fs-4 my-1' style={{color:'black'}}>Section A :</strong> &nbsp;Physics and measurement,
              Kinematics, Thermodynamics, Work, energy and power, Rotational motion,
              Gravitation, Laws of motion, Properties of solids and liquids,
              Electronic devices, Kinetic theory of gases, Oscillations and waves,
              Communication systems, Current electricity, Magnetic effects of
              current and magnetism, Electromagnetic induction and alternating
              currents, Electromagnetic waves, Optics, Dual nature of matter and
              radiation, Electrostatics, Atoms and nuclei
              <br />
              <strong className='fs-4 my-1' style={{color:'black'}}>Section B: </strong>&nbsp;Experimental Skills&nbsp;Chemistry
              <br />
              <strong className='fs-4 my-1' style={{color:'black'}}>Physical Chemistry: </strong>&nbsp;Some basic concepts in
              chemistry, States of matter, Atomic structure, Chemical bonding and
              molecular structure, Chemical thermodynamics, Solutions, Equilibrium,
              Redox reactions and electrochemistry, Chemical kinetics, Surface
              chemistry
              <br />
              <strong className='fs-4 my-1' style={{color:'black'}}>Organic Chemistry: &nbsp;</strong> Purification and
              characterisation of organic compounds, Hydrocarbons, Chemistry in
              everyday life, Principles related to practical chemistry, Organic
              compounds containing halogens, Organic compounds containing oxygen,
              Organic compounds containing nitrogen, Polymers, Some basic principles
              of organic chemistry, Biomolecules
              <br />
              <strong className='fs-4 my-1' style={{color:'black'}}>Inorganic Chemistry</strong>
              <br />
              Classification of elements and periodicity in properties, Hydrogen,
              Block elements (alkali and alkaline earth metals), P Block elements
              group 13 to group 18 elements, d- and f - block elements,
              Co-ordination compounds, Environmental chemistry, General principles
              and processes of isolation of metals
            </p>
          </div>
        </div>
      </div>
      <Footer/>
      <Link
        href="#"
        className="scroll_top"
        title="Scroll to Top"
        style={{ display: "inline" }}
      >
        Scroll
      </Link>
    </>
    )}