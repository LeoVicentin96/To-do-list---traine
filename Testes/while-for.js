//WHILE

var contador = 0 

while (contador <= 5) {
    console.log(contador)
    ++contador;
}

var contador = 0 
while (contador <= 5){
    if(contador === 3){
        break;
    }
    console.log(contador)
    ++contador
}

var contador = 0

while(contador <= 100){
    if(contador % 3 === 0 && contador % 5 === 0){
        console.log(`${contador} - PING PONG`)
    } else if(contador % 3 === 0){
        console.log(`${contador} - PING`)
    } else if (contador % 5 === 0){
        console.log(`${contador} - PONG`)
    }
    ++contador
}

//FOR

for(contador = 0; contador < 10; contador++){
    console.log(contador)
}

var numerosAleatorios = [3,5,10,2,19,21,13]
for (contador = 0; contador < numerosAleatorios.length; contador++ ){
    console.log(`${contador} - ${numerosAleatorios[contador]}`)
}

for (contador = numerosAleatorios.length - 1; contador >= 0; contador--){
    console.log(`Posição ${contador} com decremento: ${numerosAleatorios[contador]}`)
}

var i = 0;
for(; i < numerosAleatorios.length;){
    console.log(`Sem valor inicial e incremento: ${numerosAleatorios[i]}`)
    i++
}

var condicao = true
var contador = 1

for(; condicao;){
    if(contador % 5 === 0){
        condicao = false;
    }
    console.log(`Condiçao booleana simple: ${contador}`)
    ++contador
}

for (var i = 0; i < 10; i++){
    if (i === 5){
        break
    }
    console.log(`Utilizando Break ${i}`)
}

//Imprimindo numeros impares com continue
for (i = 0; i < 50; i++){
    if(i % 2 === 0){
        continue
    }
    console.log('Utilizando continue' , i)
}

//imprimindo numeros pares com continue
for (i = 0; i < 50; i++){
    if(i % 2 !== 0){
        continue
    }
    console.log('Utilizando continue' , i)
}

//for of

var numerosAleatorios = [3,5,10,2,19,21,13]
for (num of numerosAleatorios){
    console.log('for of', num)
}

//For dentro do for

for( i = 1; i <= 5; i++){
    for(j = 1; j <= 50; j++){
        if(j % 2 === 0){
            continue
        }
        if(j > 7){
            break
        }
        console.log(`i: ${i}; j: ${j}`)
    }
}

//

for (i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} - PING PONG`)
    } else if (i % 3 === 0){
        console.log(`${i} - PING`)
    } else if (i % 5 === 0){
        console.log(`${i} - PONG`)
    }
    console.log(i)
}