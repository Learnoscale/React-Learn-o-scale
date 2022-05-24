import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import {Footer} from '../Footer'
import './AIIMSmbbs.css'

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
          <h1 className="text-white">AIIMS Notification</h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to="aiims-notification"> AIIMS Notification</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
  {/* mid content */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
        <img
          src="https://soe-buck-lb.storage.googleapis.com/front-end/images/AIIMS-Nursing-Exam-blog.png"
          className="img-responsive"
          alt="AIIMS MBBS COUNSELLING"
        />
      </div>
      <p>&nbsp;</p>
      <div
        className="col-sm-12 col-xs-12 col-md-12 col-lg-12"
        style={{ fontSize: 21, fontFamily: "serif" }}
      >
        <p></p>
        <h1 style={{ fontSize: 31 }}>
          <u>
            <a href="xy">
              AIIMS MBBS COUNSELLING 2018
            </a>
          </u>
        </h1>
        <h4>
          |Application Form, Notification, Prospectus, Exam Date, Eligibility,
          Pattern &amp; Syllabus
        </h4>
        AIIMS New Delhi will conduct the counselling of AIIMS MBBS 2018 in the
        online mode for the first time ever. The online AIIMS MBBS 2018
        counselling will tentatively begin from July 3, 2018. Online AIIMS MBBS
        counselling 2018 will likely be held in four rounds, namely first,
        second, third online counselling rounds, followed by an open round
        counselling. AIIMS MBBS 2018 counselling first round will be held from
        July 3 to 6, 2018, followed by second counselling round to be held on
        August 3, 2018 and third AIIMS MBBS counselling round to be held on
        September 5, 2018. The result of AIIMS MBBS will declare the candidates
        eligible for participating in first round of online AIIMS MBBS
        counselling 2018.
        <p />
        <p>
          The link to register for AIIMS MBBS 2018 counselling will be made
          available here as soon as the registrations are open. Candidates equal
          to four times the total number of seats in each category will be
          shortlisted for the counselling. In all likelihood, AIIMS MBBS 2018
          online counselling process will include one- time online registration,
          exercising of choice preferences amongst available AIIMS institutions,
          mock allocation, and re- shuffling of choices, allocation of seats and
          acceptance/rejection of seat by the candidate. Candidates who will be
          allocated a seat will be required to deposit their original
          certificates and fee at the allotted institution. Aspirants of AIIMS
          MBBS can check the article for complete details about online
          counselling of AIIMS MBBS 2018 including important dates, counselling
          procedure, etc.
        </p>
        <br />
        <div className="col-sm-12">
          <div className="col-sm-4" />
          <div className="col-sm-4">
            <a href="xyz">
              <button
                className="btn  btn-lg btn-block"
                style={{
                  boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                  width: "100%",
                  background: "blue !important",
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
        <p>&nbsp;</p>
        <div
          className="col-sm-12 col-md-6 col-lg-6"
          style={{ background: "#ff0909" }}
          id={1}
        >
          <h1 style={{ color: "#fff", fontSize: 35 }}>About AIIMS MBBS 2018</h1>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 700 }} align="center">
            Here, we are providing official schedule of AIIMS MBBS 2018
          </p>
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>AIIMS MBBS Exam Events 2018 Details</th>
                <th>Details</th>
              </tr>
              <tr>
                <td>Exam name</td>
                <td>
                  All India Institute of Medical Sciences MBBS Entrance Exam
                  2018
                </td>
              </tr>
              <tr>
                <td>Commonly Known as</td>
                <td>AIIMS MBBS Entrance Exam</td>
              </tr>
              <tr>
                <td>Conducting Body</td>
                <td>All India Institute of Medical Sciences, New Delhi</td>
              </tr>
              <tr>
                <td>Exam Category</td>
                <td>Undergraduate</td>
              </tr>
              <tr>
                <td>Exam Level</td>
                <td>National</td>
              </tr>
              <tr>
                <td>Exam Cities</td>
                <td>155 (Tentative)</td>
              </tr>
              <tr>
                <td>Seats available</td>
                <td>807</td>
              </tr>
              <tr>
                <td>Participating Institutes</td>
                <td>
                  9 AIIMS Institutes in New Delhi, Bhopal, Bhubaneshwar,
                  Jodhpur, Patna, Raipur, Rishikesh, Guntur and Nagpur
                </td>
              </tr>
              <tr>
                <td>Minimum age limit</td>
                <td>17 years of age as of December 31, 2018</td>
              </tr>
              <tr>
                <td>Date of exam</td>
                <td>May 26 and May 27, 2018</td>
              </tr>
              <tr>
                <td>Exam timings on both days</td>
                <td>
                  Morning Session: 9.00 am to 12.30 pm
                  <hr /> Evening Session: 3.00 pm to 6.30 pm
                </td>
              </tr>
              <tr>
                <td>Date of result</td>
                <td>June 18, 2018</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ background: "#ff0909" }}
          id={1}
        >
          <h1 style={{ color: "#fff", fontSize: 35 }}>AIIMS Exam Dates</h1>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 700 }} align="center">
            Here, students can check the official exam dates schedule for AIIMS
            entrance examination:
          </p>
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Events</th>
                <th>Dates (Announced)</th>
              </tr>
              <tr>
                <td>Online registration starts</td>
                <td>5th February 2018</td>
              </tr>
              <tr>
                <td>Last date for online registration</td>
                <td>5th March 2018 (5:00 PM)</td>
              </tr>
              <tr>
                <td>Application correction</td>
                <td>8th to 12th March 2018</td>
              </tr>
              <tr>
                <td>
                  Status of Registration including rejection /deficiencies in
                  application
                </td>
                <td>21st March 2018</td>
              </tr>
              <tr>
                <td>Application correction re-open</td>
                <td>16th – 18th April 2018</td>
              </tr>
              <tr>
                <td>Final registration status</td>
                <td>May 2018</td>
              </tr>
              <tr>
                <td>Admit card release</td>
                <td>10th May 2018</td>
              </tr>
              <tr>
                <td>Exam date</td>
                <td>26th &amp; 27th May 2018</td>
              </tr>
              <tr>
                <td>Result announcement</td>
                <td>18th June 2018</td>
              </tr>
              <tr>
                <td>First round counselling</td>
                <td>3rd, 04th, 05th, 06th July 2018</td>
              </tr>
              <tr>
                <td>Second round counselling</td>
                <td>2nd August 2018</td>
              </tr>
              <tr>
                <td>Third round counselling</td>
                <td>4th September 2018</td>
              </tr>
              <tr>
                <td>Open counselling (If Required)</td>
                <td>27th September 2018</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p></p>
        <h1 style={{ fontSize: 27, fontWeight: 600 }}>
          Documents for AIIMS MBBS Application Form 2018
        </h1>
        Before filling the application form of AIIMS MBBS 2018, the candidates
        were required to keep some documents ready beforehand. Since the
        candidates were submitting their personal and academic information, they
        were advised to keep all of the related certificates ready for
        reference. The scanned image files of their photograph, signature and
        left-hand thumb impression also had to be kept ready according to the
        below-mentioned specifications.
        <p />
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 24, fontWeight: 600, textAlign: "center" }}>
          Specifications for Scanned Images
        </h2>
        <p>&nbsp;</p>
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 700 }} align="center">
            Here, students can check the official exam dates schedule for AIIMS
            entrance examination:
          </p>
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>S. No</th>
                <th>Images to be Scanned</th>
                <th style={{ width: "50%" }}>Specifications</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>1</td>
                <td>Photograph</td>
                <td>
                  The passport size photograph had to be coloured and taken on a
                  white background. It should not have been blurred and must
                  have been recent (clicked within six months from registration
                  date). The image should have been titled “Photograph”.
                  <hr /> <b>File Size:</b> 50 KB to 100 KB
                  <hr /> <b>File Dimension:</b> 3.5 cms x 4.5 cms
                  <hr /> <b>File Format:</b> JPG/JPEG/GIF/PNG
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Signature</td>
                <td>
                  The signature should have been done on a white background with
                  a black or blue ink or fountain pen. The image should have
                  been titled “Signature”.
                  <hr /> <b>File Size:</b> 50 KB to 100 KB
                  <hr /> <b>File Dimension:</b> 6 cms x 3 cms
                  <hr /> <b>File Format:</b> JPG/JPEG/GIF/PNG
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Left-Hand Thumb Impression</td>
                <td>
                  The thumb impression should have been done on a white
                  background. The impression should have been clear and the
                  image should be saved as “Left Hand Thumb Impression”.
                  <hr /> <b>File Size:</b> 50 KB to 100 KB
                  <hr /> <b>File Dimension:</b> 4 cms x 3 cms
                  <hr /> <b>File Format:</b> JPG/JPEG/GIF/PNG
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>
          The application form is available on the official website from 05
          February 2018 (Monday). The last date to apply for the AIIMS MBBS exam
          2018 is 05 March 2018 (till 05:00 PM).
        </p>
        <p>&nbsp;</p>
        <p></p>
        <h1 style={{ fontSize: 27, fontWeight: 600 }}>How To Apply</h1>
        The following steps are required to be followed for filling the online
        application form –
        <ul style={{ listStyle: "initial", paddingLeft: 45 }}>
          <li>Visit the official website for AIIMS exams.</li>
          <li>Click on the “Academic Courses” tab on the homepage.</li>
          <li>Click on “MBBS” under “Undergraduate” column.</li>
          <li>A pop-up window will appear, click on “Proceed” button.</li>
          <li>
            Click on “Click Here” button under “New Registration” section.
          </li>
          <li>
            Read the details of documents required for the online application,
            make sure you are ready with them and click on “Proceed” button.
          </li>
          <li>Read the instructions carefully and again click on “Proceed”</li>
          <li>
            Complete the Registration process by providing the details asked
            for.
          </li>
          <li>
            You will receive the user id and password on your registered email
            id.
          </li>
          <li>
            Use the user id and password to log in and complete the remaining
            steps of the registration process such as documents upload, fee
            payment etc.
          </li>
          <li>Take a print out of the confirmation page.</li>
        </ul>
        <p />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div
          className="col-sm-6 col-md-6 col-lg-6"
          style={{ background: "#ff0909", width: "auto" }}
          id={1}
        >
          <h1 style={{ color: "#fff", fontSize: 35 }}>
            Application Form Fees:
          </h1>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-12"
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10
          }}
        >
          <p style={{ fontWeight: 500 }} align="center">
            The fee details are given below:
          </p>
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>S.NO.</th>
                <th>Category</th>
                <th>Application Fees</th>
              </tr>
              <tr>
                <td>1</td>
                <td>General</td>
                <td>Rs. 1500 + Transaction Charges</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Other Backward Classes (Creamy and Non-Creamy Layer)</td>
                <td>Rs. 1500 + Transaction Charges</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Scheduled Caste (SC)</td>
                <td>Rs. 1200 + Transaction Charges</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Scheduled Tribe (ST)</td>
                <td>Rs. 1200 + Transaction Charges</td>
              </tr>
              <tr>
                <td>5</td>
                <td>OPH Candidates</td>
                <td>Exempted from Payment of Application Fees</td>
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
          <h1 style={{ color: "#fff", fontSize: 35 }}>Exam Pattern</h1>
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
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th>Event</th>
                <th>Details</th>
              </tr>
              <tr>
                <td>Exam Mode</td>
                <td>Computer Based Test (CBT) - Online mode</td>
              </tr>
              <tr>
                <td>AIIMS MBBS Number of Sessions</td>
                <td>4 - Two on May 26, 2018 and two on May 27, 2018</td>
              </tr>
              <tr>
                <td>Session Timings</td>
                <td>
                  Morning Session – 9.00 AM to 12.30 PM
                  <hr /> Evening Session – 3.00 PM to 6.30 PM
                </td>
              </tr>
              <tr>
                <td>Allocation of Session</td>
                <td>Random</td>
              </tr>
              <tr>
                <td>Medium of Exam</td>
                <td>English and Hindi options</td>
              </tr>
              <tr>
                <td>Total Questions</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Questions per Section</td>
                <td>
                  Physics: 60
                  <hr /> Chemistry: 60
                  <hr /> Biology (Botany + Zoology): 60
                  <hr /> General Knowledge: 20
                </td>
              </tr>
              <tr>
                <td>Question Type</td>
                <td>Multiple-choice, reason-assertion based</td>
              </tr>
              <tr>
                <td>Marking system</td>
                <td>
                  Total marks: 200
                  <hr /> Correct Answer: 1 mark
                  <hr /> Incorrect answer: - 1/3 (one third) marks
                </td>
              </tr>
              <tr>
                <td>Syllabus</td>
                <td>
                  Primarily the CBSE syllabus taught in Class 10+2 and common
                  syllabus as notified by the Medical Council of India (MCI)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p></p>
        <h1 style={{ fontSize: 27, fontWeight: 600 }}>Eligibility Criteria</h1>
        The eligibility criteria of AIIMS Nursing is given here separately for
        all the courses:
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>B.Sc (Hons.) Nursing:</h2>
        <ul style={{ listStyle: "initial", paddingLeft: 45 }}>
          <li>Nationality: Students must be an Indian citizen.</li>
          <li>
            Qualifying Exam: Students must passed 10+2 or equivalent examination
            form recognized board with PCB and English Subjects.
          </li>
          <li>
            Age Criteria: The age of the students should be 17 years as on 31st
            December 2018.
          </li>
          <li>Appearing Candidates: Appearing students can also apply.</li>
          <li>Only female candidates can apply for this course.</li>
          <li>
            Candidates have to score 50% marks for general and 45% marks for
            categories in PCB and English subjects.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>
          B.Sc. Nursing (Post-Basic):
        </h2>
        <ul style={{ listStyle: "initial", paddingLeft: 45 }}>
          <li>
            Qualifying exam: Student should passed 12th or its equivalent
            examination. Also, Diploma in General Nursing and Midwifery.
          </li>
          <li>
            Must Registered as Nurse, Registered Nurse (RN), Registered Midwife
            (RM) with State Nursing Council.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>M.Sc. Nursing:</h2>
        <ul style={{ listStyle: "initial", paddingLeft: 45 }}>
          <li>
            Qualifying Exam: Students must have the degree in B.Sc (Hons.)/B.Sc
            Nursing (Post-Certificate/Post Basic/B.Sc Nursing.
          </li>
          <li>
            Minimum Marks: It is necessary to score 60% marks in aggregate for
            General/OBC and 55% marks for SC/ST in the qualifying exam.
          </li>
        </ul>
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Age</h2>
        Candidate should have attained or will attain 17 (seventeen) years of
        age as on 31st December of the year of admission (2018). This means, the
        candidate born on or after 2nd January 2002 are NOT eligible for the
        AIIMS MBBS 2018 exam.
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Nationality</h2>
        Citizens of India, Overseas Citizens of India (OCI) and Non-Resident
        Indians (NRI) are eligible to appear for the exam.
        <p>&nbsp;</p>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Reservation of Seats</h2>
        In the AIIMS MBBS 2018 Exam, seats are as per the directives of the
        Government of India. Check out the table provided below for the
        distribution of seats across different AIIMS centers.
        <p />
        <p>&nbsp;</p>
        <div
          className="col-sm-12 col-md-12 col-lg-12 "
          style={{
            boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
            padding: 10,
            overflow: "auto"
          }}
        >
          <table
            width="100%"
            className="table table-bordered table-hover AIIMS_SEAT"
          >
            <tbody>
              <tr style={{ fontWeight: 600 }}>
                <th>AIIMS Location</th>
                <th>UR</th>
                <th>OBC</th>
                <th>SC</th>
                <th>ST</th>
                <th>PWBD</th>
                <th>Foreign*</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>New Delhi</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td>07</td>
                <td>107</td>
              </tr>
              <tr>
                <td>Jodhpur</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td />
                <td>100</td>
              </tr>
              <tr>
                <td>Bhopal</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td />
                <td>100</td>
              </tr>
              <tr>
                <td>Bhubaneshwar</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td />
                <td>100</td>
              </tr>
              <tr>
                <td>Rishikesh</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td />
                <td>100</td>
              </tr>
              <tr>
                <td>Patna</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td />
                <td>100</td>
              </tr>
              <tr>
                <td>Raipur</td>
                <td>50</td>
                <td>27</td>
                <td>15</td>
                <td>08</td>
                <td>5%</td>
                <td />
                <td>100</td>
              </tr>
              <tr>
                <td>Guntur (Andhra Pradesh)</td>
                <td>25</td>
                <td>13</td>
                <td>8</td>
                <td>4</td>
                <td>5%</td>
                <td />
                <td>50</td>
              </tr>
              <tr>
                <td>Nagpur (Maharashtra)</td>
                <td>25</td>
                <td>13</td>
                <td>8</td>
                <td>4</td>
                <td>5%</td>
                <td />
                <td>50</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>400</td>
                <td>215</td>
                <td>121</td>
                <td>64</td>
                <td>5%</td>
                <td />
                <td>807</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>&nbsp;</p>
        <p>
          *The number of seats for Foreign Nationals is pending to be notified
          by the Government of India.
        </p>
      </div>
    </div>
  </div>
  <hr />
  <Footer/>
  <a
    href="x"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>

    )
 }