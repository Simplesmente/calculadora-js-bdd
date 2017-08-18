describe("Suite de testes de subtração", function(){
    var calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 8 e 3', function(){

        expect(calculadora.subtrair(8,3)).toEqual(5);
    })

    it('deve retornar 12 para 9 e -3 no formato texto', function(){
        
        expect(calculadora.subtrair('9','-3')).toEqual(12);
    })

    it('deve retornar -3.5 para 1.5 e 5 no formato texto', function(){
        
        expect(calculadora.subtrair(1.5,5)).toEqual(-3.5);
    })

    it('deve retornar 0 quando valor 1 for inválido', function(){
        
        expect(calculadora.subtrair(undefined,10)).toEqual(0);
    })

    it('deve retornar 0 quando valor 2 for inválido', function(){
        
        expect(calculadora.subtrair(10,undefined)).toEqual(0);
    })
});