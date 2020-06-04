let orden = 'ASC'
document.getElementById('cambiarOrden').onclick=function(){
    var divs = document.querySelectorAll(".divMejores")
    if (orden == 'ASC') {
        orden = 'DESC'
        for (let index = 0; index < divs.length; index++) {
            divs[index].style.order = divs.length -index
            
        }
    }else{
        orden = 'ASC'
        for (let index = 0; index < divs.length; index++) {
            
            divs[index].style.order = index
        }
    }
    
    console.log("CLickeo");
}




