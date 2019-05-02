import { Input } from 'antd';
import React, { Component } from 'react';
const Search = Input.Search;

class SerachForm extends Component {
    
    render() {
       
        return (
            <div>
                
                <Search
                    placeholder="input search text"
                    onSearch={value =>  this.props.search(value)}
                    
                    enterButton
                />
               
            </div>
        );
    }
}
export default SerachForm;