//arrays

var numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])
console.log(numeros[0])

console.log(numeros.length)

console.log(numeros.pop()) // remove o ultimo array
console.log(numeros)

console.log(numeros.slice(2,4)) // uma fatia do array , nao retorna o ultimo
console.log(numeros.slice(3))

console.log(numeros.join('--'))//transforma em string o array
console.log(numeros.join('  '))

var usuario = ['Leo', '25', 'Alura', '2022', 'Brasileiro']
console.log(usuario)

usuario.push ('SP') // adiciona no final do array
console.log(usuario)

//include retorna se tem no array ou nao
console.log(usuario.includes('Brasileiro'))
console.log(usuario.includes('Japones'))

//indexof retorna a posição que esta no array
console.log(usuario.indexOf('2022'))
console.log(usuario.indexOf('2021'))


//concat junta os arrays
var arr1 = [3,2,1]
var arr2 = ['programador', 'a', 'bordo']
var arr3 = [1,2,3]

var resultado = arr1.concat(arr2).concat(arr3)
console.log(resultado)

console.log([arr1,arr2])

console.log([...arr1,...arr2,...arr3])//junta os arrays em um só

console.log(usuario)

var nome = usuario[0]
console.log(nome)

var idade = usuario[1]
var ano = usuario[3]
console.log(nome,idade,ano)

var [nome , idade , , ano, nacionalidade] = usuario;
console.log(nome,idade,ano,nacionalidade)