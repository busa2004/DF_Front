import { Table } from 'antd';
import React, { Component } from 'react';
import './ScrollList.css';
import { Input } from 'antd';
import { Modal, Button } from 'antd';
const Search = Input.Search;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection


class SelectList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tasks:this.props.tasks,
            columns:this.props.columns,
            selectedRows:[]
        }
       
    }
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          this.setState({
            selectedRows:selectedRows
          });
          console.log(this.state.selectedRows)
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
          
        }),
      }
    onClick= (e) => {
        
        
        this.props.clickButton(this.state.selectedRows);
       }

    render() {
       
        return (

            <div>
                <div>

                    <br /><br />
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        enterButton
                    />
                    <br /><br />

                </div>
                <Table rowSelection={this.rowSelection} columns={this.props.columns} dataSource={this.props.tasks} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                <Button onClick={this.onClick}>저장</Button>
            </div>
     )
}
}
export default SelectList;