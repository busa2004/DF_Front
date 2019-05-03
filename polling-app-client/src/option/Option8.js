import React, { Component } from 'react';
import Option8Select from './Option8Select';
import Option8Timeline from './Option8Timeline';
import Option8Table from './Option8Table';
import Option8Submit from './Option8Submit';





class Option8 extends Component {
    render() {
        return (
            <div className="Option8">
                <h1>평가항목관리</h1>
                    <Option8Select/>
                    
                    <Option8Table/>
                    <Option8Submit/>
                </div>
        );
    }
}
 export default Option8;