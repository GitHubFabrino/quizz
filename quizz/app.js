const form = document.querySelector('.form-quizz')

let tableauResultats = []
const reponses = ['c', 'a', 'b', 'a', 'c']
const titreResultats = document.querySelector('.resultats h2')
const noteResultats = document.querySelector('.note')
const aideResultats = document.querySelector('.aide')
const toutesQuestions = document.querySelectorAll('.question-block')

let verifTableau = []



form.addEventListener('submit', (e) => {
    e.preventDefault();

    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for (let i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)

    }
    //console.log(tableauResultats);
    veriffunction(tableauResultats)
    tableauResultats = []
    verifTableau = []







})

function veriffunction(tabResults) {
    for (let a = 0; a < 5; a++) {


        if (tabResults[a] === reponses[a]) {
            verifTableau.push(true)
        } else {
            verifTableau.push(false)
        }

    }

    //console.log(verifTableau);
    afficherResultats(verifTableau)
    couleurFonction(verifTableau)
}

function afficherResultats(tabCheck) {
    const nbFautes = tabCheck.filter(el => el !== true).length

    //console.log(nbFautes);

    switch (nbFautes) {
        case 0:
            titreResultats.innerText = "Bravo sans faute !"
            aideResultats.innerText = ''
            noteResultats.innerText = '5/5'

            break;

        case 1:
            titreResultats.innerText = "Bravo sans faute !"
            aideResultats.innerText = ''
            noteResultats.innerText = '4/5'

            break;

        case 2:
            titreResultats.innerText = "Bravo sans faute !"
            aideResultats.innerText = ''
            noteResultats.innerText = '3/5'

            break;

        case 3:
            titreResultats.innerText = "Bravo sans faute !"
            aideResultats.innerText = 'aaaaaaaaaaaa'
            noteResultats.innerText = '2/5'

            break;

        case 4:
            titreResultats.innerText = "Bravo sans faute !"
            aideResultats.innerText = ''
            noteResultats.innerText = '1/5'

            break;
        case 5:
            titreResultats.innerText = "Bravo sans faute !"
            aideResultats.innerText = ''
            noteResultats.innerText = '0/5'

            break;

        default:
            break;
    }

}

function couleurFonction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++) {
         if (tabValBool[j] === true) {
            toutesQuestions[j].style.background = 'lightgreen'
         } else {
            toutesQuestions[j].style.background = '#ffb8b8 '
            toutesQuestions[j].classList.add('echec')

            setTimeout(() => {
                toutesQuestions[j].classList.remove('echec')
            },500)
         }
        
    }
}

toutesQuestions.forEach(item => {
    item.addEventListener('click' , ()=>{
        item.style.background = 'white'
    })
})