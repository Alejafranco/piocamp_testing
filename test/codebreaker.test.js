// Import test
let test = require('assert');
var guess = require('../codebreaker');

describe( 'Test pass', function(){
  it('is true', function(){
     test.ok(true, true)
  })
})

//5612

describe('Codebreaker Test', function(){
    it ('Debe retornar un o', function(){
        let result = guess("1987")

        test.equal(result, "o", "Tiene un número correcto en la posición incorrecta");
    })

    it ('Debe retornar un xo', function(){
        let result = guess("5469")

        test.equal(result, "xo", "Tiene un numero en la posicion correcta y otro no ");
    })

    it ('Debe retornar un oo', function(){
        let result = guess("2345")

        test.equal(result, "oo", "Tiene dos numeros correctos en la posicion equivocada");
    })

    it ('Debe retornar un ox', function(){
        let result = guess("0592")

        test.equal(result, "ox", "Tiene dos numeros correctos uno en la posicion equivocada y otro no");
    })

    it ('Debe retornar un x', function(){
        let result = guess("5794")

        test.equal(result, "x", "Tienes un número correcto!");
    })

    it ('Debe retornar un xx', function(){
        let result = guess("5714")

        test.equal(result, "xx", "Tienes dos números correcto!");
    })

    it ('Debe retornar un xox', function(){
        let result = guess("3652")

        test.equal(result, "xox", "Tienes dos número en la posicion correcta y uno no!");
    })

    it ('Debe retornar un oxo', function(){
        let result = guess("2816")

        test.equal(result, "oxo", "Tienes dos número en la posicion correcta y uno no!");
    })

    it ('Debe retornar un oxox', function(){
        let result = guess("1652")

        test.equal(result, "oxox", "Tienes dos número en la posicion correcta y uno no!");
    })

    it ('Debe retornar un xoox', function(){
        let result = guess("5162")

        test.equal(result, "xoox", "Tienes dos número en la posicion correcta y uno no!");
    })

})

describe('Test cantidad de numeros', function(){
    it ('Debe retornar MAS de 4 números', function(){
        let result = guess("12345")
        test.equal(result, "Debes escribir solo 4 números", "Retorna debes escribir solo 4 números");
    })

    it ('Debe retornar MENOS de 4 números', function(){
        let result = guess("123")
        test.equal(result, "Debes escribir 4 números", "Retorna debes escribir 4 números");
    })
})