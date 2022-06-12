import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import {Footer} from '../Footer'
import './DelhiPolice.css'
import './demopage.css'
import './smartcontent.css'
import './showshop.css'

 export default function AsmPsycho() {
   

    return(
      <>
      <Menu/>
  <section
    className="banner-area relative about-banner b-opacity showshopstyle7"
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
          <h1 className="text-white" id="pname">
            ASM Psycho Online Test Series
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
      marginBottom: 15
    }}
  >
    <div className="row">
      <div className=" col-md-5">
        <img
          className="img-responsive"
          src="https://soe-buck-lb.storage.googleapis.com/tempFile/ASM Psycho.png"
          style={{ marginTop: "3%", width: "100%" }}
          alt="Online Exam"
          title="Online Exam"
        />
      </div>
      <div className="col-md-7 mt-3">
        <h3 className="mainhead">ASM Psycho Online Test Series</h3>
        <h3 style={{ fontSize: 22, lineHeight: 2 }}>
          <u>
            <b>About :</b>
          </u>
        </h3>
        <p className="showshopstyle5">
          मनोवैज्ञानिक अभिवृत्ति परीक्षा (NTPC/ DFCCIL/ GDCE Psycho Test Series)
          का मुख्य उद्देश्य है सबसे उपयुक्त अभ्यार्थियों का चयन करना व उनकी
          क्षमता का आकलन करना। RRB NTPC Stage 3 परीक्षा Station Master और
          Traffic Assistant की पोस्ट के लिए होती है। NTPC ASM Online Psycho Mock
          Test में 5 प्रकार के परीक्षण होते है जिसमें कुल लगभग 165 प्रश्न होते
          है व जिनको हल करने की लिए मात्र 48 मिनट का समय मिलते है। • वर्गिकरण/
          बुद्धि परीक्षण (Classification/ Intelligence Test /Odd One Out) •
          निर्देश क्रम परीक्षण (Information Ordering Test) • संक्षिप्त रास्ता
          खोज / स्थानिक क्षमता परीक्षण (Shortest Possible Route Test / Spatial
          Scanning Test) • चयनात्मक ध्यान / विषम संख्याओं का योग परीक्षण
          (Selective Attention / Add of Odd Number Test) • व्यक्तित्व / अभिरुचि
          परीक्षण (Personality / Aptitude Test) इन सभी परीक्षणों के द्वारा
          योग्यतम अभ्यार्थियों का चयन संभव है क्योंकि इन परीक्षणों के द्वारा
          अभ्यार्थियों की शक्तियों एवं कमजोरियों का निष्पक्ष मूल्यांकन किया जा
          सकता है। इन परीक्षणों में सफलता पाने की लिए सतत अभ्यास करने की
          आवश्यकता है। Railway Psycho Test for SM/ TA में कम समय में
          अधिक-से-अधिक प्रश्नों को हल करने से ही आप सफल हो सकते है। NTPC Online
          Psycho Mock Test में नकारात्मक अंक नहीं कटते है। NTPC SM/ TA Psycho
          Test Series एक Computer Based (Online) (CBT) परीक्षा है। NTPC Psycho
          Test का आयोजन RDSO करवाता है इसलिए इसे RDSO Online Psycho Test या RDSO
          Online Aptitude Test भी कहते है। Station Master Online Psycho Mock
          Test में आप किसी भी परीक्षण का समय पूरा होने के बाद उस में वापिस से
          नहीं जा सकते है। NTPC Aptitude Test में आप के 6 स्कोर कार्ड बनेंगे।
          व्यक्तित्व / अभिरुचि परीक्षण (Personality / Aptitude Test) के 2 स्कोर
          कार्ड बनेंगे व बाकी चार परीक्षणों के एक-एक स्कोर कार्ड बनेंगे।{" "}
        </p>
      </div>
      
      <table className="table table-bordered table-hover">
        <tbody>
          <tr style={{ background: "#edf9f6" }}>
            <th className="showshopstyle6" style={{width: "20%"}} >
              SN
            </th>
            <th className="showshopstyle6" style={{width: "20%"}} >
              SN
            </th>
            <th className="showshopstyle6" style={{width: "20%"}} >
              SN
            </th>
            <th className="showshopstyle6" style={{width: "30%"}}scope='col'>
              Test Name
            </th>
            <th className="showshopstyle6" style={{width: "30%"}}scope='col'>
              Test Name
            </th>
            <th className="showshopstyle6" style={{width: "30%"}}scope='col'>
              Test Name
            </th>
            <th className="showshopstyle6" style={{width: "50%"}}>
              Action
            </th>
          </tr>
          <tr>
            <td className="showshopstyle6">1</td>
            <td className="showshopstyle6">1</td>
            <td className="showshopstyle6">1</td>
            <td>ASM Psycho Booster 01</td>
            <td>ASM Psycho Booster 01</td>
            <td>ASM Psycho Booster 01</td>
            <td >
              <Link
                to={" "}
                aria-label="Start Test"
                className=""
                
              >
              START TEST
             </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="container-fluid" style={{ marginTop: "2%", marginBottom: 20 }}>
    <div className="row">
      <div className="col-md-3">
        <div className="test-area-item">
          <div className="test-area-wrap">
            <div className="test-area-content">
              <div className="conta">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/tempFile/ASM Psycho.png"
                  className="showshopstyle3"
                  alt="packae img"
                  title="Online Exam"
                />
                <div className="content" id="home_quicklinks">
                  <h1 className="headingstyle">Titanium Package</h1>
                  <a href="ff" className="quicklink link1" aria-label="Discount">
                    <span className="ql_caption">
                      {" "}
                      <span className="outer">
                        {" "}
                        <span className="inner">
                          <h4 style={{ marginBottom: 5 }}>
                            <s>3500.0</s>
                          </h4>
                          <h2 style={{ fontSize: 18 }}>57.0 %</h2>{" "}
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
                    <p>
                      <strong>10 Days </strong>Online Interactive Live Classes
                      with real-time Practice
                    </p>
                    <p>
                      <strong>40 Full NEW Mock Tests&nbsp;</strong>
                    </p>
                    <p>RDSO Based New Exam Pattern</p>
                    <p>
                      Medium -<strong> Hindi &amp; English</strong>
                    </p>
                    <p>
                      <strong>02&nbsp;Attempt </strong>of Tests &amp; Valid for
                      <strong> 06 Months</strong>
                    </p>
                    <p>
                      For{" "}
                      <strong>
                        NTPC CBAT 3, GDCE, DFCCIL &amp;&nbsp;Metro
                      </strong>{" "}
                      Psycho Exam
                    </p>
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
                      Price: ₹ 1500.0
                    </span>
                  </li>
                </ul>
                <ul className="pull-right" style={{ listStyle: "none" }}>
                  <li>
                    <button
                      id="buynow"
                      value="4,81,1"
                      className="btn btn-sm btn-success subpackagebuy"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#buymyModal"
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
      <div className="col-md-3">
        <div className="test-area-item">
          <div className="test-area-wrap">
            <div className="test-area-content">
              <div className="conta">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/tempFile/ASM Psycho.png"
                  className="showshopstyle3"
                  alt="packae img"
                  title="Online Exam"
                />
                <div className="content" id="home_quicklinks">
                  <h1 className="headingstyle">Diamond Package</h1>
                  <a className="quicklink link1" href="ss" aria-label="Discount">
                    <span className="ql_caption">
                      {" "}
                      <span className="outer">
                        <span className="inner">
                          <h4 style={{ marginBottom: 5 }}>
                            <s>3000.0</s>
                          </h4>
                          <h2 style={{ fontSize: 18 }}>63.0 %</h2>{" "}
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
                    <p>
                      <strong>10 Days </strong>Online Live Classes
                    </p>
                    <p>
                      <strong>40 Full NEW Mock Tests&nbsp;</strong>
                    </p>
                    <p>RDSO Based New Exam Pattern</p>
                    <p>
                      Medium -<strong> Hindi &amp; English</strong>
                    </p>
                    <p>
                      <strong>02&nbsp;Attempt </strong>of Tests &amp; Valid for
                      <strong> 06 Months</strong>
                    </p>
                    <p>
                      For{" "}
                      <strong>
                        NTPC CBAT 3, GDCE, DFCCIL &amp;&nbsp;Metro
                      </strong>{" "}
                      Psycho Exam<strong>&nbsp;</strong>
                    </p>
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
                      Price: ₹ 1100.0
                    </span>
                  </li>
                </ul>
                <ul className="pull-right" style={{ listStyle: "none" }}>
                  <li>
                    <button
                      id="buynow"
                      value="35,81,0"
                      className="btn btn-sm btn-success subpackagebuy"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#buymyModal"
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
      <div className="col-md-3">
        <div className="test-area-item">
          <div className="test-area-wrap">
            <div className="test-area-content">
              <div className="conta">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/tempFile/ASM Psycho.png"
                  className="showshopstyle3"
                  alt="packae img"
                  title="Online Exam"
                />
                <div className="content" id="home_quicklinks">
                  <h1 className="headingstyle">Gold Package</h1>
                  <a className="quicklink link1" href="ss" aria-label="Discount">
                    <span className="ql_caption">
                      {" "}
                      <span className="outer">
                        <span className="inner">
                          <h4 style={{ marginBottom: 5 }}>
                            <s>2500.0</s>
                          </h4>
                          <h2 style={{ fontSize: 18 }}>68.0 %</h2>{" "}
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
                    <p>
                      <strong>06 Recorded Video&nbsp;</strong>Classes
                    </p>
                    <p>
                      <strong>40 Full NEW Mock Tests&nbsp;</strong>
                    </p>
                    <p>RDSO Based New Exam Pattern</p>
                    <p>
                      Medium -<strong> Hindi &amp; English</strong>
                    </p>
                    <p>
                      <strong>02&nbsp;Attempt </strong>of Tests &amp; Valid for
                      <strong> 06 Months</strong>
                    </p>
                    <p>
                      For{" "}
                      <strong>
                        NTPC CBAT 3, GDCE, DFCCIL &amp;&nbsp;Metro
                      </strong>{" "}
                      Psycho Exam
                    </p>
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
                      Price: ₹ 800.0
                    </span>
                  </li>
                </ul>
                <ul className="pull-right" style={{ listStyle: "none" }}>
                  <li>
                    <button
                      id="buynow"
                      value="8,81,0"
                      className="btn btn-sm btn-success subpackagebuy"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#buymyModal"
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
      <div className="col-md-3">
        <div className="test-area-item">
          <div className="test-area-wrap">
            <div className="test-area-content">
              <div className="conta">
                <img
                  src="https://soe-buck-lb.storage.googleapis.com/tempFile/ASM Psycho.png"
                  className="showshopstyle3"
                  alt="packae img"
                  title="Online Exam"
                />
                <div className="content" id="home_quicklinks">
                  <h1 className="headingstyle">Silver Package</h1>
                  <a className="quicklink link1" href="ff" aria-label="Discount">
                    <span className="ql_caption">
                      {" "}
                      <span className="outer">
                        <span className="inner">
                          <h4 style={{ marginBottom: 5 }}>
                            <s>2000.0</s>
                          </h4>
                          <h2 style={{ fontSize: 18 }}>70.0 %</h2>{" "}
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
                    <p>
                      <strong>40 Full NEW Mock Tests&nbsp;</strong>
                    </p>
                    <p>RDSO Based New Exam Pattern</p>
                    <p>
                      Medium -<strong> Hindi &amp; English</strong>
                    </p>
                    <p>
                      <strong>02&nbsp;Attempt </strong>of Tests &amp; Valid for
                      <strong> 06 Months</strong>
                    </p>
                    <p>
                      For{" "}
                      <strong>
                        NTPC CBAT 3, GDCE, DFCCIL &amp;&nbsp;Metro
                      </strong>{" "}
                      Psycho Exam
                    </p>
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
                        // style={{ marginTop: "-14px" }}
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
                      Price: ₹ 600.0
                    </span>
                  </li>
                </ul>
                <ul className="pull-right" style={{ listStyle: "none" }}>
                  <li>
                    <button
                      id="buynow"
                      value="7,81,0"
                      className="btn btn-sm btn-success subpackagebuy"
                      aria-hidden="true"
                      data-toggle="modal"
                      data-target="#buymyModal"
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
          {/* <button className="close" data-dismiss="modal"
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
                alt="j"
                className="logo1"
                src="/static/front-end/main/images/pay.png"
                style={{ padding: 8, display: "none", width: 120 }}
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
                alt="g"
                className="logo1"
                src="/static/front-end/main/images/raz.png"
                style={{ padding: 8, display: "none", width: 120 }}
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
                alt="h"
                className="logo1"
                src="/static/front-end/main/images/paypal.png"
                style={{ padding: 8, display: "none", width: 120 }}
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
            id="paypal-button-container"
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
      <div className="col-md-12 col-sm-12 col-xs-12">
        <h3 className="showshopstyle10">
          <b>Training Partner</b>
        </h3>
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
          भारत की सर्वश्रेष्ठ रेलवे Station Master Online Psycho Test Series
          RDSO के नवीनतम परीक्षा पैटर्न अनुसार।&nbsp;Best Railway SM / TA Psycho
          (CBT-3) Online Test as per RDSO Latest Real exam Battery pattern its
          also known NTPC ASM&nbsp;Psycho Test.
        </p>
        <ul>
          <li>
            As per <strong>new Syllabus and new Exam Pattern</strong>&nbsp;of
            NTPC Station Master (SM) &amp; Traffic Assistant (TA),&nbsp;
            GDCE,&nbsp;DFCCIL (Executive {"{"}Operations &amp; BD{"}"}
            &nbsp;&amp;&nbsp;Metro Psycho Test.&nbsp;
          </li>
          <li>
            <p>
              <strong>
                DFCCIL Psycho (CBAT) Operations and BD 2021 Mock Test
              </strong>
            </p>
          </li>
          <li>Covered under mention Topics/ Sections in this package.</li>
        </ul>
        <p>
          <strong>
            Classification Test. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Question - 35 &nbsp;
            &nbsp; &nbsp; Time - 10 Min. &nbsp; &nbsp; &nbsp;Inst. Time - 03 Min
            &nbsp; Break Time - 01 min
          </strong>
        </p>
        <p>
          <strong>
            Add of Odd Numbers Test. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            Question - 30 &nbsp; &nbsp; &nbsp; Time - 08 Min. &nbsp;
            &nbsp;&nbsp;Inst. Time - 03 Min &nbsp;&nbsp;Break Time - 01 min
          </strong>
        </p>
        <p>
          <strong>
            Spatial Scanning Test. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;Question - 40 &nbsp; &nbsp; &nbsp; Time -
            08 Min. &nbsp; &nbsp;&nbsp;Inst. Time - 03 Min &nbsp;&nbsp;Break
            Time - 01 min
          </strong>
        </p>
        <p>
          <strong>
            Information Ordering Test. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp;&nbsp;Question - 25 &nbsp; &nbsp; &nbsp; Time - 10 Min. &nbsp;
            &nbsp; &nbsp;Inst. Time - 03 Min &nbsp;&nbsp;Break Time - 01 min
          </strong>
        </p>
        <p>
          <strong>
            Aptitude Test/ intelligence test. &nbsp; &nbsp; &nbsp;Question - 35
            &nbsp; &nbsp; &nbsp; Time - 12 Min. &nbsp; &nbsp; &nbsp;Inst. Time -
            03 Min &nbsp;&nbsp;Break Time - 01 min
          </strong>
        </p>
        <ul>
          <li>
            <strong>165 Questions</strong>&nbsp;in each test.
          </li>
          <li>
            Test in Both language&nbsp;<strong>(Hindi &amp; English)</strong>
          </li>
          <li>Solutions not available only Right Answer Available.</li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <strong>वर्गिकरण/ </strong>
          <strong>बुद्धि परीक्षण (Classification/</strong>
          <strong> Intelligence Test /Odd One Out)</strong>
        </p>
        <p>
          इस परीक्षण में 35 प्रश्न आते हैं तथा इनको हल करने के लिए 10 मिनट का
          समय मिलता है।
        </p>
        <p>
          आप को यहाँ प्रत्येक प्रश्न का उत्तर देने के लिए लगभग 17 सेकंड का समय
          मिलेगा इसलिए ज्यादा से ज्यादा अभ्यास करें व अपने दिमाग को एकाग्रचित्त
          रखें।&nbsp; &nbsp;&nbsp;
        </p>
        <p>
          प्रत्येक प्रश्न में 5 आकृतियाँ होगी जिनमें से 4 आकृतियाँ किसी रूप या
          प्रकार से समान होगी, जबकि शेष 1 आकृति भिन्न होगी जो की आप का उस प्रश्न
          का उत्तर होगा।
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>निर्देश क्रम परीक्षण </strong>
          <strong>(Information Ordering Test)</strong>
        </p>
        <p>
          यह दिये हुए निर्देशों के अनुसार कार्य करने की योग्यता का परीक्षण है।
        </p>
        <p>
          इस परीक्षण में 25 प्रश्न आते हैं तथा इनको हल करने के लिए 10 मिनट का
          समय मिलता है।
        </p>
        <p>
          आप को यहाँ प्रत्येक प्रश्न का उत्तर देने के लिए लगभग 24 सेकंड का समय
          मिलेगा इसलिए ज्यादा से ज्यादा अभ्यास करें।
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>संक्षिप्त संभव रास्ता खोज</strong>
          <strong> / </strong>
          <strong>स्थानिक क्षमता परीक्षण (</strong>
          <strong>Shortest Possible Route / Spatial Scanning Test)</strong>
        </p>
        <p>
          इस परीक्षण में 40 प्रश्न आते हैं तथा इनको हल करने के लिए 08 मिनट का
          समय मिलता है।
        </p>
        <p>
          आप को यहाँ प्रत्येक प्रश्न का उत्तर देने के लिए लगभग 12 सेकंड का समय
          मिलेगा इसलिए ज्यादा से ज्यादा अभ्यास करें।
        </p>
        <p>
          यह परीक्षण दो स्थानों के बीच संभावित सबसे छोटा रास्ता तलाशने की
          योग्यता का परीक्षण है जिन स्थानों को यहाँ A से Z के रूप में दर्शाया
          गया है।
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>चयनात्मक ध्यान</strong>
          <strong> </strong>
          <strong>/</strong>{" "}
          <strong>विषम संख्याओं का योग या गिनती परीक्षण</strong>
          <strong> </strong>
          <strong>
            (Selective Attention / Add or Count of Odd Number Test
          </strong>
          <strong>) </strong>
        </p>
        <p>यह परीक्षण आप की एकाग्रता हो परखने के लिए होता है।</p>
        <p>
          इस परीक्षण में 30 प्रश्न आते हैं तथा इनको हल करने के लिए 08 मिनट का
          समय मिलता है।
        </p>
        <p>
          आप को यहाँ प्रत्येक प्रश्न का उत्तर देने के लिए लगभग 16 सेकंड का समय
          मिलेगा इसलिए ज्यादा से ज्यादा अभ्यास करें।&nbsp;&nbsp;&nbsp;
        </p>
        <p>
          प्रत्येक प्रश्न में अंकों की कतार दी होती है तथा संबन्धित उत्तर दिये
          गए 5 विकल्पों में से चुने।
        </p>
        <p>
          इस में से दी गई विषम संख्याओं 1,3,5 (कभी-कभी 7 और 9 भी हो सकती है) को
          जोड़ या गिनती कर यह बताना है की दिये गए पाँच विकल्पों में से किस विकल्प
          का योग या गिनती सही उत्तर प्रदर्शित करता है।
        </p>
        <p>&nbsp;</p>
        <p>
          <strong>
            व्यक्तित्व / अभिरुचि परीक्षण (Personality / Aptitude Test)
          </strong>
        </p>
        <p>
          इस परीक्षण में 35 प्रश्न आते हैं तथा इनको हल करने के लिए 12 मिनट का
          समय मिलता है।
        </p>
        <p>
          आप को यहाँ प्रत्येक प्रश्न का उत्तर देने के लिए लगभग 20 सेकंड का समय
          मिलेगा इसलिए ज्यादा से ज्यादा अभ्यास करें।
        </p>
        <p>
          इस परीक्षण का उद्देश्य आपकी अभिरुचियों, आपकी सोच, आपके शीघ्र निर्णय
          लेने की क्षमता, अपने आस पास की चीजों एवं घटनाओं के बारे में जानकारी,
          जनसामान्य के प्रति आपकी भावनाओं एवं व्यवहार आदि की जानकारी प्राप्त कर
          आपके व्यक्तित्व को आंकना होता है।
        </p>
        <p>
          आपके द्वारा दिये गए उत्तरों के आधार पर आपके व्यक्तित्व के दो विभिन्न
          आयामों का मूल्यांकन किया जाएगा और इस परीक्षण के आधार पर दो अलग-अलग
          स्कोर बनेंगे।
        </p>
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
  <div className="container contentmatter">
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
              defaultValue={4}
              type="hidden"
            />
            <input id="id" name="id" defaultValue={81} type="hidden" />
            <input
              id="constructedUrl"
              name="constructedUrl"
              defaultValue="asm-psycho-booster-"
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
                defaultValue="d099d2dd-13e5-4b33-8881-680671d86850"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
   {/* Footer */}
   <Footer/>
  {/* Footer End */}
  <a
    href="dd"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>

    )
 }