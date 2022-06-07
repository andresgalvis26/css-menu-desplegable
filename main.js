let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{

        // Quitando y/o añadiendo clase arrow
        listElement.classList.toggle('arrow');

        let height = 0;
        // Tomar al hermano adyacente de listElement (seleccionar el ul)
        let menu = listElement.nextElementSibling;
        //scrollHeight nos diría cuanto espacio se necesita para visualizar las listas ocultas;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })        
});