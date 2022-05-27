import React from "react";
import {BrowserRouter, Route, Switch,} from "react-router-dom";
import PrivateRouter from "../PrivateRouter";
import Form from '../Sessions/Form';
import {Index} from '../vendorComponents/Index';
import AboutUs from '../vendorComponents/AboutUs';
import Blog from '../vendorComponents/Blog';
import Coaching from '../vendorComponents/Coaching';
import Advertise from '../vendorComponents/Advertise';
import Careers from '../vendorComponents/Careers';
import Faqs from '../vendorComponents/Faqs';
import PaymentMethods from '../vendorComponents/PaymentMethods';
import Disclaimer from '../vendorComponents/Disclaimer';
import PrivacyPolicy from '../vendorComponents/PrivacyPolicy';
import CustomerService from '../vendorComponents/CustomerService';
import Reseller from '../vendorComponents/Reseller';
import Scollege from '../vendorComponents/Scollege';
import TermAndCondition from '../vendorComponents/TermAndCondition';
import Dashboard from "../Dashboard/Pages/Dashboard";

import QuestionBank from "../Dashboard/Pages/QuestionBanks";
import CourseCategory from "../Dashboard/Pages/CourseCategory";
import QuestionCourse from '../Dashboard/QuestionBankComponent/QuestionCourse'
import QuestionSubjects from "../Dashboard/QuestionBankComponent/QuestionSubjects";
import QuestionTopic from "../Dashboard/QuestionBankComponent/QuestionTopic";
import QuestionType from "../Dashboard/QuestionBankComponent/QuestionType";
import QuestionPageD from "../Dashboard/QuestionBankComponent/QuestionPageD";
import CourseCourse from "../Dashboard/CoursesComponent/CourseCourse";
import CourseBatch from "../Dashboard/CoursesComponent/CourseBatch";
import BatchDetail from "../Dashboard/CoursesComponent/BatchDetail";
import Students from "../Dashboard/Students/Students";
import Test from "../Dashboard/Contents/Test";
import ActiveStudents from "../Dashboard/Students/ActiveStudents";
import Inquiry from "../vendorComponents/Inquiry";
import JeeMains from '../vendorComponents/courses/JeeMains';
import JeeAdvance from '../vendorComponents/courses/JeeAdvance';
import AIIMSmbbs from '../vendorComponents/courses/AIIMSmbbs';
import Scgl from '../vendorComponents/courses/Scgl';
import Rpfnoti from '../vendorComponents/courses/Rpfnoti';
import DelhiPolice from '../vendorComponents/courses/DelhiPolice';
import JeeMainsTest from '../vendorComponents/courses/JeeMainsTest';
import JeeAdvanceTest from '../vendorComponents/courses/JeeAdvanceTest';
import AiimsTest from '../vendorComponents/courses/AiimsTest';
import SscChsl from '../vendorComponents/courses/SscChsl';
import SscGdTestH from '../vendorComponents/courses/SscGdTestH';
import SscCglTierOneTest from '../vendorComponents/courses/SscCglTierOneTest';
import SbiClearkTest from '../vendorComponents/courses/SbiClearkTest';
import AsmPsychoTest from '../vendorComponents/courses/AsmPsychoTest';

import CandesignOne from '../sychoComponents/CandesignOne';
import CandesignTwo from '../sychoComponents/CandesignTwo';
import GITestOne from '../sychoComponents/GITest1';
import GITestTwo from '../sychoComponents/GITest2';
import GITestThree from '../sychoComponents/GITest3';
import GITestFour from '../sychoComponents/GITest4';
import GITestFive from '../sychoComponents/GITest5';
import ExSummaryOne from '../sychoComponents/ExSummary1';
import ExSummaryTwo from '../sychoComponents/ExSummary2';
import ExSummaryThree from '../sychoComponents/ExSummary3';
import ExSummaryFour from '../sychoComponents/ExSummary4';
import ExSummaryFive from '../sychoComponents/ExSummary5';
import TestSectionOne from '../sychoComponents/TestSection1';
import TestSectionTwo from '../sychoComponents/TestSection2';
import TestSectionThree from '../sychoComponents/TestSection3';
import TestSectionFour from '../sychoComponents/TestSection4';
import TestSectionFive from '../sychoComponents/TestSection5';
import ExitExam from "../sychoComponents/Finish";

export default function Routing() {
    return(
<>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact  component={Index}/>
            <Route path="/about-us" exact  component={AboutUs}/>
            <Route path="/blog" exact  component={Blog}/>
            <Route path="/advertise-with-us" exact  component={Advertise}/>
            <Route path="/asm-psycho-test-series" exact  component={AsmPsychoTest}/>
            <Route path="/coaching" exact  component={Coaching}/>
            <Route path="/careers" exact  component={Careers}/>
            <Route path="/customer-service" exact  component={CustomerService}/>
            <Route path="/delhi-police" exact  component={DelhiPolice}/>
            <Route path="/disclaimer" exact  component={Disclaimer}/>
            <Route path="/faqs" exact  component={Faqs}/>
            <Route path="/inquiry" exact  component={Inquiry}/>
            <Route path="/jee-mains-demo" exact  component={JeeMains}/>
            <Route path="/jee-mains-Test-series" exact  component={JeeMainsTest}/>
            <Route path="/jee-advance-demo" exact  component={JeeAdvance}/>
            <Route path="/jee-advance-Test-series" exact  component={JeeAdvanceTest}/>
            <Route path="/aiims-notification" exact  component={AIIMSmbbs}/>
            <Route path="/aiims-test-series" exact  component={AiimsTest}/>
            <Route path="/ssc-chsl-test-series" exact  component={SscChsl}/>
            <Route path="/payment-methods" exact  component={PaymentMethods}/>
            <Route path="/privacy-policy" exact  component={PrivacyPolicy}/>
            <Route path="/reseller" exact  component={Reseller}/>
            <Route path="/rpf-notification" exact  component={Rpfnoti}/>
            <Route path="/school-college-partnership-program" exact  component={Scollege}/>
            <Route path="/ssc-cgl-form" exact  component={Scgl}/>
            <Route path="/ssc-gd-test-series-hindi" exact  component={SscGdTestH}/>
            <Route path="/ssc-cgl-tier1-test-series" exact  component={SscCglTierOneTest}/>
            <Route path="/ibps-clerk-test-series" exact  component={SbiClearkTest}/>

            <Route path="/term-and-conditions" exact  component={TermAndCondition}/>
            <Route path="/login-page" exact  component={Form}/>
            <Route path="/login" exact  component={Form}/>
            <Route path="/sign-up" exact  component={Form}/>
  
            <Route path="/candesign-one"   component={CandesignOne}/>
            <Route path="/candesign-two"  component={CandesignTwo}/>
            <Route path="/gs-test1"  component={GITestOne}/>
            <Route path="/gs-test2"  component={GITestTwo}/>
            <Route path="/gs-test3"  component={GITestThree}/>
            <Route path="/gs-test4"   component={GITestFour}/>
            <Route path="/gs-test5"  component={GITestFive}/>
            <Route path="/section1"  component={TestSectionOne}/>
            <Route path="/section2"  component={TestSectionTwo}/>
            <Route path="/section3"  component={TestSectionThree}/>
            <Route path="/section4"   component={TestSectionFour}/>
            <Route path="/section5"  component={TestSectionFive}/>
            <Route path="/Ex-summary1"  component={ExSummaryOne}/>
            <Route path="/Ex-summary2"  component={ExSummaryTwo}/>
            <Route path="/Ex-summary3"  component={ExSummaryThree}/>
            <Route path="/Ex-summary4"   component={ExSummaryFour}/>
            <Route path="/Ex-summary5"  component={ExSummaryFive}/>
            <Route path="/finish"  component={ExitExam}/>


            
            
          <PrivateRouter Component={Dashboard} path={'/dashboard'} exact/>
          <PrivateRouter Component={CourseCategory} path={'/course-category'} exact/>
          <PrivateRouter Component={CourseCourse} path={'/course-course/:id'} exact/>
          <PrivateRouter Component={CourseBatch} path={'/course-batch/:id'} exact/>
          <PrivateRouter Component={BatchDetail} path={'/batch-detail'} exact/>
          <PrivateRouter Component={Students} path={'/Students'} exact/>
          <PrivateRouter Component={ActiveStudents} path={'/ActiveStudents'} exact/>
          <PrivateRouter Component={QuestionBank} path={'/question-bank'} exact/>
          <PrivateRouter Component={Test} path={'/test'} exact/>
          <PrivateRouter Component={QuestionCourse} path={'/question-course/:id'} exact/>
          <PrivateRouter Component={QuestionSubjects} path={'/question-subject/:id'} exact/>
          <PrivateRouter Component={QuestionTopic} path={'/question-topic/:id'} exact/>
          <PrivateRouter Component={QuestionType} path={'/question-type'} exact/>
          <PrivateRouter Component={QuestionPageD} path={'/question-page-D/:id'} exact/>
        </Switch>
    </BrowserRouter>
    </>
    )
}