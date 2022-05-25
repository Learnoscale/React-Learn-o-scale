import React from 'react';
import { useHistory } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Footer from './Footer';
const label = {inputProps: { 'aria-label': 'Switch demo'}};

export default function CandesignTwo() {
  const navigate = useHistory();
  function enablebutton(event){
    if(event.target.checked){
      document.getElementById('btn-ready').disabled = false;
    }
    else
    {
      document.getElementById('btn-ready').disabled = true;
    }
    
  }
  return(
    <>
    <div  className="container-fluid" style={{maxHeight: "100%"}}> 
    <div  className="row p-4 bg-primary text-white sticky-md-top" />
      
    
   
 
      <div   className="row " >
        <div className="col-md-9 fs-5">
          <div className="row p-1 bg-info sticky-md-top"><h4> Other Important Instructions</h4></div>
          <div style={{ maxWidth: '100%', minHeight: '322px', overflow: 'auto'}}>
            
         <div> Please tick the check box below to start the exam.</div>
          कृपया परीक्षण आरम्भ करने हेतु नीचे दिये चेक बाक्स को टिक करें ।
             
           
          </div>
          <div className="row p-1 border sticky-md-bottom">
            <div className="row">
            <div className="col"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/>
            <small>I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. / any prohibited material with me into the Examination Hall. I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and / or to disciplinary action, which may include ban from future Tests / Examinations.</small></div>
            </div>
            <div className="col-1"><button type="button" className="btn btn-outline-primary fs-6" onClick={() => navigate.push('/candesign-one')}>Previous</button></div>
            <div className="col-4"></div>
            <div className="col-4 p-1"><button type="button" className="btn btn-outline-primary fs-6" id='btn-ready' disabled>
              <text onClick={() => navigate.push('/gs-test1')}>I am ready to begin</text></button></div>
            <div className="col-3"></div>
          </div>
          </div>
          <div className="col-md-3 border text-center">
          <img alt="" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/candidateImg.jpg" className="image-responsive"/>
          <div className='text-center'>Vikash Tiwari</div>
          </div>
        </div>
        
        </div>
    <Footer/>
    </>
  );
}
