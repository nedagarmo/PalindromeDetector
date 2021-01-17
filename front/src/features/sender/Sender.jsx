import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { process } from '../../reducers/palindromeSlice';

const Sender = () => {
  const dispatch = useDispatch();
  const [textString, setTextString] = useState('');
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger static-top">
        <div className="container">
          <div className="row w-100">
            <form className="form-inline my-2 my-lg-0 py-2 justify-content-center w-100">
              <input 
                className="form-control mr-sm-2 w-50" 
                value={textString} 
                onChange={e => setTextString(e.target.value)}
                type="search" 
                placeholder="Insert Text" 
                aria-label="Insert Text" />
              <button 
                className="btn btn-primary my-2 my-sm-0 px-4"
                onClick={(e) => {
                  e.preventDefault();
                  if (!textString.trim()) {
                    return;
                  }
                  
                  dispatch(process(textString || ""));
                  setTextString('');
                }}>Send</button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Sender;
