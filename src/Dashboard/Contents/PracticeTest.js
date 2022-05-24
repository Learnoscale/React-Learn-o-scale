import React from 'react';
import './Contents.css'
import {Link} from 'react-router-dom'
import classes from './PracticeTest.module.css'

export default function PracticeTests(){

  return(
    <>
    {/* <div className=' row tests'>
      
      <div className="col-lg-2  col-12"><div className="row-lg-0"><div className="col-lg-12"><h6><b>Divisibility</b></h6></div><div className="col-lg-12">50Q,100 Marks,35 Mins</div><div className="col-lg-12">18 Feb 2022, 10:00 AM</div></div></div>
      <div className="col-lg-2  col-12">18 Feb 2022,10:00AM-20 Feb 2022, 12:00AM</div>
      <div className="col-lg-1  col-12"></div>
      <div className="col-lg-7  col-12 testChange">Edit | Append Questions | Duplicate | Export | Preview | Published | Delete</div>
    </div> */}
     <div className=' row tests'>
      
      <div className="col-lg-2  col-12"><div className="row-lg-0"><div className="col-lg-12"><h6><b>Divisibility</b></h6></div><div className="col-lg-12">50Q,100 Marks,35 Mins</div><div className="col-lg-12">18 Feb 2022, 10:00 AM</div></div></div>
      <div className="col-lg-2  col-12">18 Feb 2022,10:00AM <br /> 20 Feb 2022, 12:00AM</div>
      <div className="col-lg-1  col-12"></div>
      <div className="col-lg-7  col-12 testChange "><Link to={'/educators'}>Edit</Link>&nbsp;|&nbsp;<Link to={'/educators'}>Append Questions</Link>&nbsp;|&nbsp;<Link to={'/educators'}>Duplicate</Link>&nbsp;|&nbsp;<Link to={'/educators'}>Export</Link>&nbsp;|&nbsp;<Link to={'/candesign-one'}>Preview</Link>&nbsp;|&nbsp;<Link to={'/educators'}className={classes.publish} >Published</Link>&nbsp;|&nbsp;<Link to={'/educators'} >Delete</Link></div>
    </div>
    </>
  )
}