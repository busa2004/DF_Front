import React, { Component } from 'react';
import Option4DatePick from './Option4DatePicker';
import Option4Input from './Option4Input';
import Option4Search from './Option4Search';
import Option4table from './Option4table';


class Option5 extends Component {
    render() {
        return (
            <div className="Option5">
                <h1>결제관리--->결제된 문서들만 보이게 해야함</h1>
                <Option4DatePick/>
                
                <div style={{display:"flex", flexDirection: "row",marginTop:"10px",marginBottom:"10px"}}>
                <Option4Input/>
                <Option4Search/>
                </div>

                <Option4table title='수정하기' />

                </div>
        );
    }
}
 export default Option5;