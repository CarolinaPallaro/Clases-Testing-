//{suma, resta, multiplicacion, division}

// const { default: test } = require("node:test")

describe( "Probando salida de datos",() =>  {

    const { suma, resta, multiplicacion, division } = require ("../calc")

            //SUMA
    test ("Prueba suma", () =>{

        const sumaResultado = suma(1,2);
        const resultEsperado = 3;

        expect(sumaResultado).toBe(resultEsperado);

    });

    test ("Prueba suma con letras", () =>{

        const sumaResultado = suma("1","2");
        const resultEsperado = 3;


        expect(sumaResultado).toBe(resultEsperado);

    });
    test ("Prueba suma", () =>{

        const sumaResultado = suma(" ",2);
        const resultEsperado = NaN;

        expect(sumaResultado).toBe(resultEsperado);

        
});

describe( "Probando salida de datos",() =>  {
                // Resta
    test ("Prueba resta", () =>{
        const restaResultado = resta(3,2);
        const resultEsperado = 1;

        expect(restaResultado).toBe(resultEsperado);


    });

});


            // MULTIP
    test ("Prueba multiplicacion", () =>{
        const multiplicacionResultado = multiplicacion(3,2);
        const resultEsperado = 6;

        expect(multiplicacionResultado).toBe(resultEsperado);


    });

            //DIVISION

    test ("Prueba division", () =>{
        const divisionResultado = division(3,2);
        const resultEsperado = 1.5;

        expect(divisionResultado).toBe(resultEsperado);


    })

});
