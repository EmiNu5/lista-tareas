import "./styles.css";
import{Todo, TodoList} from './classes'
import { crearTodoHtml } from "./js/componentes";

export const todoList = new TodoList();
//const tarea = new Todo('Aprender js');
//todoList.nuevoTodo(tarea);
//console.log(todoList);
//crearTodoHtml(tarea);

todoList.todos.forEach(todo => crearTodoHtml(todo));