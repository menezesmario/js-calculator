//selecionar calculadora
const calculadora = document.querySelector('.calculadora')

//selecionar display
const display = document.querySelector('.display__calculadora')
console.log(display)

//selecionar teclas
const teclas = document.querySelector('.teclas_calculadora')
console.log(teclas)

const operacao = ''

//selecionar o valor da tecla
teclas.addEventListener('click', evento => {
    evento.preventDefault()
    if(evento.target.matches('button')){
        console.log(evento.target.innerHTML)
    }

    //definir o tipo de tecla clicada
    const tecla = evento.target
    const action = tecla.dataset.action
    const conteudoTecla = tecla.textContent
    const numeroMostrado = display.value

    console.log('ct',conteudoTecla)


    console.log('numeroMostrado', numeroMostrado)

    if(!action) {
        console.log('tecla numérica', evento.target.innerHTML)
        if(numeroMostrado === '0') {
            display.value = conteudoTecla
        } else {
            display.value = numeroMostrado + conteudoTecla
        }
    }

    let primeiroNumero = ''

    let segundoNumero = false



    if(action) {        
            
    }

    let operador = ''

    if(action === 'adicionar') {
        operador = '+'
        console.log('*op', operador)
    }

    if(action === 'calcular') {

    }

    if (    action === 'adicionar' ||
            action === 'subtrair' ||
            action === 'multiplicar' ||
            action === 'dividir'
      ) {
        console.log(primeiroNumero)
        console.log('2', segundoNumero)
        primeiroNumero = numeroMostrado
        segundoNumero = true
        operador = evento.target.textContent
        display.value = 0
        console.log('2', segundoNumero)        
    }

    let resultado = ''

    if (!action === 'calcular' && segundoNumero === true) {
        segundoNumero = numeroMostrado

        

        if(operador === '+') {
            resultado = primeiroNumero + segundoNumero
        }

        console.log('*resultado', resultado)
    }

    

    
})





