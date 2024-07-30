// variable 

let cont = document.getElementsByClassName('main-content');
console.log(cont);

for(i=0; i<cont.length; i++){

    cont[i].addEventListener('click',function(){
        this.classList.toggle('active');
    });
}