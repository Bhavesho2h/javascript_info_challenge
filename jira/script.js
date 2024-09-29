let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let addModal = true;
let taskArea = document.querySelector(".task-area");
let mainCont = document.querySelector(".main-cont");
let newDiv = document.createElement('div');
let ticketCont = document.querySelector(".ticket-cont");
let ticketColor = document.querySelector(".ticket-color");
let ticketId = document.querySelector('.ticket-id');
let selectedColor = document.querySelectorAll('.priority-color');
let colorPicked;
let delBtn = document.querySelector('.remove-btn');
let isdelBtnEnable = false;



addBtn.addEventListener('click', function () {
    if (addModal) {
        modal.style.display = 'flex'
    }
    else {
        modal.style.display = 'none'
    }
    addModal = !addModal;
})

modal.addEventListener('keydown', (e) => {
    let key = e.key;
    if (key == 'Enter') {
        createTicket(textAreaCont.value, colorPicked);
        modal.style.display = 'none';
        textAreaCont.value = "";
        addModal = !addModal
    }
})

function createTicket(value, colorPicked) {
    let ticketCont = document.createElement('div');
    console.log(colorPicked, 'colorPicked');
    ticketCont.setAttribute('class', 'ticket-cont')
    ticketCont.innerHTML = `<div class="ticket-color ${colorPicked ? colorPicked : 'black'}"></div>
          <div class="ticket-id">#8yh68gh</div>
          <div class="task-area">${value}</div>`

    mainCont.appendChild(ticketCont);
    console.log(isdelBtnEnable,'isdelBtnEnable');
  ticketCont.addEventListener('click',()=> {
    if(isdelBtnEnable){
        console.log(ticketCont,'which ticket is clicked');
        ticketCont.remove();
    }
    
  })
}

for (let i = 0; i < selectedColor.length; i++) {
    selectedColor[i].addEventListener('click', (event) => {
        removeSelected();
        event.target.classList.add('selected-color')
        if (selectedColor[i].classList.contains('selected-color')) {
            colorPicked = selectedColor[i].classList[0];
        }
    })
}


const removeSelected = () => {
    for (let i = 0; i < selectedColor.length; i++) {
        selectedColor[i].classList.remove('selected-color');
    }
}

delBtn.addEventListener('click', (event) => {
    console.log('button got clicked');
    if (isdelBtnEnable) {
        console.log(isdelBtnEnable, 'isDelBtnEnable');
        delBtn.style.color = 'black'
    }
    else {
        delBtn.style.color = 'red'
    }
    isdelBtnEnable = !isdelBtnEnable;
})










