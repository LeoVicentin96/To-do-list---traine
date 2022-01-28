function escreva (){
    console.log('Olá mundo !')
}

escreva()
escreva()

function escrevaMensagem (mensagem){
    console.log(mensagem)
}

escrevaMensagem('Hello World')
escrevaMensagem('Leonardo Vicentin')


function soma(a,b){
    return a + b
} 

var resultadoSoma = soma(10,5)
console.log(resultadoSoma)

//array function
function somaTudo(numeros){
    var total = 0
    
    for (var num of numeros){
        total = total + num
    }
    return total
}

var arrayNumeros = [3,5,7,10,9,12]
var resultado = somaTudo(arrayNumeros)
console.log(resultado)


//parametro rest

function escreverEndereco(rua,cidade,pais,...complementos){
    console.log(rua)
    console.log(cidade)
    console.log(pais)

    console.log(complementos)
}

escreverEndereco('Rua Aparecida', ' SP','Brasil','Casa','Mogi','CEP')

//funcao auto executavel

//(function autoExecutavel (nome){
   // console.log('Executei', nome)
//}('Leo'))


//funcoes anonimas
var subtraiDoisNumeros = function subtrai(a,b){
    return a -b
}

console.log(subtraiDoisNumeros(10,3))

var subtraiTresNumeros = function (a,b,c){
    return a - b - c ;
}

console.log(subtraiTresNumeros(15,3,2))


// function callback

function somaCallback(a,b,fnCallback){
    return fnCallback(a + b);
}

var multiplica = function(total){
    return total * 2;
}

console.log(somaCallback(10,3,multiplica))

var subtrai = function(total){
    return total - 2
}

console.log(somaCallback(15,5,subtrai))



function escreveNome(nome = 'Leo',idade = '25'){
    console.log(nome)
    console.log(idade)
}

escreveNome()

