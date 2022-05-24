import React from 'react'
import './PrivacyPolicy.css'
import Menu from './Menu'
import { Footer } from './Footer'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {


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
        <div className="about-content col-lg-12 bannercontent">
          <h1
            className="text-white"
            style={{ textTransform: "uppercase", fontSize: 25 }}
          >
            Privacy Policy
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to={"/privacy-policy"}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div
    className="container-fluid"
    style={{
      boxShadow: "1px 2px 3px 2px #cdc6c6",
      marginTop: "4%",
      backgroundColor: "ghostwhite",
      marginBottom: 20
    }}
  >
    <div className="row terms">
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Information we collect and how use it
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              You need to check out the privacy policy directs your visit
              www.smartonlineexam.com to realize your practices.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Information you provide
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              We may ask you for personal information (such as your name, email
              address, phone number and company) for certain services that we
              provide through our website.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            User communications
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              When you send email or other communication to Smart Online Exam,
              we may retain those communications in order to process your
              inquiries, respond to your requests and improve our services.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Smart Online Exam cookies
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              When you visit Smart Online Exam, we may send one or more cookies
              - a small file containing a string of characters - to your
              computer that uniquely identifies your browser. We may use these
              cookies to improve the quality of our service by storing user
              preferences and tracking user trends, such as how people search.
              Most browsers are initially set up to accept cookies, but you can
              reset your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Log information
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              When you use Smart Online Exam's services, our servers may
              automatically record information that your browser sends whenever
              you visit our website. These server logs may include information
              such as your web request, Internet Protocol address, browser type,
              browser language, the date and time of your request and one or
              more cookies that may uniquely identify your browser.
              <br />
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Affiliated sites
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              We may have affiliated WebSites who may provide similar or other
              kinds of services. Personal information that you provide to those
              sites may be sent to Smart Online Exam and vice versa. We process
              such information in accordance with this Policy. The affiliated
              sites may have different privacy practices and we encourage you to
              read their privacy policies.
              <br />
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Links
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              Smart Online Exam may present links in a format that enables us to
              keep track of whether these links have been followed. Smart Online
              Exam only processes personal information for the purposes
              described in the applicable Privacy Policy and/or privacy notice
              for specific services. In addition to the above, such purposes
              include: Providing our products and services to users; Auditing,
              research and analysis in order to maintain, protect and improve
              our services; Developing new services. Smart Online Exam processes
              personal information on our servers in India and in other
              countries. In some cases, we process personal information on a
              server outside your own country.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Choices for personal information
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              When you sign up for a particular service that requires
              registration, we ask you to provide personal information. If we
              use this information in a manner different than the purpose for
              which it was collected, then we will ask for your consent prior to
              such use. If we propose to use personal information for any
              purposes other than those described in this Policy and/or in the
              specific service notices, we will offer you an effective way to
              opt out of the use of personal information for those other
              purposes. We will not collect or use information for purposes
              other than those described in this Policy unless we have obtained
              your prior consent. You can decline to submit personal information
              to any of our services, in which case Smart Online Exam may not be
              able to provide those services to you.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Opt-Out Policy
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              Smart Online Exam offers its visitors and customers a means to
              choose how we may use information provided. If, at any time after
              registering for information or ordering the Service, you change
              your mind about receiving information from us or about sharing
              your information with third parties, send us a request specifying
              your new choice. Simply send your request to
              info@smartonlineexam.com.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Information security
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              We take appropriate security measures to protect against
              unauthorized access to or unauthorized alteration, disclosure or
              destruction of data. These include internal reviews of our data
              collection, storage and processing practices and security
              measures, as well as physical security measures to guard against
              unauthorized access to systems where we store personal data.{" "}
              {/* We restrict access to personal information to Smart Online Exam employees, contractors and agents who need to know that information in order to operate, develop or improve our services. */}
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Information security
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              Smart Online Exam processes personal information only for the
              purposes for which it was collected and in accordance with this
              Policy or any applicable service-specific privacy notice. We
              review our data collection, storage and processing practices to
              ensure that we only collect, store and process the personal
              information needed to provide or improve our services.
              <br />{" "}
              {/* We take reasonable steps to ensure that the personal information we process is accurate, complete, and current, but we depend on our users to update or correct their personal information whenever necessary. */}
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Accessing and updating personal information:
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              When you need to change or update your personal information please
              mail us at info@smartonlineexam.com and we will make good faith
              efforts to change/correct this data if it is inaccurate or to
              delete such data at your request if it is not otherwise required
              to be retained by law or for legitimate business purposes. We may
              ask individual users to identify themselves and then proceed to
              take action as required. We may decline to process requests that
              are unreasonably repetitive or systematic, require
              Disproportionate technical effort, jeopardize the privacy of
              others, or would be extremely impractical (for instance, requests
              concerning information residing on backup tapes), or for which
              access is not otherwise required. In any case where we provide
              information access and correction, we perform this service of
              charge.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Enforcement
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              Smart Online Exam regularly reviews its compliance with this
              Policy. Please feel free to direct any questions or concerns
              regarding this Policy or Smart Online Exam's treatment of personal
              information by mailing us at info@smartonlineexam.com. When we
              receive formal written complaints at this address, it is Smart
              Online Exam's policy to contact the complaining user regarding his
              or her concerns.
              {/*  We will cooperate with the appropriate regulatory authorities, including local data protection authorities, to resolve any complaints regarding the transfer of personal data that cannot be resolved between Smart Online Exam and an individual. */}
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Content in our packages
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              We derive content from various sources like books, journals,
              magazines, internet, etc. The content is checked, modified as per
              our estimations and then presented in the softwares. Any wrong
              information conveyed/MisPrint or any other kinds of error are not
              a direct responsibility of us. Users must verify or notify us if
              there are any errors.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Changes to this policy:
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              Please note that this Privacy Policy may change from time to time.
              We will not reduce your rights under this Policy without your
              explicit consent, and we expect most such changes will be minor.
              Regardless, we will post any Policy changes on this page and, if
              the changes are significant, we will provide a more prominent
              notice (including, for certain services, email notification of
              Policy changes).
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="panel panel-danger">
          <div
            className="panel-heading"
            style={{ color: "#427994", background: "white" }}
          >
            Information sharing
          </div>
          <div className="panel-body">
            <p style={{ color: "#39464e", textAlign: "justify" }}>
              Smart Online Exam only shares personal information with other
              companies or individuals outside of Smart Online Exam in the
              following limited circumstances: We have your consent. We require
              opt-in consent for the sharing of any sensitive personal
              information. We provide such information to our subsidiaries,
              affiliated companies or other trusted businesses or persons for
              the purpose of processing personal information on our behalf. We
              require that these parties agree to process such information based
              on our instructions and in compliance with this Policy and any
              other appropriate confidentiality and security measures. We have a
              good faith belief that access, use, preservation or disclosure of
              such information is reasonably necessary to (a) satisfy any
              applicable law, regulation, legal process or enforceable
              governmental request (b) detect, prevent, or otherwise address
              fraud, security or technical issues, or (c) protect against
              imminent harm to the rights, property or safety of Smart Online
              Exam, its users or the public as required or permitted by law. If
              Smart Online Exam becomes involved in a merger, acquisition, or
              any form of sale of some or all of its assets, we will provide
              notice before personal information is transferred and becomes
              subject to a different privacy policy. Please contact us at the
              address below for any additional questions about the management or
              use of personal data or as to what classifies as Sensitive
              Information.
            </p>
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