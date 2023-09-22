const form = document.getElementById('novoItem')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    console.log() 
    console.log()

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value )
}

)

function criaElemento(nome,quantidade){
    console.log(nome)
    console.log(quantidade)

    document.createElement('li')

}