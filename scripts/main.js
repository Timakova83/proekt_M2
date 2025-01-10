const buttons = document.getElementsByClassName('modal-button');
for(let button of buttons) {
    button.addEventListener('click', openModal)
}

const modalContainer = document.getElementById('modal-conteiner');
modalContainer.addEventListener('click', closeModal);

function openModal(){
    modalContainer.classList.add('active');
}

function closeModal(event) {
    if (event.target.id='modal-conteiner') {   
        if (!modalContainer.classList.contains('active')) return;
        modalContainer.classList.remove('active')
    }   
}