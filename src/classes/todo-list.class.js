import{Todo} from './todo.class';

//todolistclass: agrupa toda la lista de todos

export class TodoList {//es Open camelcase en clases por convencion     

    constructor(){
        //this.todos = []; //array vacio
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo); // para insertar la tarea que recibo
        this.guardarLocalStorage();
    }
    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guardarLocalStorage();
    }
    marcarCompeltado(id){
        for(const todo of this.todos){

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }
    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo'))
                    ? JSON.parse(localStorage.getItem('todo'))
                    : [];
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}