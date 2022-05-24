import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import { Link } from 'react-router-dom'

export default function Blog() {

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
            <h1 className="text-white"> BLOG</h1>
            <p
              className="text-white link-nav"
              style={{ textAlign: "center !important" }}
            >
              <Link to={"/"}>Home </Link>{" "}
              <span className="fa fa-arrow-right" /> <Link to="/blog"> Blog</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <p>&nbsp;</p>
    <div className="container-fluid">
      <div id="blog" className="row">
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="ss"
              style={{ color: "#2d4667" }}
            >
              {" "}
              अभी जाने NTPC Station Master Aptitude Test Series के बारे में{" "}
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/railway1.png"
            alt="blog img"
            className="pull-left img-responsive thumb margin10 img-thumbnail"
            style={{ height: 130 }}
          />{" "}
          <em>
            Posted By{" "}
            <a href="sa" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              मनोवैज्ञानिक अभिवृत्ति परीक्षा (NTPC Psycho Test Series) का मुख्य
              उद्देश्य है सबसे उपयुक्त अभ्यार्थियों का चयन करना व उनकी क्षमता का
              आकलन करना। RRB NTPC Stage 3 परीक्षा Station Master और Traffic
              Assistant की पोस्ट के लिए होती है। NTPC ASM Online Psycho Mock Test
              में 5 प्रकार के परीक्षण होते है जिसमें कुल लगभग 165 प्रश्न होते है व
              जिनको हल करने की लिए मात्र 48 मिनट का समय मिलते है।
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="series"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="card"
              style={{ color: "#2d4667" }}
            >
              {" "}
              Check Your RRB (RRC) Group D Application Status, RRB (RRC) Group D
              Exam Dates, Exam Schedule,RRB(RRC) Group D Exam Pattern &amp;
              Selection Process
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/railway1.png"
            alt="blog img"
            className="pull-left img-responsive thumb margin10 img-thumbnail"
            style={{ height: 130 }}
          />{" "}
          <em>
            Posted By{" "}
            <a href="rr" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              The exam date of Railway Group D 2018 exam has been announced. RRB
              Group D exam will be conducted on 12 Aug, 18 Aug, 26 Aug, 9 Sep,
              &amp; 16 September (These exam dates are tentative, No official
              dates have been announced by RRB).the status of the candidates will
              be uploaded on the official website of Railways. Hence, the Computer
              Based Tests for Group D is expected to commence in August/September,
              2018.
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="ard"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="ion"
              style={{ color: "#2d4667" }}
            >
              RPF Recruitment 2018 Notification, Online Application Form,
              Age-Limit, Vacancy, Exam Date
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/rpfbloglist.png"
            style={{ height: 130 }}
            alt="post img"
            className="pull-left img-responsive thumb margin10 img-thumbnail"
          />{" "}
          <em>
            Posted By{" "}
            <a href="s" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              RPF Recruitment 2018: Railway RPF Recruitment department has
              released RPF Recruitment 2018 Notification for Railway RPF Constable
              and Sub Inspector Posts. RPF Online Application Form will start from
              1st June 2018 and end on 30th June 2018. RRB RPF Recruitment
              Notification has released on 19th May 2018. The candidates who want
              to apply online for Railway RPF Recruitment, Read Instructions and
              Eligibility Criteria Carefully before applying.
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="cation"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="form"
              style={{ color: "#2d4667" }}
            >
              AIIMS MBBS COUNSELLING 2018
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/AIIMS_EXAM_small.png"
            alt="AIIMS"
            style={{ height: 130 }}
            className="pull-left img-responsive thumb margin10 img-thumbnail"
          />{" "}
          <em>
            Posted By{" "}
            <a href="de" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              AIIMS New Delhi will conduct the counselling of AIIMS MBBS 2018 in
              the online mode for the first time ever. The online AIIMS MBBS 2018
              counselling will tentatively begin from July 3, 2018. Online AIIMS
              MBBS counselling 2018 will likely be held in four rounds, namely
              first, second, third online counselling rounds, followed by an open
              round counselling.
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="form"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="form"
              style={{ color: "#2d4667" }}
            >
              SSC CGL 2018 Recruitment, Notification Released - Check Details
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/ssc cgl 2018.png"
            alt="SSC-CGL"
            style={{ height: 130 }}
            className="pull-left img-responsive thumb margin10 img-thumbnail"
          />{" "}
          <em>
            Posted By{" "}
            <a href="d" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              The Staff Selection Commission (SSC) will release the official
              notification of Graduate Level (CGL) 2018, 4th May and candidates
              will be able to Online application form submission will be started
              after few hours of notification release.The Staff Selection
              Commission -CGL is expected to release 9000/- vacancies by SSC -CGL
              Recruitment 2018
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="form"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="details"
              style={{ color: "#2d4667" }}
            >
              JEE Advanced - Joint Entrance Exam Advanced 2018
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/jeesmall.png"
            style={{ height: 130 }}
            alt="JEE Advanced"
            className="pull-left img-responsive thumb margin10 img-thumbnail"
          />{" "}
          <em>
            Posted By{" "}
            <a href="dd" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              JEE Advanced is conducted by the seven regional IITs with guidance
              from the Joint Admission Board (JAB). Only the top 2.4 lakh rank
              holders in JEE Main are eligible to appear for JEE Advanced exam.
              Till 2017, 2.2 lakh students were eligible to sit down for the exam.
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="details"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="vacancy"
              style={{ color: "#2d4667" }}
            >
              50,000+ Vacancies expected soon as per Sources for RRB ASM
              Recruitment 2018
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/asm-small.png"
            style={{ height: 130 }}
            alt="RRB ASM"
            className="pull-left img-responsive thumb margin10 img-thumbnail"
          />{" "}
          <em>
            Posted By{" "}
            <a href="de" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              Government of India, Ministry of Railways, and Railway Recruitment
              Boards (RRB) has come up with 62907 RRB Group D vacancies to fill up
              Gateman/Pointsman/Porter/Helper &amp; few other posts in Railway
              department across all regions
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="vacancy"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 blogShort">
          <h1>
            <a
              href="vacancy"
              style={{ color: "#2d4667" }}
            >
              RRB Group D Recruitment 2018-2019 | 62907 Vacancie
            </a>
          </h1>
          <img
            src="https://soe-buck-lb.storage.googleapis.com/front-end/images/group-d-small.png"
            style={{ height: 130 }}
            alt="RRB ASM"
            className="pull-left img-responsive thumb margin10 img-thumbnail"
          />{" "}
          <em>
            Posted By{" "}
            <a href="d" target="_blank">
              Admin
            </a>
          </em>
          <article>
            <p>
              Government of India, Ministry of Railways, and Railway Recruitment
              Boards (RRB) has come up with 62907 RRB Group D vacancies to fill up
              Gateman/Pointsman/Porter/Helper &amp; few other posts in Railway
              department across all regions
            </p>
          </article>{" "}
          <a
            className="btn btn-blog pull-right marginBottom10"
            href="ancy"
          >
            READ MORE
          </a>
        </div>
        <div className="col-md-12 gap10" />
      </div>
    </div>
    <Footer/>
    <a
      href="s"
      className="scroll_top"
      title="Scroll to Top"
      style={{ display: "inline" }}
    >
      Scroll
    </a>
  </>
  
  )
}