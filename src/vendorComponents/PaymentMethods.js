import React from 'react'
import { Link } from 'react-router-dom'
import {Footer} from './Footer'
import Menu from './Menu'
import './PaymentMethods.css'

export default function paymentMethods() {


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
            Payment Methods
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to={"/payment-methods"}>Payment Methods</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
  <div
    className="container-fluid"
    style={{
      marginTop: "3%",
      boxShadow: "1px 2px 3px 2px #cdc6c6",
      backgroundColor: "ghostwhite",
      marginBottom: 20
    }}
  >
    <div className="row">
      <div className="srvices_main1">
        <div className="col-lg-12  col-md-12 col-sm-12">
          <div className="service_first">
            {/*<img src="${pageContext.request.contextPath}/static/front-end/ititemplate1/images/canon.png" alt=""/>*/}
            <h1 className="heading">Prices:</h1><br />
            <p className="pstyle fs-5">
              All prices posted on this Website are subject to change without
              notice. Prices prevailing at commencement of placing the order
              will apply. Posted prices do includes all taxes and charges. In
              case there are any additional charges or taxes the same will be
              mentioned on the Website.
            </p>
          </div>
        </div>
        </div>
        </div>
          <div className="row">
          <div className="srvices_main1">
        <div className="col-lg-12  col-md-12 col-sm-12">
          <div className="service_first">
            {/*<img src="${pageContext.request.contextPath}/static/front-end/ititemplate1/images/canon.png" alt=""/>*/}
            <h1 className="heading">Payment:</h1><br />
            <p className="pstyle fs-5">
              You can use any one of the following payment methods with 100%
              Secure CCAVENUE payment gateway:
            </p>
            <ul style={{ color: "black" }}>
              <li>Credit card (Visa/ Master/ Amex)</li><br />
              <li>
                <span>Debit card (All leading bank Debit cards)</span>
              </li><br />
              <li>
                <span>Net Banking (For all leading banks )</span>
              </li><br />
              <li>
                <span>Wallet(PayTm/JIO Money)</span>
              </li><br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
  {/* Footer End */}
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