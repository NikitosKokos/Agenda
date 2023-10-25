const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const headerMenu = document.querySelector('[data-menu]');
if(burger){
    burger.addEventListener("click", () =>{
        headerMenu.classList.toggle("_active");
        burger.classList.toggle("_active");
        header.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    });    
}