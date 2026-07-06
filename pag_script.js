//window.alert('Olá, seja bem-vindo ao curso de JavaScript!')
const button = document.getElementById('button')
const input = document.getElementById('input')
const List = document.getElementById('lista-tasks')

let ListadeItens = []


function AddTask() {
    if (input.value === '') {
        alert("Por favor, insira uma tarefa antes de adicionar!")
    } else {

        ListadeItens.push({
            tarefa: input.value,
            concluida: false
        });

        input.value = ''
        MostrarTask()
    }
}




function MostrarTask() {

    let NovaLi = ''

    ListadeItens.forEach((item, posicao) => {
        NovaLi +=
            `<li id="task" class="task ${item.concluida && "done"}">
            <img src="./pictures/checked.png" alt="Ícone concluído" onclick="ConcluirTask(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./pictures/trash.png" class="trash-icon" alt="Ícone de lixeira" onclick="Deletaritem(${posicao})">
        </li>`

    })

    List.innerHTML = NovaLi

    localStorage.setItem('lista', JSON.stringify(ListadeItens))
}

function ConcluirTask(posicao) {
    ListadeItens[posicao].concluida = !ListadeItens[posicao].concluida

    MostrarTask()
}

function Deletaritem(posicao) {
    ListadeItens.splice(posicao, 1)

    MostrarTask()
}

function RecarregarTask() {
    const TaskLocalStorage = localStorage.getItem('lista')

    if (TaskLocalStorage) {
        ListadeItens = JSON.parse(TaskLocalStorage)
    }

    MostrarTask()
}

button.addEventListener('click', AddTask)