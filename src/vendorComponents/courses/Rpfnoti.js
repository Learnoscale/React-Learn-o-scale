import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import {Footer} from '../Footer'
import './Rpfnoti.css'

 export default function Rpfnoti() {
   

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
              <h1 className="text-white">RPF Notification</h1>
              <p className="text-white link-nav">
                <Link to={"/"}>Home </Link>{" "}
                <span className="fa fa-arrow-right" />{" "}
                <Link to="rpf-notification"> RPF Notification</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* mid content */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
            <h1 style={{ color: "#000000", fontSize: 30 }}>
              RPF Recruitment 2018 Notification, Online Application Form, Age-Limit,
              Vacancy, Exam Date
              <img
                className="img-responsive"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/images/New.png"
                alt="new"
              />
            </h1>
            <p>&nbsp;</p>
            <img
              className="img-responsive"
              src="https://soe-buck-lb.storage.googleapis.com/front-end/images/RPF-Application.png"
              alt="RPF"
            />
          </div>
          <p>&nbsp;</p>
          <div className="news" id="marqWrap">
            <div id="marquee" className="blink">
              <i className="fa fa-hand-o-right" /> Online registration will start on
              01-06-2018
            </div>
          </div>
          <div
            className="col-sm-12 col-md-12 col-lg-12 col-xs-12"
            style={{ textAlign: "justify", fontSize: 21, fontFamily: "serif" }}
          >
            <p></p>
            <h1 style={{ fontSize: 28 }}>
              RPF Recruitment 2018 Notification, Online Application Form, Age-Limit,
              Vacancy, Exam Date
            </h1>
            <h4>| Registration, Application Form, Dates, Syllabus</h4>
            ONLINE applications are invited from eligible Male and Female candidates
            for the recruitment of Constable in Level 3 of 7 th CPC Pay matrix for
            the vacancies in Railway Protection Force (RPF) of various Zones of
            Indian Railways and Railway Protection Special Force (RPSF).
            Applications complete in all respect should be submitted ONLINE ONLY
            before 23.59 hrs of 30/06/2018.
            <p />
            <br />
            <div className="col-sm-12">
              <div className="col-sm-4" />
              <div className="col-sm-4">
                <a href="s">
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
            <div
              className="col-sm-12 col-md-8 col-lg-8 col-xs-12"
              style={{ background: "#ff0909" }}
              id={1}
            >
              <h1 style={{ color: "#fff", fontSize: 35 }}>
                RPF &amp; RPSF Recruitment 2018 Details:
              </h1>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-12 col-xs-12"
              style={{
                boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                padding: 10
              }}
            >
              <p style={{ fontWeight: 700 }} align="center">
                Here, we are providing official schedule of RPF &amp; RPSF
                Recruitment 2018
              </p>
              <table className="table table-bordered table-hover">
                <tbody>
                  <tr>
                    <td>Examination Name</td>
                    <td>RPF &amp; RPSF</td>
                  </tr>
                  {/* <tr>
                    <td>Organized by</td>
                    <td>Staff Selection Commission</td>
                    
                  </tr> */}
                  <tr>
                    <td>Exam Mode</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Name of Posts</td>
                    <td>Constable in Level 3 of 7th</td>
                  </tr>
                  <tr>
                    <td>Total Number of Vacancies</td>
                    <td>9,739</td>
                  </tr>
                  <tr>
                    <td>Apply Mode</td>
                    <td>Online</td>
                  </tr>
                  <tr>
                    <td>Official Website</td>
                    <td>indianrailways.gov.in</td>
                  </tr>
                  <tr>
                    <td>Tentative Date for Computer Based Test (CBT)</td>
                    <td> In September and October 2018</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <span style={{ color: "red" }}>*</span> RPF :- Railway Protection
                Force
              </p>
              <p>
                <span style={{ color: "red" }}>*</span> RPSF :-Railway Protection
                Special Force
              </p>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div
              className="col-sm-12 col-md-8 col-lg-8"
              style={{ background: "#ff0909" }}
              id={1}
            >
              <h1 style={{ color: "#fff", fontSize: 35 }}>
                RPF &amp; RPSF 2018 Important Dates:
              </h1>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-12 col-xs-12"
              style={{
                boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                padding: 10
              }}
            >
              <div className="col-sm-6">
                <div className="dates">
                  <ul>
                    <li style={{ display: "-webkit-box" }}>
                      <div className="date-wrap">
                        <div className="day">10:00 AM</div>
                        <div className="date">01</div>
                        <div className="month">June, 2018</div>
                      </div>
                      <div className="date-info">
                        Opening Date for Submission of On-Line Application Form and
                        Fee.
                      </div>
                    </li>
                    <li style={{ display: "-webkit-box" }}>
                      <div className="date-wrap">
                        <div className="day">11:59 PM</div>
                        <div className="date">30</div>
                        <div className="month">June, 2018</div>
                      </div>
                      <div className="date-info">
                        Last Date of Submission of On-Line Application Form
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="dates">
                  <ul>
                    <li style={{ display: "-webkit-box" }}>
                      <div className="date-wrap">
                        <div className="day">11:59 PM</div>
                        <div className="date">02</div>
                        <div className="month">July, 2018</div>
                      </div>
                      <div className="date-info">
                        Last Date for On-Line Fee Payment
                        <br />
                        &nbsp;
                      </div>
                    </li>
                    <li style={{ display: "-webkit-box" }}>
                      <div className="date-wrap">
                        <div className="day">11:59 PM</div>
                        <div className="date">05</div>
                        <div className="month">July, 2018</div>
                      </div>
                      <div className="date-info">
                        Last Date for Off-Line Fee Payment
                        <br />
                        &nbsp;
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div
              className="col-sm-6 col-md-6 col-lg-6"
              style={{ background: "#ff0909", width: "auto" }}
            >
              <h1 style={{ color: "#fff", fontSize: 35 }}>Eligibility Criteria</h1>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-12"
              style={{
                boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                padding: 10,
                overflow: "auto"
              }}
            >
              <ol type="i">
                <li>
                  <i className="fa fa-angle-double-right" />A candidate must be a
                  citizen of India.
                </li>
                <li>
                  <i className="fa fa-angle-double-right" />A candidate in whose
                  case a certificate of eligibility is necessary may be admitted to
                  the examination but the offer of appointment may be given only
                  after the necessary eligibility certificate has been issued to him
                  by the Government of India.
                </li>
                <li>
                  <strong>
                    <u>Educational Qualification and age</u>
                  </strong>
                  <u>:</u>
                  <br />
                  <table className="table table-bordered table-hover table-responsive">
                    <tbody>
                      <tr>
                        <td rowSpan={2}> Category </td>
                        <td rowSpan={2}> Educational Qualification </td>
                        <td colSpan={2}> Age </td>
                      </tr>
                      <tr>
                        <td> Min </td>
                        <td> Max </td>
                      </tr>
                      <tr>
                        <td> Constable ( Executive)</td>
                        <td> SSLC/Matric from a recognized Board. </td>
                        <td> 18 </td>
                        <td> 25 </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Note</strong>: Matriculation certificate from a
                    recognized Board for Constable (Executive) shall only be valid.
                    Those awaiting results of the final examination of the
                    prescribed educational qualification{" "}
                    <strong>SHOULD NOT apply</strong>.
                  </p>
                </li>
                <li>
                  <strong>
                    <u>Physical Measurement:</u>
                  </strong>
                  <table className="table table-bordered table-hover table-responsive">
                    <tbody>
                      <tr>
                        <td rowSpan={2}> Category </td>
                        <td colSpan={2}> Height (in CMs) </td>
                        <td colSpan={2}> Chest ( in CMs) ( Only for Male)</td>
                      </tr>
                      <tr>
                        <td> Male </td>
                        <td> Female </td>
                        <td> Unexpanded </td>
                        <td> Expanded </td>
                      </tr>
                      <tr>
                        <td> UR/OBC </td>
                        <td> 165 </td>
                        <td> 157 </td>
                        <td> 80 </td>
                        <td> 85 </td>
                      </tr>
                      <tr>
                        <td> SC/ST </td>
                        <td> 160 </td>
                        <td> 152 </td>
                        <td> 76.2 </td>
                        <td> 81.2 </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          For Garhwalis, Gorkhas, Marathas, Dogras, Kumaonese and
                          other Categories specified by Govt.{" "}
                        </td>
                        <td> 163 </td>
                        <td> 155 </td>
                        <td> 80 </td>
                        <td> 85 </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  <i className="fa fa-angle-double-right" />
                  Date of birth mentioned in 10th/Matriculation or equivalent
                  certificate alone shall be acceptable. The lower and upper age
                  limit indicated in the Employment Notice will be reckoned as on 1
                  <sup style={{ top: 8 }}>st</sup> July 2018.
                  <p>
                    <i className="fa fa-angle-double-right" />
                    The relaxation in upper age limit/maximum upper age for the
                    following categories/ communities in the table below is
                    applicable subject to submission of requisite certificates:
                  </p>
                  <br />
                  <table className="table table-bordered table-hover table-responsive">
                    <tbody>
                      <tr>
                        <td> Srl No </td>
                        <td> Category </td>
                        <td> Age relaxation permissible beyond upper age limit </td>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td> SC/ST Candidates </td>
                        <td> 5 years </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> OBC – Non Creamy Layer candidates </td>
                        <td> 3 years </td>
                      </tr>
                      <tr>
                        <td> 3. </td>
                        <td>
                          {" "}
                          Ex-servicemen candidates who have put in not less than 6
                          months continuous service after attestation.{" "}
                        </td>
                        <td>
                          {" "}
                          To the extent of service rendered in Armed Forces plus UR
                          – 3 years, OBC-Non-creamy Layer – 6 years . SC/ST – 8
                          years
                        </td>
                      </tr>
                      <tr>
                        <td> 4. </td>
                        <td>
                          {" "}
                          Candidates who had ordinarily been domiciled in the State
                          of Jammu &amp; Kashmir during the period from 1
                          <sup>st</sup> January 1980 to 31
                          <sup style={{ top: 5 }}>st</sup> December 1989 ( Un){" "}
                        </td>
                        <td>
                          {" "}
                          UR – 5 years OBC–Non-creamy layer - 8 years SC/ST – 10
                          years
                        </td>
                      </tr>
                      <tr>
                        <td> 5. </td>
                        <td>
                          {" "}
                          Central Govt. employees (Un) other than ex-servicemen who
                          have rendered not less than 3 years of regular &amp;
                          continuous service on date of reckoning.{" "}
                        </td>
                        <td>
                          {" "}
                          UR – 5 years OBC–Non-creamy layer - 8 years SC/ST – 10
                          years
                        </td>
                      </tr>
                      <tr>
                        <td> 6. </td>
                        <td>
                          {" "}
                          Widows, divorced women and women judicially separated from
                          husband but remarried{" "}
                        </td>
                        <td>
                          {" "}
                          UR – 2 years OBC- Non-creamy layer – 5 years. SC/ST – 7
                          years
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li>
                  Date of birth of candidates should be between the dates given
                  below:
                  <p>(Both dates inclusive)</p>
                  <table className="table table-bordered table-hover table-responsive">
                    <tbody>
                      <tr>
                        <td rowSpan={2}> Srl No </td>
                        <td rowSpan={2}> Age Group </td>
                        <td colSpan={3}>
                          {" "}
                          Upper limit of Date of Birth ( Not earlier than){" "}
                        </td>
                        <td> Lower limit of Date of Birth ( Not later than) </td>
                      </tr>
                      <tr>
                        <td> UR </td>
                        <td> OBC-Non Creamy Layer </td>
                        <td> SC/ST </td>
                        <td> For all category/category </td>
                      </tr>
                      <tr>
                        <td> 1. </td>
                        <td> 18 to 25 </td>
                        <td> 02.07.93 </td>
                        <td> 02.07.90 </td>
                        <td> 02.07.88 </td>
                        <td> 01.07.2000 </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>
                    <strong>Note</strong>: If a candidate is eligible for relaxation
                    of age on more than one ground, he/she would be accorded the
                    highest of the age relaxations (not cumulative) for which he/she
                    is eligible.
                  </p>
                  <p>
                    <strong>
                      No age relaxation is allowed to SC/ST/OBC-Non-creamy Layer
                      (NCL) candidates applying against un vacancies.
                    </strong>
                  </p>
                </li>
              </ol>
              <div className="tabcontent" style={{ display: "block" }}>
                <h3 className="page-title">Examination Fee</h3>
                <p>
                  Candidates applying for the post notified in this Employment
                  Notice have to pay the prescribed fee as per their category
                  detailed below:
                </p>
                <div>
                  <table className="table table-bordered table-hover table-responsive">
                    <tbody>
                      <tr>
                        <th> S.No. </th>
                        <th> Candidates Categories </th>
                        <th> Fee </th>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td>
                          {" "}
                          For all candidates except the fee concession categories
                          mentioned below at Sl No. 2<br />* Rs. 400/- shall be
                          refunded duly deducting bank charges on appearing in CBT.
                        </td>
                        <td> Rs. 500/- </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td>
                          {" "}
                          For candidates belonging to
                          SC/ST/Ex-serviceman/Female/Minorities/Economically
                          backward class. <br />* This fee of Rs. 250/- shall be
                          refunded duly deducting bank charges on appearing in CBT.
                        </td>
                        <td> Rs. 250/-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>Note</strong>: In the event of cancellation of notified
                  vacancies, the examination fee will not be refunded.
                </p>
              </div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div
              className="col-sm-6 col-md-6 col-lg-6"
              style={{ background: "#ff0909", width: "auto" }}
              id={1}
            >
              <h1 style={{ color: "#fff", fontSize: 31, marginBottom: "-26px" }}>
                RECRUITMENT PROCESS
              </h1>
              <br />
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-12"
              style={{
                boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                padding: 10,
                overflow: "auto"
              }}
            >
              <p>
                <i className="fa fa-angle-double-right" /> Only single online
                application has to be submitted by the candidate to the Employment
                Notice for the notified post through the link
                &nbsp;&nbsp;&nbsp;provided on the official website
              </p>
              <p>
                <i className="fa fa-angle-double-right" />
                The entire recruitment process shall involve a Computer Based Test
                (CBT),Physical Efficiency Test (PET)
              </p>
              <br />
              <p style={{ fontWeight: 500 }} align="center">
                PHASE – I – COMPUTER BASED TEST ( CBT){" "}
              </p>
              <div style={{ overflow: "auto" }}>
                <table className="table table-bordered table-hover table-responsive">
                  <tbody>
                    <tr>
                      <td colSpan={5}>
                        Candidates will be required to answer all questions and
                        shall be awarded 01(one) mark for each correct answer.
                        Negative marks shall be awarded for every wrong answer. 1/3
                        marks shall be deducted for every wrong answer. The details
                        are given below:-
                      </td>
                    </tr>
                    <tr>
                      <td>Paper</td>
                      <td>Subject</td>
                      <td>No of Questions</td>
                      <td>Maximum Marks</td>
                      <td>Exam Duration</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>General Awareness</td>
                      <td>50</td>
                      <td />
                      <td rowSpan={4}>90 min</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Arithmetic</td>
                      <td>35</td>
                      <td />
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>General Intelligence &amp; reasoning</td>
                      <td>35</td>
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>&nbsp;</p>
              <p style={{ fontWeight: 500 }} align="center">
                PHASE – II-PHYSICAL EFFICIENCY TEST(PET) &amp; PHYSICAL MEASUREMENT
                (PMT){" "}
              </p>
              <div style={{ overflow: "auto" }}>
                <table className="table table-bordered table-hover table-responsive">
                  <tbody>
                    <tr>
                      <td colSpan={5}>
                        Based on the merit of the candidates in the CBT, candidates
                        will be called for PET and PMT to the extent of 10 times the
                        category wise total vacancy in Group of Zonal Railways/RPSF
                        notified. However, this limit may be increased/decreased as
                        required ensuring availability of adequate candidates for
                        all the notified posts. Passing Physical Efficiency Test
                        (PET) is mandatory and the same will be qualifying in
                        nature. No marks are to be awarded. The criteria for PET is
                        as under: The details are given below:-
                      </td>
                    </tr>
                    <tr>
                      <th>Category</th>
                      <th>1600 meters run</th>
                      <th>800 meters run</th>
                      <th>Long jump</th>
                      <th>High jump</th>
                    </tr>
                    <tr>
                      <td>Constable (Male) </td>
                      <td>5 min 45 secs</td>
                      <td>---</td>
                      <td>14 feet</td>
                      <td>4 feet</td>
                    </tr>
                    <tr>
                      <td>Constable )Female)</td>
                      <td>---</td>
                      <td>3 min 40 secs</td>
                      <td>9 feet</td>
                      <td>3 feet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div
              className="col-sm-6 col-md-6 col-lg-6"
              style={{ background: "#ff0909" }}
              id={1}
            >
              <h1 style={{ color: "#fff", fontSize: 35 }}>
                RPF &amp; RPSF Syllabus 2018
              </h1>
            </div>
            <div
              className="col-sm-12 col-md-12 col-lg-12"
              style={{
                boxShadow: "0px 0px 13px 5px rgba(0, 0, 0, .3)",
                padding: 10,
                overflow: "auto"
              }}
            >
              <div style={{ overflow: "auto" }}>
                <table className="table table-bordered table-hover table-responsive">
                  <tbody>
                    <tr>
                      <th>
                        <p>
                          <b>General Awareness</b>
                        </p>
                      </th>
                      <th>
                        <p>
                          <b>Arithmetic</b>
                        </p>
                      </th>
                      <th>
                        <p>
                          <b>General Intelligence &amp; reasoning</b>
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <td> general awareness of the environment around him</td>
                      <td>Questions on Number systems</td>
                      <td>Questions on analogies</td>
                    </tr>
                    <tr>
                      <td>knowledge of current events </td>
                      <td>whole numbers</td>
                      <td>similarities and differences</td>
                    </tr>
                    <tr>
                      <td> Indian History, Art &amp; Culture</td>
                      <td>
                        decimal and fractions and relationships between numbers
                      </td>
                      <td>spatial visualization</td>
                    </tr>
                    <tr>
                      <td> Geography</td>
                      <td>fundamental arithmetical operations</td>
                      <td>spatial orientation</td>
                    </tr>
                    <tr>
                      <td>Economics</td>
                      <td>percentages, ratio and proportion, </td>
                      <td>problem solving analysis, judgment, decision making, </td>
                    </tr>
                    <tr>
                      <td>General Polity</td>
                      <td>, averages, interest,profit and loss</td>
                      <td>visual memory, discriminating observation</td>
                    </tr>
                    <tr>
                      <td>General Polity</td>
                      <td>discount, use of table and graphs</td>
                      <td> relationship concepts, arithmetical reasoning</td>
                    </tr>
                    <tr>
                      <td>Indian Constitution</td>
                      <td> mensuration</td>
                      <td>
                        verbal and figure classification, arithmetic number series,{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>Sports</td>
                      <td>time and distance</td>
                      <td>non-verbal series, coding and decoding</td>
                    </tr>
                    <tr>
                      <td>General Science etc</td>
                      <td> ratio and proportion etc.</td>
                      <td>statement conclusion, syllogistic reasoning etc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
      {/* Footer End */}
      <hr />
      <Footer/>
      <a
        href="f"
        className="scroll_top"
        title="Scroll to Top"
        style={{ display: "inline" }}
      >
        Scroll
      </a>
    </>
    
    )
 }