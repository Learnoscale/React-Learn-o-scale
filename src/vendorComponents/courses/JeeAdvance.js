import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import {Footer} from '../Footer'
import './JeeAdvance.css'

 export default function JeeAdvance() {
   

    return(
<>
  {/* Google Tag Manager */}
  {/* End Google Tag Manager */}
  {/* Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N78442F"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager (noscript) */}
  {/* header */}
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
          <h1 className="text-white">Jee Advance Demo</h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to="jee-advance-demo"> Jee Advance Demo</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="container-fluid" style={{}}>
    <div className="row">
      <div
        className="col-sm-12 col-md-12 col-lg-12"
        style={{ marginTop: "1%", marginBottom: 20 }}
      >
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h1 style={{ color: "#000000", fontSize: 30 }}>
            JEE Advanced - Joint Entrance Exam Advanced 2018
            <img
              src="https://soe-buck-lb.storage.googleapis.com/front-end/images/New.png"
              alt="new"
            />
          </h1>
          <p>&nbsp;</p>
          <img alt="img" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/jee-advanced.jpg" />
        </div>
        
      </div>
      <p>&nbsp;</p>
      <div
        className="col-sm-12 col-md-12 col-lg-12"
        style={{ textAlign: "justify", fontSize: 21, fontFamily: "serif" }}
      >
        <p></p>
        <h1 style={{ fontSize: 31 }}>
          <u>JEE Advanced - Joint Entrance Exam Advanced 2018</u>
        </h1>
        <h4>| Registration, Application Form, Dates, Syllabus</h4>
        JEE Advanced is conducted by the seven regional IITs with guidance from
        the Joint Admission Board (JAB). Only the top 2.4 lakh rank holders in
        JEE Main are eligible to appear for JEE Advanced exam. Till 2017, 2.2
        lakh students were eligible to sit down for the exam.
        <p />
        <br />
        <p>
          Candidates require admissions in bachelor’s programmes, integrated
          master’s programmes as well as dual degree programmes at the 19 IITs
          and Indian School of Mines (ISM) need to clear JEE Advanced.
        </p>
        <br />
        <p>
          JEE Advanced 2018 Registration for foreign nationals only has been
          started from 18th April 2018. It is organized for admission to the
          undergraduate courses leading to a UG, Integrated PG or UG-PG Dual
          Degree. These courses are offered in the field of Engineering,
          Sciences, Pharmaceutics or Architecture. JEE Advanced 2018 (Joint
          Entrance Exam Advanced) is a national level entrance exam managed by
          the IIT, Kanpur. Through this exam, candidates can get admission into
          IITs &amp; ISM. This IIT JEE exam is the second stage of JEE Main
          (Joint Entrance Examination). JEE Advanced 2018 Mock Tests, sample
          papers, online test series have been released. In this article, we
          have mentioned the complete information about JEE Advanced exam 2018.
        </p>
        <br />
        <p>
          JEE Advanced 2018 Registration for foreign nationals only&nbsp;has
          been started from 18th April 2018.
        </p>
        <p>&nbsp;</p>
        <p></p>
        <h1 style={{ fontSize: 28, fontWeight: 600 }}>
          New Changes in JEE Advanced 2018:
        </h1>
        For the year 2018, some new changes have been declared in the Joint
        Entrance Exam Advanced exams which are mentioned below:
        <ul>
          <li>The exam will be operated through online mode only.</li>
          <li>
            Top 2, 24,000 scorers of Joint Entrance Exam Advanced Main 2018 will
            be eligible to apply for JEE Advanced 2018.
          </li>
          <li>Hike in Joint Entrance Exam Advanced fee after GST.</li>
        </ul>
        <p />
        <div className="col-sm-12">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <a href="bg">
              <button
                className="btn  btn-lg btn-block"
                style={{
                  boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                  width: "100%",
                  background: "blue",
                  color: "#fff"
                }}
              >
                Click here For Take a Demo
              </button>
            </a>
          </div>
          <div className="col-sm-4" />
        </div>
        <p>&nbsp;</p>
        <div
          className="col-sm-12 col-md-6 col-lg-6 col-sm-12"
          style={{ background: "#ff0909" }}
          id={1}
        >
          <h2 style={{ color: "#fff", fontSize: 35 }}>
            JEE Advanced 2018 Exam Dates
          </h2>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12 col-xs-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 700 }} align="center">
            Here, we are providing official schedule of JEE Advanced exam dates
            2018. Check important dates below:
          </p>
          <table className="table table-bordered table-hover" style={{}}>
            <tbody>
              <tr>
                <th>Events</th>
                <th>Dates (Announced)</th>
              </tr>
              <tr>
                <td>Registration stats for foreign nationals</td>
                <td>18th April 2018</td>
              </tr>
              <tr>
                <td>Online Registration Starts for others</td>
                <td>2nd May 2018</td>
              </tr>
              <tr>
                <td>Online Registration Closes</td>
                <td>7th May 2018</td>
              </tr>
              <tr>
                <td>Last date for fee payment of registered candidates</td>
                <td>8th May 2018</td>
              </tr>
              <tr>
                <td>Admit Card Availability</td>
                <td>14th – 20th May 2018</td>
              </tr>
              <tr>
                <td>
                  JEE Advanced Exam Date or Time (Paper- I &amp; Paper- II)
                </td>
                <td>
                  20th May 2018
                  <br />
                  Paper 1: 9:00 AM to 12:00 Noon
                  <br />
                  Paper 2: 2:00 PM to 5:00 PM
                </td>
              </tr>
              <tr>
                <td>
                  Copy of candidate responses to be sent to the candidates
                </td>
                <td>22nd – 25th May 2018</td>
              </tr>
              <tr>
                <td>Answer Key Released</td>
                <td>29th May 2018</td>
              </tr>
              <tr>
                <td>Receiving feedback from candidates on answer keys</td>
                <td>29th – 30th May 2018</td>
              </tr>
              <tr>
                <td>Declaration of Result</td>
                <td>10th June 2018</td>
              </tr>
              <tr>
                <td>
                  AAT (Architecture Aptitude Test ) Online Registration Date
                </td>
                <td>10th – 11th June 2018</td>
              </tr>
              <tr>
                <td>AAT (Architecture Aptitude Test ) Exam Date</td>
                <td>14th June 2018</td>
              </tr>
              <tr>
                <td>
                  AAT (Architecture Aptitude Test ) Result Declaration Date
                </td>
                <td>18th June 2018</td>
              </tr>
              <tr>
                <td>Seat Allotment Starts</td>
                <td>19th June – 15th July 2018</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p></p>
        <h1 style={{ fontSize: 27, fontWeight: 600 }}>
          JEE Advanced Registration 2018
        </h1>
        IIT JEE application form information is given below:
        <ul style={{ listStyle: "initial", paddingLeft: 45 }}>
          <li>
            Candidates can register for Joint Entrance Exam Advanced (JEE) 2018
            through online mode only.
          </li>
          <li>
            JEE Advanced (Joint Entrance Exam Advanced) 2018 Registration will
            be started from 2nd May&nbsp;2018.
          </li>
          <li>
            Interested Candidates will fill &amp; submit the application form
            till&nbsp;7th May 2018.
          </li>
          <li>
            No other mode will be entertained to get the Joint Entrance Exam
            Advanced (JEE Advanced) 2018 application form.
          </li>
          <li>
            During registration, candidates have to upload their scanned images
            in a given format.
          </li>
          <li>
            Keep the printout of the JEE Advanced (Joint Entrance Exam Advanced)
            Application Form 2018 for future use.
          </li>
          <li>
            Candidates fill the application form correctly, no correction will
            be allowed after form submission.
          </li>
        </ul>
        <p />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ background: "#ff0909", width: "auto" }}
          id={1}
        >
          <h1 style={{ color: "#fff", fontSize: 35 }}>Registration Fee:</h1>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 500 }} align="center">
            Candidates who interested can pay the registration fee through
            online (debit card &amp; net banking) or offline (SBI Challan) mode.
            The fee is neither refundable nor transferable. The fee details are
            given below:
          </p>
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Category</th>
                <th>Fee</th>
              </tr>
              <tr>
                <th colSpan={2}>Examination Centers in India</th>
              </tr>
              <tr>
                <td>Female candidates</td>
                <td>Rs. 1300 + GST</td>
              </tr>
              <tr>
                <td>ST/SC/PwD candidates</td>
                <td>Rs. 1300&nbsp;+ GST</td>
              </tr>
              <tr>
                <td>All other candidates</td>
                <td>Rs. 2600&nbsp;+ GST</td>
              </tr>
              <tr>
                <td>Late Fee</td>
                <td>Rs. 500</td>
              </tr>
              <tr>
                <th colSpan={2}>Exam Centers Outside India</th>
              </tr>
              <tr>
                <td>All candidates</td>
                <td>USD 160&nbsp;+ GST(SAARC Countries)</td>
              </tr>
              <tr>
                <td>All candidates</td>
                <td>USD 300&nbsp;+ GST (Non-SAARC Countries)</td>
              </tr>
              <tr>
                <td>Late Fee</td>
                <td>USD 80</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Syllabus Session End */}
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ background: "#ff0909", width: "auto" }}
          id={1}
        >
          <h1 style={{ color: "#fff", fontSize: 35 }}>Eligibility Criteria</h1>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 500 }} align="center">
            Before register for the JEE Advanced examination, candidates must
            check eligibility criteria first. If candidates will not satisfy the
            given eligibility criteria, their registration will be cancelled.
          </p>
          <hr />
          These candidates must be born on or after 1st October 1988.
          Relaxation:-There is five year relaxation for SC/ST/PwD categories.
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Nationality/nationhood:-</th>
                <th>
                  Indian Citizen of India can apply for JEE main 2018 exam.
                  <hr />
                  PIO/OCI candidates can also apply for JEE main 2018
                </th>
              </tr>
              <tr>
                <td>JEE Advanced Main 2018:-</td>
                <td>
                  Joint Entrance Exam Advanced 2018, India nationals (including
                  OCI/PIO) have to appear JEE Main 2018.
                </td>
              </tr>
              <tr>
                <td>
                  Performance in JEE Main (Joint Entrance Exam Advanced) 2018:-
                </td>
                <td>
                  Candidates should be among the top 2, 24,000 by securing
                  positive marks in Paper 1 (including all categories) of JEE
                  Advanced Main 2018 Exam.
                </td>
              </tr>
              <tr>
                <td>Age Criteria:-</td>
                <td>Candidates should be born on or after 1st October 1993.</td>
              </tr>
              <tr>
                <td>Number of Attempts:-</td>
                <td>
                  Candidates must appear for JEE Advanced (Joint Entrance Exam
                  Advanced) exam 2018 (IIT JEE Exam) a maximum of two times in a
                  consecutive years.
                  <hr />
                  Candidates, those appeared in JEE Advanced 2017 for the first
                  time, they are also eligible.
                </td>
              </tr>
              <tr>
                <td>Appearance in Class 10+2 (or equivalent):-</td>
                <td>
                  Candidates should appear for the 10+2 or equivalent
                  examination for the first time in either year 2017 or 2018.
                  <hr />
                  Candidates, that 10+2 or equivalent examination result for the
                  year 2015-2016 were announced after June 2016, they are also
                  eligible to appear for JEE Advanced 2018.
                </td>
              </tr>
              <tr>
                <td>Earlier Admission at IITs: -</td>
                <td>
                  Candidates should not been admitted in an IIT irrespective of
                  whether or not they continued in the programme) or accepted
                  the IIT seat by reporting at the reporting centre in the past.
                  Candidates, those admission at IITs was cancelled, they are
                  also not eligible to apply for JEE Advanced 2018.
                  <hr />
                  Candidates who are admitted to a preparatory programme in any
                  of the IITs for the first time in 2017, they can apply for JEE
                  Advanced 2018.
                  <hr />
                  Candidates, those have paid the seat acceptance fee but not
                  accepted the seat are eligible to appear in the JEE Advanced
                  2018.
                </td>
              </tr>
              <tr>
                <td>Performance in 10+2 or Equivalent Examination:-</td>
                <td>
                  Candidates have to score minimum 75% aggregate marks (65% in
                  case of SC/ST/PwD category) in 10+2 or equivalent examination.
                  <hr />
                  Candidates must be within the category-wise top 20 percentile
                  of qualified candidates in their particular 10+2 or equivalent
                  examination.
                  <hr />
                  Candidates, those appeared in 10+2 (or equivalent) examination
                  in 2017 but reappeared in 2018, the better of two performances
                  will be considered.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
 
  {/* Footer End */}
  <hr />
  <Footer/>
  <a
    href="ss"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>)}
