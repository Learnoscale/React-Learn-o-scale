import React from 'react'
import { Link } from 'react-router-dom'

import './AiimsTest.css'

 export default function AiimsTest() {
   

    return(
      <>
      <section
        className="banner-area relative about-banner b-opacity showshopstyle7"
        id="home"
      >
        <div className="overlay overlay-bg" />
        <div className="container-fluid">
          <div className="align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white" id="pname">
                AIIMS Online Test Series
              </h1>
              <p className="text-white link-nav">
                <Link to={"/"}>Home </Link> <span className="fa fa-arrow-right" />{" "}
                <Link to={" "}>Package Details</Link>
              </p>
              <p
                className="text-white link-nav"
                style={{
                  paddingTop: 40,
                  fontWeight: 800,
                  fontSize: "x-large",
                  color: "deepskyblue"
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className="container-fluid"
        style={{
          boxShadow: "1px 2px 3px 2px #cdc6c6",
          marginTop: 10,
          marginBottom: 30
        }}
      >
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="col-sm-12 col-md-5 col-xs-12 col-lg-5">
            <img
              className="img-responsive"
              src="https://soe-buck-lb.storage.googleapis.com/tempFile/AIIMS.png"
              style={{ marginTop: "3%", width: "100%" }}
              alt="Online Exam"
              title="Online Exam"
            />
          </div>
          <div className="col-sm-12 col-md-7 col-xs-12 col-lg-7">
            <h3 className="mainhead">AIIMS Online Test Series</h3>
            <h3 style={{ fontSize: 22, lineHeight: 2 }}>
              <u>
                <b>About :</b>
              </u>
            </h3>
            <p className="showshopstyle5">
              AIIMs is a national level undergraduate medical entrance exam
              conducted by the Aiims Institute of Medical Sciences. AIIMS campuses
              located at Bhopal, Bhubaneswar, Jodhpur, Patna, Raipur and etc. AIIMS
              has constantly been ranked at the top as compare to other medical
              colleges of the country. The (AIIMS) medical science is mainly
              approached because aiims witness patients from different locations
              around in the world. AIIMs is globally renowned and recognized for its
              technology driven approach. This makes AIIMS is the dream college for
              all the medical aspirants of the country. The institute was
              established in 1956 in Delhi and now it runs in seven more locations
              across the country namely Rishikesh, Jodhpur, Bhubaneshwar, Jhajjar,
              Patna, Raipur and Bhopal. AIIMS offers different- different
              best-in-class medical graduation and post-graduation courses. The
              AIIMS exam will be conducted through CBT (computer based test) in
              different-different cities.
            </p>
          </div>
          <p>&nbsp;</p>
          <table className="table table-bordered table-hover"></table>
          <p>&nbsp;</p>
          <table className="table table-bordered table-hover"></table>
          <p>&nbsp;</p>
          <table className="table table-bordered table-hover"></table>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "2%", marginBottom: 20 }}>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="test-area-item">
              <div className="test-area-wrap">
                <div className="test-area-content">
                  <div className="conta">
                    <img
                      src="https://soe-buck-lb.storage.googleapis.com/tempFile/AIIMS.png"
                      className="showshopstyle3"
                      alt="packae img"
                      title="Online Exam"
                    />
                    <div className="content" id="home_quicklinks">
                      <h1 className="headingstyle">Titanium Package</h1>
                      <a href="d" className="quicklink link1" aria-label="Discount">
                        <span className="ql_caption">
                          {" "}
                          <span className="outer">
                            {" "}
                            <span className="inner">
                              <h4 style={{ marginBottom: 5 }}>
                                <s>65000.0</s>
                              </h4>
                              <h2 style={{ fontSize: 18 }}>61.0 %</h2>{" "}
                            </span>
                          </span>
                        </span>{" "}
                        <span className="ql_top" /> <span className="ql_bottom" />
                      </a>
                    </div>
                  </div>
                  <div className="test-area-info">
                    <ul className="list-group list-group-flush text-center showshopstyle2">
                      <li className="list-group-item showshopstyle4">
                        <p className="testpara showshopstyle13" />
                        <p>5 Major Tests</p>
                        <p>As per latest exam pattern.</p>
                        <p />
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-info">
                    <ul className="list-group list-group-flush text-center showshopstyle">
                      <li className="list-group-item showshopstype1">
                        <p>
                          <i className="fa fa-circle" /> &nbsp; Based on New Pattern{" "}
                          <img
                            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/New.png"
                            style={{ marginTop: "-14px" }}
                            alt="newimg"
                            title="Online Exam"
                          />
                        </p>
                      </li>
                      <li className="list-group-item showshopstype1">
                        <p>
                          <i className="fa fa-circle" /> &nbsp; Instant Activation
                        </p>
                      </li>
                      <li className="list-group-item showshopstype1">
                        <p>
                          <i className="fa fa-circle" /> &nbsp; Get All India Rank
                        </p>
                      </li>
                      <li className="list-group-item showshopstype1">
                        <p>
                          <i className="fa fa-circle" /> &nbsp; Instant Result with
                          Solution
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="test-area-footer fix">
                    <ul className="pull-left" style={{ listStyle: "none" }}>
                      <li>
                        <span className="btn btn-sm btn-success subpackageprice">
                          Price: ₹ 25000.0
                        </span>
                      </li>
                    </ul>
                    <ul className="pull-right" style={{ listStyle: "none" }}>
                      <font color="red" className="showshopstyle8">
                        Out of Stock
                      </font>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ marginTop: "2%", marginBottom: 20 }}>
        <div className="row"></div>
      </div>
      <div
        className="modal fade"
        id="buymyModal"
        role="dialog"
        style={{ zIndex: "9999 !Important" }}
      >
        <div className="modal-dialog" style={{ maxWidth: "900px !important" }}>
          {/* Modal content*/}
          <div className="modal-content">
            <div
              className="modal-header"
              style={{
                borderBottom: "none !important",
                background: "#eeeeee3d",
                padding: "15px !important"
              }}
            >
              <span className="col-md-12" style={{ padding: "0px !important" }}>
                {" "}
                <img
                  src="/static/front-end/main/images/paypalbanner.png"
                  alt="paypal"
                  className=""
                  style={{ width: "100%" }}
                />
              </span>
              {/* <button class="close" data-dismiss="modal"
          style="position: relative; margin-top: -65PX;">×</button> */}
            </div>
            <div
              className="modal-body"
              style={{ textAlign: "center", background: "#eeeeee3d" }}
            >
              <h4 className="modal-title paymenttitle" style={{}} id="mpname">
                <br />
              </h4>
              <span
                className="col-md-12"
                style={{ padding: 5 }}
                htmlFor="radio1"
                id="rad11"
              >
                <label
                  className="form-check-label"
                  style={{
                    width: "50%",
                    boxShadow: "1px 1px 1px 1px #eee",
                    display: "inline-flex",
                    background: "white",
                    padding: 8,
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio11"
                    name="optradio"
                    defaultValue=""
                    defaultChecked=""
                    style={{ marginTop: "7%", marginLeft: 10 }}
                  />
                  &nbsp;{" "}
                  <img
                    alt="logo"
                    className="logo1"
                    src="/static/front-end/main/images/pay.png"
                    style={{ padding: 8, display: "block", width: 120 }}
                  />
                </label>
              </span>
              <span
                className="col-md-12"
                style={{ padding: 5 }}
                htmlFor="radio1"
                id="rad1"
              >
                {" "}
                <input type="hidden" id="buyval" defaultValue="" />{" "}
                <label
                  className="form-check-label"
                  style={{
                    width: "50%",
                    boxShadow: "1px 1px 1px 1px #eee",
                    display: "inline-flex",
                    background: "white",
                    padding: 8,
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    id="radio1"
                    name="optradio"
                    defaultValue=""
                    style={{ marginTop: "7%", marginLeft: 10 }}
                  />
                  &nbsp;{" "}
                  <img
                    alt="logo"
                    className="logo1"
                    src="/static/front-end/main/images/raz.png"
                    style={{ padding: 8, display: "block", width: 120 }}
                  />
                </label>
              </span>{" "}
              <span
                className="col-md-12"
                style={{ padding: 5 }}
                htmlFor="radio2"
                id="rad2"
              >
                {" "}
                <label
                  className="form-check-label"
                  style={{
                    width: "50%",
                    boxShadow: "1px 1px 1px 1px #eee",
                    display: "inline-flex",
                    background: "white",
                    padding: 4,
                    marginTop: 11,
                    cursor: "pointer"
                  }}
                >
                  <input
                    type="radio"
                    className="form-check-input"
                    id="rad"
                    name="optradio"
                    defaultValue=""
                    style={{ marginTop: "7%", marginLeft: 10 }}
                  />
                  &nbsp;{" "}
                  <img
                    alt="logo"
                    className="logo1"
                    src="/static/front-end/main/images/paypal.png"
                    style={{ padding: 8, display: "block", width: 120 }}
                  />
                </label>
              </span>
            </div>
            <div
              className="modal-footer"
              style={{
                textAlign: "center",
                borderTop: "none !important",
                background: "#eeeeee3d",
                paddingBottom: "15px !important"
              }}
            >
              <button
                type="button"
                className="btn "
                id="paypal-button-container-fluid"
                style={{
                  textAlign: "center",
                  width: "50%",
                  fontSize: 21,
                  fontWeight: "bold",
                  fontFamily: "serif",
                  padding: 3,
                  marginBottom: 20,
                  marginTop: 14,
                  margin: "17px auto",
                  height: 39,
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                  display: "none"
                }}
                onclick="paypal()"
              >
                <img
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                  alt="Buy now with PayPal"
                  style={{
                    visibility: "visible",
                    position: "relative",
                    height: 39,
                    minWidth: "100%"
                  }}
                />
              </button>
              <span id="emailadd" style={{ display: "none" }}>
                <h4 style={{ color: "#ff7227", fontWeight: "bold" }}>
                  UPDATE YOUR EMAIL
                </h4>
                <p
                  style={{
                    marginBottom: "20px !important",
                    width: "60%",
                    margin: "0 auto"
                  }}
                >
                  Please update your email address to complete this transaction From
                  PayPal
                </p>{" "}
                <input
                  id="enemail"
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                  style={{ margin: "0 auto", width: "50%" }}
                />
                <p
                  style={{
                    marginBottom: "10px !important",
                    marginTop: "20px !important",
                    width: "60%",
                    margin: "0 auto",
                    color: "red"
                  }}
                >
                  **If you don't want to update your Email then try another payment
                  method
                </p>{" "}
                <input
                  type="button"
                  className="btn btn-sm btn-success"
                  id="enemailclick"
                  style={{
                    padding: 10,
                    color: "white",
                    background: "#ff7227",
                    border: "2px solid #ff7227",
                    marginBottom: 10
                  }}
                  defaultValue="Update
                  Email"
                />
              </span>
              <button
                type="button"
                className="btn "
                data-dismiss="modal"
                id="razid"
                style={{
                  display: "none",
                  textAlign: "center",
                  width: "50%",
                  fontSize: 21,
                  fontWeight: "bold",
                  fontFamily: "serif",
                  padding: 3,
                  marginBottom: 20,
                  marginTop: 14,
                  margin: "17px auto",
                  height: 39,
                  backgroundColor: "rgb(53, 58, 122)",
                  borderColor: "rgb(53, 58, 122)"
                }}
              >
                <img
                  src="/static/front-end/main/images/razpay.png"
                  alt="rz"
                  className=""
                  style={{
                    visibility: "visible",
                    position: "relative",
                    height: 28
                  }}
                />
              </button>
              <button
                type="button"
                className="btn "
                data-dismiss="modal"
                id="payid"
                style={{
                  textAlign: "center",
                  width: "50%",
                  fontSize: 21,
                  fontWeight: "bold",
                  fontFamily: "serif",
                  padding: 3,
                  marginBottom: 20,
                  marginTop: 14,
                  margin: "17px auto",
                  height: 39,
                  backgroundColor: "rgb(53, 58, 122)",
                  borderColor: "rgb(53, 58, 122)"
                }}
              >
                <img
                  src="/static/front-end/main/images/pay.png"
                  alt="rz"
                  className=""
                  style={{
                    visibility: "visible",
                    position: "relative",
                    height: 28
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid contentmatter">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="showshopstyle10">
              <b>Syllabus</b> <i className="fa fa-hand-o-down" />
            </h3>
            <hr />
            <p>
              <strong>Biology :</strong>
            </p>
            <p>
              <strong>Zoology</strong> :&nbsp;Anatomy and Physiology, Developmental
              Biology, Diversity of Animal Life, Genetics and Evolution
              (Fundamentals only): (symbiosis), Histology and Reproductive System.
            </p>
            <p>
              <strong>Botany</strong> :&nbsp;Absorption and cell water relations,
              transport of water and minerals, Anatomy and Physiology of Plants:
              Meristems-Plant growth and development, Botany and Human Welfare,
              History, Importance, Factors and mechanism, Internal and external
              regulators of growth and development in plants, Internal structure of
              dicot and monocot leaves photosynthesis., Internal structure of dicot
              and monocot roots, Internal structure of stem and secondary growth,
              Transpiration and respiration, Tropic and turgor movements and Xylem
              and Phloem-their cell elements and functions.
            </p>
            <p>
              <strong>Physics :</strong>
            </p>
            <p>
              Circular Motion, Electricity, Electro-Magnetic Induction, Electronic
              Devices, Kinetic Theory of Gases, Measurement, Motion, Nuclear
              Physics, Physics of the Atom: Thermodynamics: Work and heat, first law
              of Thermodynamics., Solids and Wave Motion: Optics.
            </p>
            <p>
              <strong>
                <strong>Chemistry :</strong>
              </strong>
            </p>
            <p>
              Solid State, Solutions, Electrochemistry, Chemical Kinetics, Surface
              Chemistry, General Principles and Processes of Isolation of Elements,
              p- Block Elements, d and f Block Elements, Co-ordination Compounds,
              Haloalkanes and Haloarenes, Alcohols, Phenols and Ethers, Aldehydes,
              Ketones and Carboxylic Acids, Organic Compounds Containing Nitrogen,
              Biomolecules, Polymers and Chemistry in Everyday Life.
            </p>
            <p>
              <strong>
                <strong>General Knowledge :</strong>
              </strong>
            </p>
            <p>
              Current Affairs, Business, Punch line of companies, Top officials of
              big companies, Major corporate events, Famous award and prizes, World
              Records, Books and authors, Science, History, etc.
            </p>
            <p>&nbsp;</p>
            <p>
              <strong>Guidelines for AIIMS MBBS Entrance Exam 2018</strong>
            </p>
            <p>
              Here are few guidelines for the candidates who will be appearing
              for&nbsp;AIIMS MBBS 2018&nbsp;examination. Candidates are advised to
              read the following guidelines carefully:
            </p>
            <ul>
              <li>
                Candidates should carry admit card, ID proofs and one photograph to
                appear in the examination. No candidate will be allowed to enter the
                examination hall without a valid admit card and ID proof.
              </li>
              <li>
                <p>
                  Candidates are advised to reach the examination centre at least 30
                  minutes before the exam time depending on the slot they have been
                  allotted. Candidates will be subject to various mandatory
                  pre-examination activities such as biometric capture, photo
                  capture etc.
                </p>
              </li>
              <li>
                <p>
                  Candidates should not carry wristwatches, cell phones, calculator
                  or any kind of electronic gadgets, Bluetooth devices etc. with
                  them in the examination hall.
                </p>
              </li>
              <li>
                <p>
                  If any changes need to be made to address, mobile number or Email
                  ID, it should be promptly reported to the Assistant Controller
                  (Examinations), AIIMS, New Delhi.
                </p>
              </li>
              <li>
                <p>
                  Candidates should not bring pen/pencil to the examination hall.
                  Pen will be provided by the examination authority at the
                  examination centre for completing examination formalities and
                  rough work (if any).
                </p>
              </li>
              <li>
                <p>
                  If a candidate is found to be copying/conversing with other
                  candidates, he/she will be disqualified from taking that
                  examination and the next one or two such examinations according to
                  the nature of the offense.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid contentmatter">
        <div className="row">
          <div
            className="col-xs-12"
            style={{ background: "#fff", marginBottom: 20 }}
          >
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-9">
                  <hr />
                  <div className="review-block"></div>
                </div>
              </div>
              <form id="feedback" action="/category/feedback" method="post">
                <br />
                <br />
                <p style={{ fontSize: 18 }}>
                  <b>Give Your Review *</b>
                </p>
                <input
                  id="packageId"
                  name="packageId"
                  defaultValue={13}
                  type="hidden"
                />
                <input id="id" name="id" defaultValue={16} type="hidden" />
                <input
                  id="constructedUrl"
                  name="constructedUrl"
                  defaultValue="aiims-mbbs"
                  type="hidden"
                />
                <p>Have you used this product? Rate it now.</p>
                <div className="stars rtstar" style={{}}>
                  <input
                    id="star-1"
                    name="experience"
                    className="star-1"
                    type="radio"
                    defaultValue={1}
                  />
                  <label
                    className="star-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Poor"
                    style={{ textDecoration: "none" }}
                    htmlFor="star-1"
                  >
                    1
                  </label>
                  <input
                    id="star-2"
                    name="experience"
                    className="star-2"
                    type="radio"
                    defaultValue={2}
                  />
                  <label
                    className="star-2"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Fair "
                    style={{ textDecoration: "none" }}
                    htmlFor="star-2"
                  >
                    2
                  </label>
                  <input
                    id="star-3"
                    name="experience"
                    className="star-3"
                    type="radio"
                    defaultValue={3}
                  />
                  <label
                    className="star-3"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Good"
                    style={{ textDecoration: "none" }}
                    htmlFor="star-3"
                  >
                    3
                  </label>
                  <input
                    id="star-4"
                    name="experience"
                    className="star-4"
                    type="radio"
                    defaultValue={4}
                  />
                  <label
                    className="star-4"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Very Good"
                    style={{ textDecoration: "none" }}
                    htmlFor="star-4"
                  >
                    4
                  </label>
                  <input
                    id="star-5"
                    name="experience"
                    className="star-5"
                    type="radio"
                    defaultValue={5}
                  />
                  <label
                    className="star-5"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Excellent"
                    style={{ textDecoration: "none" }}
                    htmlFor="star-5"
                  >
                    5
                  </label>
                  <span />
                </div>
                <br />
                <br />
                <div className="form-horizontal">
                  <div className="form-group">
                    <label className="control-label col-xs-2" htmlFor="text">
                      Name
                    </label>
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xs-9">
                      <input
                        id="name"
                        name="name"
                        placeholder="Name"
                        type="text"
                        className="form-control"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-xs-2" htmlFor="requirement">
                      Message
                    </label>
                    <div className="col-sm-12 col-md-9 col-lg-9 col-xs-9">
                      <textarea
                        id="comments"
                        name="comments"
                        placeholder="Enter Your Message"
                        className="form-control"
                        required="required"
                        rows={2}
                        cols={5}
                        defaultValue={""}
                      />
                      <br />
                      <button
                        className="btn btn-default"
                        name="Save"
                        value="Save"
                        aria-hidden="true"
                      >
                        Submit
                      </button>
                      <button
                        type="submit"
                        className="btn btn-default"
                        aria-hidden="true"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="hidden"
                    name="_csrf"
                    defaultValue="071c0a83-6ea9-4b78-895e-217d907e77a4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    
    )
 }