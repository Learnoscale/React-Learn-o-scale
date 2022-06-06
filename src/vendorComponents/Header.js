import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUser} from "../services/Slices/UserSlice";
import {Link, useHistory} from 'react-router-dom';
import _ from 'lodash';
import {makeLogout} from "../services/Slices/UserSlice";
import {Button, Menu, MenuItem, Avatar} from "@material-ui/core";
import './style.css';

import im1 from './img/favicon.png';
import { crud } from "../services/crud";
export default  function Header(){

     const  isAuthenticated = useSelector(selectUser);
     const dispatch=useDispatch();
     const [userLogin, setUserLogin] = useState(false);
     const [adminLogin, setAdminLogin] = useState(false);
     const [loader, setLoader] = useState(false);
     const [home, setHome] = useState('');
     const history = useHistory;

     async function getHome()
     {
         setLoader(true);
         try{
         const data= await crud.retrieve('/homeapi/');
         setHome(data);
         console.log('homedata', data);
         setLoader(false);
     }
     catch(e){
         setLoader(false);
     }
     }
     const  getHomeDynamic = () => {
      const favicon = document.getElementById('favicon');
      favicon.href =  home[0]?.home_logo;
      if(home[0]?.home_title === undefined) {
       document.getElementById('slug').innerHTML = 'LMS';
      }
     else document.getElementById('slug').innerHTML = home[0]?.home_title; 
    }
     useEffect(() => {
       getHome();
       getHomeDynamic();
        
     },);


  return (

    <div>
       {loader}{adminLogin}
      {/* ======= Header ======= */}
      <div
        id="header"
        className="fixed-top d-flex align-items-center header-transparent header-scrolled"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
       {/* Change it to dynamic */}
          <div id="logo">
            <Link to="/">
            <img src={(home[1]?.home_logo === undefined) ? im1 : home[1]?.home_logo  } alt='logo' height={'50px'} width={'100%'} />
            </Link>
          </div>
          <nav id="navbar" className="navbar">
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
                      <li><Link to="foundation.html">Foundation Batches</Link> </li>
                      <li><Link to="ibps.html">IBPS P.O</Link></li>
                      <li><Link to="sbipo.html">SBI P.O </Link></li>
                      <li><Link to="ibps-clerk-test-series">IBPS Cleark</Link></li>
                      <li><Link to="#">SBI Cleark</Link></li>
                      <li><Link to="#">ECGC</Link></li>
                      <li><Link to="#">SIDBI</Link></li>
                      <li><Link to="#">SEBI</Link></li>
                      <li> <Link to="#">IBPS RRB</Link></li>
                      <li><Link to="#">RBI Grade B</Link></li>
                      <li><Link to="#">ESIC SSO</Link></li>
                      <li><Link to="#">FCI</Link></li>
                      <li><Link to="#">NABARD</Link></li>
                      <li><Link to="#">Show More</Link></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      <span>IIT COURSES</span>
                      <i className="bi bi-chevron-down" />
                    </Link>
                    <ul>
                      <li><Link to={"jee-mains-test-series"}>Main Exams</Link></li>
                      <li><Link to={"jee-advance-test-series"}>Advanced Exams</Link></li>
                      <li><Link to="#"> Full Course</Link></li>
                      <li><Link to="#">Foundation Batch</Link></li>
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
                        <Link to={"ssc-gd-test-series-hindi"}>SSC GD Hindi</Link>
                      </li>
                      <li>
                        <Link to="#">SSC Cleark</Link>
                      </li>
                      <li>
                        <Link to={"ssc-cgl-tier1-test-series"}>SSC Cgl tier one </Link>
                      </li>
                      <li>
                      <Link to="#">SSC CHSL</Link>
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
                        <Link to="#">SSC Cpo</Link>
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
                        <Link to="net">NET</Link>
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
                <Link to="/Video">
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
                    <Link to="#">Vedios</Link>
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
                <Link className="nav-link scrollto" to="#contact">
                  Contact
                </Link>
              </li>{(!(_.isEmpty(isAuthenticated)))?
                               <li className="nav-item dropdown">
                                <Button className='mt-1 mx-1' aria-controls="simple-menu" aria-haspopup="true"
                                        onClick={(event) => {
                                            setUserLogin(event.currentTarget)
                                        }}>
                                    <Avatar alt="Remy Sharp"
                                            src="https://media-exp1.licdn.com/dms/image/C4E03AQENlMNKH9CE0w/profile-displayphoto-shrink_200_200/0/1634066552225?e=1647475200&v=beta&t=2WaAjJJUXoHhK3P4gTa1jU5Z542bB1iC9IwF9nJdM-0"/>
                                </Button>
                                {(userLogin===adminLogin)?
                                <>
                                <Menu id="simple-menu" anchorEl={userLogin} keepMounted open={Boolean(userLogin)}
                                      onClose={(event) => {
                                          setAdminLogin(null)
                                      }}>
                                    <MenuItem onClick={() => {
                                   history.push('/dashboard')
                                        setUserLogin(null);
                                    }}>Admin</MenuItem>
                                    <MenuItem onClick={() => {
                                        setAdminLogin(null)
                                    }}>Profile</MenuItem>
                                    <MenuItem

                                        onClick={() => {
                                            dispatch(makeLogout({}))
                                            history.push('/')
                                        setAdminLogin(null);}}
                                    >Logout</MenuItem>
                                </Menu>
                                </>:
                                <>
                                <Menu id="simple-menu" anchorEl={userLogin} keepMounted open={Boolean(userLogin)}
                                      onClose={(event) => {
                                          setUserLogin(null)
                                      }}>
                                    <MenuItem onClick={() => {
                                        setUserLogin(null)
                                    }}>Profile</MenuItem>
                                    <MenuItem

                                        onClick={() => {
                                            dispatch(makeLogout({}))
                                            history.push('/login')
                                        setUserLogin(null);}}
                                    >Logout</MenuItem>
                                </Menu>
                                </>}
                                </li>
              :<li>
                <Link className="nav-link scrollto" to="/login-page">
                  Login
                </Link>
                
              </li>
}
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </div>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero">
        <div className="hero-container" data-aos="zoom-in" data-aos-delay={100}>
          <div id="main"></div>
          {/* Change it to dynamic */}
          
          {(home[0]?.home_title === undefined) ? <h1>Smart Online Exam</h1>:
          <h1>{home[0]?.home_title}</h1>
          }
          <h2>We are Creating and Promoting Talents</h2>
          <Link to="#about" className="btn-get-started">
            Get Started
          </Link>
        </div>
      </section>
      {/* End Hero Section */}
      <Link
        to="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </Link>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
      
    </div>
       
  )
     }
  