import React, { Component } from 'react';
import Option4table from './Option4table';
import {
    Input
 } from 'antd';
import Option4DatePick from './Option4DatePicker';
import Option4Search from './Option4Search';
import Option4Input from './Option4Input';

 const InputGroup = Input.Group;

class Option4 extends Component {
    state = { 
        title: '결제',
            }
    render() {
        return (
            <div className="Option4">
                <h1>업무보고현황</h1>
                <Option4DatePick/>
                
                <div style={{display:"flex", flexDirection: "row",marginTop:"10px",marginBottom:"10px"}}>
                <Option4Input/>
                <Option4Search/>
                </div>

                <Option4table title={this.state.title} />
                </div>
        );
    }
}
 export default Option4;