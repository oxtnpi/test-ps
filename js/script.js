'use strict';
(function () {
    const buttons = document.querySelectorAll(".resources-nav__item");
    const buttonClass = 'resources-nav__item';
    const containerClass = 'resources-container__item';
    const containers = document.querySelectorAll(".resources-container__item");
    
   
    const getActiveElement = (arr,elClass) =>{
       let btnClass = elClass + "--active";
       
        arr.forEach(el=>{
           el.addEventListener('click', (event) => {
            arr.forEach(item=> item.classList.remove(btnClass))
                if (event.target.checked) {
                    el.classList.add(btnClass);
                  }})
                  
        }
    ) 
    }
    
    getActiveElement(buttons,buttonClass);
    getActiveElement(containers,containerClass)
    

   
})();