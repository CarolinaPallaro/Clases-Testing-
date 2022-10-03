fetch('https://pokeapi.co/api/v2/ability/')
  .then(response => response.json())
  .then(data => {
    let array = data.results;

    function buscar(nombre){
        let coinciden = array.find(a => a.name === nombre);

        if(coinciden != undefined){
            alert("La url que corresponde al nombre " + coinciden.name + " es " + coinciden.url);
        }else{
            alert("Ese nombre no existe")
        }
    }
    let mensaje = prompt("decime un nombre");
    buscar(mensaje);
  });
