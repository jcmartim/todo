//Popup Confirmação de exlusão de tarefa.
const popupDel = document.querySelector("#popupDel");
//Popup de adicionar tarefa.
const popupForm = document.querySelector("#popupForm");
//Botão de cancelar exlusão.
const cancel = document.querySelector("#cancel");
//Botão de exluir tarefa.
const deletar = document.querySelector("#deletar");
//Fundo escuro
const back = document.querySelector(".back");
// Botão de adicionar tarefa
const btnAdd = document.querySelector("#add");
//Botão de adiconar task
const addTask = document.querySelector("#addTask");
// Lista
const list = document.querySelector("#list");

// Variável que contem toda as tarefas.
let data = [];

// Função resolveData que vai pegar as tarefas salvas posteriormente.
function resolveData(){
    // Faz uma pronessa de que dentro de algum tempo os dados vão estar disponíveis.
    return new Promise((resolve) => {
        setTimeout(() => { // Tempo para simular uma API.
            // Assim que os dados são disponibilizados ele resolve.
            resolve(
                data = [
                    { task: "Tomar café", date: "08-09-2024", marked: true },
                    { task: "Tomar banho", date: "08-09-2024", marked: false },
                    { task: "Fazer um lanche", date: "08-09-2024", marked: true },
                ]
            );
        },800)
    })
}

// Função que gera o template das tarefas.
function template(item){
    const items = `<li><div class="item"><div class="check" ${ item.marked ?
         'style="background-color: #0090bf;border-color: #0090bf;"' : '' }></div>
         <div class="list-content" ${item.marked ? 'style="color: #979797;"' : ''}>${item.task}
         <div class="date">${item.date}</div></div></div>
         <div class="trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
         fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 
         .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
         <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 
         1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 
         1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg></div></li>`;
    return items;
}

// Função assincrona para buscar as tarefas.
async function getData() {
    const result = await resolveData();
    if (result) {
        // Faz o loop só depois que os dados estão disponíveis.
        data.forEach((item) => {
            list.innerHTML += template(item);
        })

        /**
         * Função para abrir popup exluir tarefa
         * A variável trash é um array porque usamos o querySelectorAll
         * para pegar todos os botões de lixeira gerados dinamicamente.
         */
        const trash = document.querySelectorAll(".trash");
        //Então faz um loop no trash para percorrer todos.
        trash.forEach(btnTrach => {
            // Em fim, monitora o evento em cada botão de lixeira.
            btnTrach.addEventListener("click", function () {
                popupDel.style.bottom = "0px";
                back.style.display = "block";
            });
        });
    }
}

getData();

// Função para adiconar novas tarefas.
function addTaskInData(){
    const task = document.querySelector('#task');
    const date = document.querySelector('#date');
    data.push({task: task.value, date: date.value, marked: false});
}

//funções para abrir o popup de adicionar tarefa.
btnAdd.addEventListener("click", openPopupForm);
function openPopupForm() {
  popupForm.style.bottom = "0px";
  back.style.display = "block";
}

//funções para fechar o popup de adicionar tarefa.
function closePopupForm() {
    popupForm.style.bottom = "-300px";
    back.style.display = "none";
}

// Monitora o evento de click do botão adicionar tarefa.
addTask.addEventListener("click", function(){
    data = [];
    closePopupForm();
    data.forEach((item) => {
        list.innerHTML += template(item);
    });
    task.value = '';
    date.value = '';
});

//botão cancelar
cancel.addEventListener("click", function () {
  popupDel.style.bottom = "-300px";
  back.style.display = "none";
});

//botão exluir
deletar.addEventListener("click", function () {
  popupDel.style.bottom = "-300px";
  back.style.display = "none";
});
