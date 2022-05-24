import React from 'react';
import { Link } from 'react-router-dom';
import './Career.css';
import { Footer } from './Footer';
import Menu from './Menu';

export default function Careers() {


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
            Careers
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to="careers"> Careers</Link>
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
      marginTop: 20,
      display: "grid"
    }}
  >
    <div
      className="product-detail_tab"
      style={{ marginLeft: 42, borderWidth: 0 }}
    >
      <div className="row">
        <div className="col-md-4">
          <ul className="product-detail_tab-header" style={{ display: "grid" }}>
            <li className="active">
              <a href="#overview" data-toggle="tab">
                <h1 style={{ fontSize: 20 }}>Current Openings</h1>
              </a>
            </li>
            <li>
              <a href="#amenities" data-toggle="tab">
                Sr. / Jr. Software Developers
              </a>
            </li>
            <li>
              <a href="#package" data-toggle="tab">
                SEO Executives
              </a>
            </li>
            <li>
              <a href="#rates" data-toggle="tab">
                Content Writer
              </a>
            </li>
            <li>
              <a href="#calendar" data-toggle="tab">
                Data Analyst / Sr. Data Analyst
              </a>
            </li>
            <li>
              <a href="#business" data-toggle="tab">
                {" "}
                Business Development Manager
              </a>
            </li>
            <li>
              <a href="#customer" data-toggle="tab">
                Customer Care Executive
              </a>
            </li>
            <li>
              <a href="#quality" data-toggle="tab">
                Quality controller
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-8">
          <div className="product-detail_tab-content tab-content">
            {/* OVERVIEW */}
            <div className="tab-pane fade active in" id="overview">
              <div className="product-detail_overview">
                <h5 className="text-uppercase" style={{ color: "#427994" }}>
                  Current Openings:-
                </h5>
                <div className="row">
                  <div className="col-xs-9 col-md-9">
                    <ul
                      className="contentmatter-ul"
                      style={{
                        paddingLeft: 44,
                        listStyle: "initial",
                        color: "#333131"
                      }}
                    >
                      <li>Sr. / Jr. Software Developers</li>
                      <li>
                        <span>SEO Executives</span>
                      </li>
                      <li>
                        <span>Content Writer Quality controler</span>
                      </li>
                      <li>
                        <span>Data Analyst / Sr. Data Analyst</span>
                      </li>
                      <li>
                        <span>Business Development Manager</span>
                      </li>
                      <li>
                        <span>Customer Care Executive</span>
                      </li>
                      <li>
                        <span>User Experience Engineer Opportunity</span>
                      </li>
                      <li>
                        <span>Assistant Manager - Client Servicings</span>
                      </li>
                      <li>
                        <span>Product Manager</span>
                      </li>
                      <li>
                        <span>Client Servicing Executive</span>
                      </li>
                      <li>
                        <span>Marketing Executives</span>
                      </li>
                      <li>
                        <span>Back Office Management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* END / OVERVIEW */}
            {/* AMENITIES */}
            <div className="tab-pane fade " id="amenities">
              <div className="product-detail_amenities">
                <h5 className="text-uppercase" style={{ color: "#427994" }}>
                  Sr. / Jr. Software Developers
                </h5>
                <div className="row">
                  <div className="col-xs-9 col-lg-9">
                    <p style={{ marginBottom: 8, marginTop: 5 }}>
                      <b style={{ marginLeft: 30, color: "#333131" }}>
                        Job Location:
                      </b>
                      &nbsp;&nbsp; Alwar (Raj.) <br />
                    </p>
                    <p>
                      <b style={{ marginLeft: 10, color: "#427994" }}>
                        Job Description:
                      </b>
                    </p>
                    <p
                      className="contentmatter"
                      style={{
                        paddingLeft: "3em",
                        color: "#333131",
                        textAlign: "justify",
                        paddingRight: "1em"
                      }}
                    >
                      Smart Online Exam team is looking for Software Engineers
                      to be a part of a dynamic team working on building a
                      scalable e-commerce platform using the latest web
                      technologies. Your work will matter: your efforts will be
                      readily seen by millions of users. You will be involved in
                      all phases of development: architecture &amp; design,
                      prototyping, implementation &amp; testing, analysis &amp;
                      documentation, deployment &amp; support. Flexibility and
                      collaboration, coupled with strong object-oriented design
                      &amp; software development skills are keys to success in
                      this position.
                      <br />
                    </p>
                    <p className="contentmatter" style={{ marginLeft: 11 }}>
                      <b style={{ color: "#427994" }}>
                        Essential Duties &amp; Responsibilities:
                      </b>
                    </p>
                    <ul
                      className="contentmatter-ul"
                      style={{
                        marginLeft: 44,
                        color: "#333131",
                        listStyle: "initial"
                      }}
                    >
                      <li>
                        <span>
                          Take the product/feature idea from conceptualization
                          phase to delivery with all the relevant high quality
                          artifacts during the cycle.
                        </span>
                      </li>
                      <li>
                        <span>
                          Follow best practices in Software Engineering.
                        </span>
                      </li>
                      <li>
                        <span>Strive for excellence.</span>
                      </li>
                      <li>
                        <span>
                          Deliver high quality, elegantly designed,
                          maintainable, well-tested, well documented, code.
                        </span>
                      </li>
                      <li>
                        <span>
                          Be up-to-date with technology developments and be a
                          valuable member.
                        </span>
                      </li>
                      <li>
                        <span>Innovate.</span>
                      </li>
                    </ul>
                    <p className="contentmatter" style={{ marginLeft: 11 }}>
                      <b style={{ color: "#427994" }}>
                        Required Skills, Education &amp; Experience :
                      </b>
                    </p>
                    <ul
                      className="contentmatter-ul"
                      style={{
                        marginLeft: 44,
                        listStyle: "initial",
                        color: "#333131"
                      }}
                    >
                      <li>
                        <span>Strong OOPS and OOD Fundamentals.</span>
                      </li>
                      <li>
                        <span>
                          Excellent Coding, Problem Solving Skills, algorithms
                          and data structures.
                        </span>
                      </li>
                      <li>
                        <span>
                          Knowledge of My SQL database or any other RDBMS with
                          good understanding of SQL language, PHP and JAVA.
                        </span>
                      </li>
                      <li>
                        <span>
                          Prior experience in web technologies is a plus.
                        </span>
                      </li>
                      <li>
                        <span>Ability to work on UNIX / Linux platform.</span>
                      </li>
                      <li>
                        <span>
                          Should have a BE / BTech / ME / MTech in Computer
                          Engineering or related areas including MCA with 3-8
                          years of experience in software development.
                        </span>
                      </li>
                      <li>
                        <span>
                          Good Communication &amp; Interpersonal Skills.{" "}
                        </span>
                      </li>
                    </ul>
                    <p />
                    <p
                      className="contentmatter"
                      style={{ marginLeft: 30, color: "#333131" }}
                    >
                      Experience with any of the following skills is a plus.
                      <br />
                      Full software life cycle experience including
                      requirements, design, development, testing &amp;
                      maintenance. UI Development Skills including knowledge of
                      JavaScript (AJAX), HTML, CSS Web service development
                      experience Photoshop Skills XML &amp; X Query. <br />{" "}
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END / AMENITIES */}
            {/* PACKAGE */}
            <div className="tab-pane fade" id="package">
              <div className="product-detail_package">
                <div className="product-detail_amenities">
                  <h5 className="text-uppercase">SEO Executives</h5>
                  <div className="row">
                    <div className="col-xs-9 col-lg-9">
                      <p
                        className="contentmatter"
                        style={{ marginLeft: 30, color: "#22638d" }}
                      >
                        <b>Salary:</b>&nbsp; &nbsp; Best according to industry
                        standards.
                        <br /> <b>Job Location:</b>&nbsp; &nbsp; Alwar (Raj.)
                        <br /> <b>Experience:</b>&nbsp; &nbsp; 2 Years
                        <br />
                        <b>Education:</b>&nbsp; &nbsp; Position Graduate /
                        Graduate
                        <br />
                      </p>
                      <p className="contentmatter">
                        <b style={{ color: "#427994", padding: 10 }}>
                          Job Description:
                        </b>
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          listStyle: "initial",
                          color: "#333131"
                        }}
                      >
                        <li>
                          <span>
                            In depth knowledge and experience of On-page &amp;
                            Off-page factors.
                          </span>
                        </li>
                        <li>
                          <span>
                            Overall SEO Strategizing and driving execution
                            through technical team.
                          </span>
                        </li>
                        <li>
                          <span>
                            Knowledge of latest white hat techniques of SEO for
                            dynamic and static WebPages/ WebSites.
                          </span>
                        </li>
                        <li>
                          <span>
                            Knowledge and experience of Social Networking sites/
                            Social Media Optimization tools &amp; techniques.
                          </span>
                        </li>
                        <li>
                          <span>
                            Having Technical understanding and knowledge of
                            HTML.
                          </span>
                        </li>
                        <li>
                          <span>
                            Experience on Blog marketing, article submissions,
                            forum updates, RSS making &amp; XML SiteMaps.
                          </span>
                        </li>
                        <li>
                          <span>Knowledge of web analytics applications.</span>
                        </li>
                        <li>
                          <span>Good Communication skills necessary.</span>
                        </li>
                        <li>
                          <span>
                            Content analysis and optimization, writing search
                            engine optimized title tags, description tags,
                            Directory Sourcing for relevant industry and
                            directory submission/ Link building.
                          </span>
                        </li>
                        <li>
                          <span>
                            Passion to learn about SEO and study all the latest
                            ethical techniques.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END / PACKAGE */}
            {/* RATES */}
            <div className="tab-pane fade" id="rates">
              <div className="product-detail_rates">
                <div className="product-detail_amenities">
                  <h5 className="text-uppercase">Content Writer</h5>
                  <div className="row">
                    <div className="col-xs-9 col-lg-9">
                      <p
                        className="contentmatter"
                        style={{
                          textAlign: "justify",
                          marginLeft: 30,
                          color: "#22638d"
                        }}
                      >
                        <b>Salary:</b>&nbsp; &nbsp; Best according to industry
                        standards.
                        <br /> <b>Job Location:</b>&nbsp; &nbsp; Alwar (Raj.)
                        <br /> <b>Experience:</b>&nbsp; &nbsp; 1 - 3 Years
                        <br />
                        <b>Education:</b>&nbsp; &nbsp; Position Graduate (MA
                        English, Journalism, or any other stream), Graduate
                        (Preferably in English or Journalism), or PG Diploma
                        (Mass Communication, Creative English, Journalism)
                        <br />
                      </p>
                      <p>
                        <b style={{ color: "#427994" }}>Job Description:</b>
                        &nbsp; &nbsp; Smart Online Exam is hiring! We are
                        looking for a full time content writer to work out of
                        our Alwar (Raj.) office. If you believe variety is the
                        spice of life, we have just the thing for you. Join our
                        team and contribute content to different domains. Would
                        you want online shoppers to read the exciting mailers
                        you would write? Or would you like to preview books,
                        write about authors and know what`s new in the readers`
                        circles? You can do all this and more, and also learn
                        about gadgets, write book reviews, and create catch
                        one-liners for our movies and music sections. We are on
                        an expansion mode and we would like to have the right
                        candidate join our enthusiastic team at the earliest.{" "}
                        <br /> <br />
                      </p>
                      <p className="contentmatter">
                        <b style={{ color: "#427994", paddingLeft: 11 }}>
                          Overall Responsibility:
                        </b>
                        <br />
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          color: "#333131",
                          listStyle: "initial"
                        }}
                      >
                        <li>
                          <span>
                            Write original content for the website and blogs.
                          </span>
                        </li>
                        <li>
                          <span>
                            Write mobile, laptop and camera descriptions.
                          </span>
                        </li>
                        <li>
                          <span>
                            Contribute punch lines and creative content for the
                            monthly newsletters.
                          </span>
                        </li>
                      </ul>
                      <p className="contentmatter">
                        <b style={{ color: "#427994", paddingLeft: 11 }}>
                          Key Responsibility:
                        </b>
                        <br />
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          listStyle: "initial",
                          color: "#333131"
                        }}
                      >
                        <li>
                          <span>
                            Write product descriptions for Online Exam, Offline
                            Exam, any Entrance exam &amp; competition exam.
                          </span>
                        </li>
                        <li>
                          <span>
                            Co-ordinate with the SEO, Catalogs and Books teams
                            and provide content on regular basis.
                          </span>
                        </li>
                        <li>
                          <span>
                            Update Blogs with fresh content and contribute to
                            the newsletters.Create one-liners for various
                            segments.
                          </span>
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END / RATES */}
            {/* CALENDAR */}
            <div className="tab-pane fade" id="calendar">
              <div className="product-detail_calendar-wrap row">
                <div className="product-detail_amenities">
                  <h5 className="text-uppercase">
                    Data Analyst / Sr. Data Analyst
                  </h5>
                  <div className="row">
                    <div className="col-xs-9 col-lg-9">
                      <p
                        className="contentmatter"
                        style={{ marginLeft: 30, color: "#22638d" }}
                      >
                        <b>Salary:</b>&nbsp; &nbsp; Best according to industry
                        standards.
                        <br /> <b>Job Location:</b>&nbsp; &nbsp; Alwar (Raj.)
                        <br /> <b>Experience:</b>&nbsp; &nbsp; 6 Months - 3
                        Years
                        <br /> <b>Education:</b>&nbsp; &nbsp; Any bachelor
                        degree from any university across India. Any
                        Specialization Industry Type: Online Selling / B2B / B2C
                        <br />
                      </p>
                      <p className="contentmatter">
                        <b style={{ color: "#427994", paddingLeft: 11 }}>
                          Job Description:
                        </b>
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          listStyle: "initial",
                          color: "#22638d"
                        }}
                      >
                        <li>
                          <span>
                            Must have excellent knowledge of Microsoft Office
                            Specially Microsoft Excel.
                          </span>
                        </li>
                        <li>
                          <span>
                            Should be computer with sound knowledge of the
                            Internet.
                          </span>
                        </li>
                        <li>
                          <span>
                            Ability to work enthusiastically independently and
                            adhere to strict deadlines.
                          </span>
                        </li>
                        <li>
                          <span>Ready to take challenges.</span>
                        </li>
                      </ul>
                      <p className="contentmatter">
                        <b style={{ color: "#427994", paddingLeft: 11 }}>
                          Desired Profile:
                        </b>
                        <br />
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          listStyle: "initial",
                          color: "#333131"
                        }}
                      >
                        <li>
                          <span>
                            Candidate should have excellent knowledge of MS
                            Office (Word, Excel, Power point &amp; Access).
                          </span>
                        </li>
                        <li>
                          <span>Good Typing Skills.</span>
                        </li>
                        <li>
                          <span>
                            Candidate must have good command over English
                            language.
                          </span>
                        </li>
                        <li>
                          <span>
                            ProActive and should have leadership skills.
                          </span>
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END / CALENDAR */}
            {/*career*/}
            <div className="tab-pane fade" id="business">
              <div className="product-detail_package">
                <div className="product-detail_amenities">
                  <h5 className="text-uppercase">
                    Business Development Manager
                  </h5>
                  <div className="row">
                    <div className="col-xs-9 col-lg-9">
                      <p
                        className="contentmatter"
                        style={{ color: "#22638d", marginLeft: 13 }}
                      >
                        <b>Salary:</b>&nbsp; &nbsp; Best according to industry
                        standards.
                        <br /> <b>Job Location:</b>&nbsp; &nbsp; Alwar (Raj.)
                        <br /> <b>Experience:</b>&nbsp; &nbsp; 1 - 2 Years
                        <br />
                        <b>Education:</b>&nbsp; &nbsp; PG - MBA/PGDM - Marketing
                        UG - Any Graduate - Any Specialization Industry Type:
                        Online Selling / B2B / B2C / Automobile / Mobile /
                        Finance Functional Area: Sales including Forecasting,
                        Business Development, Marketing
                        <br />
                      </p>
                      <p className="contentmatter">
                        <b style={{ color: "#427994", padding: 10 }}>
                          Job Description:
                        </b>
                      </p>
                      {/* <u style="color: blue; margin-left: 44px">Job Description The
      incumbent will be responsible for:</u> */}
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          listStyle: "initial",
                          color: "#333131"
                        }}
                      >
                        <li>
                          <span>
                            Identifying business prospects in different areas
                            &amp; understand the client's need &amp; offer the
                            best solution.
                          </span>
                        </li>
                        <li>
                          <span>
                            Develop new markets &amp; ProActively innovate to
                            increase sales.
                          </span>
                        </li>
                        <li>
                          <span>
                            Tap new customers from existing business leads and
                            offer our products &amp; services.
                          </span>
                        </li>
                        <li>
                          <span>
                            Interact with potential customers and address
                            telephonic queries.
                          </span>
                        </li>
                        <li>
                          <span>Maintain the database of generated leads.</span>
                        </li>
                        <li>
                          <span>Prepare daily activity reports and MIS.</span>
                        </li>
                      </ul>
                      <p
                        className="contentmatter"
                        style={{ textAlign: "center" }}
                      >
                        <b style={{ color: "#427994", paddingLeft: 11 }}>
                          Desired Profile:
                        </b>
                        <br />
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          color: "#333131",
                          fontSize: 18,
                          fontFamily: "-webkit-pictograph"
                        }}
                      >
                        <li>
                          <span>
                            Must have excellent oral and written communication
                            skills in English Should be computer savvy with
                            sound knowledge of the Internet. Ability to work
                            enthusiastically independently and adhere to strict
                            deadlines Ready to take challenges
                          </span>
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*end career */}
            {/*quality career*/}
            <div className="tab-pane fade" id="quality">
              <div className="product-detail_package">
                <div className="product-detail_amenities">
                  <h5 className="text-uppercase">Quality controller</h5>
                  <div className="row">
                    <div className="col-xs-9 col-lg-9">
                      <p
                        className="contentmatter"
                        style={{ marginLeft: 30, color: "#22638d" }}
                      >
                        <b>Salary:</b>&nbsp; &nbsp; Best according to industry
                        standards.
                        <br /> <b>Job Location:</b>&nbsp; &nbsp; Alwar (Raj.)
                        <br /> <b>Experience:</b>&nbsp; &nbsp; 1 - 2 Years
                        <br />
                        <b>Education:</b>&nbsp; &nbsp; PG - MBA/PGDM - Marketing
                        UG - Any Graduate - Any Specialization Industry Type:
                        Online Selling / B2B / B2C / Automobile / Mobile /
                        Finance Functional
                        <br />
                      </p>
                      <p>
                        <b style={{ color: "#427994" }}>Job Description:</b>
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          color: "#333131",
                          listStyle: "initial"
                        }}
                      >
                        <li>
                          <span>
                            Must have excellent knowledge of Microsoft Office
                            Specially Microsoft Excel.
                          </span>
                        </li>
                        <li>
                          <span>
                            Should be computer with sound knowledge of the
                            Internet.
                          </span>
                        </li>
                        <li>
                          <span>
                            Ability to work enthusiastically independently and
                            adhere to strict deadlines.
                          </span>
                        </li>
                        <li>
                          <span>Ready to take challenges.</span>
                        </li>
                      </ul>
                      <p />
                      <p className="contentmatter">
                        <b style={{ color: "#427994", paddingLeft: 11 }}>
                          Desired Profile:
                        </b>
                        <br />
                      </p>
                      <ul
                        className="contentmatter-ul"
                        style={{
                          marginLeft: 44,
                          listStyle: "initial",
                          color: "#333131"
                        }}
                      >
                        <li>
                          <span>
                            Must have excellent oral &amp; written communication
                            skills in English Should be computer with sound
                            knowledge of the Internet.
                          </span>
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p />
  <Footer/>
  <a
    href="j"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>

    
  )
}