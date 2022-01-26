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


var subtraiDoisNumeros = function subtrai(a,b){
    return a -b
}

console.log(subtraiDoisNumeros(10,3))