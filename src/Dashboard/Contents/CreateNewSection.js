import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import AddQuestionsL from './AddQuestions';
import SimpleAccordion from './TestSection';
import TestInstructions from './TestInstruction';
import TestSettings from './TestSettings';
import './Contents.css'
import AddNewSection from './AddNewSection';
import {useSelector, shallowEqual} from 'react-redux';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateNewSection(props) {
  const [open, setOpen] = React.useState(false);
  const  testTimeDuration = useSelector(state => state.testDurationState, shallowEqual);
  const  sectionTimeDuration = useSelector(state => state.sectionDurationState, shallowEqual);
  let secOnetime = sectionTimeDuration.sectionTime;
  let timeleft = testTimeDuration;

 
  const handleClickOpen = () => {
    if(timeleft.testTime > 0){
    setOpen(true);
    }
    else
          setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}  >
        Create New Section
      </Button>
      <Dialog 
        disableEnforceFocus={true} 
        fullScreen
        PaperProps={{ sx: {width: "90%", height: "90%"}}}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
          <div className='container-fluid' style={{testAlign: 'center'}}>
            <div className="row py-2">
            <div className='col-sm-3'>
            Test Name: {props.testname} 
            </div>
            <div className="col-sm-5"></div>
            <div className="col-sm-3" style={{testAlign: 'center'}}>
            <AddNewSection  disableEnforceFocus={true} />
            </div>
            <div className="col-sm-1">
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className='mx-3'
            >
              <CloseIcon />
            </IconButton>
            </div>
            </div>
          </div>
          <Divider />
          <div class="container-fluid min-vh-100 d-flex flex-column">
    <div className="row flex-grow-1 " style={{fontSize:'14px'}}>
        <div className="col-md-3 border">
           <div className="row mb-2"><SimpleAccordion /></div>
           <div className="row mb-2"><TestInstructions /></div>
           <div className="row mb-2"><TestSettings /></div>
        </div>
        <div className="col-md-9 border">
          
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='mb-4'/>}
        
          
        >
           <div className="row">
          <div className="col-md-3">
            <b>First Section</b><br /><text>10 Questions {secOnetime}  30 Marks</text>
            </div>
          <div className="col-md-3 dropdown">
            <div className='dropdown' ><b>Add Questions</b></div>
            <div className='dropdown-content p-0'> 
            <div className='p-0' ><AddQuestionsL/></div>
            <Link className='p-0' to={"Ilib"}><small>Import from Test</small></Link>  
            </div> 
          </div>
            <div className="col-md-3 border p-0 text-center ">
             <div className="row text-center mb-1"><b>Set Marking</b></div>
             <div className="row m-0 text-center">
               <div className="col-md-3 text-center">
              
                 <input className='border p-0 text-center fs-6' placeholder='+'/>
               </div>
               <div className="col-md-3 text-center">
          
               <input className='border p-0 text-center fs-6' placeholder='-'/>
               </div>
               <div className="col-md-6"> 
               <button className='btn-sm btn-light border my-1 p-2 form-fixer' type='button'> <b>Apply</b> </button>
               </div>
             </div>
             </div>
            <div className="col-md-2 text-end" > <b>Edit section</b> </div>
            </div> 
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='mb-4'/>}
        
          
        >
           <div className="row">
          <div className="col-md-4 pe-5">
            <b>Question No.1</b><br />
            </div>
          <div className="col-md-1 px-5">
           
          </div>
            <div className="col-md-4 border ms-2 text-center ">
            
             <div className="row m-0 text-center">
               <div className="col-md-3 text-center">
              
                 <input className='border p-0 text-center fs-6' placeholder='+'/>
               </div>
               <div className="col-md-3 text-center">
          
               <input className='border p-0 text-center fs-6' placeholder='-'/>
               </div>
               <div className="col-md-6"> 
               <button className='btn-sm btn-light border my-1 p-2 form-fixer' type='button'>Apply</button>
               </div>
             </div>
             </div>
            <div className="col-md-2 text-end" > <b>Edit section</b> </div>
            </div> 
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <div>
           <b>Option 01</b><br />
           <b>Option 02</b><br />
           <b>Option 03</b><br />
           <b>Option 04</b>
          </div>
        </AccordionDetails>
      </Accordion>
        </AccordionDetails>
      </Accordion>
         
        </div>
    </div>
</div>
    
       
      
        
      </Dialog>
    </div>
  );
}