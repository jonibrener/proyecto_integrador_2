window.addEventListener("load", function(){
// obtengo string con el genero
  var queryString = location.search;
// separo el array en items
  var filtro = queryString.split ("=")

  var urlGeneros = "https://api.themoviedb.org/3/discover/movie?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1&with_genres=" + filtro [1]

fetch(urlGeneros)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.results);

  var arrayDePeliculasPorGeneros= data.results
  var li
  for (var i = 0; i < 6; i++) {
    document.querySelector(".verMenosPelis").style.display = "none"
    if(arrayDePeliculasPorGeneros[i].poster_path!=null){
    var id = arrayDePeliculasPorGeneros[i].id
    var titulo = arrayDePeliculasPorGeneros[i].title
    var imagen = arrayDePeliculasPorGeneros[i].poster_path
    li="<article class='peliculasGeneros'>"
    li+= "<a href=detallePelicula.html?id="
    li += id
    li +=">"
    li+= "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original"
    li+=imagen
    li+= "' alt='img producto'>"
    li+= "<h2 class='titulo-producto'>"
    li+= "<a href=detallePelicula.html?id="
    li+=id
    li+=">"
    li+=titulo
    li+="</a></h2></article>"

    // document.querySelector(".contenedor").innerHTML += "<article class='peliculasGeneros'><img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
    document.querySelector(".contenedor").innerHTML += li
}
}

document.querySelector(".verMenosPelis").onclick = function(e){
  document.querySelector(".verMasPelis").style.display = "block"
  document.querySelector(".verMenosPelis").style.display = "none"
  location.reload ()
}
  document.querySelector(".verMasPelis").onclick  = function(elementos){
   document.querySelector(".verMasPelis").style.display = "none"
   document.querySelector(".verMenosPelis").style.display = "block"
  var arrayDePeliculasPorGeneros= data.results
   for (var i = 6; i < arrayDePeliculasPorGeneros.length; i++) {
     document.querySelector(".verMenosPelis").style.display = "block"
     if(arrayDePeliculasPorGeneros[i].poster_path!=null){
     var id = arrayDePeliculasPorGeneros[i].id
     var titulo = arrayDePeliculasPorGeneros[i].title
     var imagen = arrayDePeliculasPorGeneros[i].poster_path
     li="<article class='peliculasGeneros'>"
     li+= "<a href=detallePelicula.html?id="
     li += id
     li +=">"
     li+= "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original"
     li+=imagen
     li+= "' alt='img producto'>"
     li+= "<h2 class='titulo-producto'>"
     li+= "<a href=detallePelicula.html?id="
     li+=id
     li+=">"
     li+=titulo
     li+="</a></h2></article>"

     // document.querySelector(".contenedor").innerHTML += "<article class='peliculasGeneros'><img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
     document.querySelector(".contenedor").innerHTML += li
 }
}
}
})

.catch(function(error) {
console.log('Hubo un problema con la petición Fetch:' + error.message);
});
// lista de nombres de generos
 var listaGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US'
// busca en el URL el id
  var url = new URL(window.location.href);
  var param_id = url.searchParams.get("id");
  console.log(param_id);

fetch (listaGeneros)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.genres);
// remplazo el id por el nombre del genero
var unGenero = data.genres
  for (var i = 0; i < unGenero.length; i++) {
    if (unGenero[i].id==param_id) {
      document.querySelector(".subtitulo").innerText = unGenero[i].name
    }

  }
})
.catch(function(error) {
console.log('Hubo un problema con la petición Fetch:' + error.message);
})

})
