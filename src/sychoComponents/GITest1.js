import React from 'react';

import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import ExampleOne from './images/newtest.jpg';
import ExampleTwo from './images/newtest1.jpg';
import classes from './psycho.module.css';

const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);

  const navgate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navgate('/section1');  }
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


export default function GITestOne() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 1, seconds:0}
  return(
    <>
    <div  className="container-fluid"> 
    <div className="row p-1 bg-dark text-white sticky-md-top"><text>RRC WCR apptitude Test</text> </div>
      
    
   
 
      <div   className="row " >
        <div className="col-md-11 border">
          <div className="row p-2 bg-secondary sticky-md-top text-center text-white"><h5>Group Instructions: Test 1 Intelligence Test/बुद्धि-परीक्षण</h5></div>
          <div className="row fs-5 ">
          <div style={{ maxWidth: '100%', maxHeight: '580px', overflow: 'auto'}} className=" col-12 overflow-y fs-6 p-5">
             <h4>TEST 1:   Intelligence Test / बुद्धि-परीक्षण</h4> <br />
            <div className="row ps-5">
              
              <div className="col-4"><h5>No. of Questions: 2</h5></div>
              <div className="col-4"><h5>प्रश्नों की संख्या: 2</h5></div>
              <div className="col-4"></div>
            </div>
            <div className="row ps-5">
              <div className="col-4 py-1 "><h5>Time limit: 1 minute</h5></div> 
              <div className="col-4 py-1 "><h5>समय सीमा: 1 मिनट</h5></div> 
              <div className="col-4"></div>
            </div>
            <div className="row py-1 fs-6 ps-5"> <i>The number of questions and time limit of each test will vary in the actual test.</i></div> 
            <div className="row py-1 fs-6 ps-5"><i> वास्तविक परीक्षा में प्रश्नों की संख्या और प्रत्येक परीक्षा की समय सीमा अलग-अलग होगी।</i></div>
            <div className="row py-1 "><h5>Test Instructions</h5> </div>
            <div className="row py-1 fs-6 ps-5 "> This is the test of Intelligence.Each question consists of five figures, four of which are similar in a certain way whereas one is different from others. Your task is to find out which figure out of these five figures is different. Give answere by clicking on the appropriate answer option through the mouse. </div><br />
            <div className="row py-1"><h5>परीक्षण निर्देश</h5> </div>
            <div className="row py-1 fs-6 ps-5">
                 यह बुद्धि की परीक्षा है। प्रत्येक प्रश्न में पाँच अंक होते हैं, जिनमें से चार एक निश्चित तरीके से समान होते हैं जबकि एक अन्य से भिन्न होता है। आपका काम यह पता लगाना है कि इन पांच आंकड़ों में से कौन सा आंकड़ा अलग है। माउस के माध्यम से उपयुक्त उत्तर विकल्प पर क्लिक करके उत्तर दें।</div><br />

            <div className="row py-1 fs-6 ps-5">Look at the examples given bellow</div>
            <div className="row  py-1 fs-6 ps-5">नीचे दिए गए उदाहरणों को देखें</div><br />
            <img  className='ps-5' height="100px" width="90%" src={ExampleOne} alt="logo"/><br /><br />
            <div className="row py-1 fs-6 ps-5">
                  In the above
									example figures 1,3,4 and 5 are similar where as figure 2 is
									different as it has inverted &lsquo;V&rsquo;, Therefore answer
									will be 2. You have to click on answer option 2 to give your
									answer. In the main test you have to answer similarly.
            </div><br />
            <div className="row py-1 fs-6 ps-5">
                  ऊपर दिए गये
									उदाहरण में आक्रति 2 अन्य आक्रतियों 1,3,4 और 5 से भिन्न है,
									क्योंकि इसमें v उल्टा दर्शाया गया है| अत: उपरोक्त उदाहरण का सही
									उत्त्तर विकल्प 2 है|<br />अपना उत्त्तर माउस की सहायता से
									विकल्प 2 का चयन करके दर्शाना है और मुख्य परीक्षण में भी इसी
									प्रकार प्रश्नों के उत्त्तर देने है
            </div><br />
            <div className="row py-1 fs-6 ps-5">Look at the second example given bellow</div>
            <div className="row  py-1 fs-6 ps-5">अब दूसरा उदाहरण देखें:</div><br />
             <img  className='ps-5' height="100px" width="90%" src={ExampleTwo} alt="logo"/><br />
             <div className="row py-1 fs-6 ps-5">
             In the above
									example figures 1,2,3 and 5 are similar as in all these figures
									both circles touch each other at some point where as figure 4
									is different as both the circles in the figure don&rsquo;t
									touch each other. Therefore answer will be 4.<br/>You have to click
									on answer option 4 to give your answer.
            </div><br/>
            
             <div className="row py-1 fs-6 ps-5">
             ऊपर दिये गये
									उदाहरण में आक्रति 1,2,3 और 5 एक समान है क्योकि इन सभी
									आक्र्तियों में दोनों गोले एक दूसरे को कहीं न कहीं स्पर्श करते
									है, जबकि आक्रति 4 में दोनों गोले एलक दूसरे को स्पर्श नही कर रहे
									है, अत: इस उदाहरण का सही उत्त्तर विकल्प 4 है|<br/><br /> अपना
									उत्त्तर माउस की सहायता से विकल्प 4 का चयन करके दर्शाना है और
									मुख्य परीक्षण में भी इसी प्रकार प्रश्नों के उत्त्तर देने है|
            </div>

           
          
            

<div className="row ps-5 fs-6">
           
              </div>
             
           
          </div>
          </div>
          <div className="row p-1 border" style={{ position: 'fixed',bottom: '27px', width: '100%'}}>
           <div className="col-6"></div>
            <div className="col-3 text-center ">
            <button type="button" class="btn btn-outline-danger  fs-6" onClick={() => navigate.push('/section1')}>Skip Instructions</button></div>
            <div className="col-3"> </div>
          </div>
          </div>
          <div className="col-md-1  text-center">
          <div className="row bg-secondary sticky-md-top text-white">
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