import React from 'react';

import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import ExampleOne from './images/perImg.png';
import classes from './psycho.module.css';

// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/section5');  }
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




export default function GITestFive() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 1, seconds:0}
  
  
  return(
    <>
    <div  className="container-fluid"> 
    <div className="row p-1 bg-dark text-white"><text>RRC WCR apptitude Test</text> </div>
      
    
   
 
      <div   className="row " >
        <div className="col-11">
          <div className="row p-2 bg-secondary text-center text-white"><h5>Group Instructions: Test 5 Personality Test/व्यक्तित्व परीक्षण</h5></div>
          <div className="row fs-5 ">
          <div style={{ maxWidth: '100%', maxHeight: '510px', overflow: 'auto'}} className=" col-12 overflow-y fs-6 p-5">
             <h4>TEST 1:   Personality Test/ व्यक्तित्व परीक्षण</h4> <br />
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
            <div className="row py-1 fs-6 ps-5 "> This test contains some questions and you have to answer them according to your interest and views. Based on your answers, two different diamensions of your personality would be evaluated and two seperate scores would be generated. It is mendatory for you to qualify for both the diamensions of personality for being suitable in this test.  </div><br />
            <div className="row py-1"><h5>परीक्षण निर्देश</h5> </div>
            <div className="row py-1 fs-6 ps-5">
            इस परीक्षा में कुछ प्रश्न होते हैं और आपको अपनी रुचि और विचारों के अनुसार उनका उत्तर देना होता है। आपके उत्तरों के आधार पर, आपके व्यक्तित्व के दो अलग-अलग आयामों का मूल्यांकन किया जाएगा और दो अलग-अलग अंक बनाए जाएंगे। इस परीक्षा में उपयुक्त होने के लिए व्यक्तित्व के दोनों आयामों के लिए अर्हता प्राप्त करना आपके लिए अनिवार्य है।</div>

           <div className="row ps-5 fs-6">
          <img  className='ps-0' height="300px" width="90%" src={ExampleOne} alt="logo"/><br />
           Please mark your answer by clicking on your preferred answer option.(
           कृपया अपने पसंदीदा उत्तर विकल्प पर क्लिक करके अपना उत्तर चिह्नित करें।) <br />
           When you answer keep these four points in mind: (जब आप उत्तर दें तो इन चार बिंदुओं को ध्यान में रखें) <br /><br />
           <ol>
             <li>
               Give the first natural answer as it comes to you. <br />
               आपके पास आते ही पहला प्राकृतिक उत्तर दें।
             </li><br />
             <li>Try not to fall back on the middle, 'uncertain' answers exepts when the answer at either end is really impossible for you.
             <br />
             कोशिश करें कि बीच में पीछे न हटें, 'अनिश्चित' उत्तर तब समाप्त हो जाते हैं जब किसी भी छोर पर उत्तर आपके लिए वास्तव में असंभव होता है।</li> <br />
             <li>Be sure not to skip anything, try to answer every question, somehow.
             <br />
             सुनिश्चित करें कि कुछ भी न छोड़ें, हर प्रश्न का उत्तर किसी न किसी तरह से देने का प्रयास करें।
             </li><br />
             <li>Answer as honestly as possible what is true of you. <br />
             जितना हो सके ईमानदारी से जवाब दें कि आपके बारे में क्या सच है।</li>
           </ol>
              </div>
             
           
          </div>
          </div>
          <div className="row px-1 bg-white border" style={{ position: 'fixed',bottom: '10px', width: '100%'}}>
           <div className="col-2"></div>
            <div className="col-8 text-center ">
            <button type="button" className="btn btn-outline-danger px-4  fs-6" onClick={() => navigate.push('/section5')}>Skip</button></div>
            <div className="col-2"></div> 
          </div>
          </div>
          <div className="col-1  text-center">
          <div className="row bg-secondary text-white">
            <div><small>Timer</small></div>
            <div><CountDownTimer hoursMinSecs={hoursMinSecs}/></div>
          </div>
          <img alt="" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/candidateImg.jpg" className={classes.img}/>
          <small>Vikash Tiwari</small>
          </div>
        </div>
       
        </div>
    <Footer/>
    </>
  );
}