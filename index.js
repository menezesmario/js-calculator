//selecionar calculadora
const calculadora = document.querySelector('.calculadora')

//selecionar display
const display = document.querySelector('.display__calculadora')
console.log(display)

//selecionar teclas
const teclas = document.querySelector('.teclas_calculadora')
console.log(teclas)

let operacao = ''
let primeiroNumero = ''
let segundoNumero = ''
let operador = ''
let resultado = ''
let historico = []

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



    if(!action) {
        console.log('tecla numérica', evento.target.innerHTML)
        if(numeroMostrado === '0') {
            display.value = conteudoTecla
        } else {
            display.value = numeroMostrado + conteudoTecla
        }
    }    

    if(action) {        
            
    }


    if (    action === 'adicionar' ||
            action === 'subtrair' ||
            action === 'multiplicar' ||
            action === 'dividir'
      ) {
        primeiroNumero = parseFloat(numeroMostrado)
        console.log('1', primeiroNumero)
        segundoNumero = true
        operador = evento.target.textContent
        display.value = 0
    }



    if (action === 'calcular' && segundoNumero) {
        segundoNumero = parseFloat(numeroMostrado)

        if(operador === '+') {
            resultado = primeiroNumero + segundoNumero
        }

        historico.push(`${primeiroNumero}+${segundoNumero}=${resultado}`)

        console.log('*historico', historico)

        

    }

    if(action === 'limpar') {
        display.value = 0
        operacao = ''
        primeiroNumero = ''
        segundoNumero = ''
        operador = ''
        resultado = ''
    }

        let lista = document.querySelector('#resultados')


        historico.forEach(calculo => {
        
            let resultadoItem = document.createElement('p')

            lista.appendChild(resultadoItem)
        
        });
    

    
})

        function imprimirResultados() {
        
        }

imprimirResultados()
