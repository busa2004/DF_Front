import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';

const columns = [{
  title: '상태',
  dataIndex: 'state',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'Jim',
    value: 'Jim',
  }, {
    text: 'Submenu',
    value: 'Submenu',
    children: [{
      text: 'Green',
      value: 'Green',
    }, {
      text: 'Black',
      value: 'Black',
    }],
  }],
  // specify the condition of filtering result
  // here is that finding the name started with `value`
  onFilter: (value, record) => record.state.indexOf(value) === 0,
  sorter: (a, b) => a.state.length - b.state.length,
  sortDirections: ['descend'],
}, {
  title: '제목',
  dataIndex: 'title',
  defaultSortOrder: 'descend',
  sorter: (a, b) => a.title - b.title,
}, {
  title: '내용',
  dataIndex: 'content',
  filters: [{
    text: 'London',
    value: 'London',
  }, {
    text: 'New York',
    value: 'New York',
  }],
  filterMultiple: false,
  onFilter: (value, record) => record.content.indexOf(value) === 0,
  sorter: (a, b) => a.content.length - b.content.length,
  sortDirections: ['descend', 'ascend'],
}];

const data = [{
  key: '1',
  state: 'John Brown',
  title: 32,
  content: 'New York No. 1 Lake Park',
}, {
  key: '2',
  state: 'Jim Green',
  title: 42,
  content: 'London No. 1 Lake Park',
}, {
  key: '3',
  state: 'Joe Black',
  title: 32,
  content: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  state: 'Jim Red',
  title: 32,
  content: 'London No. 2 Lake Park',
}];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

class Option1Table extends Component {

    render() {
     // console.log(this.props.time.format('YYYY-MM-DD'));
      //console.log(moment(this.props.data[0].createdAt).format('YYYY-MM-DD'));
      const datas = this.props.data;
      
      for(let i=0;i<datas.length;i++){
        if(this.props.time.format('YYYY-MM-DD')===moment(this.props.data[i].createdAt).format('YYYY-MM-DD')) {

        }else if(this.props.time.format('YYYY-MM-DD')===moment(this.props.data[i].updateAt).format('YYYY-MM-DD')){

        }
      }


      return (
            <Table columns={columns} dataSource={data} onChange={onChange} />
        );
    }
}
 export default Option1Table;