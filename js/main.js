
// aquí recogemos la pulsacion del tipo de vehiculo para asignarle el 
//precio mediante un switch
let precioTipo = null;


function seleccionartipo (valor){
    switch (valor) {
        case 0 :
            precioTipo = 100;
            break;
        case 1 :
            precioTipo = 120;
            break;
        case 2 :
            precioTipo = 150;
            break;
        case 3 :
            precioTipo = 200;
            break;
        case 4 :
            precioTipo = 170;
            break;    
    }
    console.log(precioTipo);
}


seleccionartipo ();





//recogemos la pulsacion del combustible y creamos una estructura 
//if-else para asignarle un precio

let precioCombustible = null;

function selectcombustible(valor) {
    if (valor == 0 ) {
        precioCombustible = 50;
    } else {
        if (valor == 1){
            precioCombustible = 60;
        } else {
        
            precioCombustible = 70;
        }
    }

    console.log(precioCombustible);
}

selectcombustible();

// recogemos la pulsacion del tipo de marca y le asignamos precio mediante un array

let precioMarca = null;

function selectmarca(valor){
    const arrayMarca =[10,15,20,25,30,35,40,45,50,55,60,65,40,55,20,40];
precioMarca = arrayMarca[valor]
console.log(precioMarca);
}




//recogemos la pulsacion de cilindrada y le damos precio mediante un array

let precioCilindrada = null ;

function selectcilindrada(valor) {
    const arrayCilindrada =[10,15,20,25,30];
    precioCilindrada = arrayCilindrada [valor];
    console.log(precioCilindrada);
}

selectcilindrada();


//recogemos la fecha de matriculacion del vehiculo con un input y hacemos logica
//para asignarle un precio
// llamamos al elemnto y creamos un listener para recoger la cadena de texo
//convertimos el texto en numero
// nos aseguramos que sea un numero con isnan y ejecutamos la logica

let precioMatriculacion = null;

document.addEventListener('DOMContentLoaded', function() {
    let texto = '';
    
    const input = document.getElementById('matriculaInput');
    
    input.addEventListener('input', function(event) {
        texto = event.target.value;
        
        const matricula = parseFloat(texto);

        if (!isNaN(matricula)) {
            if (matricula <= 2000){
                precioMatriculacion = 80;
            } else if (matricula >= 2001 && matricula <= 2010) {
                precioMatriculacion = 70;
            } else if (matricula >= 2011 && matricula <= 2020) {
                precioMatriculacion = 60;
            } else { 
                precioMatriculacion = 50;
            }
        } else {
            console.log("mal");
        }

        console.log(precioMatriculacion);
    });
});




let precioAntiguedad = null;

document.addEventListener('DOMContentLoaded', function() {
    let texto = '';
    
    const input = document.getElementById('antiguedadInput');
    
    input.addEventListener('input', function(event) {
        texto = event.target.value;
        
        const antiguedad = parseFloat(texto);

        if (!isNaN(antiguedad)) {
            if (antiguedad <= 5){
                precioAntiguedad = 80;
            } else if (antiguedad >= 6 && antiguedad <= 10) {
                precioAntiguedad = 70;
            } else if (antiguedad >= 11 && antiguedad <= 15) {
                precioAntiguedad = 60;
            } else { 
                precioAntiguedad = 50;
            }
        } else {
            console.log("mal");
        }

        console.log(precioAntiguedad);
    });
});


// recogemos la seleccion de la cobertura y le asignamos precio mediante un array

let precioCobertura = null ;

function selectcobertura(valor) {
    const arrayCobertura =[30,35,40,45];
    precioCobertura = arrayCobertura [valor];
    console.log(precioCobertura);
}

selectcobertura();


// recogemos la seleccion de la uso y le asignamos precio mediante un array

let precioUso = null ;

function selectuso(valor) {
    const arrayUso =[30,35,40];
    precioUso = arrayUso [valor];
    console.log(precioUso);
}

selectuso();


// calculamos precio final poniendo animacion de carga y luego
//precio final calculado

let precioTotal = null;

function confirmSeguro(){
    precioTotal = precioUso + precioAntiguedad 
    + precioCilindrada + precioCobertura +
    precioCombustible + precioMarca + 
    precioMatriculacion + precioTipo;

    console.log(precioTotal);
    if ((precioTotal>0)) {
        let respuesta = window.confirm("¿Estás seguro de continuar?");
        if (respuesta) {
        // El usuario hizo clic en "Aceptar"


        document.getElementById('btnSeguro').style.display='none';
        let cargaTotal = document.getElementById('cargaSeguro');
        cargaTotal.classList.remove("hidden");
        // Simulación de la animación de carga que dura 3 segundos
        setTimeout(function() {
        // Ocultar el loader
        document.getElementById("cargaSeguro").style.display = "none";
        
        // Mostrar el contenido
        document.getElementById("resultado").style.display = "block";
        document.getElementById("resultado").textContent = "El precio final es: " + precioTotal + " $";
        }, 3000); // 3000 milisegundos = 3 segundos

        } else {
        // El usuario hizo clic en "Cancelar"
        window.alert("Recarge la página");
        }
    } 
        else {
        window.alert("Recarge la página, se ha saltado alguna opción");
    }
   
}



