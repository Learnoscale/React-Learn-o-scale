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
import {IconButton} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import './Contents.css'
import { Themes } from "../../Theme/theme";

import { crud } from "../../services/crud";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { testDurationAction } from '../../services/actions/testActions'; 

import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { sectionDurationAction } from '../../services/actions/sectionActions'; 


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
export default function CreateNewInstruction() {
  const dispatch = useDispatch()

  const classes = useStyles();
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const [settestLayout]=useState();
  const [open, setOpen] = React.useState(false);
  const [saveSection, setsaveSection] = useState('');
  const [formData, setFormData] = useState({
    formTitle: "",
    ButtonTitle: "",
  });
  const [showeditor, setShoweditor] = useState(false);

  const  testTimeDuration = useSelector(state => state.testDurationState, shallowEqual);

  
  let sectionDuration = Number(saveSection.hour === undefined ? 0 : saveSection.hour*60) + Number(saveSection.minute === undefined ? 0 : saveSection.minute);
  console.log(saveSection.hour,"=====>>>", saveSection.minute, 'sectionDuration', sectionDuration, 'saveSection.hour', saveSection.hour)
  let timeleft = (testTimeDuration.testTime);
  if(sectionDuration > 0){
     timeleft = ((testTimeDuration.testTime)) - (sectionDuration);
  }
 
  console.log('testTimeDuration', testTimeDuration);
  console.log('timeleft',timeleft);
  const handleClickOpen = () => {
    if(timeleft > 0){
    setOpen(true);
    }
    else
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
  function Addsectionsave(){
    setOpen(true)
    setsaveSection({
        formTitle: 'Add New Instruction',
        ButtonTitle: 'Save Instruction',
    });
    }
    function saveSctiondata() {
          setOpen(true)
          setFormData({
             formTitle: 'Create New Instruction',
             ButtonTitle: 'Save Instruction',
          });
    }

    const handleEditor =() => {
      setShoweditor(true);
    }
  const handleClose = () => {
    setOpen(false);
  };
 
  useEffect(() => {
    
     getTestLayOut();
     // eslint-disable-next-line
  }, [location]);
  const addNewSectionSave = async () => {
      if(formData.ButtonTitle==='Save Instruction'){
              const data=await crud.retrieve('/lastmake');
              await crud.create('/TestSectionApi/',{
                sectionName:saveSection.secname,
                hour:saveSection.hour,
                minute:saveSection.minute,
                allowedSectionSwitching:saveSection.secSwich,
                skipSectionBeforeTimeOver:saveSection.secSkip,
                studentChoice: saveSection.stdChoice,
                useSectionAsBreak:saveSection.secBreak,
                showPreviousSection:false,
                sectionInstruction:saveSection.secInstruction,
                testmake:data.lastid
            });
         setOpen(false)
      }
     //dispatch(testDurationAction(timeleft))
     dispatch(testDurationAction(timeleft),
    sectionDurationAction(sectionDuration)); 
  }
  return (
    <> 
    <div>
       {loader}
      <text variant="none" onClick={() => {
        saveSctiondata();
        Addsectionsave();
        handleClickOpen();
      }} style={{fontSize:'12px'}}>
       Add New instruction
      </text>
      <BootstrapDialog 
        disableEnforceFocus={true}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth= "md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         Create New Instruction
        </BootstrapDialogTitle>
        <DialogContent dividers>
       <div className="container-fluid">
         <div className="row my-2">
           <div className="col-sm-2 d-flex align-items-center requiredField"><h6>Instruction Name</h6></div>
           <div className="col-sm-10"><input type="text"   className='border  form-control' /></div>
         </div>
        
        
        
           
          
         
         
        
         

         <div className="row my-3">
           <label htmlFor="section-instruction"> <h6>Section Instructions</h6></label>
         <div className="border p-4" onClick={handleEditor} ><div style={{ display:(showeditor===true)?'block':'none'}} id='myDIV'  >
         <CKEditor editor={Editor} /></div>
         </div>
         </div>
        
       </div>
       
       <div className="row my-0">
           <div className="col-sm-2"></div>
           <div className="col-sm-3">
          
      </div>
           <div className="col-sm-2"></div>
           <div className="col-sm-3"><Button className={clsx(classes.Btn,)} variant={'contained'} onClick={addNewSectionSave} color="primary"> 
                        {formData.ButtonTitle}
        </Button></div>
           <div className="col-sm-2"></div>
           
         </div>
       </DialogContent>
      </BootstrapDialog>
    </div>
    </>
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