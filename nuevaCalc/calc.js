function validar (a,b){
    if(a && b && !isNaN(a) && !isNaN(b)){
        return true
    }
    return false;
}


function suma(a,b){
    if(validar(a,b)){
        return parseInt(a) + parseInt(b);
    }
    return false;

}



function resta(a,b){
    if(validar(a,b)){
        return parseInt(a) - parseInt(b);
    }
    return false;
}

function multiplicacion(a,b){
    if(validar(a,b)){
        return parseInt(a) * parseInt(b);
    }
    return false;
}

function division(a,b){
    if(validar(a,b)){
        return parseInt(a) / parseInt(b);
    }
    if(b == 0) return false;
    return false;
}



module.exports = {suma, resta, multiplicacion, division};
