
setInterval(function(){
    document.getElementById("openModal").addEventListener("click",function() {
//        console.log("we are in openModal.");
        document.querySelector(".modal-container").classList.toggle("modal-display");
    });
    
    document.getElementById("openModal").addEventListener("click",function() {
//        console.log("we are opening a modal.");
        document.querySelector("body").classList.add("darken");        
    });
    
    document.getElementById("submitModal").addEventListener("click",function() {
//        console.log("we are in submitModal.");
        document.querySelector(".modal-container").classList.toggle("modal-close");
    });
},10);


    