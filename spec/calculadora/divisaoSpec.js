describe("Suite de testes de divisão", function(){
    var calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 6 para os valores 12 e 2', function(){

        expect(calculadora.subtrair(12,2)).toEqual(6);
    })

    it('deve retornar 3 para os valores 9 e 3 no formato texto', function(){
        
        expect(calculadora.subtrair('9','3')).toEqual(3);
    })

    it('deve retornar 1.5 para os valores 4.5 e 3', function(){
        
        expect(calculadora.subtrair(4.5,3)).toEqual(1.5);
    })

    it('deve retornar erro ao dividir por zero', function(){
        
        expect(calculadora.subtrair(10,0)).toEqual('Erro');
        expect(calculadora.subtrair(10,'0')).toEqual('Erro');
    })

    it('deve retornar 0 quando valor 1 for inválido', function(){
        
        expect(calculadora.subtrair(undefined,10)).toEqual(0);
    })

    it('deve retornar 0 quando valor 2 for inválido', function(){
        
        expect(calculadora.subtrair(10,undefined)).toEqual(0);
    })
});