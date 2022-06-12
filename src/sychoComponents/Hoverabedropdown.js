import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import answer from './images/a.png';
import notanswer from './images/nota.png';
import notvisited from './images/1.png';
import markreview from './images/3.png';
export default function HowerD() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Dropdown className="dropdown"
      onMouseLeave={() => setShowDropdown(false)}
      onMouseOver={() => setShowDropdown(true)}
      style={{ width: '300px' }}
    >
   <InfoOutlinedIcon size="small" style={{color: 'blue'}} />
   <Dropdown.Menu className='bg-light' show={showDropdown}>
        <Dropdown.Item href="#/action-1">
        <img height="30px" width="30px" src={answer} alt="logo"/>
        <div className="a1">0</div>
          <small>&nbsp; Answered</small>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
        <img height="30px" width="30px" src={notanswer} alt="logo"/>
        <div className="a2">2</div>
        <small>&nbsp; Not Answered</small>
          
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
        <img height="30px" width="30px" src={markreview} alt="logo"/>
        <div className="a3">0</div>
        <small>&nbsp; Not Visited</small>
          
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4">
        <img height="30px" width="30px" src={notvisited} alt="logo"/>
        <div className="a4">0</div>
        <small>&nbsp; Marked for Review</small>
        
        </Dropdown.Item>
        <Dropdown.Item href="#/action-5">
        <img height="30px" width="30px" src={notvisited} alt="logo"/>
        <div className="a5">0</div>
        <small>&nbsp; Answered and Marked for Review <br/>
          (will not be considerd for evaluation)</small>
         
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
