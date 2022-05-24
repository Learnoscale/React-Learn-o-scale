import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import './Coaching.css'
import { Link } from 'react-router-dom'


export default function Coaching() {

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
    <div className="overlay1 overlay1-bg" />
    <div className="container-fluid">
      <div className="align-items-center justify-content-center">
        <div className="about-content col-lg-12">
          <h1 className="text-white" style={{ textTransform: "uppercase" }}>
            Coaching
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to={"/coaching"}>Coaching</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div
    className="container-fluid"
    style={{
      boxShadow: "1px 2px 3px 2px #cdc6c6",
      marginTop: "3%",
      marginBottom: 20
    }}
  >
    <div className="row">
      <div className="srvices_main1">
        <div className="col-sm-12">
          <div className="service_first">
            {/*<img src="${pageContext.request.contextPath}/static/front-end/ititemplate1/images/canon.png" alt=""/>*/}
            <h1 className="heading">
              Why do you need an Online Exam platform?
            </h1>
            <ul
              style={{
                listStyle: "initial",
                paddingLeft: 19,
                textAlign: "justify",
                paddingRight: 9,
                color: "#21272b",
                fontSize: 18,
                fontFamily: "-webkit-pictograph"
              }}
            >
              <li>
                <span>
                  If you aspire to grow your business, you need an Online
                  Examination platform. You need to oversee and evaluate the
                  performance of your students and faculty. If you wish to have
                  branches and franchise centres at different locations, you can
                  monitor the performance of students and faculty sitting at
                  your head office.{" "}
                </span>
              </li>
              <li>
                <span>
                  You need to efficiently utilise your expensive faculty
                  resources and minimise the burden of your faculty for
                  preparation, evaluation, monitoring and doubt clearance of DPP
                  and Mock Tests.{" "}
                </span>
              </li>
              <li>
                <span>
                  Most of the tests are increasingly getting online. Bank (IBPS
                  &amp; SBI), SSC (CGL, 10+2), Railway (NTPC), Delhi Police
                  Constable was available online from 2016, JEE Main was
                  available online in 2014 across all cities with offline option
                  in a few select cities. It is expected that next year, JEE
                  Main 2015 may be compulsorily online. There's a talk of JEE
                  Advanced also getting fully online in 2015. NEET is being
                  conducted by CBSE. It's quite probable that next year CBSE
                  follows the same strategy of compulsory online tests for NEET
                  also.{" "}
                </span>
              </li>
              <li>
                <span>
                  Large institutes are working hard day and night to come up
                  with online test programs to cope with the sudden demand for
                  such programs. These institutes have hefty budgets and can
                  probably afford to invest endlessly in such a program. For
                  small and medium sized players who have a passion to grow, we
                  offer a dependable and effective alternative.{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="service_first">
            <h1 className="heading">
              Why should you not buy or develop your own online platform?
            </h1>
            <ul
              style={{
                listStyle: "initial",
                paddingLeft: 19,
                textAlign: "justify",
                paddingRight: 9,
                color: "#21272b",
                fontSize: 18,
                fontFamily: "-webkit-pictograph"
              }}
            >
              <li>
                <span>
                  If you plan to develop your own online platform, you a
                  dedicated team of best website developers, android developers,
                  website designers and testers to develop, troubleshoot,
                  upgrade and maintain the software on a regular basis. You need
                  the best global practices in terms of documentation and
                  continuity of team members else. You also need to hire and
                  maintain high performance servers with round the clock
                  monitoring systems to ensure that your software is available
                  to your students.{" "}
                </span>
              </li>
              <li>
                <span>
                  The cost of development and maintenance is prohibitively
                  expensive. After having invested the colossal resources,
                  there's a risk of software may not passing the strict test
                  parameters. Ours is a ready to implement solution with no
                  minimum investment.{" "}
                </span>
              </li>
              <li>
                <span>
                  You can also consider buying the software from a software
                  vendor providing a similar solution. Firstly, so far there's
                  no software solution available in the market which matches the
                  features and ease of use that our program offers. Secondly,
                  most of the software developers run away after some time,
                  leaving you without any support. Thirdly, you need to invest
                  heavily in the content development and ensure the quality of
                  content.{" "}
                </span>
              </li>
              <br />
              <br />
              <br />
            </ul>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="service_first">
            {/*<img src="${pageContext.request.contextPath}/static/front-end/ititemplate1/images/canon.png" alt=""/>*/}
            <h1 className="heading">
              Why should you consider SmartOnlineExam amongst host of online
              solution providers?
            </h1>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 19,
                textAlign: "justify",
                paddingRight: 9,
                color: "#21272b",
                fontSize: 18,
                fontFamily: "-webkit-pictograph"
              }}
            >
              Our program has the following differentiating factors which you
              must consider before you decide on another online solution
              provider:
              <br />
              <br />
            </ul>
            <ul
              style={{
                listStyle: "initial",
                paddingLeft: 19,
                textAlign: "justify",
                paddingRight: 9,
                color: "#21272b",
                fontSize: 18,
                fontFamily: "-webkit-pictograph"
              }}
            >
              <li>
                <span>Easy to use and error Free platform.</span>
              </li>
              <li>
                <span>
                  Also work without internet or slow internet connection.
                </span>
              </li>
              <li>
                <span>Question in both language (Hindi &amp; English).</span>
              </li>
              <li>
                <span>Self-explanatory Detailed step by step solution.</span>
              </li>
              <li>
                <span>Details report on given exam.</span>
              </li>
              <li>
                <span>Unique 3-step revision lists.</span>
              </li>
              <li>
                <span>Bookmark list.</span>
              </li>
              <li>
                <span>Free Trial with full student Panel.</span>
              </li>
              <li>
                <span>Hosted solution on high speed servers.</span>
              </li>
              <li>
                <span>
                  Large no. of relevant and unique questions (no repetitions).
                </span>
              </li>
              <li>
                <span>
                  Helps the students perform better in the board examinations.
                </span>
              </li>
              <li>
                <span>
                  Facility to add your own questions and answers to maintain
                  your uniqueness (optional).
                </span>
              </li>
              <li>
                <span>
                  Facility to create your own DPPs and Mock Tests (optional).
                </span>
              </li>
              <li>
                <span>More Board level questions can be added by faculty.</span>
              </li>
              <li>
                <span>
                  Helps faculty to improve their skill sets and get trained for
                  educating students for the competitive examinations.
                </span>
              </li>
              <li>
                <span>
                  Accessible to students from your own website through your
                  school website
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-12  col-md-12 col-sm-12">
          <div className="service_first">
            <h1 className="heading">How does it help grow my business?</h1>
            <ul
              style={{
                listStyle: "initial",
                paddingLeft: 19,
                textAlign: "justify",
                paddingRight: 9,
                color: "#21272b",
                fontSize: 18,
                fontFamily: "-webkit-pictograph"
              }}
            >
              <li>
                <span>
                  It wards off the risk of your students being taken over by the
                  large institutes.{" "}
                </span>
              </li>
              <li>
                <span>
                  It helps you grow your student enrolment because increasingly
                  students are looking for such options.{" "}
                </span>
              </li>
              <li>
                <span>
                  It helps you grow by setting up branches and franchise centres
                  because now you can easily monitor the performance of the
                  students and faculty.{" "}
                </span>
              </li>
              <li>
                <span>
                  It helps you attract students who happen to visit your website
                  and register at your website for free trial. These
                  registrations would be your leads. Your institute can convert
                  these leads to revenue for you.{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
 <Footer/>
  {/* Footer End */}
  <a
    href="a"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>
    )
}