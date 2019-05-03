import React, { Component } from 'react';
import Option7DatePick from './Option7DatePick';
import Option7Button from './Option7Button';
import Option7Table from './Option7Table';




class Option7 extends Component {
    render() {
        return (
            <div className="Option7">
                <h1>평가순위</h1>
                <div  style={{display:"flex", flexDirection: "row",marginBottom:"60px",width:"100%"}}>
                <Option7DatePick/>
                <Option7Button/>
                </div>
                <Option7Table/>
                </div>
        );
    }
}
 export default Option7;