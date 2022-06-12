import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Moment from 'react-moment';
import { testAction } from '../../services/actions/Practice/testAction';

import classes from './PracticeTest.module.css'
import './Contents.css'

export default function PracticeTests() {
  const dispatch = useDispatch();
  const testListState = useSelector(state => state.testState, shallowEqual)
  useEffect(() => {
    dispatch(testAction())
  }, [dispatch])

  const { testList } = testListState;

  return (
    <>
      {testList?.map((res, ind) => (
        <div key={ind} className=' row tests  mb-3 '>
          <div className="col-lg-2  col-12">
            <div className="row-lg-0">
              <div className="col-lg-12">
                <h6><b>Divisibility</b></h6>
              </div>
              <div className="col-lg-12">
                {res.noOfQuestions} Q, {res.totalMarks} Marks, {res.hour * 60 + res.minute} Mins</div>
              <div className="col-lg-12"><Moment>{res.testShowFrom}</Moment></div>
            </div>
          </div>
          <div className="col-lg-2  col-12">
            <Moment>{res.testShowFrom}</Moment>
            <br /> <Moment>{res.testEndON}</Moment></div>
          <div className="col-lg-1  col-12"></div>
          <div className="col-lg-7  col-12 testChange">
            <Link to={'/educators'}>Edit</Link>&nbsp;|&nbsp;<Link to={'/educators'}>Append Questions</Link>&nbsp;|&nbsp;
            <Link to={'/educators'}>Duplicate</Link>&nbsp;|&nbsp;
            <Link to={'/educators'}>Export</Link>&nbsp;|&nbsp;
            <Link to={'/candesign-one'}>Preview</Link>&nbsp;|&nbsp;
            <Link to={'/educators'} className={classes.publish} >Published</Link>&nbsp;|&nbsp;
            <Link to={'/educators'} >Delete</Link>
          </div>
        </div>
      ))}
    </>
  )
}