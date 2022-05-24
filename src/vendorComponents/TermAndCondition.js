import React from 'react'
import Menu from './Menu'
import {Footer} from './Footer'
import './TermAndCondition.css'
import { Link } from 'react-router-dom'

export default function TermAndCondition() {

  return(
    <>
  {/* Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N78442F"
    minHeight="0" width="0"
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
            style={{ textTransform: "uppercase", fontSize: "25px !important" }}
          >
            Terms &amp; Condition
          </h1>
          <p className="text-white link-nav">
            <Link to={"/"}>Home </Link>{" "}
            <span className="fa fa-arrow-right" />{" "}
            <Link to={"term-and-conditions"}>Terms &amp; Condition</Link>
          </p>
        </div>
      </div>
    </div>
  </section>
  <br />
  <div
    className="container-fluid"
    style={{
      boxShadow: "1px 2px 3px 2px #cdc6c6",
      backgroundColor: "ghostwhite",
      marginTop: "3%",
      marginBottom: 20
    }}
  >
    <div className="row terms">
      <div className="col-sm-4">
        <div className="panel panel-primary" style={{}}>
          <div className="panel-heading fs-4">Privacy Policy</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              You need to check out the privacy policy directs your visit
              www.smartonlineexam.com to realize your practices.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary" style={{}}>
          <div className="panel-heading fs-4">
            Rules and regulations for purchases
          </div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The entire orders are now considered offers for the candidates to
              make use of products purchased. We specifically agree with an
              offer with email or mobile confirmation on all orders of specified
              products.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Electronic Communication</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              While you access www.smartonlineexam.com or here you send an email
              and try to communicate through electronically. The way of
              communication with the representative, you agree the entire
              disclosures, agreements, notices.{" "}
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Prices</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The prices are properly posted in www.smartonlineexam.com subject
              to modify without notice.{" "}
              {/* The prices overcome at the beginning of placing an order
						will execute. */}{" "}
              Moreover, the posted prices like levies and charges. There are no
              further taxes or charges were described in the link.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Payment</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The entire payments should be brought by the representatives to
              ship unless the product placed through the use of COD (Cash on
              Delivery) payment mode. We also accept cash, draft, net-banking,
              debit card, cheque and credit card payment.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Shipping and Handling</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              We also arrange for the products shipment and shipping schedules
              apparently schedules estimates and guaranteed. We are responsible
              for the shipment delays as well label and risk of damages or loss
              pass to you upon the products delivery.{" "}
              {/* If the chance to reverse shipment
						cannot organize by our representative because of logistic partners
						unavailability and request to send required products via potential
						courier services. */}
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">30 days product replacement terms</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              We offer to all our valuable customers 10 days guaranteed
              replacement for the products specifically on Smart Online Exam in
              added terms mentioned in the following. Our customers will be
              informed us any of the products defect or damage within 48 hours
              from the product delivery date of receipt. If the customer failed
              or forget to inform us of notified duration, we keep the right to
              reject or agree with request discretion. Our Smart Online Exam
              will give comfort replacement of defective product as brand new
              without additional charges.
              <br />
              Smart Online Exam will endeavor to replace the ordered specific
              product. The firm also keeps the right to change and offer the
              product while it is in the production or out of stock. <br />
              The guaranteed 10 days of product replacement valid for transport
              damages and manufacturing defects as well invalid while damage
              because of normal wear, negligence, and tear. If the customers
              encounter any trouble in any of the products buy or usage, they
              requested to immediately make use of customer service and contact
              within 48 hours and failing may not agree for the replacement.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Return of Products by you</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              We agree to the products return and provide a certain return for
              the damaged in the transportation, wrong product delivery, wrong
              product, package incomplete, etc. <br />
              These are subject to the terms we updated differences within 48
              hours from the product date of receipt and products provided
              returned in the authentic and proper condition.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Taxes and cancellation</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              Any product specific changes, additions or quantity changes were
              made to agree orders changed in the order details.
              {/*  The entire sales are absolutely offered however
						the item quantity reductions and cancellations prior order
						shipped. */}{" "}
              Without responsibility cancel any of the agreed orders prior the
              shipment while the credit department doesn't agree with credit or
              such issues in the payment mode preferred to you.
              <br />
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Refund</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              If any of the product orders canceled by the candidate after
              procurement prior shipped through Smart Online Exam. It will levy
              restocking the applicable charge based on the product category.
              Besides, the orders will easily attract a restocking charge of
              order value about 15%. The refund made after the restocking fee
              deduction related within 7 to 10 days of working.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Website access and license</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The Smart Online Exam permits you a limited license to avail and
              access the website and there's no download or alteration it or any
              section, except with express written approval of
              www.smartonlineexam.com.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">No accredit for commercial sale</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The authorization doesn't include commercial or resale usage of
              the link or the content; any product listing usage and collection,
              pricing, description or a copy of another merchant benefit of
              account information or usage data mining or extraction tools and
              data collection.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">No reproduction</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The Smart Online Exam link or any segment of the link may not be
              duplicated, sold, visited, copies, reproduced or otherwise
              oppressed for any commercial use without express of Smart Online
              Exam written consent.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">No framing</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              You may not use or frame the framing technologies to include any
              logo, proprietary information or trademark such as page layout,
              form, images or text of Smart Online Exam as well it associates
              without express written approval.
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Meta tags</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              You may not focus on utilizing the meta tags or other hidden text
              by use of Smart Online Exam trademark or name without the express
              written approval of Smart Online Exam. Here, any of the licensed
              usages end the license or approval granted through the Smart
              Online Exam.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Account security</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              Further discussed in the link about the privacy policy, by
              accessing this link, you consent, liable for keeping the privacy
              of the account along with the password and limit the computer
              access and grant to accept the liability for further activities
              engage in the account.
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Children use</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              Further discussed the link privacy policy, the link may sell the
              kid's products, but it also suitable for adults. If you are below
              18 years of age, you may utilize and engagement of parent or
              guardian Smart Online Exam.
              {/*  The affiliates and Smart Online Exam keep the
						rights to reject the service, remove, edit content, cancel orders
						or close the accounts at the sole discretion. */}
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Content nature</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The Smart Online Exam visitors may post such related comments,
              reviews, and various contents; submit suggestions, comments,
              e-cards, ideas, queries and other communications or information
              which obscene, defamatory, infringing
              {/* , illegal, threatening or others doesn't include
						political campaigning, mass mailing,  */}
              spam, or virus.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">False information</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              If you try to access with a false email address, entity, imitate
              any individual or mislead the card origin or other content.
              Mainly, the Inifbeam.com keeps the rights to eliminate or modify
              the relevant content but it doesn't review regularly posted
              contents.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Guaranteed rights</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              If you submit material or post such content and unless we inform
              otherwise you allow to Smart Online Exam and it links
              royalty-free, irrevocable, perpetual, fully sub-licensed and
              non-exclusive to use, modify, publish, create derivative work,
              translate, adapt, display and distribute certain content all over
              the globe by any media. You allow Smart Online Exam and it
              associates the websites and sub-licenses the admission the name
              you submit in link with certain content while Smart Online Exam
              picks.
              <br />
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Right Owned</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              You warrant and represent to own all the rights or control the
              rights to satisfy the post, content usage delivers doesn't violate
              the terms and not harm to anyone or entity as well you will assure
              ISmart Online Exam or it links for the whole claims effects from
              you delivered content. The Smart Online Exam includes right, but
              not a responsibility to check and eliminate or edit any content or
              other activities. The Smart Online Exam assumes without
              responsibility and no liability for any posted content by you or
              other third-party.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Product description</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The Smart Online Exam and it links endeavor to be exact as
              possible. Moreover, the Smart Online Exam not product description
              warranties and such site contents are reliable, error-free,
              accurate, current or complete. The Smart Online Exam product
              offered itself not described and it's individually remedied to
              return the unused condition.
              <br />
              <br />
              <br />
              <br />
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">The threat of loss</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The entire purchased items from Smart Online Exam made pursuant to
              the contract of shipment, title, and threat of loss for certain
              passes item to you and delivery of products.
              <br />
              <br />
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Intellectual Property</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The collection of whole content on this link exclusive property
              whether the Smart Online Exam and secured by the Indian Copyright
              Act. The entire software utilized in the link is the Smart Online
              Exam property and secured by the Indian Copyright Act.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">
            Alteration, severability and site policies
          </div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              We keep the rights for further changes in the site, terms, and
              conditions, policies at any time. If there any of these listed
              conditions estimated void, invalid or unenforceable for any reason
              and not validity affected and enforceability of remaining terms.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Property rights intellectual</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The Copyright Protection All content added on the link includes
              graphics, button icons, digital downloads, software, text, logos,
              audio clips and data compilations is the Smart Online Exam and
              links property secured through the Indian Copyright regulation.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Secured marks</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              www.smartonlineexam.com, Smart Online Exam watermarks, Smart
              Online Exam, Smart Online Exam and design and other marks
              signified on Smart Online Exam link registered Smart Online Exam
              trademarks.
              <br />
              <br />
              <br />
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">
            Administering act and jurisdiction
          </div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The entire rules and regulations construed based on the acts of
              India. Regarding of the whole arising disputes or matters in
              relation or with a connection to the rules and regulations on the
              link. Besides, it fits Courts at Jaipur as well Rajasthan includes
              the appropriate jurisdiction to other courts exclusion.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12">
        <div className="panel panel-primary">
          <div className="panel-heading fs-4">Secured graphics</div>
          <div className="panel-body" style={{ minHeight: 250 }}>
            <p className="fs-5" style={{ color: "#0d4e79", textAlign: "justify" }}>
              The entire page headers, scripts, service names, graphics and
              button icons are Smart Online Exam trade dress or trademarks. The
              Smart Online Exam trade dress and trademarks may not be utilized
              on the website with any of the goods or services, not the Smart
              Online Exam. The entire trademarks are not possessed by Smart
              Online Exam or it associates display on Smart Online Exam or it
              associates websites are the respective owner's property who may or
              not connected, affiliated, linked with the affiliates or Smart
              Online Exam.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer/>
  {/* Footer */}
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