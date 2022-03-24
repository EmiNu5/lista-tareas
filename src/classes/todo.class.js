export class Todo {

    static fromJson({id,tarea,completado,creado}){
        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;
        return tempTodo;
    }

    constructor(tarea){
        this.tarea      = tarea;

        this.id         = new Date().getTime();//hh:mm:ss:mmm
        this.completado = false
        this.creado     = new Date();    
    }
}
//export: para usar fuera de este archivo
//contructor: recibe la indicacion de lo que tenemos que hacer