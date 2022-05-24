import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import './Faqs.css'
import { Link } from 'react-router-dom'

export default function Faqs() {

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
            FAQ
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to={"faqs"}>FAQ</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div
    className="container-fluid"
    style={{
      boxShadow: "1px 2px 3px 2px #cdc6c6",
      backgroundColor: "ghostwhite",
      marginTop: "3%",
      marginBottom: 20
    }}
  >
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xs-12">
        <div className="wrapper center-block">
          <div
            className="panel-group"
            id="accordion"
            role="tablist"
            aria-multiselectable="false"
          >
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingOne">
                <h4 className="panel-title">
                  <a
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {" "}
                    Q. 1 What is Computer Based Examination (Online mode)?{" "}
                  </a>
                </h4>
              </div>
              <div
                id="collapseOne"
                className="panel-collapse collapse in"
                role="tabpanel"
                aria-labelledby="headingOne"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A. It is a Computer Based Exam which will be conducted using
                  the Internet to make it safe, secure and un-interrupted.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {" "}
                    Q. 2 What are the advantages in opting for Computer Based
                    Examination?{" "}
                  </a>
                </h4>
              </div>
              <div
                id="collapseTwo"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A.Computer Based Examination's Advantages :
                  <ol style={{ listStyle: "initial" }}>
                    <li>
                      The candidate can review or re-answer any question at any
                      point of time during the examination.
                    </li>
                    <li>
                      The candidate can change the option of the answer during
                      the exam duration and it is one of the most important
                      features of computer based examination.
                    </li>
                    <li>
                      The candidate also has the option to mark any answer for
                      review at later stage during the examination.
                    </li>
                    <li>
                      There will be a panel on computer screen showing all the
                      question nos. in different colour scheme which will
                      indicate which are the questions answered, left unanswered
                      and marked for review
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {" "}
                    Q. 3 Is Computer Based Examination based on Internet?{" "}
                  </a>
                </h4>
              </div>
              <div
                id="collapseThree"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A. Yes. If need exam without Internet than purchase offline
                  mode which available in CD/ DVD or downloadable exe.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingFour">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    {" "}
                    Q. 4 What computer knowledge is required to appear for
                    Computer Based Examination ?{" "}
                  </a>
                </h4>
              </div>
              <div
                id="collapseFour"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A.The candidate needs to know only how to use computer mouse.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingFive">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    {" "}
                    Q. 5 How secure is the computer based examination?{" "}
                  </a>
                </h4>
              </div>
              <div
                id="collapseFive"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFive"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A. It is very secure with zero error possibility as human
                  intervention is minimal.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingSix">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    {" "}
                    Q. 6 How a candidate can practice for Computer Based
                    Examination?
                  </a>
                </h4>
              </div>
              <div
                id="collapseSix"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSix"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A.The Mock Test will be available on www.smartonlineexam.com
                  website. The Candidate can download the same and practice as
                  many times as he/she wants. This will give look and feel of
                  the format of Computer Based Exam in simulation environment.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingSeven">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    {" "}
                    Q. 7 What will happen in case there is some problem in
                    computer during the examination?{" "}
                  </a>
                </h4>
              </div>
              <div
                id="collapseSeven"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingSeven"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A. Exam automatic pause and start from last stage when login.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingEight">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    {" "}
                    Q. 8 Will there be a question booklet like in offline
                    examination?
                  </a>
                </h4>
              </div>
              <div
                id="collapseEight"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingEight"
              >
                <div className="panel-body" style={{ padding: 34 }}>
                  A. In Computer Based Examination the questions will appear on
                  computer screen along-with the answer options.
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingNine">
                <h4 className="panel-title">
                  <a
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    {" "}
                    Q. 9 Will a Candidate get the question paper of computer
                    based examination as he/she gets in Pen and Paper based
                    exam?{" "}
                  </a>
                </h4>
              </div>
            </div>
            <div
              id="collapseNine"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingNine"
            >
              <div className="panel-body" style={{ padding: 34 }}>
                A.&nbsp;No.
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTen">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  {" "}
                  Q. 10 How will a candidate answer a question in the Computer
                  Based examination?{" "}
                </a>
              </h4>
            </div>
            <div
              id="collapseTen"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTen"
            >
              <div className="panel-body" style={{ padding: 34 }}>
                A.There will four options of each question. The candidate has to
                click one of the options using computer mouse which can be
                reviewed or re- answered any time during the duration of the
                examination.
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingElev">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseElev"
                  aria-expanded="false"
                  aria-controls="collapsElev"
                >
                  {" "}
                  Q. 11 How will a candidate come to know which are the
                  questions left unanswered?{" "}
                </a>
              </h4>
            </div>
            <div
              id="collapseElev"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingElev"
            >
              <div className="panel-body" style={{ padding: 34 }}>
                A.There will be a panel on computer screen showing all the
                question nos. in different color scheme which will indicate
                which are the questions answered, left unanswered and marked for
                review.
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwl">
              <h4 className="panel-title">
                <a
                  className="collapsed"
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapseTwl"
                  aria-expanded="false"
                  aria-controls="collapseTwl"
                >
                  {" "}
                  Q. 12 Can a candidate change his/her answer ?{" "}
                </a>
              </h4>
            </div>
            <div
              id="collapseTwl"
              className="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="headingTwl"
            >
              <div className="panel-body" style={{ padding: 34 }}>
                A.Yes, during the exam duration and it is one of the most
                important feature of computer based examination.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
  {/* Footer End */}
  <a
    href="d"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>
  
  )
}