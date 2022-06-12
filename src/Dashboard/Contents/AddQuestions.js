import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import "./Contents.css";
import { makeStyles } from "@material-ui/core/styles";
import { addQuestionsAction } from "../../services/actions/Questions/AddQuestions";

const useStyles = makeStyles(theme => ({
  paper: {
    overflowY: 'unset',
  },
  customizedButton: {
    position: 'absolute',
    left: '65%',
    top: '-15%',
    backgroundColor: 'lightgray',
    color: 'gray',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function AddQuestionsL() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const addQuestionsList = useSelector(state => state.addQuestionState, shallowEqual);

  const [open, setOpen] = useState(false);
  const [addQuestionsVal, setAddQuestionsVal] = useState()
  const [course, setCourse] = useState([])
  const [subject, setSubject] = useState([])
  const [topic, setTopic] = useState([])
const [questionTypes, setQuestionTypes] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  console.log(addQuestionsList, "addQuestionsList")
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(addQuestionsAction())
  }, [dispatch])
  
  const handleChangeCategory = (e) => {
    let courseArr = []
    addQuestionsList && addQuestionsList && addQuestionsList.courseList && addQuestionsList.courseList.map(res => {
      if (res.cr_categ == e.target.value) {
        courseArr.push(res)
      }
    })
    setCourse(courseArr)
  }
  const handleChangeCourse = (e) => {
    let subjectArr = []
    addQuestionsList && addQuestionsList && addQuestionsList.subjectList && addQuestionsList.subjectList.map(res => {
      if (res.sub_course == e.target.value) {
        subjectArr.push(res)
      }
    })
    setSubject(subjectArr)
  }
  const handleChangeTopic = (e) => {
    let topicArr = []
    addQuestionsList && addQuestionsList && addQuestionsList.topicList && addQuestionsList.topicList.map(res => {
      if (res.top_subject == e.target.value) {
        topicArr.push(res)
      }
    })
    setTopic(topicArr)
  }
  const handleChangeQuestionTypes = (e) => {
    let questionTypeArr = []
    addQuestionsList && addQuestionsList && addQuestionsList.questionTypeList && addQuestionsList.questionTypeList.map(res => {
      if (res.top_subject == e.target.value) {
        questionTypeArr.push(res)
      }
    })
    setQuestionTypes(questionTypeArr)
  }
  console.log(topic, "subject")
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Import From Library
      </Button>
      <Dialog
        fullScreen
        PaperProps={{ sx: { width: "90%", height: "90%" } }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div className="container-fluid min-vh-100 d-flex flex-column">
          <div className="row">
            <div className="col-md-9">
              <div className="row-md border py-2 mt-4 ">
                <label htmlFor="">
                  <select
                    name="category"
                    id="category"
                    className="mx-1"
                    value={addQuestionsVal} onChange={handleChangeCategory}
                  >
                    <option value="" disabled selected hidden>Select Tags</option>
                    {addQuestionsList && addQuestionsList && addQuestionsList.categoryList && addQuestionsList.categoryList.map((res, ind) => (
                      <option key={ind} value={res.category_id} selected>{res.category_title}</option>
                    ))}

                  </select>

                  <select name="course" id="course"
                    value={addQuestionsVal} onChange={handleChangeCourse}
                  >
                    <option value="" disabled selected hidden>Select Course</option>
                    {course?.map((res, ind) => (
                      <option key={ind} value={res.cr_id} selected>{res.cr_title}</option>
                    ))}
                  </select>

                  <select
                    name="" id=""
                    className="mx-1"
                    value={subject} onChange={handleChangeTopic}
                  >
                    <option value="" disabled selected hidden>Select Subject</option>
                    {subject?.map((res, ind) => (
                      <option key={ind} value={res.sub_id} selected>{res.sub_title}</option>
                    ))}
                  </select>

                  <select name="" id="">
                    <option value="" disabled selected hidden>Select Topic</option>
                    {topic?.map((res, ind) => (
                      <option key={ind} value={res.top_id} selected>{res.top_title}</option>
                    ))}
                  </select>
                  
                  <select
                    name="" id=""
                    className="mx-1"
                    value={subject} onChange={handleChangeQuestionTypes}
                  >
                <option value="" disabled selected hidden>Select Question Type</option>
                {questionTypes?.map((res, ind) => (
                      <option key={ind} value={res.qt_id} selected>{res.qt_title}</option>
                    ))}
              </select>
              {/*<select name="" id="">
                <option value="" disabled selected hidden>Language</option>
              </select>
              <select name="" id="" className="ms-1">
                <option value="" disabled selected hidden>Select Tags</option>
              </select> */}
                </label>

              </div>

            </div>
            <div className="col-md-2"><button className='btn-sm btn-light border mt-4 p-1' type='button'>Add Questions</button></div>
            <div className="col-md-1">
              <IconButton
                edge="end"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                className={classes.customizedButton}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          <div className="border-bottom mt-0" />
          <div className="row">
            <div className="col-md-1"><input type="checkbox" id="Q" name="Ques" value="" className="ms-0" /></div>
            <div className="col-md-7">Questions</div>
            <div className="col-md-2">References</div>
            <div className="col-md-2">Test in used</div>
          </div>
          <div className="border-bottom mt-0" />
        </div>
      </Dialog>
    </div>
  );
}
