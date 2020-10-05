import {myBody,myInputajoutez,myBtnajoutez,myBtnafaire,myBtnterminer,myBtntous, creationTache} from "./structure.js";

// Ajoutez la div 
let myList = document.querySelectorAll('div')[2]
console.log(myList);
let newTache;

myBtnajoutez.addEventListener('click',()=>{
    if(myInputajoutez.value == ""){

    alert('remplie')

    }else {

    newTache = document.createElement('div');
    newTache.className= 'listecoul'
    myList.appendChild(newTache)
    newTache.textContent = myInputajoutez.value

    creationTache(newTache,myBtnterminer,myBtnafaire)

    }
})
