//DOM manipulation

// Reveal Event

const revealBtn = document.querySelector('reveal-btn');
const hidden_content =document.querySelector('hidden-content');


function revealContent(){

    if(hidden_content.classList.contains('revealBtn')){
        hidden_content.classList.remove('revealBtn');
    }
    else{
        hidden_content.classList.add('revealBtn');
    }
}

revealBtn.addEventListener('click', revealContent);

