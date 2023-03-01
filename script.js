let botones = document.querySelectorAll("button");

botones.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(elem.textContent ==  "Comprar"){
            elem.textContent = "Agregado al carrito";
            elem.style.backgroundColor = "green";
            elem.style.color = "white"
            elem.parentElement.style.backgroundColor = 'blue';
        }else{
            elem.textContent =  "Comprar";
            elem.style.backgroundColor = "white";
            elem.style.color = "black"; 
            elem.parentElement.style.backgroundColor = 'white';
        }
        
    });
});
