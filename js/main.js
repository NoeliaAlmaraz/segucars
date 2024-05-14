
// aquí recogemos la pulsacion del tipo de vehiculo para asignarle el precio y nombre
//el argumento valor es el valor que devolvemos con el onclick del HTML
let precioTipo = null;
let nombreTipo = null;


function seleccionartipo (valor){
    const arrayTipo = [
        {nombre: "Berlina" , precio: 100},
        {nombre: "Suv" , precio: 120},
        {nombre: "Todoterreno" , precio: 150},
        {nombre: "Deportivo" , precio: 200},
        {nombre: "Furgoneta" , precio: 170}
    ];

    precioTipo = arrayTipo[valor].precio;
    nombreTipo = arrayTipo[valor].nombre;
}




//recogemos la pulsacion del combustible y creamos una estructura 
//if-else para asignarle un precio

let precioCombustible = null;
let nombreCombustible =null;

function selectcombustible(valor) {
    arrayCombustible = [
        {nombre: "Gasolina", precio: 10 },
        {nombre:"Diesel" , precio: 15 },
        {nombre: "Eléctrico", precio: 20 }
    ];
    precioCombustible = arrayCombustible[valor].precio;
    nombreCombustible = arrayCombustible[valor].nombre;
}



// recogemos la pulsacion del tipo de marca y le asignamos precio mediante un array
let precioMarca = null;
let nombreMarca = null;


function selectmarca(valor){
    const arrayMarca = [
        {nombre : "fiat" , precio :10},
        {nombre : "Mercedes", precio : 15 },
        {nombre :"Opel" , precio : 20},
        {nombre : "BMW" , precio : 25},
        {nombre :"Volkswagen" , precio :30 },
        {nombre : "Citroen", precio : 35},
        {nombre : "Audi", precio : 40},
        {nombre : "Peugeot", precio : 45},
        {nombre : "Renault", precio : 50},
        {nombre : "Jaguar", precio : 60},
        {nombre : "Porsche", precio : 70},
        {nombre : "Ford", precio : 75},
        {nombre : "Seat", precio : 80},
        {nombre : "Skoda", precio : 50},
        {nombre : "Lamborghini", precio : 100},
        {nombre : "Land rover", precio : 90}


    ];
  

precioMarca = arrayMarca[valor].precio;
nombreMarca = arrayMarca[valor].nombre;


}




//recogemos la pulsacion de cilindrada y le damos precio mediante un array

let precioCilindrada = null ;
let nombreCilindrada = null;

function selectcilindrada(valor) {


    const arrayCilindrada =[
        {nombre: "60CV - 90CV", precio : 20},
        {nombre: "90CV - 120CV", precio : 30},
        {nombre: "120CV - 300CV", precio : 40},
        {nombre: "+300CV", precio : 50},
    ];
    precioCilindrada = arrayCilindrada[valor].precio;
    nombreCilindrada = arrayCilindrada[valor].nombre;

}




//recogemos la fecha de matriculacion del vehiculo con un input y hacemos logica
//para asignarle un precio
// llamamos al elemnto y creamos un listener para recoger la cadena de texto
//convertimos el texto en numero
// nos aseguramos que sea un numero con isnan y ejecutamos la logica

let precioMatriculacion = null;
let textoMatriculacion = null;

document.addEventListener('DOMContentLoaded', function() {
    textoMatriculacion = '';
    
    const input = document.getElementById('matriculaInput');
    
    input.addEventListener('input', function(event) {
        textoMatriculacion = event.target.value;
        
        const matricula = parseFloat(textoMatriculacion);

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


    });
});


// recogemos la seleccion de la cobertura y le asignamos precio mediante un array

let precioCobertura = null ;
let nombreCobertura = null;

function selectcobertura(valor) {
    const arrayCobertura =[
        {cobertura: "Terceros + lunas y robo con 100 Kilimetros de cobertura en carretera" , precio:30},
        {cobertura: "Terceros + lunas y robo con 100 Kilimetros de cobertura en carretera" , precio:35},
        {cobertura: "Terceros + lunas y robo con cobertura nacinal en carretera" , precio:40},
        {cobertura: "A todo riesgo" , precio:45}
    ];
    precioCobertura = arrayCobertura [valor].precio;
    nombreCobertura = arrayCobertura [valor].cobertura;

}



// recogemos la seleccion de la uso y le asignamos precio mediante un array

let precioUso = null ;
let nombreUso = null;

function selectuso(valor) {
    const arrayUso =[
        {uso: "Ocio" , precio :30},
        {uso: "Diario" , precio :35},
        {uso: "Laboral" , precio :40}

    ];
    precioUso = arrayUso [valor].precio;
    nombreUso = arrayUso [valor].uso;

}




// calculamos precio final poniendo animacion de carga y luego
//precio final calculado

let precioTotal = null;

function confirmSeguro(){
    precioTotal = precioUso + precioAntiguedad 
    + precioCilindrada + precioCobertura +
    precioCombustible + precioMarca + 
    precioMatriculacion + precioTipo;

    let arrayDescripcion = [nombreTipo,nombreCombustible,nombreMarca,nombreCilindrada,nombreCobertura,nombreUso];
    let arrayTotal = [precioTipo,precioCombustible,precioMarca,precioMarca,precioCilindrada,precioMatriculacion,precioAntiguedad,precioCobertura,precioUso];
    
    function sonTodosMayoresQueCero(arrayTotal) {
        for (let i = 0; i < arrayTotal.length; i++) {
            if (arrayTotal[i] <= 0) {
                return false;
            }
        }
        return true;
    }

  
 
    if (sonTodosMayoresQueCero(arrayTotal)) {
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
        document.getElementById("resultado").textContent = "El precio final es: " + precioTotal + " $" + " y su seleccion es :";
        //mostrar la seleccion del usuario
        let card = document.getElementById("resultado");
  
        let ul = document.createElement("ul");
        arrayDescripcion.forEach(function(elemento){
            let li = document.createElement("li");
            li.textContent = elemento;
            ul.appendChild(li);   
        });
        card.appendChild(ul);
        }, 2000); // 3000 milisegundos = 3 segundos

        } else {
        // El usuario hizo clic en "Cancelar"
        window.alert("Recarge la página");
        }
    } 
        else {
        window.alert("Recarge la página, se ha saltado alguna opción");
    }
   
}





