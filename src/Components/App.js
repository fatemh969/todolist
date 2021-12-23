import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import "./../index.css"
// Import Components
import FormAddTodo from './Todo/FormAddTodo';
import TodoList from './Todo/TodoList';
// impor Contexts
import TodosContext from './../Context/todos';


class App extends Component {
    state = {
        todos : []
    }


    addTodo(text) {
        this.setState(prevState => {
            return {
                todos : [
                    ...prevState.todos,
                    { key : Date.now() , done : false , text }
                ]
            }
        })
    }


    deleteTodo(key) {
        this.setState(prevState => {
            return {
                todos : prevState.todos.filter(item => item.key !== key)
            }
        })
    }

    editTodo(key , text) {
        let { todos } = this.state;

        let item = todos.find(item => item.key === key);
        item.text = text ;

        let newTodos = todos.filter(item => item.key !== key)

        this.setState({
            todos : [
                ...newTodos,
                item
            ]
        })
    }
    

    toggleTodo(key) {
        let { todos } = this.state;

        let item = todos.find(item => item.key === key);
        item.done = ! item.done ;

        let newTodos = todos.filter(item => item.key !== key)

        this.setState({
            todos : [
                ...newTodos,
                item
            ]
        })
    }

    render() {
        return (
            <TodosContext.Provider value={{
                todos: this.state.todos,
                add : this.addTodo.bind(this),
                done : this.toggleTodo.bind(this),
                delete : this.deleteTodo.bind(this),
                edit : this.editTodo.bind(this)
            }}>
                <div className="App">
                    <main>
                        <section className="jumbotron">
                            <div className="container d-flex flex-column align-items-center">
                                <p className="lead text-muted text-block">لیست کار ها</p>
                                <FormAddTodo />
                            </div>
                        </section>
                        <div className="todosList">
                                <div className="container">
                                    <div className="d-flex flex-column align-items-center ">
                                        <TodoList />
                                    </div>
                                </div>
                        </div>
                    </main>
                </div>
            </TodosContext.Provider>
        )
    }
}


export default App;
