import React, { useEffect, useState } from "react";
import {
  makeStyles,
  
} from "@material-ui/core";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {IconButton, Switch} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import  styles from './Contents.css'
import { Themes } from "../../Theme/theme";
import { crud } from "../../services/crud";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Checkbox from '@mui/material/Checkbox';

const label = {inputProps: { 'aria-label': 'Switch demo'}};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddCompany() {
  const classes = useStyles();
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
 
  const [settestLayout]=useState();
  const [formData, setFormData] = useState({
    formTitle: "",
    ButtonTitle: "",
  });
  const [saveTest, setsaveTest] = useState('');
 
  function AddsaveTest(){
  setOpen(true)
  setsaveTest({
      formTitle: 'Add Company',
      ButtonTitle: 'Add Company',
  });
  }
  function saveTestData() {
        setOpen(true)
        setFormData({
           formTitle: 'Add Company',
           ButtonTitle: 'Add Company',
        });
  }

  const handleClose = () => {
    setOpen(false);
  };

 
  async function getTestLayOut()
  {
     
      setLoader(true);
      try{
          const data1= await crud.retrieve('/testLayoutapi/')
          settestLayout(data1);
          setLoader(false);
        }
      
      catch(e){
      setLoader(false);
      }
  }
  useEffect(() => {
    
     getTestLayOut();
     //eslint-disable-next-line
  }, [location]);
  return (
    <div>
      {loader}
      <Button variant="none" onClick={() => {
        saveTestData();
        AddsaveTest();

      }} 
       style={{ color: "black"}}>
      Add Company
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth= "lg"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Add Company
        </BootstrapDialogTitle>
        <DialogContent dividers>
       <div className="container-fluid">
         <div className="row">
         <div className="col-sm-6 pe-5"> 
         <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Institution Name:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Address:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Pin Code:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>City:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>State:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Contact No:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Email ID:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           </div>
         
         <div className="col-sm-6 ps-5"> 
         <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Owner Name:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"></div>
           <div className="col-sm-1 d-flex align-items-center"><Checkbox {...label}   size="small"/></div>
           <div className="col-sm-7 ps-2">
             Check, if Institution address is same
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Address:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Pin Code:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>City:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>State:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Contact No:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           <div className="row">
           <div className="col-sm-4 d-flex align-items-center"><h6>Email ID:</h6></div>
           <div className="col-sm-8">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           </div>
           </div>
           </div>
           <div className="row border"></div>
           <div className="row">
           <div className="col-sm-1 d-flex align-items-center"><h6>URL</h6></div>
           <div className="col-sm-7">
             <input type="text" value={saveTest.testname} 
             onChange={(e) => {setsaveTest({...saveTest,testname:e.target.value})}} 
             className='border  form-control' 
             />
           </div>
           <div className="col-sm-4"></div>
           </div>
           <div className="row pb-2">
               <div className="col-sm-4">
                   <div className="row">
                       <div className="col-sm-4">Logo</div>
                       <div className="col-sm-4 border">Upload Logo</div>
                       <div className="col-sm-4"></div>
                   </div>
               </div>
               <div className="col-sm-4">
               <div className="row">
                       <div className="col-sm-4">Fab Icon</div>
                       <div className="col-sm-5 border">Upload Fab Icon</div>
                       <div className="col-sm-3"></div>
                   </div>
               </div>
               <div className="col-sm-4">
               <div className="row">
                       <div className="col-sm-4">Theme</div>
                       <div className="col-sm-4">  <select name="select-theme"   className='border' id="select-theme">
        
                           <option>Select theme 1</option>
                           <option>Select theme 2</option>
                           <option>Select theme 3</option>
            
                           </select></div>
                       <div className="col-sm-4"></div>
                   </div>
               </div>
           </div>
           <div className="row border"></div>
           <div className="row">
               <div className="col-2">Content Share</div>
               <div className="col-2">off<Switch  {...label} />on</div>
               <div className="col-8"></div>
           </div>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-sm-2">Engineering</div>
                   <div className="col-sm-2">JEE Mains</div>
                   <div className="col-sm-2">Maths</div>
                   <div className="col-sm-2"></div>
                   <div className="col-sm-2">1000 Q.</div>
                   <div className="col-sm-1"></div>
                   <div className="col-sm-1">Remove</div>
               </div>
               <div className="row">
                   <div className="col-sm-2">Medical</div>
                   <div className="col-sm-2">NEET</div>
                   <div className="col-sm-2">Biology,Zoology,Physics,Chemistry</div>
                   <div className="col-sm-2"></div>
                   <div className="col-sm-2">5000 Q.</div>
                   <div className="col-sm-1"></div>
                   <div className="col-sm-1">Remove</div>
               </div>
               <div className="row pt-2">
               <div className="col-sm-2"></div>
                   <div className="col-sm-6"><select name="select-theme"   className='border me-2' id="select-theme"><option>Select Category</option></select>
                   <select name="select-theme"   className='border me-2' id="select-theme"><option>Select Course</option></select>
                   <select name="select-theme"   className='border me-2' id="select-theme"><option>Select Subject</option></select>
                   <select name="select-theme"   className='border me-2' id="select-theme"><option>Select Topic</option></select></div>
                   <div className="col-sm-1">1000 Q.</div>
                   <div className="col-sm-1"></div>
                   <div className="col-sm-2"><button className="bg-success btn-sm " style={{fontSize: '12px'}}>Add Questions</button></div>
               </div>
           </div>
        
     
      
           
        
       </div>
        </DialogContent>
        <DialogActions>
        {/* <CreateNewSection hour={saveTest.hour} minute={saveTest.minute}/> */}
        <Button className={clsx(classes.Btn,)} variant={'contained'} 
        // onClick={async() => {
        //             if(formData.ButtonTitle==='Create Test'){
        //                   await crud.create('/testMakesapi/',{
        //                       user :1,
        //                       testName:saveTest.testname,
        //                       tags:saveTest.tagname,
        //                       noOfQuestions:saveTest.questionNo,
        //                       totalMarks:saveTest.totalmarks,
        //                       hour:saveTest.hour,
        //                       minute:saveTest.minute,
        //                       testCategory:saveTest.testcategory,
        //                       testLayout:saveTest.testlayout,
        //                       poolQuestion:savePoolFree.poolQ,
        //                       freeAvailable:savePoolFree.freeA,
        //                       testShowFrom:saveTest.startDate,
        //                       testEndON:saveTest.endDate
        //                     });
                      
        //              }
        //               // setOpen(false)
        //             }} color="primary"
                    > 
                        {formData.ButtonTitle}
        </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "-16px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "0px",
    },
  },
  menu: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  menuIcon: {
    marginLeft: 10,
  },
  CloseBtn: {
    position: "absolute",
    top: 5,
    right: 10,
  },
  FormWidth: {
    width: 300,
    minHeight: 200,
    [theme.breakpoints.up("sm")]: {
      width: 600,
    },
  },
  justifyContentForm: {
    display: "flex",
    justifyContent: "space-between",
  },
  InputTitle: {
    paddingTop: 5,
  },
  Btn: {
    background: Themes.MainHeaderColor,
    color: Themes.WHITE,
  },
}));