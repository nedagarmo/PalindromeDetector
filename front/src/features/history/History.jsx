import React from 'react';
import { useSelector } from 'react-redux';
import { list } from '../../reducers/palindromeSlice';

import styles from './History.css'

const History = () => {
  const palindromeList = useSelector(list).slice().reverse().map((item, i) => {
    let palindrome = item.palindrome ? (<code className="float-right">Palindrome!</code>) : null;
    return (<span className="list-group-item" key={i}>{item.text} {palindrome}</span>);
  });
  return (
    <React.Fragment>
        <div className="container bg-white mt-5 p-5 h-100 mh-100">
            <div className="row h-100 mh-100 scroll">
                <div className="col-lg-12">
                    <h3>Results:</h3>
                    <div className="list-group w-75 mx-auto">
                        {palindromeList}
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}

export default History;
