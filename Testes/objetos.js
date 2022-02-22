var usuario = {
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

//getters e setters

// getters e setters
    // 
    var usuarios = [
        {
            nome: 'Ayrton',
            idade: 26
        },
        {
            nome: 'João',
            idade: 19
        },
        {
            nome: 'Maria',
            idade: 21
        }
    ];

    console.log(usuarios[2].idade);

    var usuario = {
        posicao: 0,
        get atual() {
            return usuarios[this.posicao]
        },
        set atual(posicao) {
            this.posicao = posicao;  //this refere-se ao proximo objeto usuario
        },        proximo() {
            ++this.posicao;
        },
        anterior() {
            --this.posicao;
        }
    };

    console.log(usuario.atual); // { nome: 'Ayrton', idade: 26 }
    usuario.proximo();

    console.log(usuario.atual); // { nome: 'João', idade: 19 }

    usuario.proximo();
    console.log(usuario.atual); // // { nome: 'Maria', idade: 21 }

    usuario.anterior(); 
    console.log(usuario.atual); // { nome: 'João', idade: 19 }

    usuario.atual = 0;
    console.log(usuario.atual); // { nome: 'Ayrton', idade: 26 }

    usuario.atual = 2;
    console.log(usuario.atual); // { nome: 'Maria', idade: 21 }