import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';
export const Second = () => (
    <div>
      {/*------------------------------card details code----------------------------*/}
      <div className="text-centre">
        <h2 className="mt-5 mb-5">SSC Course Practice Test and Video Lecture </h2>
      </div>
      <div className="wrapper">
        <div className="product_wrap">
          <div className="product_item">
            <div className="img">
              <img src="rail.jpg" alt="Round_neck" />
              <p className="brand_name">Complete Package</p>
            </div>
            <div className="size_color">
              <button className="title">Purchase Course</button>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>Video</span>
                  </li>
                  <li>
                    <span>Test</span>
                  </li>
                  <li>
                    <span>Notes</span>
                  </li>
                  <li>
                    <span>GK/S</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#cab7a2" data-src="roundneck2.png" />
                  <li
                    className="active"
                    data-color="#532e35"
                    data-src="roundneck1.png"
                  />
                  <li data-color="#7f8cab" data-src="roundneck3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>RS.450</p>
            </div>
          </div>
          <div className="product_item">
            <div className="img">
              <img src="rail2.jpg" alt="Round_neck" />
              <p className="brand_name">Mast &amp; Harbour</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#f5d3ca" data-src="long1.png" />
                  <li
                    className="active"
                    data-color="#6c623f"
                    data-src="long2.png"
                  />
                  <li data-color="#2d2c32" data-src="long3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$14</p>
            </div>
          </div>
          <div className="product_item">
            <div className="img">
              <img src="p1 (5).jpg" alt="Round_neck" />
              <p className="brand_name">Adidas</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#0a5457" data-src="capped1.png" />
                  <li
                    className="active"
                    data-color="#b50a1d"
                    data-src="capped2.png"
                  />
                  <li data-color="#fe911a" data-src="capped3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="product_wrap">
          <div className="product_item">
            <div className="img">
              <img src="roundneck1.png" alt="Round_neck" />
              <p className="brand_name">H &amp; M Round Neck</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#cab7a2" data-src="roundneck2.png" />
                  <li
                    className="active"
                    data-color="#532e35"
                    data-src="roundneck1.png"
                  />
                  <li data-color="#7f8cab" data-src="roundneck3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$12</p>
            </div>
          </div>
          <div className="product_item">
            <div className="img">
              <img src="long2.png" alt="Round_neck" />
              <p className="brand_name">Mast &amp; Harbour</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#f5d3ca" data-src="long1.png" />
                  <li
                    className="active"
                    data-color="#6c623f"
                    data-src="long2.png"
                  />
                  <li data-color="#2d2c32" data-src="long3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$14</p>
            </div>
          </div>
          <div className="product_item">
            <div className="img">
              <img src="capped2.png" alt="Round_neck" />
              <p className="brand_name">Adidas</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#0a5457" data-src="capped1.png" />
                  <li
                    className="active"
                    data-color="#b50a1d"
                    data-src="capped2.png"
                  />
                  <li data-color="#fe911a" data-src="capped3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="product_wrap">
          <div className="product_item">
            <div className="img">
              <img src="roundneck1.png" alt="Round_neck" />
              <p className="brand_name">H &amp; M Round Neck</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#cab7a2" data-src="roundneck2.png" />
                  <li
                    className="active"
                    data-color="#532e35"
                    data-src="roundneck1.png"
                  />
                  <li data-color="#7f8cab" data-src="roundneck3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$12</p>
            </div>
          </div>
          <div className="product_item">
            <div className="img">
              <img src="long2.png" alt="Round_neck" />
              <p className="brand_name">Mast &amp; Harbour</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#f5d3ca" data-src="long1.png" />
                  <li
                    className="active"
                    data-color="#6c623f"
                    data-src="long2.png"
                  />
                  <li data-color="#2d2c32" data-src="long3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$14</p>
            </div>
          </div>
          <div className="product_item">
            <div className="img">
              <img src="capped2.png" alt="Round_neck" />
              <p className="brand_name">Adidas</p>
            </div>
            <div className="size_color">
              <div className="title">SIZE &amp; COLOR</div>
              <div className="size_wrap">
                <ul>
                  <li>
                    <span>36</span>
                  </li>
                  <li>
                    <span>38</span>
                  </li>
                  <li>
                    <span>40</span>
                  </li>
                  <li>
                    <span>42</span>
                  </li>
                </ul>
              </div>
              <div className="color_wrap">
                <ul>
                  <li data-color="#0a5457" data-src="capped1.png" />
                  <li
                    className="active"
                    data-color="#b50a1d"
                    data-src="capped2.png"
                  />
                  <li data-color="#fe911a" data-src="capped3.png" />
                </ul>
              </div>
            </div>
            <div className="price">
              <p>$15</p>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------start-important-Links-------------------------------------*/}
      <div className="text-center">
        <h2 className="mt-5 mb-5">Important Links</h2>
      </div>
      <button className="accordion">Previous Years Papers</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">Contact Us</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">Enquiry for Coaching</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">Get help</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">How Apply for Exams</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">Latest Jobs and Updates</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">History of Our Toppers and Faculty</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">
        What does says Our Toppers And selected candidates
      </button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">Facilities and Faculty </button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">Our Soppoters and Partners</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">GEt More Links from Here</button>
      <div className="panel">
        <p>
          Uou can Apply for the SSC CGL on officaial sweb site jdsf ieef ueueu eef
          fff irrutbj ffdf ruereh efu ueeur33u uheh fhhhj fhf fuuuew hd wef uyhuef
          fdbhewg yur p&gt;
        </p>
      </div>
      <button className="accordion">
        How To Prepare for it and get help for preperation...
      </button>
      <div className="panel">
        <p>
          Smart Online coching is the best for this exam and very helpful for
          competitive exams...
        </p>
      </div>
      <button className="accordion">Current Affairs</button>
      <button className="accordion">Previous Year Papers</button>
      <button className="accordion">Solved Papers</button>
      <button className="accordion">Toppers Notes</button>
      <button className="accordion">Results</button>
      <button className="accordion">More</button>
      <div className="panel">
        <p>Lorem ipsum...</p>
      </div>
      {/*------------------------End-important-links--------------------------------*/}
      {/*--------------------------------NEW FAQ--------------------------------------*/}
      <div className="text-center">
        <h2 className="mt-5 mb-5">FAQ</h2>
      </div>
      <section className="container my-5" id="maincontent">
        <section id="accordion">
          <a
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-17"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-17"
            role="button"
          >
            <div className="position-relative">
              <h2 className="h4 m-0 pr-3">What if I want custom gear?</h2>
              <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i className="fa fa-plus" />
              </div>
            </div>
          </a>
          <div className="collapse" id="faq-17" style={{}}>
            <div className="card card-body border-0 p-0">
              <p>
                Custom gear can be ordered through our contact form. Additional
                fees may apply.
              </p>
            </div>
          </div>
          <a
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-18"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-18"
            role="button"
          >
            <div className="position-relative">
              <h2 className="h4 m-0 pr-3">
                What is the official mission statement?
              </h2>
              <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i className="fa fa-plus" />
              </div>
            </div>
          </a>
          <div className="collapse" id="faq-18" style={{}}>
            <div className="card card-body border-0 p-0">
              <p>Our official mission statement is lorem ipsum dolor sit.</p>
              <p></p>
            </div>
          </div>
          <a
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-19"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-19"
            role="button"
          >
            <div className="position-relative">
              <h2 className="h4 m-0 pr-3">What is the purpose of LunarXP?</h2>
              <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i className="fa fa-plus" />
              </div>
            </div>
          </a>
          <div className="collapse" id="faq-19" style={{}}>
            <div className="card card-body border-0 p-0">
              <p>
                The purpose of LunarXP is to give you the best Mars experience!
              </p>
              <p></p>
            </div>
          </div>
          <a
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
            aria-controls="faq-20"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-20"
            role="button"
          >
            <div className="position-relative">
              <h2 className="h4 m-0 pr-3">
                What is the best email to reach you at?
              </h2>
              <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i className="fa fa-plus" />
              </div>
            </div>
          </a>
          <div className="collapse" id="faq-20">
            <div className="card card-body border-0 p-0">
              <p>The best email for any inquiries is email@email.com!</p>
              <p></p>
            </div>
          </div>
          <a
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
            aria-controls="faq-21"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-21"
            role="button"
          >
            <div className="position-relative">
              <h2 className="h4 m-0 pr-3">
                Where can I read more about this company?
              </h2>
              <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i className="fa fa-plus" />
              </div>
            </div>
          </a>
          <div className="collapse" id="faq-21">
            <div className="card card-body border-0 p-0">
              <p>Lorem ipsum dolor sit!</p>
              <p></p>
            </div>
          </div>
          <a
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary  border-top"
            aria-controls="faq-22"
            aria-expanded="false"
            data-toggle="collapse"
            href="#faq-22"
            role="button"
          >
            <div className="position-relative">
              <h2 className="h4 m-0 pr-3">What is the best time to call?</h2>
              <div className="position-absolute top-0 right-0 h-100 d-flex align-items-center">
                <i className="fa fa-plus" />
              </div>
            </div>
          </a>
          <div className="collapse" id="faq-22">
            <div className="card card-body border-0 p-0">
              <p>
                The best time to call is 24/7! We are always available to answer
                any questions.
              </p>
              <p></p>
            </div>
          </div>
        </section>
      </section>
      {/*--------------------------------End NEW FAQS--------------------------------*/}
      {/*--------------------------------start-some Links for Students Help-------------------------*/}
      <section className="container my-5" id="maincontent">
        <section id="accordion">
          <Link
            className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
            aria-controls="faq-17"
            aria-expanded="false"
            data-toggle="collapse"
            to="#faq-17"
            role="button"
          ></Link>
          <div className="position-relative">
            <a
              className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
              aria-controls="faq-17"
              aria-expanded="false"
              data-toggle="collapse"
              href="#faq-17"
              role="button"
            >
              <h2 className="h4 m-0 pr-3">
                Some Importants Links for Students...
              </h2>
            </a>
            <ul>
              <Link
                className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                aria-controls="faq-17"
                aria-expanded="false"
                data-toggle="collapse"
                to="#faq-17"
                role="button"
              ></Link>
              <li>
                <Link
                  className="py-3 d-block h-100 w-100 position-relative z-index-1 pr-1 text-secondary border-top"
                  aria-controls="faq-17"
                  aria-expanded="false"
                  data-toggle="collapse"
                  to="#faq-17"
                  role="button"
                />
                <Link to="#">Currents affairs</Link>
              </li>
              <li>
                <Link to="#">Previous Year Papers</Link>
              </li>
              <li>
                <Link to="#">Solved Papers</Link>
              </li>
              <li>
                <Link to="#">Toppers Notes</Link>
              </li>
              <li>
                <Link to="#">Results</Link>
              </li>
              <li>
                <Link to="#">More</Link>
              </li>
            </ul>
          </div>
        </section>
        {/*-------------------------------End some links---------*/}
        {/*--------------------end--card--details*/}&gt;
      </section>
    </div>
  )