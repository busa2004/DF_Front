import React, { Component } from 'react';
import Option6panel from './Option6panel';
import Option6DatePick from './Option6Datepicker';
import Option6select from './Option6select';
import Option6Input from './Option6input';




class Option6 extends Component {
    render() {
        return (
            <div className="Option6">
                <h1>평가하기</h1>
                <div style={{display:"flex", flexDirection: "row",marginBottom:"10px"}}>
                <Option6DatePick/>
                <Option6select/>
                </div>
                <div style={{display:"flex", flexDirection: "row",marginTop:"10px",marginBottom:"10px"}}>
                
                <Option6Input/>
               
                </div>
                <Option6panel/>
                </div>
        );
    }
}
 export default Option6;