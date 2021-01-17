import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import { Table, Button } from "antd";

class Demo extends React.Component {
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '1',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '2',
            },
            {
                key: '3',
                name: '胡彦祖',
                age: 42,
                address: '3',
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
        return (
            <div>
                <div style={{ width: '50%' }}>
                    <h2>表格</h2>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <div>
                    <h2>按钮</h2>
                    <Button type="primary">主按钮</Button>
                    <Button>次按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="text">文本按钮</Button>
                    <Button type="link">链接按钮</Button>
                </div>
            </div>
        );
    }
}

let root = document.getElementById("root");
ReactDOM.render(<Demo />, root);
