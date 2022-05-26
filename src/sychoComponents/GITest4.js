import React from 'react';

import { useHistory } from 'react-router-dom';
import ExampleOne from './images/InformationOrderingInstructions1.jpg';
import ExampleTwo from './images/InformationOrderingInstructions.jpg';
import Table1 from './images/ins4table.png';

import Example3 from './images/ex2ins.png';
import Footer from './Footer';
import classes from './psycho.module.css';


// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/section4');  }
     else if (secs === 0) {
          setTime([hrs, mins - 1, 59]);
      } else {
          setTime([hrs, mins, secs - 1]);
      }
  };


  //const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

  
  React.useEffect(() => {
      const timerId = setInterval(() => tick(), 1000);
      return () => clearInterval(timerId);
  });

  
  return (
      <div>
          <p>{`${hrs.toString().padStart(2, '0')}:${mins
          .toString()
          .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
      </div>
  );
}
// countdown timer end




export default function GITestFour() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 1, seconds:0}
  
  
  return(
    <>
    <div  className="container-fluid"> 
    <div className="row p-1 bg-dark text-white sticky-md-top"><text>RRC WCR apptitude Test</text> </div>
      
    
   
 
      <div   className="row " >
        <div className="col-md-11">
          <div className="row p-2 bg-secondary sticky-md-top text-center text-white"><h5>Group Instructions: Test 4 Information ordering test/निर्देशों के अनुसार कार्य करने की क्षमता का परीक्षण</h5></div>
          <div className="row fs-5 ">
          <div style={{ maxWidth: '100%', maxHeight: '521px', overflow: 'auto'}} className=" col-12 overflow-y fs-6 p-5">
             <h4>TEST 4:   Information ordering test / निर्देशों के अनुसार कार्य करने की क्षमता का परीक्षण</h4> <br />
            <div className="row ps-5">
              
              <div className="col-4"><h5>No. of Questions: 2</h5></div>
              <div className="col-4"><h5>प्रश्नों की संख्या: 2</h5></div>
              <div className="col-4"></div>
            </div>
            <div className="row ps-5">
              <div className="col-4 py-1 "><h5>Time limit: 2 minute</h5></div> 
              <div className="col-4 py-1 "><h5>समय सीमा: 2 मिनट</h5></div> 
              <div className="col-4"></div>
            </div>
            <div className="row py-1 fs-6 ps-5"> <i>The number of questions and time limit of each test will vary in the actual test.</i></div> 
            <div className="row py-1 fs-6 ps-5"><i> वास्तविक परीक्षा में प्रश्नों की संख्या और प्रत्येक परीक्षा की समय सीमा अलग-अलग होगी।</i></div>
            <div className="row py-1 "><h5>Test Instructions</h5> </div>
           
            
            <div className="row ps-5 ms-5 fs-6">
            <ol>
										<h6><li>This is a test of ability to act according to given
												instructions.</li></h6>
										<h6><li>There are 2 questions in this test.</li></h6>
										<h6><li>To solve questions in this test refer to table 1 and
												2.</li></h6>
										</ol>
            
           </div>
           <img  className='ps-0' height="300px" width="100%" src={ExampleOne} alt="logo"/><br />
           <img  className='ps-0' height="400px" width="100%" src={Table1} alt="logo"/><br />
           <div className="row py-1"><h5>परीक्षण निर्देश</h5> </div><br />
            
           <div className="row ps-5 ms-5 fs-6">
            <ol>
										<h6><li>यह दिए हुए निर्देशो के अनुसार कार्य करने की
												योग्यताका परीक्षण है |</li></h6>
										<h6><li>इस परीक्षण में 2 प्रश्न है |</li></h6>
										<h6><li>प्रश्नों को परीक्षण में दी गई तालिका 1 और तालिका 2
												की सहायता से हल करना है |</li></h6>
										</ol>
            
           </div>
           <img  className='ps-0' height="300px" width="100%" src={ExampleTwo} alt="logo"/><br />
           <img  className='ps-0' height="400px" width="100%" src={Table1} alt="logo"/><br />
           <div className="row row ps-5 fs-6">
             <h6>Steps to solve the test are:</h6>
             <h6>परीक्षण को नीचे दिए क्रम के अनुसार हल करे:</h6>
             <ol>
             <li>First step is to know the value of the test figure form table 2. <br />
             सर्वप्रथम टेस्ट आक्रति का मूल्य, आक्रति तालिका 2 से
											ज्ञात करे
             </li>
             <li>Add or subtract A-D process box value which has sign
											of (X) to the value of test figure. <br />टेस्ट आक्रति के मूल्य में (x) के चिन्ह वाले प्रत्येक
											प्रोसेस बॉक्स के A-D तक के स्तरों का मूल्य जोड़े तथा घटाए|</li>
										<li>Find out the corresponding figure table 2 by using
											the value of Last solved of box D. <br />प्रोसेस बॉक्स D के अंतिम स्तर में प्राप्त संख्या के
											मूल्य से सम्बंधित आक्रति, आक्रति तालिका 2 से ज्ञात करे |</li>
										<li>Mark correct option according to figure. <br />प्राप्त आक्रति से सम्बन्धित उत्त्तर विकल्प को चुने</li>
             </ol>

           </div>

           <div className="row ps-5 fs-6"> <h6>Here are some examples: <br /> <br />यहाँ कुछ उदाहरण दिए हुए है :</h6></div>
           <img  className='ps-0' height="450px" width="100%" src={Example3} alt="logo"/><br />

          
            


             
           
          </div>
          </div>
          <div className="row p-1  sticky-md-bottom border">
            <div className="col-3 p-1  text-center"></div>
            <div className="col-7"></div>
            <div className="col-2 p-1  text-center "><button type="button" class="btn btn-outline-danger fs-6" onClick={() => navigate.push('/section4')}>Skip Instructions</button></div>
            
          </div>
          </div>
          <div className="col-md-1  text-center">
          <div className="row p-1 bg-secondary sticky-md-top text-white">
            <div><small>Timer</small></div>
            <div><CountDownTimer hoursMinSecs={hoursMinSecs}/></div>
          </div>
          <img alt="" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/candidateImg.jpg" className={classes.img}/>
          <div>Vikash Tiwari</div>
          </div>
        </div>
        
        </div>
    <Footer/>
    </>
  );
}