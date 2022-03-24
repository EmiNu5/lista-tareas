import { Todo } from "../classes";
import { todoList } from "../index"; 


// referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



// componentes: para insertar el html en el index.html
export const crearTodoHtml = (todo) =>{
    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed':''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado) ?'checked':''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;


    const div = document.createElement('div');
    div.innerHTML = htmlTodo;


    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;

}
//eventos
// para agregar tareas al programa, llamamos al txtInput
txtInput.addEventListener('keyup',(event)=>{//keyup esucha la ultima tecla
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);// value esta dentro del elemento 
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);
        txtInput.value = ''; 
    }
});
divTodoList.addEventListener('click',(event)=>{
    const nombreElemento = (event.target.localName); //target que elemento clickie: ejemplo input, level, boton
    const todoElemento = event.target.parentElement.parentElement; // parentElment 2 veces para obtener la referencia completa al <li>
    const todoId         = todoElemento.getAttribute('data-id');//instruccion que captura el contenido de la etiqueta data-id del elemento

    console.log(nombreElemento);

    if(nombreElemento.includes('input')){// quiere decir que hizo click en el check
        todoList.marcarCompeltado(todoId);
        todoElemento.classList.toggle('completed');

    } else if(nombreElemento.includes('button')){ //hay que borrar el todo
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    };
    console.log(todoList);
});

btnBorrar.addEventListener('click',()=>{
    todoList.eliminarCompletados();
    for(let i = divTodoList.children.length-1;i>=0;i--){
        const elemento  = divTodoList.children[i];

        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
})
ulFiltros.addEventListener('click', (event)=>{
    const filtro = event.target.text;
    if(!filtro){
        return;
    }
    anchorFiltros.forEach(elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');
    
    for (const elemento of divTodoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
            if(completado){
                elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
            if(!completado){
                elemento.classList.add('hidden');
                }
            break;     
        }
    }

});