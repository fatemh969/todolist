import React , { useState  , useContext} from 'react';

import Todo from './Todo';
import TodosContext from './../../Context/todos';

function TodoList(props) {

    const [ statusDone , setStatusDone ] = useState(false);
    const todosContext = useContext(TodosContext);

    let { todos } = todosContext;

    let filterTodos = todos.filter(item => item.done === statusDone)

    return (
        <>
            <nav className="border-bottom col-6 d-flex justify-content-around mb-3 pb-3">
                    <a className={`nav-item nav-link font-weight-bold pointer px-5 ${ !statusDone ? 'avtive-1' : '' }`} id="nav-home-tab" onClick={() => setStatusDone(false)}>انجام نشده <span className="badge badge-secondary">{ todos.filter(item => item.done === false).length }</span></a>
                <a className={`nav-item nav-link font-weight-bold pointer px-5 ${ statusDone ? 'avtive-1' : '' }`} id="nav-profile-tab" onClick={() => setStatusDone(true) }>انجام شد <span className="badge badge-success">{ todos.filter(item => item.done === true).length}</span></a>
            </nav>
            {

            filterTodos.length === 0 
                    ?   <p>لیستی موجود نیست</p>
                    : filterTodos.map(item => <Todo key={item.key} item={item} /> )
            }
        </>
    )
}


export default TodoList;