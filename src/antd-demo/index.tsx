import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import { Table } from "antd";

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '3',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '4',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '5',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '6',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
    {
        key: '7',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

class Demo extends React.Component {
    render() {
        return <Table dataSource={dataSource} columns={columns} />;
    }
}


let root = document.getElementById("root");
ReactDOM.render(<Demo />, root);
