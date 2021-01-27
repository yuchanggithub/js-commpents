import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import { Table, Button } from "antd";
import { PoweroffOutlined } from '@ant-design/icons';

class Demo extends React.Component<any, any>{

    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;
            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;
                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌11',
                age: 32,
                address: '1',
            },
            {
                key: '2',
                name: '胡彦祖33',
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
                name: 'ycc',
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
                <div>
                    <h2>表格</h2>
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <div>
                    <h2>按钮</h2>
                    <Button type="primary" shape="round" size="large">主按钮</Button>
                    <Button size="small">次按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="text">文本按钮</Button>
                    <Button type="link">链接按钮</Button>
                    <br />
                    <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => this.enterLoading(1)}
                    >
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => this.enterLoading(2)}
                    />
                </div>
            </div>
        );
    }
}

let root = document.getElementById("root");
ReactDOM.render(<Demo />, root);
