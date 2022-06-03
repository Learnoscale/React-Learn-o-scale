import React from "react";
import { useHistory } from 'react-router-dom';


 export default function ExitExam() {
  const navigate = useHistory();


return(
  <>
  <div className="container-fluid">
  <div  className="row p-4 text-white sticky-md-top" style={{backgroundColor: '#0000FF'}}/>
  <div className="row" style={{ maxWidth:'100%', minHeight: '547px'}}>
    <div className="row  m-auto bg-light my-5 p-5" style={{ textAlign: "center", minWidth:'50%', minHeight: '300px'}}>
      <div className="row  text-center"><h4>Dear Candidate you have now Successfully Completed the Exam</h4></div><br /><br />
      <div className="row  text-center" style={{textAlign: "center"}}><h4>Please click on the bellow button to exit</h4></div><br /><br />
      <div className="row  text-center mt-5"><div className="col-3"></div><div className="col-6 text-center"><button type="button" className="btn btn-outline-primary btn-sm px-1 " onClick={() => navigate.push('/')} size="small">Exit Exam</button></div><div className="col-3"></div></div>
      
    </div>
    </div>
    
  </div>
  </>

)

}