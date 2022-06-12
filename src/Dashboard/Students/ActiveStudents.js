import React from 'react';

import "../QuestionBankComponent/QuestionCss.css";

export default function ActiveStudents(props) {
          var rows = [{"name": "Nikhil Choudhary", "Phone": "9825652325", "joined":"02/04/2022"},{"name": "Nikhil Choudhary", "Phone": "9825652325", "joined":"02/04/2022"},{"name": "Nikhil Choudhary", "Phone": "9825652325", "joined":"02/04/2022"},{"name": "Nikhil Choudhary", "Phone": "9825652325", "joined":"02/04/2022"},{"name": "Nikhil Choudhary", "Phone": "9825652325", "joined":"02/04/2022"},];
          
          const listItems = rows.map((value, ind) => 
          <li key={ind} className={'divider p-4'}> 
          {value.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value.Phone}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {value.joined}
          </li>);


  return(
   <ul> {listItems}</ul>

  );
}