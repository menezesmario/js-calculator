//selecionar calculadora
const calculadora = document.querySelector('.calculadora')

//selecionar display
const display = document.querySelector('.display__calculadora')

//selecionar teclas
const teclas = document.querySelector('.teclas_calculadora')

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
    }

    //definir o tipo de tecla clicada
    const tecla = evento.target
    const action = tecla.dataset.action
    const conteudoTecla = tecla.textContent
    const numeroMostrado = display.value

    //mostrar numeros digitados
    if(!action) {
        if(numeroMostrado === '0') {
            display.value = conteudoTecla
        } else {
            display.value = numeroMostrado + conteudoTecla
        }
    }    

    //define o primeiro numero e inicia o segundo
    if  (   action === 'adicionar' ||
            action === 'subtrair' ||
            action === 'multiplicar' ||
            action === 'dividir'
        ) { primeiroNumero = parseFloat(numeroMostrado)
            segundoNumero = true
            operador = evento.target.textContent
            display.value = 0
        }

    //define os resultados
    if (action === 'calcular' && segundoNumero) {
        segundoNumero = parseFloat(numeroMostrado)
            
        if(operador === '+') {
            resultado = primeiroNumero + segundoNumero
        }
        if(operador === '-') {
            resultado = primeiroNumero - segundoNumero
        }
        if(operador === '*') {
            resultado = primeiroNumero * segundoNumero
        }
        if(operador === '/') {
            resultado = primeiroNumero / segundoNumero
        }
            historico.push(`${primeiroNumero} ${operador} ${segundoNumero} = ${resultado}`)
            display.value = resultado  
        }

    //limpa display
    if(action === 'limpar') {
        display.value = 0
        operacao = ''
        primeiroNumero = ''
        segundoNumero = ''
        operador = ''
        resultado = ''
    }

    //cria o histórico de cálculos
    let lista = document.querySelector('#resultados')

    const mostrarLista = historico.map((item, index) => {
        return `
        <li class="calculo">${item}</li>
            `
    })

    //limpa as vírgulas do array
    const imprimir = mostrarLista.join(' ')

    //insere a lista no html
    lista.innerHTML = imprimir    

})

