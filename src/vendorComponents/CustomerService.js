import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import './CustomerService.css'
import { Link } from 'react-router-dom'

export default function CustomerService() {

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
            Customer Service
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to={"customer-service"}>Customer Service</Link>
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
      marginBottom: 30
    }}
  >
    <section id="service">
      <div className="row row-1" style={{ borderTop: "1px solid lightgray" }}>
        <div className="col-md-4 ser-col-4">
          <div className="ser-col ser-1">
            <div className="">
              <img
                alt="d"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon36.png"
                style={{ height: 90 }}
              />
            </div>
            <br />
            <h3>FAQ</h3>
            <p>
              Before you directly contact us, you can check out the FAQ and from
              there itself, you can able to find the most suitable answers for
              your queries.
            </p>
            <span className="circle hidden-xs">
              {" "}
              <i className="fa fa-circle-thin" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="col-md-4 ser-col-4">
          <div className="ser-col ser-2">
            <div className="">
              <img
                alt="dd"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon16.png"
                style={{ height: 90 }}
              />
            </div>
            <br />
            <h3>Email</h3>
            <p>
              In case, you did not found the exact answer, you can mail your
              queries to{" "}
              <span>
                <a href="dd">
                  <u>info@smartonlineexam.com</u>
                </a>
              </span>
              Within 12 working hours, we will solve your queries.
            </p>
            <span className="circle hidden-xs">
              {" "}
              <i className="fa fa-circle-thin" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="col-md-4 ser-col-4-l">
          <div className="ser-col ser-3">
            <div className="">
              <img
                alt="dd"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon19.png"
                style={{ height: 90 }}
              />
            </div>
            <br />
            <h3>Phone</h3>
            {/* <p>You can call us to below
						mentioned customer support number from Monday to Saturday within
						10 am to 6 pm. </p> */}
            <table
              border={1}
              style={{
                color: "#22638d",
                marginBottom: 2,
                fontSize: 18,
                fontFamily: "-webkit-pictograph",
                border: "10px solid whitesmoke"
              }}
            >
              <tbody>
                <tr>
                  <td>10 am - 2 pm&nbsp;&nbsp;</td>
                  <td />
                  <td>(Mon to Sat)</td>
                </tr>
                <tr>
                  <td>General Helpdesk:&nbsp;&nbsp;</td>
                  <td />
                  <td>9587901199</td>
                </tr>
                <tr>
                  <td>Technical Desk:&nbsp;&nbsp;</td>
                  <td />
                  <td>9587901199</td>
                </tr>
                <tr>
                  <td>Order Related:&nbsp;&nbsp;</td>
                  <td />
                  <td>9587901199</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/*=====row 1============*/}
      {/*====row 2============*/}
      <div className="row-2">
        <div className="col-md-4 ser-col-4">
          <div className="ser-col ser-4">
            <div className="">
              <img
                alt="ds"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon37.png"
                style={{ height: 90 }}
              />
            </div>
            <br />
            <h3>Post</h3>
            <p>
              <span>
                <a href="dd">
                  Smart Online Exam
                </a>
              </span>{" "}
              <br />
              2nd Floor, Vaishali Tower <br /> Near Gaushala <br /> Alwar,
              Rajasthan – 301001 <br /> Phone: 9587901199 <br /> <br />
            </p>
            <br />{" "}
            <span className="circle hidden-xs">
              {" "}
              <i className="fa fa-circle-thin" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="col-md-4 ser-col-4">
          <div className="ser-col ser-5">
            <div className="">
              <img
                alt="ss"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon38.png"
                style={{ height: 90 }}
              />
            </div>
            <br />
            <h3>Place your order from us:</h3>
            <p>
              From our website, you can easily order your study materials.
              Before ordering, there is no need for registration. At the time of
              placing your initial order, your official account from our site
              will be automatically created. You can place your order through
              online or phone.
            </p>
            <span className="circle hidden-xs">
              {" "}
              <i className="fa fa-circle-thin" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="col-md-4 ser-col-4" style={{ borderRightWidth: 0 }}>
          <div className="ser-col ser-5">
            <div className="">
              <img
               alt="ss"
                src="https://soe-buck-lb.storage.googleapis.com/front-end/main/images/icon39.png"
                style={{ height: 90 }}
              />
            </div>
            <br />
            <h3>Procedures to order from us:</h3>
            <p>
              Go for deep research in our catalog and use the search option to
              find the exact product you are looking for. You can find some
              great offers and discounts in an extraordinary manner.
              <br /> <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer/>
  {/* Footer End */}
  <a
    href="ss"
    className="scroll_top"
    title="Scroll to Top"
    style={{ display: "inline" }}
  >
    Scroll
  </a>
</>

  )
}