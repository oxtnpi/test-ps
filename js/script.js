'use strict';
(function () {
    const buttons = document.querySelectorAll(".resources-nav__item");
    const buttonClass = 'resources-nav__item';
    const containerClass = 'resources-container__item';
    const containers = document.querySelectorAll(".resources-container__item");
    
    const makeActive = (button, btnClass) => {
        btnClass = btnClass + "--active";
        if(button.classList.contains(btnClass)){
            button.classList.remove(btnClass);
        } else {
            button.classList.add(btnClass);
        }
    }
    
    const getActiveElement = (arr,elClass) =>{
        arr.forEach(el=>{
            el.target.addEventListener('click',makeActive(el,elClass))
        }
            )
    }
    
    getActiveElement(buttons,buttonClass);
    getActiveElement(containers ,containerClass);

   
})();