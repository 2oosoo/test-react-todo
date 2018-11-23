import React from 'react';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.list.map((item, index) => {
                    return (
                        <li key={index}>{item.title}{item.id}</li>            
                    )
                })
                //map == 배열의 요소를 가져오는 함수 | 배열의 요소들을 가지고 와서 각각 리턴
            }
        </ul>
    );
};

export default TodoList;