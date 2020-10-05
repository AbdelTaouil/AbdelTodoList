// titre

export let myBody = document.querySelector('body');
export let myInputajoutez = document.querySelector('input')
export let myBtnajoutez = document.querySelector('button')

// les trois boutons

export let myBtnafaire = document.querySelectorAll('button')[1]
export let myBtnterminer = document.querySelectorAll('button')[2]
export let myBtntous = document.querySelectorAll('button')[3]


export let creationTache = (newTache, myBtnterminer, myBtnafaire) => {

    // bouton check

    let btnChkout = document.createElement('i')
    btnChkout.setAttribute("class", "btnCheck fa fa-check-circle")
    newTache.appendChild(btnChkout)

    // bouton note

    let btnNote = document.createElement('i')
    btnNote.setAttribute("class", "btnNote fa fa-sticky-note")
    newTache.appendChild(btnNote)

    // bouton poubelle

    let btnPoub = document.createElement('i')
    btnPoub.setAttribute("class", "btnPoub fa fa-trash")
    newTache.appendChild(btnPoub)

    let btnYes = document.createElement('i')
    let btnNo = document.createElement('i')

    btnChkout.addEventListener('click', () => {
        if (newTache.className != "green") {
            newTache.setAttribute('class', 'green')
            btnNote.setAttribute('class', 'rien')
            btnPoub.setAttribute('class', 'rien')
        } else if (newTache.className == 'green') {
            newTache.setAttribute('class', 'listecoul')
            btnNote.setAttribute('class', 'btnNote fa fa-sticky-note')
            btnPoub.setAttribute('class', 'btnPoub fa fa-trash')
        }
    })
    btnPoub.addEventListener('click', () => {


        newTache.setAttribute('class', 'rouge')
        btnNote.setAttribute('class', 'rien')
        btnChkout.setAttribute('class', 'rien')
        btnPoub.setAttribute('class', 'rien')

        btnYes.setAttribute('class', 'btnYes fa fa-thumbs-up')
        newTache.appendChild(btnYes)

        btnNo.setAttribute('class', 'btnNo fa fa-times-circle')
        newTache.appendChild(btnNo)

        btnNo.addEventListener('click', () => {
            newTache.setAttribute('class', 'listecoul')
            btnNote.setAttribute('class', 'btnNote fa fa-sticky-note')
            btnPoub.setAttribute('class', 'btnPoub fa fa-trash')
            btnChkout.setAttribute("class", "btnCheck fa fa-check-circle")
            btnNo.setAttribute('class', 'rien')
            btnYes.setAttribute('class', 'rien')
        })
        btnYes.addEventListener('click', () => {
            newTache.remove()
        })
    })

    // bouton edit

    btnNote.addEventListener('click', () => {

        let newEdit = document.createElement('input')
        newEdit.className = 'mon2input'
        newTache.appendChild(newEdit)
        
        btnNote.setAttribute('class', 'rien')
        btnChkout.setAttribute('class', 'rien')
        btnPoub.setAttribute('class', 'rien')

        btnYes.setAttribute('class', 'btnYes fa fa-thumbs-up')
        newTache.appendChild(btnYes)

        btnNo.setAttribute('class', 'btnNo fa fa-times-circle')
        newTache.appendChild(btnNo)

        btnNo.addEventListener('click', () => {

            newTache.setAttribute('class', 'listecoul')

            btnNote.setAttribute('class', 'btnNote fa fa-sticky-note')
            btnPoub.setAttribute('class', 'btnPoub fa fa-trash')
            btnChkout.setAttribute("class", "btnCheck fa fa-check-circle")

            btnNo.setAttribute('class', 'rien')
            btnYes.setAttribute('class', 'rien')
            newEdit.setAttribute('class', 'rien')

        })
        btnYes.addEventListener('click', () => {

            newTache.textContent = newEdit.value

            newTache.setAttribute('class', 'listecoul')

            btnNote.setAttribute('class', 'btnNote fa fa-sticky-note')
            btnPoub.setAttribute('class', 'btnPoub fa fa-trash')
            btnChkout.setAttribute("class", "btnCheck fa fa-check-circle")
            newTache.appendChild(btnChkout)
            newTache.appendChild(btnPoub)
            newTache.appendChild(btnNote)
           
        })

    })

    // filtre

    myBtnterminer.addEventListener('click', () => {

        if (newTache.className == 'listecoul') {

            newTache.setAttribute('class', 'rien')

        } else if (newTache.className == 'rien') {

            newTache.setAttribute('class', 'green')

        }

    })
    myBtnafaire.addEventListener('click', () => {

        if (newTache.className == 'green') {

            newTache.setAttribute('class', 'rien')

        } else if (newTache.className == 'rien') {

            newTache.setAttribute('class', 'listecoul')

        }

    })
    myBtntous.addEventListener('click', () => {

        if (newTache.className == 'rien') {

            newTache.setAttribute('class', 'green')

        } else if (newTache.className == 'rien') {

            newTache.setAttribute('class', 'listecoul')

        }

    })
}