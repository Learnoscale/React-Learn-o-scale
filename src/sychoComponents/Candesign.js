import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';

function Candesign() {
  return (
    <div className="container-fluid">
      <div  className="row p-4 text-white sticky-md-top" style={{backgroundColor: '#0000FF'}}/>
      <div className="row">
        <div className="col-10 bg-secondary text-white fs-5">
          System Name:
          <h5 className="fs-1" style={{ textAlign: "left", color: "yellow" }}>
            C001
          </h5>
             kindly get in touch with the invigilator if there are any
            discrepancies in the Name and Photograph displayed on the screen or
            if the photograph is not yours
          </div>
          
        <div className="col-2 bg-secondary d-flex flex-row-reverse">
          {  <Stack direction="row" spacing={0}>
      <Avatar sx={{ width: 150, height: 150  }} variant="square"   src="/broken-image.jpg"/>
    
  
    </Stack>}
         
        </div>
        <div className="text-align fs-5" style={{ textAlign: "right", zIndex: '-1' }}>
            Candidate Name:
          </div>
          <div className="text-align fs-1" style={{ textAlign: "right",color: "yellow", zIndex: '-1' }}>
            {"John Smith "}
       
          </div>
          <div
            className="fs-4"
            style={{ textAlign: "right", color: "yellow", zIndex:'-1' }}
          >
            {" Mock Exam "}
          </div>
          
      </div>
     
    </div>
  );
}

export default Candesign;
