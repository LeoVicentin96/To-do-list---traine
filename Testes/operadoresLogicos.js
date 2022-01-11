//Operadores Logicos

var a = true
var b = false

console.log(!a)
console.log(!b)
console.log('!!a', !!a)
console.log('!!b',!!b)

//null,undefined,'', false, 0

console.log(null)
console.log('!null',!null)

console.log(undefined)
console.log('!undefined',!undefined)

console.log('texto')
console.log(!'texto')
console.log(!!'texto')

console.log(20)
console.log(!20)
console.log(!!20)

//
console.log(10 && 'texto' && 'programador') // retorna o ultimo valor
console.log(null && 'programador a bordo') // retorna o false 

console.log( 'Passa' && 0 && 'Dev') // retorna o primeiro valor false
console.log('passou' && null) // retorna primeira que foi falso
console.log('false' && 100 && '' && 'teste' && null)//não retorna nada pela string vazia
console.log(10 > 5 && 7 < 10)// as duas verdadeira

// || retorna o ultimo valor verdadeiro ou ultimo valor false

console.log(null || 'programador') 
console.log(null || 'programador' || 26)
console.log(null || '' || 26)
console.log('programador' || 'teste')
console.log(10 > 5 || 10 < 11) 
console.log(10 < 5 || 10 < 9)
console.log(null || false || 0)

// o && é mais forte que || , ignora o ||

console.log('programador' && 2050 || '' && 26)
console.log('programador' && 2050 && 'a bordo' || 0)
console.log(null || !'' && 'programador')


// IF ou Else

if(true){
    console.log('Hello World')
}

if(false){
    console.log('nao vai ser')
}

if(!false){
    console.log('vai ser')
}

if (3 > 4 ) {
    console.log('3 > 4')
}

if (3 <= 4) {
    console.log('3 <= 4')
}

var textoVazio = ''
if (!textoVazio) {
    console.log('textoVazio')
}

if (textoVazio) {
    console.log('oi')
}
    else{
        console.log('ola')
    }

if (10 > 20) {
    console.log('10 > 20')
} else if (10 <= 12) {
    console.log('10 <= 12')
} else {
    console.log('Programador')
}

if (10 > 20) {
    console.log('10 > 20')
} else if (10 >= 12) {
    console.log('10 <= 12')
} else {
    console.log('else')
}

//operador ternario

console.log(true ? 'programador' : 'designer')

console.log(false ? 'programador' : 'designer')

var idade1 = 26
var idade2 = 14
console.log(idade1 >= 18 ? 'Maior de idade' : 'Menor de idade')
console.log(idade2 >= 18 ? 'Maior de idade' : 'Menor de idade')


// switch case

var cor = 'amarelo'
switch(cor){
    case 'azul':
        console.log('cor azul')
        break;
    case 'amarelo':
        console.log('Cor amarelo')
        break;
    case 'vermelho':
        console.log('Cor vermelho')
        break;
}

switch(cor){
    case 'azul':
        console.log('cor azul')
        break;
    case 'verde':
        console.log('Cor verde')
        break;
    case 'vermelho':
        console.log('Cor vermelho')
        break;
    default:
        console.log('cor rosa')
        break;
}


switch(cor){
    case 'vermelho':
    case 'amarelo':
    case 'laranja':
        console.log('cor quente')
        break;
    case 'verde':
    case 'azul':
    case 'roxo':
        console.log('Cor fria')
    default:
        console.log('Cor nao encontrada')
        break;
}

switch('azul'){
    case 'vermelho':
    case 'amarelo':
    case 'laranja':
        console.log('cor quente')
        break;
    case 'verde':
    case 'azul':
    case 'roxo':
        console.log('Cor fria')
        break;
    default:
        console.log('Cor nao encontrada')
        break;
}

switch('cinza'){
    case 'vermelho':
    case 'amarelo':
    case 'laranja':
        console.log('cor quente')
        break;
    case 'verde':
    case 'azul':
    case 'roxo':
        console.log('Cor fria')
        break;
    default:
        console.log('Cor nao encontrada')
        break;
}


