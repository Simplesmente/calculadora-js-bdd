var Calculadora = {

    adicionar: function(n1,n2) {
        
        if( isNaN(n1) || isNaN(n2)  ){
            return 0;
        }

        var n1 = parseFloat(n1);
        var n2 = parseFloat(n2);

        return n1 + n2;
    },

    subtrair: function(n1,n2) {
        if( isNaN(n1) || isNaN(n2)  ){
            return 0;
        }

        return n1 - n2;
    },

    dividir: function(n1,n2) {
        return 0;
    },

    multiplicar: function(n1,n2) {
        return 0;
    },

}

if(typeof module !== 'undefined'
    && typeof module.exports !== 'undefined'){

        module.exports = Calculadora;
}
