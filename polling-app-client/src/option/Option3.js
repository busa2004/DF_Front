import React, { Component } from 'react';
import DatePick from './DatePicker';
import Option3Search from './Option3Search';
import {
    Input
 } from 'antd';
import Option3Step from './Option3Step';
import "./Option3.css"
 const InputGroup = Input.Group;

class Option3 extends Component {

   
    render () {
          
         return (
            <div className="Option3">
                <h1>보고서관리</h1>
                <InputGroup compact>
                <div style={{display:"flex", flexDirection: "row"}}>
                <DatePick/>
                <Option3Search/></div>
                </InputGroup>
                <div className="Option3-step">
                <Option3Step/>
                </div>
            </div>
        );
    }
}
 export default Option3;
