import React, { useEffect, useState} from "react";
import {
  makeStyles,
  
} from "@material-ui/core";
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {IconButton, Switch} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Themes } from "../../Theme/theme";

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

export default function TestSetting() {
 
  const classes = useStyles();
  const location = useLocation();
  const [loader] = useState(false);
  const [open, setOpen] = useState(false);
 
  const [formData, setFormData] = useState({
    formTitle: "",
    ButtonTitle: "",
  });
  function enablebutton(event){
    if(event.target.checked){
      document.getElementById('btn-ready').disabled = false;
    }
    else
    {
      document.getElementById('btn-ready').disabled = true;
    }
    
  }

  function saveTestData() {
        setOpen(true)
        setFormData({
           formTitle: 'Test Settings',
           ButtonTitle: 'Save Settings',
        });
  }

  const handleClose = () => {
    setOpen(false);
  };

 
 

  
//Radio Buttons start
const [selectedValue, setSelectedValue] = useState('a');
const [selectedValue1, setSelectedValue1] = useState('a');
const [selectedValue2, setSelectedValue2] = useState('a');
const [selectedValue3, setSelectedValue3] = useState('a');
const [selectedValue4, setSelectedValue4] = useState('a');
const [selectedValue5, setSelectedValue5] = useState('a');
const handleChange = (event) => {
  setSelectedValue(event.target.value);
};
const handleChange1 = (event) => {
  setSelectedValue1(event.target.value);
};
const handleChange2 = (event) => {
  setSelectedValue2(event.target.value);
};
const handleChange3 = (event) => {
  setSelectedValue3(event.target.value);
};
const handleChange4 = (event) => {
  setSelectedValue4(event.target.value);
};
const handleChange5 = (event) => {
  setSelectedValue5(event.target.value);
};
const controlProps = (item) => ({
  checked: selectedValue === item,
  onChange: handleChange,
  value: item,
  name: 'size-radio-button-demo',
  inputProps: { 'aria-label': item },
});

const controlProps1 = (item) => ({
  checked: selectedValue1 === item,
  onChange: handleChange1,
  value: item,
  name: 'size-radio-button-demo',
  inputProps: { 'aria-label': item },
});

const controlProps2 = (item) => ({
  checked: selectedValue2 === item,
  onChange: handleChange2,
  value: item,
  name: 'size-radio-button-demo',
  inputProps: { 'aria-label': item },
});
const controlProps3 = (item) => ({
  checked: selectedValue3 === item,
  onChange: handleChange3,
  value: item,
  name: 'size-radio-button-demo',
  inputProps: { 'aria-label': item },
});

const controlProps4 = (item) => ({
  checked: selectedValue4 === item,
  onChange: handleChange4,
  value: item,
  name: 'size-radio-button-demo',
  inputProps: { 'aria-label': item },
});
const controlProps5 = (item) => ({
  checked: selectedValue5 === item,
  onChange: handleChange5,
  value: item,
  name: 'size-radio-button-demo',
  inputProps: { 'aria-label': item },
});
//Radiio button closed

  useEffect(() => {
    
    
  }, [location]);



  return (
    <div>
      {loader}
      <div variant="none" style={{fontSize:'12px'}} onClick={() => {
        saveTestData();
       

      }} 
       >
      Test Settings
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth= "md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         <span> <text>Test Settings</text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text style={{fontSize:'12px'}}>Set as default</text> </span>
        </BootstrapDialogTitle>
        <DialogContent dividers>
       <div className="container-fluid" style={{fontSize: '12px'}}>
         
          <ol>
            <li>
          <div className="row py-1"> <b>Order</b> </div>
          <div className="row pb-1"> <text>Order of Questions</text> </div>
          <div className="row border-bottom pb-1">
            <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Shuffle Questions</text></div>
            <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Skip section for Shuffling</text></div>
            <div className="col-3 pt-2"> <select name="" id="" className="mx-1">
                <option value="" disabled selected hidden>Select Section</option>
              </select>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row border-bottom py-1">
            <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Shuffle Options</text></div>
            <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Skip section for Shuffling</text></div>
            <div className="col-3 pt-2"><select name="" id="" className="mx-1">
                <option value="" disabled selected hidden>Select Section</option>
              </select>
            </div>
            <div className="col-3"></div>
          </div>
          <div className="row border-bottom ">
            <div className="col-11"><text>Enable move to previous Questions</text></div>
            <div className="col-1"> <Switch {...label} /></div>
          </div>
            </li>
            <li>
              <div className="row pb-1"> <b>Grouping</b> </div>
              <div className="row"><text>Group of Questions</text></div>
              <div className="row border-bottom pb-1">
                <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Group by Questions type</text></div>
                <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Group Topics</text></div>
                <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Group by Questions tags</text></div>
                <div className="col-3"></div>
              </div>
            </li>
            <li>
            <div className="row pb-1"> <b>Attempt Test</b> </div>
            <div className="row">
              <div className="col-3"><text>No. of Attempts</text></div>
              <div className="col-3"><text>Re-attempt option activate after</text></div>
              <div className="col-2"><select name="" id="" className="mx-1">
                <option value="" disabled selected hidden>Select Section</option>
              </select></div>
              <div className="col-4"></div>
            </div>
            <div className="row border-bottom bp-1"><div><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><text>Check, if you want to allow unlimited attempts on this test</text></div></div> 
            </li>
            <li>
              <div className="row py-1"><b>Timer</b></div>
              <div className="row"><div className="col-11"><text>Show time spent per question while attempting test</text></div>
              <div className="col-1"><Switch {...label} /></div>
              </div>
              <div className="row"><div className="col-11"><text>Set auto next question jump after</text></div>
              <div className="col-1"><Switch {...label} /></div></div>
              <div className="row border-bottom "><text>Divided each questions in equal time of section/test time</text></div>
            </li>
            <li>
              <div className="row py-1"><b>Language</b></div>
              <div className="row"><text>Show questions in Test</text></div>
              <div className="row border-bottom">
                <div className="col-3"> <Radio {...controlProps('a')} size="small" /><text>Unilingual</text>
                </div>
                <div className="col-3"><Radio {...controlProps('b')} size="small" /><text>Bilingual</text></div>
                <div className="col-3"></div>
                <div className="col-3"></div>
              </div>
            </li>
            <li>
              <div className="row py-1"><b>Customize Result</b></div>
              <div className="row">
                <div className="col-11"><b>Generate Rank</b></div>
                <div className="col-1"><Switch {...label} /></div>
              </div>
              <div className="row"><text>Students will get a rank based on their performance</text></div>
              <div className="row border-bottom">
                <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><b>Batch Level</b></div>
                <div className="col-3"><Checkbox {...label} onClick={(event) => {enablebutton(event)}}  size="small"/><b>Course Level</b></div>
                <div className="col-3"></div>
                <div className="col-3"></div>
                </div>
                <div className="row border-bottom">
                  <div className="col-4 pt-3 "><b>Set Passing Marks</b></div>
                  <div className="col-2 pt-1"><Radio {...controlProps1('a')} size="small" /><text>For Section</text></div>
                  <div className="col-2 pt-1"><Radio {...controlProps1('b')} size="small" /><text>For Test</text></div>
                  <div className="col-1 pt-3"><b>Marks</b></div>
                  <div className="col-1"><input type="text" /></div>
                  <div className="col-1"></div>
                  <div className="col-1 pt-2"><Switch {...label} /></div>
                </div>
                <div className="row">
                <div className="col-11"><b>Percentage</b></div>
                  <div className="col-1"><Switch {...label} /></div>
                </div>
                <div className="row">
                <div className="col-11"><b>Percentile</b></div>
                  <div className="col-1"><Switch {...label} /></div>
                </div>
                <div className="row">
                <div className="col-11"><b>T-Score</b></div>
                  <div className="col-1"><Switch {...label} /></div>
                </div>
                <div className="row border-bottom pb-1">
                <div className="col-11"><b>Partial Marking</b></div>
                  <div className="col-1"><Switch {...label} /></div>
                </div>
            </li>
            <li>
              <div className="row py-1"><b>Solutions</b></div>
              <div className="row">
              <div className="col-4"><Radio {...controlProps2('a')} size="small" /><text>Immidiately after each question attempted</text></div>
              <div className="col-4"><Radio {...controlProps2('b')} size="small" /><text>Immediately after test complete</text></div>
              <div className="col-4"></div>
              </div>
              <div className="row">
              <div className="col-4"><Radio {...controlProps2('c')} size="small" /><text>After deadline is over</text></div>
              <div className="col-4"><Radio {...controlProps2('d')} size="small" /><text>On specific date and time</text></div>
              <div className="col-4"></div>
              </div>
              <div ><select name="" id="" className="mx-1">
                <option value="" disabled selected hidden>Show solutions only once</option>
              </select></div>
              <div className="row border-bottom pb-1">
                <div><text>Reveal Answers</text></div>
                <div><select name="" id="" className="mx-1">
                <option value="" disabled selected hidden>All Questions</option>
              </select></div>
              </div>
            </li>
            <li>
              <div className="row py-1"><b>Hardware access controls</b></div>
              <div className="row">
                <div className="col-11"><text>Enable Keyboard use in Test</text></div>
                <div className="col-1"><Switch {...label} /></div>
              </div>
              <div className="row">
              <div className="col-11"><text>Enable Mouse scroll Button</text></div>
                <div className="col-1"><Switch {...label} /></div>
              </div>
              <div className="row border-bottom pb-1">
              <div className="col-11"><text>Enable Mouse Right Control</text></div>
                <div className="col-1"><Switch {...label} /></div>
              </div>
            </li>
            <li>
              <div className="row py-1"><b>Watermark</b></div>
              <div className="row">
                <div className="col-3"><Radio {...controlProps3('a')} size="small" /><text>Use logo as a watermark</text></div>
                <div className="col-3"><Radio {...controlProps3('b')} size="small" /><text>Upload watermark</text></div>
                <div className="col-3"><Radio {...controlProps3('c')} size="small" /><text>Use test watermark</text></div>
                <div className="col-3"></div>
              </div>
              <div className="row">
              <div className="col-3"></div>
                <div className="col-3 "><button className='btn-sm btn-light border my-1 p-2 form-fixer' type='button'><text>Add png Image</text></button></div>
                <div className="col-3"><input type="text" placeholder="Restricted" /></div>
                <div className="col-3"></div>
              </div>
              <div className="row">
              <div className="col-3"><text>Apply Watermark on:</text></div>
              <div className="col-3"><Radio {...controlProps4('a')} size="small" /><text>Only on Images</text></div>
              <div className="col-3"><Radio {...controlProps4('b')} size="small" /><text>All</text></div>
              <div className="col-3"></div>
              </div>
              <div className="row border-bottom pb-1">
              <div className="col-3"><text>Layout:</text></div>
              <div className="col-3"><Radio {...controlProps5('a')} size="small" /><text>Diagonal</text></div>
              <div className="col-3"><Radio {...controlProps5('b')} size="small" /><text>Horizontal</text></div>
              <div className="col-3"></div>
              </div>
            </li>
            <li>
              <div className="row py-1">
                <div className="col-11"><b>Student Feedback</b></div>
                <div className="col-1"><Switch {...label} /></div>
              </div>
              <div className="row"><text>Collect Students feedback about test questions, level of questions, user interface etc.</text></div>
            </li>

          </ol>
       </div>
        </DialogContent>
        <DialogActions>
        <Button className={clsx(classes.Btn,)} variant={'contained'}  color="primary"> 
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