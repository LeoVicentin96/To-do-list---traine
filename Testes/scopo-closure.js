 // var nome = 'Ayrton';
  // console.log(nome);

  // function imprimeNome() {
  //   console.log(nome);
  // }

  // imprimeNome();

  // function imprimeIdade() {
  //   var idade = 27;
  //   console.log(idade)
  // }

  // imprimeIdade()
  // // console.log(idade)


  // function imprimePais() {
  //   pais = 'Brasil'
  //   console.log(pais);
  // }

  // imprimePais();
  // console.log(pais)
  // console.log(window.pais)
  // console.log(this.pais)


  // function imprimiThis() {
  //   console.log('imprimiThis', this);
  // }

  // function imprimeMensagem() {
  //   imprimiThis.call({ msg: 'Sou um objeto' })
  // }

  // function imprimeMensagem2() {
  //   imprimiThis.call([ 'Sou um array' ]);
  // }

  // imprimeMensagem();
  // imprimeMensagem2();
  // imprimiThis()
  // 
  // 





  // function usuario() {
  //   var nome = 'Ayrton'
  //   return function() {
  //     var sobrenome = 'Teshima'
  //     console.log(nome, sobrenome)
  //   }
  // }

  // var user = usuario()
  // user();
  // 
  // 
 
  if (true) {
    var youtube = '@programadorabordo';
    let autor = 'Ayrton';
    console.log(youtube);
    console.log(autor);
  }

  console.log(youtube);
  // console.log(autor);

  let sobrenome = 'Teshima';
  console.log(sobrenome);

  {
    let sobrenome = 'Jesus'
    console.log(sobrenome)  
  }







  // closure

    // function imprimeNome() {
    //   let nome = 'Ayrton';
    //   return function() {
    //     return nome;
    //   }
    // }

    // var func = imprimeNome();
    // console.log(func())
    // console.log(func())
    // console.log(func())
    // console.log(func())


    // function minhaBilioteca() {
    //   function auxiliar(valor) {
    //     return 10 + valor
    //   }

    //   return {
    //     add5() {
    //       return auxiliar(5);
    //     },
    //     add7() {
    //       return auxiliar(7);
    //     }
    //   }
    // }

    // var biblioteca = minhaBilioteca();
    // console.log(biblioteca)

    // console.log(biblioteca.add5())
    // console.log(biblioteca.add7())

    // console.log(biblioteca.add5())
    // console.log(biblioteca.add7())

    // console.log(biblioteca.add5())
    // console.log(biblioteca.add7())

    // console.log(biblioteca.add5())
    // console.log(biblioteca.add7())

    function imprimeNomeCompleto(nome) {
        return function() {
          console.log(nome, 'Teshima');
        }
      }
  
      function inicializa() {
        let nome = 'Ayrton';
        setTimeout(imprimeNomeCompleto(nome), 1000)
      }
  
      inicializa();