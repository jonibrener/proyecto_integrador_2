let orden = 'ASC'
document.getElementById('cambiarOrden').onclick=function(){
    var divs = document.querySelectorAll(".divMejores")
    if (orden == 'ASC') {
        document.getElementById("cambiarOrden").innerHTML = "<button id='cambiarOrden'>Mejor punteadas</button>"
        orden = 'DESC'
        for (let index = 0; index < divs.length; index++) {
            divs[index].style.order = divs.length -index
            
        }
    }else{
        document.getElementById("cambiarOrden").innerHTML = "<button id='cambiarOrden'>Menor punteadas</button>"
        orden = 'ASC'
        for (let index = 0; index < divs.length; index++) {
            
            divs[index].style.order = index
        }
    }
    
    console.log("CLickeo");
}




