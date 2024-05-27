# PROYECTO DE CALCULO DE PRECIOS DE SEGURO DE VEHICULO
Este es un proyecto que calcula el precio de un seguro de vehículo según diversas opciones seleccionadas por el usuario. El cálculo se realiza en base a distintos factores como el tipo de vehículo, combustible, marca, cilindrada, fecha de matriculación, antigüedad del vehículo, cobertura y uso del mismo.

## Almacenamiento de Selecciones
Las selecciones del usuario y sus precios totales se almacenan en el localStorage del navegador para poder ser recuperados y mostrados al usuario en futuras sesiones.

## Interfaz de Usuario
La interfaz de usuario presenta una serie de campos y botones que permiten al usuario realizar sus selecciones. Se utiliza la librería SweetAlert para mostrar mensajes de confirmación y errores de manera amigable.

## Cálculo del Precio
El cálculo del precio se realiza en función de los factores seleccionados por el usuario. El precio total se calcula sumando los precios de los factores seleccionados. El precio total se muestra en la pantalla de resultados.

## Validación de Datos
El cálculo del precio se realiza en función de los datos ingresados por el usuario. Se utiliza la librería SweetAlert para mostrar mensajes de errores de manera amigable.

## Nota Importante
Es importante seleccionar todas las opciones requeridas antes de confirmar el seguro. Si alguna opción queda sin marcar, se mostrará un mensaje de error solicitando al usuario que complete todas las selecciones.