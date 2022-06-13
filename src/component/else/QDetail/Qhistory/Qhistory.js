import React, { Component } from 'react'
import { Table } from 'antd';

export default class Qhistory extends Component {
  columns = [
    {
      title: '提交结果',
      dataIndex: 'result',
      key: 'result',
      render: (text) => {
        let color = '';
        if (text === '通过') {
          color = 'rgb(90,183,38)';
        } else {
          color = 'rgb(239,71,67)';
        }
        return <span style={{ color }}>{text}</span>
      },
    },
    {
      title: '执行用时',
      dataIndex: 'perform_time',
      key: 'perform_time',
      render: (t) => <span style={{ color: 'rgb(108,108,108)', }}>{t}</span>
    },
    {
      title: '内存消耗',
      dataIndex: 'memory_cost',
      key: 'memory_cost',
      render: (t) => <span style={{ color: 'rgb(108,108,108)', }}>{t}</span>
    },
    {
      title: '语言',
      dataIndex: 'language',
      key: 'language',
      render: (t) => <span style={{ color: 'rgb(108,108,108)', }}>{t}</span>
    },
    {
      title: '提交时间',
      dataIndex: 'submit_time',
      key: 'submit_time',
      render: (t) => <span style={{ color: 'rgb(108,108,108)', }}>{t}</span>
    }
  ]
  data = [
    {
      key: '1',
      result: '通过',
      perform_time: '4ms',
      memory_cost: '4.1M',
      language: 'c',
      submit_time: '2021/03/31 08:49',
    },
    {
      key: '2',
      result: '解答错误',
      perform_time: '4ms',
      memory_cost: '5.8M',
      language: 'javascript',
      submit_time: '2021/03/31 08:49',

    },
    {
      key: '3',
      result: '超出时间限制',
      perform_time: '4ms',
      memory_cost: '6.9M',
      language: 'python',
      submit_time: '2021/03/31 08:49',

    },
  ];
  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Table columns={this.columns} dataSource={this.data} />
      </div>
    )
  }
}
