const menuOpenButton = document.querySelector(".menu-open");
const menuCloseButton = document.querySelector("#btn-close");

// creating the function 

menuOpenButton.addEventListener("click", () =>{
    // toggling of menu button 
    document.body.classList.toggle("show-mobile-menu");
});
// close menu on click button 
menuCloseButton.addEventListener("click", () => menuOpenButton.click());