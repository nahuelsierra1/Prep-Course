// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  array = [1,2,3,4,5];

  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  array = [41,51,51,23,62];
  return(array[array.length-1]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  array = [1,22,41,23,15,63];
  var largo = array.length;

  return(largo);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  array = [10,22,34,45,51,62];

  for(var i=0;i<array.length;i++){
    console.log(array[i]+1);
  }
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array = [41,23,13,53];
  array.push(elemento);
  return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:

  array = [14,125,2315,21];
  array.unshift(elemento);
  return(array);
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  palabras = ['Hola', 'como', 'estas'];
  for(var i=0;i<palabras.length;i++){
    console.log(palabras[i]);
  }

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  array = ['hola','chau','gato'];

  for(var i=0;i<array.length;i++){
    if(array[i] === elemento){
      return true;
    }
    else{
      return false;
    }
  }
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  numeros=[1,2,3,4,5];
  var suma = 0;
  for(var i=0;i<numeros.length;i++){
    suma += numeros[i];
  }

  console.log(suma);
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:

  resultadosTest = [10,9,9,5,6,8];
  var total = 0;
  var promedio = 0;

  for(var i=0;i<resultadosTest.length;i++){
    
    promedio = (total += resultadosTest[i]) / resultadosTest.length;

    console.log(resultadosTest[i]);
  }

  console.log(promedio)
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  numeros = [22,64,2,171,7];
  var mayor=0; 

  for(var i=0;i<numeros.length;i++){
    if (numeros[i] > mayor)
    {
        mayor = numeros[i];
    };
  }

  console.log(mayor);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

  arreglo = [14,29,19,6,64];
  var nuevoarray=[];

  for(var i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      nuevoarray.push(arreglo[i]);
    }
  }
  console.log(nuevoarray);
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  switch(numeroDeDia){
    case 1:
      return('Es fin de semana');
      break;
    
    case 2:
      return('Es dia laboral');
      break;
              
    case 3:
      return('Es dia laboral');
      break;

    case 4:
      return('Es dia laboral');
      break;

    case 5:
      return('Es dia laboral');
      break;

    case 6:
      return('Es dia laboral');
      break;

    case 7:
      return('Es fin de semana');
      break;              
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  for(var i=0;i<n.length;i++){
    if(n[0]==='9'){
      return true;
    }
    else{
      return false;
    }
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  array = ['hola','hola','hola'];

  for(var i=0;i<array.length;i++){
    for(var j=0;j<array.length;j++){
      if(array[i] === array[j] && i!=j){
        return true;
      }
      else{
        return false;
      }
    }
  }
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  array = ['Marzo','Diciembre','Noviembre','Abril','Febrero','Enero'];
  var nuevoarray=[];

  for(var i=0;i<array.length;i++){

    if(array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre'){
      nuevoarray.push(array[i]);
    }
  }
  console.log(nuevoarray);
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  array = [13,187,110,154,5,50,165];
  var nuevoarray=[];

  for(var i=0;i<array.length;i++){

    if(array[i] > 100 && array[i] <= 200){
      nuevoarray.push(array[i]);
    }
  }
  console.log(nuevoarray);
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  var array=[];

  for(var contador=0;contador<=10;contador++){
    numero+=2;
    array.push(numero);
    console.log(array);

    if(numero === 10){
      console.log('Se interrumpio la ejecucion');
      break;
    }
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var array=[];

  for(var contador=0;contador<=10;contador++){

    console.log(array);

    if(numero === 5){
      continue;
    }
    else{
      numero+=2;
      array.push(numero);
    }
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
