let addBtn = document.querySelector(".add-btn");
let modal = document.querySelector(".modal-cont");
let textAreaCont = document.querySelector(".textarea-cont");
let addModal = true;
let taskArea = document.querySelector(".task-area");
let mainCont = document.querySelector(".main-cont");
let newDiv = document.createElement('div');
let ticketCont = document.querySelector("ticket-cont");
let ticketColor = document.querySelector(".ticket-color");
let ticketId = document.querySelector('.ticket-id');


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
        createTicket(textAreaCont.value);
        modal.style.display = 'none';
        textAreaCont.value = "";
        addModal = !addModal
    }
})

function createTicket(value) {
    let ticketCont = document.createElement('div');
    ticketCont.setAttribute('class','ticket-cont')
    ticketCont.innerHTML = `<div class="ticket-color"></div>
          <div class="ticket-id">#8yh68gh</div>
          <div class="task-area">${value}</div>`

    mainCont.appendChild(ticketCont)



}
