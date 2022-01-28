let usuario = {
    nome: 'Leo',
    idade: 26,
    cidade: 'Mogi',
}

console.log(usuario)
console.log(usuario.nome)
console.log(usuario.idade)

console.log(usuario['idade'])

usuario.ano = 2022

console.log(usuario)

delete usuario.idade

console.log(usuario)


usuario.hobbies = ['Jogar', 'Programar', 'Futebol']

console.log(usuario)

usuario.competencias = {
    linguagens: ['JS', 'PHP', 'Python'],
    instrumentosMusicais: ['guitarra','baixo','violao']
}

console.log(usuario)

//function em objetos

var usuario2 = {
    digaOi: function(nome){
        return `Olá ${nome}`
    }
}

console.log(usuario2.digaOi('Leo'))
console.log(usuario2.digaOi('Vicentin'))

//varialvel em objetos
var cor = 'azul'
var idade = 25
var nome = 'Leo'

var usuario3 = {
    nome,
    idade,
    cor
}

console.log(usuario3)

//merge de objetos

var usuario4 = {
    nome: 'Leo',
    idade: 25
}

var extraInfo = {
    pais: 'Brasil',
    cidade: 'Mogi'
}

var novoUsuario = Object.assign({}, usuario4,extraInfo) // criando um objeto novo
console.log(novoUsuario)


//merge com spread


var novoUsuario2 = {
    ...usuario4,
    ...extraInfo,
    ...{
        sexo: 'Masculino'
    }
}
console.log(novoUsuario2)

//passando variavel como chave

var nomeVariavel = 'Estado'

var usuario5 = {
    nome: 'Leo',
    [nomeVariavel]: 'Rio de Janeiro'
}

console.log(usuario5)