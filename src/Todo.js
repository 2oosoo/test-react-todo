import React, { Component } from 'react';

class Todo extends Component {
    state = {
        list: [
            {
                id: 1,
                title: '할일'
            },
            {
                id: 2,
                title: '할일'
            }
        ],
        text: '', 
    }
    // => == 콜백함수
    checkTodo = (event) => {
        console.log(1111);

        const text = this.state.text;
        // 배열 copy
        const list = [... this.state.list];
        list.push({
            id: 3,
            title: text
        })

        this.setState({list: list}, {text: ''});
        event.preventDefault();
    }
    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                {/* {this.state.text}<hr/> */}
                {/* onChange == change가 발생하면 내부 리턴 */}
                <form onSubmit={this.checkTodo} >
                <input type="text" 
                onChange={this.handleChange} 
                value={this.state} />
                </form>
            </div>
        );
    }
}

export default Todo;