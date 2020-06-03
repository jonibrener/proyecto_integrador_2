let orden = 'ASC'
document.getElementById('cambiarOrden').onclick=function(){
    var divs = document.querySelectorAll(".divMejores")
    if (orden == 'ASC') {
        orden = 'DESC'
        for (let index = 0; index < divs.length; index++) {
            
            
        }
    }else{
        divs.style.order = 1
        orden = 'ASC'
        for (let index = 0; index < divs.length; index++) {
            
            
        }
    }
    
    console.log("CLickeo");
}



