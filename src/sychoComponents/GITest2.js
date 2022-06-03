import React from 'react';

import { useHistory } from 'react-router-dom';
import Footer from './Footer';
import ExampleOne from './images/nww.jpg';
import ExampleTwo from './images/nww1.jpg';
import classes from './psycho.module.css';

// Countdowntimer start
const CountDownTimer = ({hoursMinSecs}) => {
   
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const navigate = useHistory();

  const tick = () => {
       if (mins === 0 && secs === 0) {
          navigate.push('/section2');  }
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




export default function GITestTwo() {
  const navigate = useHistory();
  const hoursMinSecs = { minutes: 1, seconds:0}
  
  
  return(
    <>
    <div  className="container-fluid"> 
    <div className="row p-1 bg-dark text-white"><text>RRC WCR apptitude Test</text> </div>
      
    
   
 
      <div   className="row " >
        <div className="col-11">
          <div className="row p-2 bg-secondary sticky-md-top text-center text-white"><h5>Group Instructions: Test 2 Selective Attention Test/चयनात्मक ध्यान परीक्षण</h5></div>
          <div className="row fs-5 ">
          <div style={{ maxWidth: '100%', maxHeight: '510px', overflow: 'auto'}} className=" col-12 overflow-y fs-6 p-5">
             <h4>TEST 2:   Selective Attention Test / चयनात्मक ध्यान परीक्षण</h4> <br />
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
            <div className="row ps-5 fs-6">
                 This is a test of selective attention.
									There are 2 questions in this test.Each question consists of a
									row of digits. Your task is to add oddnumbers (1, 3,5) and
									indicate which of the 5 options shows the correct sum. While
									adding, even numbers (2,4,6) are to be ignored.
           </div><br />
            <div className="row py-1"><h5>परीक्षण निर्देश</h5> </div>
            <div className="row py-1 fs-6 ps-5">
            यह सेलेक्टिव अटेंशन टेस्ट का परीक्षण है | इस
									परीक्षण में कुल 2 प्रशन है प्रत्येक प्रशन में अंको की कतार दी
									गयी है| आपको इसमें दी गई विषम संख्याओं (1,3,5) को जोडकर यह
									बताना है की दिए गये पांच विकल्पों में से किसी विकल्प का योग सही
									उत्त्तर प्रदर्शित करता है| योग करते समय सम संख्याओं (2,4,6) की
									गिनती नही करनी है|</div><br />
                  <div className="row py-1 fs-6 ps-5"><h6>Look at the examples given bellow</h6></div>
                  <div className="row  py-1 fs-6 ps-5"><h6>नीचे दिए गए उदाहरणों को देखें</h6></div><br />
            <img  className='ps-5' height="100px" width="90%" src={ExampleOne} alt="logo"/><br />
            <div className="row py-1 fs-6 ps-5">
            In this example
									the sum of odd numbers is 23 hence the answer will be ‘D’.
									click on D answer option to give your answer. In the main test
									you have to answer similarly.
            </div>
        
        
            <div className="row py-1 fs-6 ps-5">
            उपरोक्त उदाहरण
									में विषम संख्याओ का योग 23 है| अत: सही उत्त्तर विकल्प D होगा,
									अपना उत्त्तर माउस की सहायता से विकल्प D का चयन करके दर्शाना है
									और मुख्य परीक्षण में भी इसी प्रकार प्रशनों के उत्त्तर देने है|
            </div><br />
            <div className="row py-1 fs-6 ps-5"><h6>Look at second example:</h6></div>
            <div className="row  py-1 fs-6 ps-5"><h6>अब दूसरा उदाहरण देखें:</h6></div><br />
             <img  className='ps-5' height="100px" width="90%" src={ExampleTwo} alt="logo"/><br />
             <div className="row py-1 fs-6 ps-5">
                  In this example
									the sum of odd numbers is 25 hence the anwers will be ‘A’. <br />
									click on A answer option to give your answer.
            </div><br />
        
             <div className="row py-1 fs-6 ps-5">
                  इस उदाहरण में
									विषम संख्याओं का योग 25 है जो विकल्प A के समक्ष दर्शाया गया है <br />
									अत: अपना उत्त्तर माउस की सहायता से विकल्प A का चयन करके
									दर्शायें|
            </div>

           
          
            

             
          
            


             
           
          </div>
          </div>
          <div className="row px-1 bg-white border" style={{ position: 'fixed',bottom: '10px', width: '100%'}}>
           <div className="col-2"></div>
            <div className="col-8 text-center ">
            <button type="button" class="btn btn-outline-danger px-4  fs-6" onClick={() => navigate.push('/section2')}>Skip</button></div>
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