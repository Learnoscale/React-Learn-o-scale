import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import { Link } from 'react-router-dom'
import './Scollege.css'

export default function Scollege() {

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
        <div className="about-content col-lg-12 bannercontent">
          <h1
            className="text-white"
            style={{ textTransform: "uppercase", fontSize: 25 }}
          >
            School/college partnership program
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to={"school-college-partnership-program"}>School/College Partnership Program</Link>
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
    <div className="row terms">
      <div className="col-sm-12">
        <p
          className="contentmatter fs-5"
          style={{
            paddingLeft: 11,
            textAlign: "justify",
            paddingRight: 11,
            marginBottom: 5,
            color: "#31373c"
          }}
        >
          However, there are challenges in providing specialised training for
          the competitive and entrance examinations to the students. The
          specialised faculty for these competitive and entrance examinations is
          quite costly and the attrition is high. The cost to students also
          becomes prohibitively high. Boarding schools/College located in remote
          locations suffer from serious disadvantages. Some of the
          schools/College in cities are running schools/College partnership
          programs in their school/ College premises or outside the school/
          College premises in association with coaching institutes. CBSE and
          Govt. Universities has already clarified that all such schools/College
          which are running the coaching classes in the school/College, during
          or after the school/ College hours shall be derecognised. Schools/
          College are facing the problem of how to cope up with the expectations
          of the students and the parents and provide an economical effective
          alternative solution.
        </p>
        <p
          className="contentmatter fs-5"
          style={{
            paddingLeft: 11,
            textAlign: "justify",
            paddingRight: 11,
            marginBottom: 10,
            marginTop: 10,
            color: "#31373c"
          }}
        >
          Smart Online Exam offers opportunities to the schools/ College to
          enable their students prepare effectively for the competitive and
          entrance examinations without additionally burdening either the
          students or their existing faculty. The students can prepare for these
          competitive and entrance examinations from the comfort of their homes
          as per their respective time schedule. Since, this is a
          self-preparation program, intervention by teachers is minimal. The
          program is comprehensive and takes care of all the learning needs of
          the students and equip them with the necessary test taking skills with
          optimal utilisation of time.
        </p>
      </div>
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            Why should school/ College provide training for the competitive and
            entrance examinations?
          </div>
          <div className="panel-body">
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              We at Smart Online Exam sincerely believe that the school's/
              College's role is not limited to making the students pass 12th/
              Graduation / Post Graduation. Unfortunately, many of the schools/
              College still continue to feel that their role is limited to
              making students perform in the 12th boards or University exams.
              Gone are the days when the students used to get admission in
              colleges for B.Sc. based on the performance in the board
              examinations or gave competition exam for Govt. Jobs (SSC, Bank,
              Defence, Railway, UPSC etc) based on the performance in the
              university examinations. Now, the students are highly motivated
              and their primary focus is on getting into B.Tech from IITs or
              doing MBBS from AIIMS and other reputed medical colleges or
              selection in Defence, SSC, Bank, Railway etc. The question is
              whether board preparation would make these students grab a seat in
              these reputed IITs and Medical colleges or Govt. Job. If not, are
              the schools/College doing enough to fulfil the expectations of the
              students and parents?
            </p>
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              So, all progressive thinking schools/College have been providing
              opportunities to their students by way of synchronise classes or
              school/College partnership programs.
            </p>
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              Why does the school/College need an online exam platform ? Of
              late, CBSE has directed all schools to stop running coaching
              institutions on the school premises under the pretext of providing
              preparations for entrance examinations. (Times of India, New Delhi
              dated 28th February 2014).
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            Why should you consider SmartOnlineExam amongst host of online exam
            solution providers?
          </div>
          <div className="panel-body">
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              Our program has the following differentiating factors which you
              must consider before you decide on another online solution
              provider:-
            </p>
            <ul className='fs-5'
              style={{
                listStyle: "initial",
                paddingLeft: 19,
                textAlign: "justify",
                paddingRight: 9,
                color: "#31373c"
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
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">How does it work?</div>
          <div className="panel-body">
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              The Company provides a link on the website of the school. By
              clicking the link, the students can log on to the website of
              SmartOnlineExam and can access the preparation programs. The
              dashboard of the students shall also carry the logo of the School.
              The content updation, software updation and all technical issues
              shall be responsibility of SmartOnlineExam. Many of the reputed
              schools have already opted for the school partnership programs
              with us.
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">Pricing</div>
          <div className="panel-body">
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              The pricing shall be worked out based on the number of student
              packs that your school buys. For a customised quote, please
              contact us here.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="panel panel-primary">
          <div className="panel-heading">How do I proceed further?</div>
          <div className="panel-body">
            <p className='fs-5' style={{ color: "#31373c", textAlign: "justify" }}>
              We would be more than happy to make a detailed presentation of the
              features and functionality of our program. For an online
              presentation, please <a className='fs-5 text-primary' href="/contactUs">contact us here.</a>
            </p>
          </div>
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

  )
}