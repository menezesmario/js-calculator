//selecionar calculadora
const calculadora = document.querySelector('.calculadora')

//selecionar display
const display = document.querySelector('.display__calculadora')
console.log(display)

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

    if(!action) {
        console.log('tecla numérica', evento.target.innerHTML)
    }

    if (    action === 'adicionar' ||
            action === 'subtrair' ||
            action === 'multiplicar' ||
            action === 'dividir'
      ) {
        console.log('tecla de operação', evento.target.innerHTML)
      }
})





