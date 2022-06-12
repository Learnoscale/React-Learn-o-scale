import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import Header from './Header';
import {Footer} from './Footer';
import img1 from './img/portfolio/portfolio-1.jpg'


export const Index = () => (
    
    <div>
      <Header/>
      {/* ======= Courses Section ======= */}
      <section id="services">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Courses</h3>
            <p className="section-description">
              We are Providing all solutions for all types of course Like Entrance
              Test ,recruitment Test ,Central and state level test online and
              Offline.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href="assets\img\libra.jpg">
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>IIT Courses</a>
                </h4>
                <Link to={'/jee-mains-demo'}><button className="button button2">IIT Main</button></Link>
                <Link to={'/jee-advance-demo'}><button className="button button2">IIT Advanced</button></Link>
                <button className="button button1">More Details</button>
                <p className="description">
                  online program for IIT mains,Advanced and foundation Batch for
                  fresher ...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>Railways COURSES</a>
                </h4>
                <button className="button button2" onclick="group-d.html">
                  Group D
                </button>
                <button className="button button2">RRB</button>
                <button className="button button2">NTPC</button>
                <Link to={'/rpf-notification'}><button className="button button2">RPF</button>
                </Link>
                <button className="button button2">RRB TC,TT</button>
                <button className="button button1">More Details</button>
                <p className="description" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>SSC COURSES</a>
                </h4>
                <button className="button button2">SSC CHSL</button>
                <Link to={'/ssc-cgl-form'}><button className="button button2">SSC CGL</button>
                </Link>
                <button className="button button2">SSC MTS</button>
                <button className="button button2">Stenographer</button>
                <button className="button button2">CPO </button>
                <button className="button button1">More Details</button>
                <p className="description">Find online support at your home...</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>UPSC EXAM COURSES</a>
                </h4>
                <button className="button button2">IAS</button>
                <button className="button button2">IFS</button>
                <button className="button button2">CDS</button>
                <button className="button button2">R.O</button>
                <button className="button button2">NDA</button>
                <button className="button button2">IES</button>
                <button className="button button1">More Details</button>
                <p className="description">for all State exams click detals </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-card-checklist" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>NEET Course</a>
                </h4>
                <Link to={'/aiims-notification'}><button className="button button2">AIIMS</button>
                </Link>
                <button className="button button2">AFMC</button>
                <button className="button button2">MCAT</button>
                <button className="button button2">AIPMT</button>
                <button className="button button2">Stae Medical </button>
                <button className="button button1">More Details</button>
                <p className="description">free pdf books,Mock test,etc</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-bar-chart" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>Airforce Courses</a>
                </h4>
                <button className="button button2">NDA</button>
                <button className="button button2">CDS</button>
                <button className="button button2">ARMY</button>
                <button className="button button2">NAVY</button>
                <button className="button button2">State Police </button>
                <button className="button button1">More Details</button>
                <p className="description">for click On More Details</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-binoculars" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>PCS Courses</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-brightness-high" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>BANKING EXAMS</a>
                </h4>
                <button className="button button2">SBI P.O.</button>
                <button className="button button2">SBI Cleark</button>
                <button className="button button2">IBPS P.O.</button>
                <button className="button button2">IBPS Cleark</button>
                <button className="button button2">NABARD </button>
                <button className="button button1">More Details</button>
                <p className="description">
                  All Banking Exam supprt and Solution
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-calendar4-week" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>STATE EXAMINATIONS</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Courses Section */}
      {/* ======= Free Practice Section ======= */}
      <section id="services">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Free Practice Test</h3>
            <p className="section-description">
              This Practice set is only for Demo It does not have complete course
              .It is free Class Demo.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href="assets\img\smart-1.jpg">
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>IIT Courses</a>
                </h4>
                <button className="button button2">Videos</button>
                <button className="button button2">Take Test</button>
                <button className="button button2">Exam Details</button>
                <button className="button button2">Free Demo</button>
                <button className="button button2">About IIT</button>
                <button className="button button1">Buy Course</button>
                <p className="description">Complete Package Purchase Course</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>Railways COURSES</a>
                </h4>
                <button className="button button2">Videos</button>
                <button className="button button2">Take Test</button>
                <button className="button button2">Exam Details</button>
                <button className="button button2">Free Demo</button>
                <button className="button button2">About Railways</button>
                <button className="button button1">Buy Course</button>
                <p className="description">For Complete Course Purchase it</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>SSC COURSES</a>
                </h4>
                <button className="button button2">Videos</button>
                <button className="button button2">Take Test</button>
                <button className="button button2">Exam Details</button>
                <button className="button button2">Free Demo</button>
                <button className="button button2">About SSC</button>
                <button className="button button1">Buy Course</button>
                <p className="description">For complete Course Purchase Online</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-briefcase" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>PCS EXAM COURSES</a>
                </h4>
                <button className="button button2">Videos</button>
                <button className="button button2">Take Test</button>
                <button className="button button2">Exam Details</button>
                <button className="button button2">Free Demo</button>
                <button className="button button2">About PCS</button>
                <button className="button button1">Buy Course</button>
                <p className="description">For complete Course Purchase Online</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-card-checklist" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>NEET Course</a>
                </h4>
                <p className="description">
                  Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat tarad limino ata
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-bar-chart" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>Airforce Courses</a>
                </h4>
                <p className="description">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-binoculars" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>PCS Courses</a>
                </h4>
                <p className="description">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-brightness-high" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>BANKING EXAMS</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <div className="icon">
                  <a href>
                    <i className="bi bi-calendar4-week" />
                  </a>
                </div>
                <h4 className="title">
                  <a href>STATE EXAMINATIONS</a>
                </h4>
                <p className="description">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Courses Section */}
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Top Online Selling Courses</h3>
            <p className="section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">IIT</li>
                <li data-filter=".filter-card">NEET</li>
                <li data-filter=".filter-web">RAILWAYS</li>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container-fluid"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src={img1}
                className="img-fluid"
                alt='img1'
              />
              <div className="portfolio-info">
                <h4>Mains</h4>
                <p>Advance</p>
                <a
                  href="assets/img/portfolio/portfolio-1.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>NEET Basics</h4>
                <p>NEET Advance</p>
                <a
                  href="assets/img/portfolio/portfolio-2.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/rail.png"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>RAILWAYS</h4>
                <p>NTPC</p>
                <a
                  href="assets/img/portfolio/portfolio-3.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-4.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-5.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 2"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                className="img-fluid"
                alt=''
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <a
                  href="assets/img/portfolio/portfolio-6.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="App 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-7.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 1"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <a
                  href="assets/img/portfolio/portfolio-8.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Card 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <a
                  href="assets/img/portfolio/portfolio-9.jpg"
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title="Web 3"
                >
                  <i className="bx bx-plus" />
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
      {/* ======= About Section ======= */}
      <section id="about">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row about-container-fluid">
            <div className="col-lg-6 content order-lg-1 order-2">
              <h2 className="title">Few Words About Us</h2>
              <p>
                We are creating and Promoting Knoweldge across the .Providing
                Facilities Resources for the newer.
              </p>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                <div className="icon">
                  <i className="bi bi-briefcase" />
                </div>
                <h4 className="title">
                  <a href>Mandeep Chaudhary</a>
                </h4>
                <p className="description">
                  SmartOnlineExam.com is proudly considered as a meaning of
                  success. The main motive of this company is to bring NTPC SM
                  Aptitude Test Series and NTPC SM/TA Psycho Test Series with the
                  help of innovative technologies.
                </p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                <div className="icon">
                  <i className="bi bi-card-checklist" />
                </div>
                <h4 className="title">
                  <a href>M.Nath Yadav</a>
                </h4>
                <p className="description"> Monday to Saturday 09am-6pm</p>
              </div>
              <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                <div className="icon">
                  <i className="bi bi-binoculars" />
                </div>
                <h4 className="title">
                  <a href>POOJA</a>
                </h4>
                <p className="description">
                  Software Developer at SNT super net Technology..
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 background order-lg-2 order-1"
              data-aos="fade-left"
              data-aos-delay={100}
            />
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* ======= Facts Section ======= */}
      <section id="facts">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Facts</h3>
            <p className="section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={232}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Classrooms</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={534}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Test Series</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={1463}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Videos Lecture</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start={0}
                data-purecounter-end={42}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Study Materials</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Facts Section */}
      {/* ======= Call To Action Section ======= */}
      <section id="call-to-action">
        <div className="container-fluid">
          <div className="row" data-aos="zoom-in">
            <div className="col-lg-9 text-center text-lg-start">
              <h3 className="cta-title">Call To Action</h3>
              <p className="cta-text">
                {" "}
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </div>
            <div className="col-lg-3 cta-btn-container-fluid text-center">
              <a className="cta-btn align-middle" href="ff">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Call To Action Section */}
      {/* ======= Team Section ======= */}
      <section id="team">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-header">
            <h3 className="section-title">Team</h3>
            <p className="section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="fade-up" data-aos-delay={100}>
                <div className="pic">
                  <img src="assets/img/team-1.jpg" alt='' />
                </div>
                <h4>M.Nath</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="fade-up" data-aos-delay={200}>
                <div className="pic">
                  <img src="assets/img/team-2.jpg" alt='' />
                </div>
                <h4>Mandeep Chaudhary</h4>
                <span>Director</span>
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="fade-up" data-aos-delay={300}>
                <div className="pic">
                  <img src="assets/img/team-3.jpg" alt='' />
                </div>
                <h4>Pooja Bhandari</h4>
                <span>Developer</span>
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="member" data-aos="fade-up" data-aos-delay={400}>
                <div className="pic">
                  <img src="assets/img/team-4.jpg" alt='' />
                </div>
                <h4>Gd</h4>
                <span>Developer</span>
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section */}
      {/* ======= Contact Section ======= */}
      <section id="contact">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="section-title">Contact</h3>
            <p className="section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </div>
        </div>
        {/* Uncomment below if you wan to use dynamic maps */}
        <iframe
          title="title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452"
          width="100%"
          height={380}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
        <div className="container-fluid mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="bi bi-geo-alt" />
                  <p>
                    A-108 1st-floor
                    <br />
                    Snt Super Net Technology
                    <br />
                    232104 Munirka Delhi
                  </p>
                </div>
                <div>
                  <i className="bi bi-envelope" />
                  <p>snt@example.com</p>
                </div>
                <div>
                  <i className="bi bi-phone" />
                  <p>+91 9125376367</p>
                </div>
              </div>
              <div className="social-links">
                <Link to="#" className="twitter">
                  <i className="bi bi-twitter" />
                </Link>
                <Link to="#" className="facebook">
                  <i className="bi bi-facebook" />
                </Link>
                <Link to="#" className="instagram">
                  <i className="bi bi-instagram" />
                </Link>
                <Link to="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="form">
                <form
                  
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows={5}
                      placeholder="Message"
                      required
                      defaultValue={""}
                    />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  {/*<div className="text-center"><button type="submit">Send Message</button></div>
            <div className="text-center"><button type="submit">Captcha</button></div>
            */}
                  <div
                    className="g-recaptcha"
                    data-sitekey="6Leit10fAAAAAEuv4RRNHQjG41M1DYnmeKIRR3a- "
                  />
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
      {/* End #main */}
      <Footer/>
    </div>
  )
  