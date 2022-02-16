import React , { useState , useContext } from 'react'
import TodosContext from './../../Context/todos';


function FormAddTodo(props) {

    const [ text , setText ] = useState('');
    const todosContext = useContext(TodosContext);

    let formHandler = e => {
        e.preventDefault();
          if (text === "") {

            alert("لطفا فیلد را پر کنید.");
          }else{
            todosContext.add(text);
            setText('');
          }
        
    }

    let inputHandler = e => {
            setText(e.target.value);
    }

    return (
        <form className="form-inline" onSubmit={formHandler}>
            <div className="form-group">
            <input type="text" className="form-control w-100" placeholder=" کار های خود را وارد کنید" value={text} onChange={(e) => inputHandler(e)}/>
            
                <button type="submit" className="btn btn-info mt-4 w-100" >اضافه کردن</button>
     
            </div>
        </form>
    )
}


export default FormAddTodo;