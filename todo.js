const todo_ = document.querySelector('#todo')
const date_ = document.querySelector('#date')
const time_ = document.querySelector('#time')
const btn_ = document.querySelector('#btn')
const form = document.querySelector('.form')

const array = JSON.parse(localStorage.getItem('todolist')) || [];


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = todo_.value;
    const date = date_.value;
    const time = time_.value;

    array.push({todo,date,time})

    localStorage.setItem('todolist',JSON.stringify(array));
    location.reload();
})

function board() {
    for(let i = 0; i < array.length; i++){
        const div = document.createElement('div')
        const todo1 = document.createElement('span')
        const date1 = document.createElement('span')
        const time1 = document.createElement('span')
        const clear = document.createElement('span')
        const del = document.createElement('span')

        div.className = "board_list";
        
        todo1.innerHTML = array[i].todo;
        date1.innerHTML = array[i].date;
        time1.innerHTML = array[i].time;
        clear.innerText = 'O'
        del.innerText = 'X'

        div.append(todo1,date1,time1,clear,del)
        document.querySelector('.board').append(div);
    }
}
board();

const okay = document.querySelectorAll('.board_list :nth-child(4)')

for(let i = 1; i < okay.length; i++){
    okay[i].addEventListener('click', () => {
        clear(i);
    })
}

function clear(i){
    const list = document.querySelectorAll('.board_list')
    if(getComputedStyle(list[i]).backgroundColor == 'rgb(255, 255, 255)'){
        list[i].style.backgroundColor = 'rgb(0, 128, 0)';
    }else if(getComputedStyle(list[i]).backgroundColor == 'rgb(0, 128, 0)'){
        list[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

const del = document.querySelectorAll('.board_list :nth-child(5)')

for(let i = 1; i < del.length; i++){
    del[i].addEventListener('click', () => {
        console.log(i)
        dele(i);
    })
}

function dele(i){
        array.splice(i-1, 1);
        localStorage.setItem('todolist',JSON.stringify(array));
        location.reload();
}


