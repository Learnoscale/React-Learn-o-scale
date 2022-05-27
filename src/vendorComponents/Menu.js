import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import im1 from './img/favicon.png';
import { List } from '@material-ui/core';
export default function Menu() {
    
    return(
        <>
         {/* ======= Header ======= */}
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent header-scrolled"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
       
          <div id="logo">
            <Link to="/">
              <img src={im1} alt='favicon' />
            </Link>
          </div>
          <nav id="navbar" className="navbar1">
            <ul>
              <li className="dropdown">
                <Link to="#">
                  <span>Online Course</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Banking And Insurance</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <a href="foundation.html">Foundation Batches</a>
                      </li>
                      <li>
                        <a href="ibps.html">IBPS P.O</a>
                      </li>
                      <li>
                        <a href="sbipo.html">SBI P.O </a>
                      </li>
                      <li>
                      <Link to="ibps-clerk-test-series">IBPS Clerk</Link>
                      </li>
                      <li>
                        <Link to="#">SBI Cleark</Link>
                      </li>
                      <li>
                        <Link to="#">ECGC</Link>
                      </li>
                      <li>
                        <Link to="#">SIDBI</Link>
                      </li>
                      <li>
                        <Link to="#">SEBI</Link>
                      </li>
                      <li>
                        <Link to="#">IBPS RRB</Link>
                      </li>
                      <li>
                        <Link to="#">RBI Grade B</Link>
                      </li>
                      <li>
                        <Link to="#">ESIC SSO</Link>
                      </li>
                      <li>
                        <Link to="#">FCI</Link>
                      </li>
                      <li>
                        <Link to="#">NABARD</Link>
                      </li>
                      <li>
                        <Link to="#">Show More</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>IIT COURSES</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <Link to={"jee-mains-test-series"}>Main Exams</Link>
                      </li>
                      <li>
                       <Link to={"jee-advance-test-series"}>Advanced Exams</Link>
                      </li>
                      <li>
                        <Link to="#"> Full Course</Link>
                      </li>
                      <li>
                        <Link to="#">Foundation Batch</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Medical Courses</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">PMT Exams</Link>
                      </li>
                      <li>
                      <Link to={"aiims-test-series"}>AIIMS Exams</Link>
                      </li>
                      <li>
                        <Link to="#">CPMT Exams</Link>
                      </li>
                      <li>
                        <Link to="#">State Medical Exams</Link>
                      </li>
                      <li>
                        <Link to="#">Others Exams</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>SSC Exams</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <List to={"ssc-gd-test-series-hindi"}>SSC GD Hindi</List>
                      </li>
                      <li>
                        <Link to="#">SSC Cleark</Link>
                      </li>
                      <li>
                      <Link to={"ssc-cgl-tier1-test-series"}>SSC Cgl tier one </Link>
                      </li>
                      <li>
                      <Link to="ssc-chsl-test-series">SSC CHSL</Link>
                      </li>
                      <li>
                        <Link to="#">SSC Stenographer</Link>
                      </li>
                      <li>
                        <Link to="#">SSC MTS</Link>
                      </li>
                      <li>
                        <Link to={"delhi-police"}>Delhi Police</Link>
                      </li>
                      <li>
                        <Link href="#">SSC Cpo</Link>
                      </li>
                      <li>
                        <Link to="#">Indian Oil</Link>
                      </li>
                      <li>
                        <Link to="#">Show More</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Railways</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">RRB JE</Link>
                      </li>
                      <li>
                        <Link to="#">NTPC</Link>
                      </li>
                      <li>
                        <Link to="#">GROUP D</Link>
                      </li>
                      <li>
                        <Link to="#">ALP AND TECHNICIAN</Link>
                      </li>
                      <li>
                        <Link to="#">ASSISTANT MANAGER</Link>
                      </li>
                      <li>
                        <Link to={"asm-psycho-test-series"}>ASM Psycho Test Series</Link>
                      </li>
                      <li>
                        <Link to="#">SECTION ENGINEERS</Link>
                      </li>
                      <li>
                        <Link to="#">GOODS GUARDS</Link>
                      </li>
                      <li>
                        <Link to="#">ASSISTANT MANAGER</Link>
                      </li>
                      <li>
                        <Link to="#">SCRA</Link>
                      </li>
                      <li>
                        <Link to="#">TT AND TC</Link>
                      </li>
                      <li>
                        <Link to="#">SHOW MORE</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Gate/Engineering</Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Teaching</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">CTET</Link>
                      </li>
                      <li>
                        <Link to="#">SLET</Link>
                      </li>
                      <li>
                        <Link to="#">SET</Link>
                      </li>
                      <li>
                        <Link to="#">NET</Link>
                      </li>
                      <li>
                        <Link to="#">CSIR</Link>
                      </li>
                      <li>
                        <Link to="#">TET</Link>
                      </li>
                      <li>
                        <Link to="#">KENDRIYA</Link>
                      </li>
                      <li>
                        <Link to="#">SHOW MORE</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Defence</Link>
                  </li>
                  <li>
                    <Link to="#">UPSC</Link>
                  </li>
                  <li>
                    <Link to="#">State Exam</Link>
                  </li>
                  <li>
                    <Link to="#">Agriculture</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Course Videos</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul>
                  <li>
                    <Link to="#">IIT VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">NEET VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">SSC VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">RAILWAYS VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">UPSC VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">BANKING VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">Test Series</Link>
                  </li>
                  <li>
                    <Link to="#">Live Sessions</Link>
                  </li>
                  <li>
                    <Link to="#">Announcements</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Study Materials</span>{" "}
                  <i className="bi bi-chevron-down" />
                </Link>
                <ul>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Aptitude</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">Simplifications</Link>
                      </li>
                      <li>
                        <Link to="#">Number System</Link>
                      </li>
                      <li>
                        <Link to="#">Age Problems</Link>
                      </li>
                      <li>
                        <Link to="#">Time And Work</Link>
                      </li>
                      <li>
                        <Link to="#">Speed And Distance</Link>
                      </li>
                      <li>
                        <Link to="#">Calender</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Reasoning</Link>
                  </li>
                  <li>
                    <Link to="#">English</Link>
                  </li>
                  <li>
                    <Link to="#">General Knoweldge</Link>
                  </li>
                  <li>
                    <Link to="#">VIDEOS</Link>
                  </li>
                  <li>
                    <Link to="#">E.Notes</Link>
                  </li>
                  <li>
                    <Link to="#">e.Books</Link>
                  </li>
                  <li>
                    <Link to="#">Live Sessions</Link>
                  </li>
                  <li>
                    <Link to="#">Announcements</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span> Exam ALERT</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul>
                  <li>
                    <Link to="#">APPLY FOR JOB</Link>
                  </li>
                  <li>
                    <Link to="#">SYLLABUS</Link>
                  </li>
                  <li>
                    <Link to="#">DOWNLOAD ADMIT CARD</Link>
                  </li>
                  <li>
                    <Link to="#">ANSWAR KEY</Link>
                  </li>
                  <li>
                    <Link to="#">RESULTS</Link>
                  </li>
                  <li>
                    <Link to="#">Live Sessions</Link>
                  </li>
                  <li>
                    <Link to="#">Announcements</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#">
                  <span>Live Exam</span> <i className="bi bi-chevron-down" />
                </Link>
                <ul>
                  <li className="dropdown">
                    <Link to="#">
                      <span>Puma</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li>
                        <Link to="#">IBPS EXAMS</Link>
                      </li>
                      <li>
                        <Link to="#">SBI PO EXAMS</Link>
                      </li>
                      <li>
                        <Link to="#">BOB PO EXAMS</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#">Test Series</Link>
                  </li>
                  <li>
                    <Link to="#">Batches</Link>
                  </li>
                  <li>
                    <Link to="#">Practice</Link>
                  </li>
                  <li>
                    <Link to="#">Results</Link>
                  </li>
                  <li>
                    <Link to="#">GK/Currents Affairs</Link>
                  </li>
                  <li>
                    <Link to="#">Blog</Link>
                  </li>
                  <li>
                    <Link to="#">Analysis</Link>
                  </li>
                  <li>
                    <Link to="#">Live Sessions</Link>
                  </li>
                  <li>
                    <Link to="#">Announcements</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <Link className="nav-link scrollto" to="/login-page">
                  Login
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
        </>
    )
}