//selecionar calculadora
const calculadora = document.querySelector('.calculadora')
console.log(calculadora)

//selecionar teclas
const teclas = document.querySelector('.teclas_calculadora')
console.log(teclas)

//selecionar o valor da tecla
teclas.addEventListener('click', evento => {
    evento.preventDefault()
    if(evento.target.matches('button')){
        console.log(evento.target.innerHTML)
    }

    //definir o tipo de tecla clicada
    const tecla = evento.target
    const action = tecla.dataset.action
    console.log(action)

})



