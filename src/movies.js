// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {  //es lo mismo que movies
     
let onlyDirectors = moviesArray.map ( (cadaElem) =>{
    return cadaElem.director
})

return onlyDirectors //cada funcion necesita su return, este return tiene que ser lo que me pide

}
//me pida que crea un array solo con los directores. Crealo
//debo crear una funcion que pase por cada objeto del array, el moviesArray
//ese array, a pesar de ser movies, es moviesArray, viene a ser lo mismo
//creo el map y dentro la funcion
//y seleccione solo directores


//Tengo una funcion que es getAllDirectors(). Dentro de esos parentesis,
//tengo el "elemento al cual llamar", le tengo que poner un nombre
//lo llamaremos moviesArray
//lo primero, es recordar que cada funcion tiene su return, creamos el return de getAllDirectors
//El ejercicio nos pide crear un array/variable con todos los directores
//creamos la variable/array, llamada onlyDirectors
//esta variable es igual a todos los directores por lo que:
//queremos crear un map del array a introducir, que es movies array. Le aplicamos el metodo
//ese metodo tiene () y es aqui dentro, donde especificaremos que funcion hace .map
//map. hace---> escoge X y return X.director
//
//
//
//

//NO ENTIENDO: Porque hay que crear una funcion dentro de otra para este objetivo?
//map. hace---> escoge X y return X.director. Como mierdas sabe que cadaElem hace referencia a lo que necsito???

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    let stevenDrama= moviesArray.filter( (eachElem)=>{
        if(eachElem.director==="Steven Spielberg" && eachElem.genre.includes("Drama")){
return true
        }else{
            return false
        }

        
    }   )
    
    
    return stevenDrama.length;
}



/*
1.Lo primero es cerrar la funcion: falta el return
2.Lo que nos pide al final es crear un array nuevo que contenga X, FILTRANDO
3.Creamos el array nuevo y se lo otorgamos al return del punto 1
4. X = peliculas de steven solo drama
5.Determinamos que la variable es igual al resultado que queremos. 
6.Lo que queremos es: PROCESO DE FILTRAJE




*/


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

if(moviesArray.length===0){
    return 0 
}

    
    let avgScore= moviesArray.reduce((acc, eachEl)=>{ //acc es una bolsa vacia creada para la variable, igal que eachEl
        
        if(typeof(eachEl.score)!=="number"){
            return acc
        }

        return acc+eachEl.score //asi le digo al programa que necesito esa propiedad en concreto

        

    },0 )
// 1.Creo una variable vacia para almacenar lo que busco
// 2.Lo que busco es hacer un reduce de moviesArray. Esto lo hago ya que reduce itera por cada elemento(objeto en ese caso) del array y me devuelve la suma en un String
// 3.Creo una funcion dentro de los parentesis de .reduce()
// 4.Funcion flecha que recibe dos parametros, el acumulador y cadaElem de esta iteracion
        //He console.log(acc+eachEl) y no entiendo lo que aparece en la consola
// 5.La función de la funcion flecha es: devuelveme cada iteracion de acc+eachEl.
//6.Una vez resuelta toda la funcion, el resultado se almacena en avgScore



    let mediaScore=avgScore/moviesArray.length  
    
    //no movies porque esta dentro del alcance, del rango de la funcion. De nuevo, otra vez usas el placeholder para ello
    //



    //let roundMediaScore= Math.floor(mediaScore)--->esto no sirve. El floor se utiliza para calcular a la baja y junto a Math CALCULA DENTRO DEL RANGO DE LA FUNCION, no del numero que has obtenido

    let roundMediaScore= Number(mediaScore.toFixed(2))


    //console.log(roundMediaScore) //necesito que me lo redondee a dos decimales

    return roundMediaScore //nada luego del return se ejecuta


}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let avgDrama=moviesArray.reduce((acc, eachEl)=>{
        if(each)


        return acc+eachEl.genre
    })

    return 
}

// 1.Creo una variable vacia para almacenar lo que busco
// 2.Lo que busco es hacer un reduce de moviesArray. Esto lo hago ya que reduce itera por cada elemento(objeto en ese caso) del array y me devuelve la suma en un String
// 3.Creo una funcion dentro de los parentesis de .reduce()
// 4.Funcion flecha que recibe dos parametros, el acumulador y cadaElem de esta iteracion
        //He console.log(acc+eachEl) y no entiendo lo que aparece en la consola
// 5.La función de la funcion flecha es: devuelveme cada iteracion de acc+eachEl.SCORE ya que esto es lo que busco
//6.Una vez resuelta toda la funcion, el resultado se almacena en avgScore















// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
