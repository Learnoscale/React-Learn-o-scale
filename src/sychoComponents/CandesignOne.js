import React  from 'react';
import { useHistory } from 'react-router-dom';
import Footer from './Footer';


export default function CandesignOne() {
          const navigate = useHistory();
  return(
    <>
    <div  className="container-fluid"> 
    <div  className="row p-4 bg-primary text-white sticky-md-top" />
      
    
   
 
      <div  className="row " >
        <div className="col-md-9">
          <div className="row p-1 bg-info sticky-md-top"><h4>Instructions</h4></div>
          <div className="col-12 fs-6" style={{ width: '100%', height: '350px', overflow: 'auto'}}>
            <h5 className='text-center'>GENERAL INSTRUCTIONS REGARDING APTITUDE TEST</h5>
            <h5 className='text-center'>अभिवृत्ति परीक्षण से सम्बंधित सामान्य निर्देश</h5>
            <h5>निर्देशः</h5>
            <ol>
              <li>यह मात्र एक प्रतिदर्श प्रश्‍न पत्र है ।</li><br />
              <li>वास्तविक परीक्षण के समय प्रत्येक परीक्षण में प्रश्‍नों की संख्या तथा समय सीमा अलग होगी ।</li><br />
              <li>इस कम्‍प्‍यूटर आधारित अभिवृत्ति परीक्षण में कुल पांच परीक्षण होंगे।</li><br />
              <li> प्रत्‍येक परीक्षण के प्रारंभ होने से पूर्व कम्‍प्‍यूटर स्क्रीन पर निर्देश आएगा जिसमें प्रश्‍नों की संख्‍या, उन्हें हल करने का तरीका एवं समय-सीमा आपको बतायी जाएगी तथा आपको उदाहरण की सहायता से प्रश्‍नों को हल करने का तरीका भी समझाया जाएगा, जिन्‍हें समझकर आप मुख्य परीक्षण भली-भांति हल कर सकेंगे ।</li><br />
              <li>निर्धारित समय के बाद तुरन्‍त मुख्‍य परीक्षण प्रारंभ हो जायेगा।</li><br />
              <li>यदि आप मुख्य परीक्षण के दौरान परीक्षण के निर्देशों को पुनः देखना चाहते हैं तो कम्‍प्‍यूटर स्‍क्रीन के दाहिनी तरफ ऊपर कोने में दिखाये गये  बटन को क्लिक् करें ।</li><br />
              <li>इस बटन को क्लिक् करने पर आपको संबंधित परीक्षण के निर्देश दिखाई देंगे ।</li><br />
              <li> यदि आपको सामान्य निर्देश (General Instructions) को फिर से देखने की आवश्यकता है तो कम्‍प्‍यूटर स्‍क्रीन के दाहिनी तरफ ऊपर कोने में दिखाये गये  के बटन को क्लिक् करें ।</li><br />
              <li>प्रत्येक परीक्षण के समाप्त होने के उपरांत 01 मिनट का विश्राम समय होगा जिस दौरान आप अगले परीक्षण के लिए खुद को तैयार कर सकेंगे ।</li><br />
              <li> मुख्‍य परीक्षण में आप प्रश्‍नों को कंप्‍यूटर माऊस की सहायता से ऊपर-नीचे अथवा दायें -बायें समायोजित करके अपनी सुविधानुसार देख सकते हैं|</li><br />
              <li> निर्देश स्‍क्रीन एवं मुख्‍य परीक्षण स्‍क्रीन पर दाहिनी तरफ ऊपर की ओर एक समय-सीमा दर्शाने वाला काउंट डाउन टाइमर लगा होगा जो परीक्षण के बचे हुए समय को मिनटों और सेकेण्‍डों में प्रदर्शित करेगा ।</li><br />
              <li> मुख्‍य परीक्षण स्‍क्रीन पर जब टाइमर ज़ीरो पर पहुंचेगा तो परीक्षण अपने आप समाप्त हो जायेगा।</li><br />

            </ol>
            <h5>प्रश्‍नों को हल करने एवं उत्तर देने का तरीका:</h5>
            <ol>
              <li> अपने उत्तर का चयन करने के लिए उत्तर विकल्प पर माऊस की सहायता से क्लिक् करें।</li><br />
              <li> यह प्रतिदर्श प्रश्‍न पत्र ऑटो सेव सक्षम नहीं है, आपको अपने उत्तर को सुरक्षित करने के लिए सेव बटन पर क्लिक करना होगा, यद्यपि वास्तविक परीक्षण के समय प्रत्येक क्लिक् के बाद आपका उत्तर अपने आप सुरक्षित (save) हो जायेगा।</li><br />
              <li>अपने उत्तर विकल्प को हटाने के लिए माऊस की सहायता से उसी विकल्प पर पुन: क्लिक् करें।</li><br />
              <li>अपने उत्तर विकल्प को बदलने के लिए दूसरे विकल्प पर क्लिक् करें।</li><br />
              <li> परीक्षण संख्या तीन (स्पेशियल स्कैंनिंग परीक्षण) के सम्बंध में विशेष निर्देश: इस परीक्षण में 2 ग्रिड हैं तथा प्रत्येक ग्रिड में 02-02 प्रश्‍न हैं जिनके आधार पर आपको 04 प्रश्‍नों के उत्तर देने है । मुख्य परीक्षण में एक समय पर एक ही ग्रिड दिखायी देगा तथा उससे सम्बंधित 02 प्रश्‍न दिखायी देंगे । प्रत्येक 02 प्रश्‍नों के बाद Save & Next बटन होगा जिस पर क्लिक् कर के आप दूसरे ग्रिड पर जा सकते हैं। दूसरा ग्रिड तभी आयेगा जब आप पहले ग्रिड के Save & Next बटन पर क्लिक् करेंगे।</li><br />
              <li>जब आप परीक्षण तीन (स्पेशियल स्कैंनिंग परीक्षण) के अतिरिक्त किसी भी परीक्षण में मुख्य परीक्षण के प्रश्‍नों को हल करेंगे तथा माउस को स्क्रीन के ऊपरी बायें कोने में मुख्य परीक्षण के बगल में दर्शाये गये आइकन  पर ले कर जायेंगे तो आपको प्रश्‍न पैलट दिखाई देगा। इस प्रश्‍न पैलट के द्वारा आपको यह सूचना प्राप्त होगी कि आपने अब तक कितने प्रश्‍नों को हल किया है तथा कितने प्रश्‍न हल करने के लिए बचे हैं जिसे दो तरीकों से प्रदर्शित किया जायेगा ।</li><br />
              <li>परीक्षण 3 (स्पेशियल स्कैंनिंग परीक्षण) में जब आप माउस को स्क्रीन के ऊपरी बायें कोने में मुख्य परीक्षण के बगल में दर्शाये गये आइकन  पर ले कर जायेंगे तो आपको प्रश्‍न पैलट दिखाई देगा। इस प्रश्‍न पैलट के द्वारा आपको यह सूचना प्राप्त होगी कि आपने अब तक कितने प्रश्‍नों को हल किया है, कितने प्रश्‍न हल करने के लिए बचे हैं तथा कितने प्रश्‍न अभी तक अनदेखे हैं जिसे तीन तरीकों से प्रदर्शित किया जायेगा ।</li><br />
              </ol>
              <h5>परीक्षण से पूर्व निम्‍न बातों का विशेष ध्‍यान रखें :</h5>
              <ol>
                <li>मुख्‍य परीक्षण को भली-भांति करने के लिए प्रत्‍येक परीक्षण के उदाहरण को अवश्‍य समझें ।</li><br />
                <li>अपना ध्‍यान पूरी तरह से हर परीक्षण के हर प्रश्‍न पर केन्द्रित करें ताकि आप अधिकतम अंक अर्जित कर सकें।</li><br />
                <li> समय सीमा का ध्‍यान रखें और निर्धारित समय में ही पूरा परीक्षण हल करने का प्रयत्न करें।</li><br />
                <li> यदि कोई प्रश्‍न कठिन लगे तो उस पर ज्‍यादा समय न लगाएं, बल्कि दूसरे प्रश्‍न को हल करें।</li><br />
                <li> परीक्षण के बीच विश्राम समय का उपयोग अपने मस्तिष्‍क को विश्राम देने के लिये करें ताकि आप अगले परीक्षण पर पुनः ध्‍यान केन्द्रित कर सकें।</li><br />
              </ol>
            <h5>Instructions:</h5>
            <ol>
              <li>This is a sample question paper.</li><br />
              <li>In the actual test the number of questions and time limit of each test will vary.</li><br />
              <li>There are a total of five tests in this Aptitude test.</li><br />
              <li>Before the start of every test, a screen will appear which will have  test specific instructions explaining the way to solve the test, number of questions and also the time limit. Apart from this, you will be shown examples with solution enabling you to have a better understanding of the test for attempting the test questions.</li><br />
              <li>After complition of allotted time, the instructions screen will be replaced by the main test screen to start the test.</li><br />
              <li>If you wish to go through the instructions of the test again then click on icon situated at the top right hand corner of your screen. </li><br />
              <li>This icon contains instructions for all the tests but to save your time please focus on instructions of the particular test that you are attempting.</li><br />
              <li> In case you need to go through general instructios, you can click on the icon given at top right corner.</li><br />
              <li>After the completion of every test <b>a rest period of 01 minute</b> will be provided to you to be prepared for the next test.</li><br />
              <li>In the main test you have to facility to scroll down or across for better view of the test questions.</li><br />
              <li>Instructions screen and the main test screen will have a countdown timer at the top right hand corner of screen indicating the time in minutes and secondes.</li><br />
              <li>When the timer reaches zero, the examination will end by itself.</li><br />
            </ol>
            <h5>Procedure for solving and answering the questions:</h5>
            <ol>
              <li>To select your answer, click with mouse on the button of one of the options.</li><br />
              <li>Auto save is not enabled in this sample question paper, you have to click on save button to save the responses. However in actual test after every click your answer will be saved automatically.</li><br />
              <li>To deselect your chosen answer, click on the button of another option.</li><br />
              <li>To change your chosen answer, click on the button of another option.</li><br />
              <li><b>Special instructions for test number 3 (Special Scanning test):</b> In test number 3 of special scanning you have to answere a total of 04 questions based on 02 grids, each grid gaving 02 questions each.Here, after a set of every 02 questions based on a single grid you have to click on <b>Save & Next</b> button.</li><br />
              <li>Except for test number 3 of Spatial Scanning, when you will take your mouse to the icon  next to main test heading displayed at the left hand corner of the screen the Question Palette will be visible to you while you are attempting main test of every section. This Question Palette will show the status of the questions as to how many have been answered and how many are not answered in every section by means of the following two symbols:</li><br />
              <li>In test number 3 of Spatial Scanning, when you will take your mouse to the icon  next to main answer heading displayed at the left hand corner of the screen the Question Palette will be visible to you while you are attempting the main test of this section. This Question Palette will show the status of the questions as to how many have been answered, how many are not answered and how many have not been visited in every section by means of the following three symbols:</li>
              </ol>
              <h5>Before you attempt these tests keep few important things in mind:</h5>
              <ol>
                <li>Understand the examples to do better in the test.</li><br />
                <li> Stay focused on every question of every test throughout so that you are able to gain maximum scores.</li><br />
                <li> Keep in mind the time allotted for the test and try to finish within the stipulated time.</li><br />
                <li>If you find any question difficult, don’t waste time on it. Proceed to the next question.</li><br />
                <li> In the rest period between two tests try to relax so that you are able to focus again on the next test.</li>
              </ol>
             
           
          </div>
          <div className="row p-1 border sticky-md-bottom">
            <div className="col-10"></div>
            <div className="col-2 p-1"><button type="button" className="btn btn-outline-primary fs-6 px-5" onClick={() => navigate.push('/candesign-two')}>Next
            </button></div>
          </div>
          </div>
          <div className="col-md-3 border text-center">
          <img alt="" src="https://soe-buck-lb.storage.googleapis.com/front-end/images/candidateImg.jpg" className="img-fluid"/>
          <div className="text-center">Vikash Tiwari</div>
          </div>
        </div>
       
        </div>
        <Footer/>
    </>
  );
}