import React, { createRef } from 'react';
import ReactDOM from 'react-dom';


class Demo extends React.Component<any, any> {

    state = {
        msg: 'ycc'
    }

    demo;

    constructor(props) {
        super(props);
        this.demo = createRef();
        console.log('-------------------------')
        console.log('constructor');
        console.log('props: ', props);
        console.log('state: ', this.state);
        console.log('-------------------------')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('-------------------------')
        console.log('getDerivedStateFromProps')
        console.log('props: ', props);
        console.log('state: ', state);
        console.log('-------------------------')
        return {
            msg: props.gg
        };
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('-------------------------')
        console.log('shouldComponentUpdate')
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        console.log('props: ', this.props);
        console.log('state: ', this.state);
        console.log('-------------------------')
        return true;
    }

    render() {
        console.log('-------------------------')
        console.log('render')
        console.log('props: ', this.props);
        console.log('state: ', this.state);
        console.log('-------------------------')
        return (
            <h1 ref={this.demo}>{this.state.msg}</h1>
        )
    }

    componentDidMount() {
        console.log('-------------------------')
        console.log('componentDidMount')
        console.log('props: ', this.props);
        console.log('state: ', this.state);
        console.log('-------------------------')
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('-------------------------')
        console.log('getSnapshotBeforeUpdate')
        console.log('prevProps: ', prevProps);
        console.log('prevState: ', prevState);
        console.log('thisProps: ', this.props);
        console.log('thisState: ', this.state);
        console.log('dom:', this.demo.current.innerText);
        console.log('-------------------------')
        return {};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('-------------------------')
        console.log('componentDidUpdate')
        console.log('props: ', prevProps);
        console.log('state: ', prevState);
        console.log('snapshot: ', snapshot);
        console.log('dom:', this.demo.current.innerText);
        console.log('-------------------------')
    }
}

class Father extends React.Component {

    state = {
        msg: 'sss'
    }

    change() {
        this.setState({
            msg: 'ggg'
        })
    }

    render() {
        return (
            <div>
                <Demo gg={this.state.msg} />
                <button onClick={this.change.bind(this)}>更新</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('root')
)