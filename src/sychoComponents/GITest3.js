import React from 'react';

import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import ExampleOne from './images/spnewImg.png';
import classes from './psycho.module.css';

// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/section3');  }
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
       <span>{`${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</span>  
      </div>
  );
}
// countdown timer end




export default function GITestThree() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 1, seconds:0}
  
  
  return(
    <>
    <div  className="container-fluid"> 
    <div className="row p-1 bg-dark text-white "><text>RRC WCR apptitude Test</text> </div>
      
    
   
 
      <div   className="row " >
        <div className="col-11">
          <div className="row p-2 bg-secondary text-center text-white"><h5>Group Instructions: Test 3 Special Scanning Test/विशेष स्कैनिंग परीक्षण</h5></div>
          <div className="row fs-5 ">
          <div style={{ maxWidth: '100%', maxHeight: '510px', overflow: 'auto'}} className=" col-12 overflow-y fs-6 p-5">
             <h4>TEST 3:   Special Scanning Test / विशेष स्कैनिंग परीक्षण</h4> <br />
            <div className="row ps-5">
              
              <div className="col-4"><h5>No. of Questions: 4</h5></div>
              <div className="col-4"><h5>प्रश्नों की संख्या: 4</h5></div>
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
            <div className="row py-1 fs-6 ps-5 "> This test measures your ability to find
									the shortest possible route between any two locations
									represented by alphabets from A to Z.<br/> you will be
									shown a map (grid) where dark lines indicate streets. The
									circles represent barriers which are not to be crossed.<br/>
									Squares containing numbers represent houses. You have to find
									the shortest possible route between any two locations and the
									number of the house passed by will be your answer. <br/>While
									finding the shortest possible route certain rules have to be
									followed:<br /> <br /> 1) The shortest route will always pass
									by only one house.<br/> 2) The same house can fall in more
									than one route.<br/> 3) If a route touches only the corner
									of a house then it will not be counted. <br/> <br />This
									test contains 2 grids having 02 questions each. After
									completion of every grid comprising of 02 questions click on
									the save and next button to go to the next grid. </div><br />
            <div className="row py-1"><h5>परीक्षण निर्देश</h5> </div>
            <div className="row py-1 fs-6 ps-5">
            यह परीक्षण दो स्थानों के मध्य संभावित सबसे छोटा
									रास्ता तलाशने की योग्यता का परीक्षण है जिसे यहाँ A से Z के रूप
									मर दर्शाया गया है<br/> आपको एक (नक्शा) ग्रिड देखने को दिया
									जाएगा जिसमे गाड़ी लाइनें सड़के है | गोले सडक में एक ऐसी रुकावट
									दर्शाते है जिनसे होकर आप आगे नही जा सकते है|<br/> नम्बरों
									वाले चौकोर खाने मकान है | आपको नम्बरों के बीच कम से कम दूरी के
									रास्ते का पता लगाना है| जिस मकान के बगल से अप गुजरेंगे उसका
									नंबर ही आपका उत्त्तर होगा |<br/> इस परीक्षण में 2 ग्रिड
									होगे और प्रत्येक ग्रिड में 02 प्रश्न होंगे | प्रत्येक ग्रिड में
									02 प्रश्नों की समाप्ति के पश्चात save and next का विकल्प बटन
									आयेगा जिसको क्लिक करके आप अगले ग्रिड पर जा सकते है |<br/>
									सम्भावित सबसे छोटा रास्ता तलाशते समय आपको निम्नलिखित नियमो का
									ध्यान रखना है –
                <b>	नियम </b>
							   1) सबसे नजदीक का रस्ता केवल एक मकान से होकर जाएगा
								<br/> 2) एक मकान एक से अधिक रास्तो में पद सकता है |
								<br/> 3) यदि रास्ता केवल मकान के कोने से होकर जाता है तो उसे
								मकान से होकर गुजरा नही माना जाएगा|</div><br />

           <div className="row ps-5 fs-6">
             <h6>Now look at the example given bellow:</h6>
             <h6>नीचे दिए गये उदाहरण को देखें:</h6>
             <img  className='ps-0' height="300px" width="90%" src={ExampleOne} alt="logo"/><br />
             The shortest
									route from A to Z passes from building 1. Similarly from E to S
									the shortest route passes form building 5. Mark your answer by
									clicking on the answer button 1 for question number 1 and
									answer button 5 for question number 2. In the main test you
									have to answer similarly. <br /><br />
                  A से Z के बीच
									सबसे नजदीक का रास्ता 1 नंबर मकान से होकर जाएगा| इसी प्रकार E से
									S के बीच 5 नंबर का मकान आयेगा| अपना उत्त्तर माउस की सहायता से
									प्रश्न 1 के लिए विकल्प 1 का एवं प्रश्न 2 के लिए विकल्प 5 चयन
									करके दर्शाना है और मुख्य परीक्षण में भी इसी प्रकार प्रश्नों के
									उत्त्तर देने है|
            
              </div>
             
           
          </div>
          </div>
          <div className="row px-1 bg-white border" style={{ position: 'fixed',bottom: '10px', width: '100%'}}>
           <div className="col-2"></div>
            <div className="col-8 text-center ">
            <button type="button" class="btn btn-outline-danger px-4  fs-6" onClick={() => navigate.push('/section3')}>Skip</button></div>
            <div className="col-2"></div> 
          </div>
          </div>
          <div className="col-1  text-center">
          <div className="row p-1 bg-secondary text-white">
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