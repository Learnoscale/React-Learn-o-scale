import React from 'react'
import './Disclaimer.css'
import Menu from './Menu'
import {Footer} from './Footer'
import { Link } from 'react-router-dom'

export default function Disclaimer() {

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
            Disclaimer
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" /> <Link to="/Disclaimer"> Disclaimer</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="container-fluid">
    <div className="row">
      <div
        className="container-fluid"
        style={{
          boxShadow: "1px 2px 3px 2px #cdc6c6",
          backgroundColor: "ghostwhite",
          marginTop: "2%"
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#427994",
            fontSize: 25,
            fontFamily: "-webkit-pictograph",
            paddingTop: 5,
            marginBottom: 5
          }}
        >
          Terms and Conditions
        </h1>
        <ul className="timeline" style={{ marginTop: "2%" }}>
          <li>
            <div className="timeline-badge">1</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  You should assume that all materials, designs, text and images
                  (collectively, the "Materials") contained in the Site are
                  either the copyrighted property of Smart Online Exam , unless
                  otherwise noted, or are the copyrighted property of third
                  parties. Smart Online Exam neither warrants nor represents
                  that your use of Materials displayed on the Site will not
                  infringe rights of third parties not owned by or affiliated
                  with Smart Online Exam.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">2</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  You may download one single hard copy of Materials displayed
                  on the Site for non-commercial, personal use only, provided
                  however, you do not delete or change the copyright, trademark
                  and other proprietary notices contained on the Materials. You
                  may not modify, alter or change any Materials or distribute,
                  publish, transmit, reuse, re-post or use the content of the
                  Site for public or commercial purposes, including, without
                  limitation, the text, images, audio and video.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">3</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  Unauthorized use of the Materials is strictly prohibited and
                  is a violation of the rights of Smart Online Exam and/or third
                  parties, including, without limitation, under copyright laws,
                  trademark laws or any other laws.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">4</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  While Smart Online Exam uses reasonable efforts to include
                  accurate and up to date information in the Site, Smart Online
                  Exam makes no warranties or representations as to the
                  accuracy, correctness, product specifications, prices
                  availability, reliability or otherwise with respect to such
                  information, and assumes no liability or responsibility for
                  any omissions or errors (including, without limitation,
                  typographical errors and technical errors) in the content of
                  the Site.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">5</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  Information in the Site is subject to change without notice.
                  Information regarding Smart Online Exam's products and
                  services is applicable only in India unless otherwise noted.
                  Some products and services may not be available in certain
                  areas. Smart Online Exam makes no representations that the
                  Materials in this Site are appropriate or available for use in
                  other countries aside India. Those who do access this Site
                  from other countries are solely responsible for compliance
                  with local laws of that country.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">6</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  These Terms and Conditions set forth the entire understanding
                  and agreement between you and Smart Online Exam with respect
                  to the Site. You acknowledge that any other agreements between
                  you and Smart Online Exam with respect to the Site are
                  superseded and of no force or effect.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">7</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  Use of and browsing in the Site is done at user's own risk.
                  Neither Smart Online Exam nor any other party involved in
                  creating, producing or delivering the Site shall be liable for
                  any direct, incidental, consequential, indirect or punitive
                  damages arising out of your access to, or use of, or browsing
                  the Site, or downloading of any materials, data, text, images,
                  video or audio from the Site, including, without limitation,
                  damage to, or viruses that may infect, your computer equipment
                  or other property as a result thereof. Without limiting the
                  foregoing, everything on the Site is provided to you "AS IS"
                  WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED,
                  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR
                  NON-INFRINGEMENT. Please note that some jurisdictions may not
                  allow the exclusion of implied warranties, so some of the
                  above exclusions may not apply to you. Check your local laws
                  for any restrictions or limitations regarding the exclusion of
                  implied warranties.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">8</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  From time to time, Smart Online Exam may ask that you transmit
                  to the Site by electronic mail your feedback on Smart Online
                  Exam's products and/or services. Any communication or material
                  you transmit or post will be (a) treated as non-confidential
                  and non-proprietary by Smart Online Exam, (b) become the
                  property of Smart Online Exam and Smart Online Exam shall
                  exclusively now and hereinafter own all rights, title and
                  interest therein, and (c) used without restriction by Smart
                  Online Exam or its Subsidiaries, licensees and affiliates at
                  its sole discretion without any obligation, compensation or
                  other liability to you. Such use may be for any purpose
                  whatsoever, including, but not limited to, reproduction,
                  disclosure, transmission, publication, broadcast and posting
                  whole or in part, in any medium and in any manner on this Site
                  or otherwise. However, Smart Online Exam shall be under no
                  obligation to respond to any such communication.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">9</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  Notwithstanding the foregoing, Smart Online Exam maintains a
                  long standing policy of not accepting or considering any
                  creative ideas, suggestions or materials from the public
                  ("Submissions"), and therefore, you should not make any
                  Submissions to Smart Online Exam in any communications through
                  this Site or otherwise. Nonetheless, if you do send us a
                  Submission, despite our request not to do so, then such
                  Submission shall immediately become the property of Smart
                  Online Exam and Smart Online Exam shall exclusively now and
                  hereinafter own all rights, title and interest therein.
                  Furthermore, Smart Online Exam shall be free to use any
                  Submissions for any purpose whatsoever, including, but not
                  limited to, developing, manufacturing and marketing products.
                  Smart Online Exam shall not be liable for such use or
                  disclosure of such Submission or for any similarities in the
                  Submission and any future Smart Online Exam uses or
                  activities.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">10</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  The Trademarks displayed on the Site are registered and
                  unregistered Trademarks of Smart Online Exam Nothing contained
                  on the Site should be construed as granting, by implication,
                  estoppel or otherwise, any license or right to use any
                  Trademark displayed on the Site, or any license or right to
                  use any other trademark owned by any other third party. In the
                  event that you misuse any Trademark in violation of these
                  Terms and Conditions, Smart Online Exam will aggressively
                  enforce its intellectual property rights to the fullest extent
                  of the law, including the seeking of criminal prosecution.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">11</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  This Site may link to other sites not maintained by or related
                  to Smart Online Exam. Such hyperlinks are provided as a
                  service to users and are not sponsored by, endorsed or
                  otherwise affiliated with this Site or with the products and
                  services of Smart Online Exam. Smart Online Exam has not
                  reviewed all of the sites linked to the Site and is not
                  responsible for the content of any off-site pages or links to
                  any other sites. Viewing all other sites is at your own risk.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">12</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  In the event that Smart Online Exam may, from time to time,
                  allow for discussions, chats, postings, transmissions,
                  bulletin board and the like on the Site, Smart Online Exam is
                  under no obligation to monitor or review such transmitted
                  information and assumes no responsibility or liability arising
                  from the content of any such locations nor for any error,
                  defamation, libel, slander, omission, falsehood, obscenity,
                  pornography, profanity, danger or inaccuracy of any such
                  information. You are prohibited from posting or transmitting
                  any unlawful, threatening, libelous, defamatory, obscene,
                  scandalous, inflammatory, pornographic or profane material or
                  any material that could constitute or encourage conduct that
                  would be considered a criminal offense, give rise to civil
                  liability or otherwise violate any law. Smart Online Exam will
                  fully cooperate with any law enforcement authorities or court
                  order requesting or directing Smart Online Exam to disclose
                  the identity of anyone posting any such information or
                  materials.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">13</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  Software from this Site is further subject to Indian Export
                  Controls. No software from this Site may be downloaded or
                  exported any country to which India has embargoed goods. By
                  downloading or using the software, you represent and warrant
                  that you are not located in, under the control of, or a
                  national or resident of any such country or on any such list.
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-badge">14</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  All offers set forth on the Site are void where prohibited,
                  and are subject to the posting of any official rules
                  pertaining to such offers.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-badge">15</div>
            <div className="timeline-panel">
              <div className="timeline-heading" />
              <div className="timeline-body">
                <p
                  className="contentmatter"
                  style={{
                    color: "#333131",
                    paddingLeft: 18,
                    paddingRight: 15,
                    textAlign: "justify"
                  }}
                >
                  Smart Online Exam maintains and operates this Site from its
                  office in the state of Rajasthan, India. These Terms and
                  Conditions are governed and interpreted under the laws of
                  INDIA. If any portion of these Terms and Conditions is deemed
                  unlawful, void or unenforceable, then that part shall be
                  deemed severable and will not effect the validity and
                  enforceability of any remaining provisions.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <p>&nbsp;</p>
  {/* Footer */}
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