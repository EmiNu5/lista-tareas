(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{L:()=>r});class t{static fromJson({id:e,tarea:o,completado:a,creado:s}){const l=new t(o);return l.id=e,l.completado=a,l.creado=s,l}constructor(e){this.tarea=e,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}}const o=document.querySelector(".todo-list"),a=document.querySelector(".new-todo"),s=document.querySelector(".clear-completed"),l=document.querySelector(".filters"),c=document.querySelectorAll(".filtro"),d=e=>{const t=`\n    <li class="${e.completado?"completed":""}" data-id="${e.id}">\n        <div class="view">\n            <input class="toggle" type="checkbox" ${e.completado?"checked":""}>\n            <label>${e.tarea}</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>`,a=document.createElement("div");return a.innerHTML=t,o.append(a.firstElementChild),a.firstElementChild};a.addEventListener("keyup",(e=>{if(13===e.keyCode&&a.value.length>0){console.log(a.value);const e=new t(a.value);r.nuevoTodo(e),d(e),a.value=""}})),o.addEventListener("click",(e=>{const t=e.target.localName,a=e.target.parentElement.parentElement,s=a.getAttribute("data-id");console.log(t),t.includes("input")?(r.marcarCompeltado(s),a.classList.toggle("completed")):t.includes("button")&&(r.eliminarTodo(s),o.removeChild(a)),console.log(r)})),s.addEventListener("click",(()=>{r.eliminarCompletados();for(let e=o.children.length-1;e>=0;e--){const t=o.children[e];t.classList.contains("completed")&&o.removeChild(t)}})),l.addEventListener("click",(e=>{const t=e.target.text;if(t){c.forEach((e=>e.classList.remove("selected"))),e.target.classList.add("selected");for(const e of o.children){e.classList.remove("hidden");const o=e.classList.contains("completed");switch(t){case"Pendientes":o&&e.classList.add("hidden");break;case"Completados":o||e.classList.add("hidden")}}}}));const r=new class{constructor(){this.cargarLocalStorage()}nuevoTodo(e){this.todos.push(e),this.guardarLocalStorage()}eliminarTodo(e){this.todos=this.todos.filter((t=>t.id!=e)),this.guardarLocalStorage()}marcarCompeltado(e){for(const t of this.todos)if(t.id==e){t.completado=!t.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter((e=>!e.completado)),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map((e=>t.fromJson(e)))}};r.todos.forEach((e=>d(e)))})();