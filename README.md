# Welcome to my useless website
![W3 calidation pass](https://jigsaw.w3.org/css-validator/images/vcss)

The 404 page is pretty cool.

Indent using 2 spaces.

## Fun
```js
    var divCroix = document.createElement("div");
    
    divCroix.style.position = "fixed";
    divCroix.style.top = "calc(15vh + 5px)";
    divCroix.onclick = function(){exit();};

    var divCroixDessin = document.createElement("div");
    divCroixDessin.style.backgroundColor = "blue";
    divCroixDessin.style.borderRadius = "7px";
    divCroixDessin.style.width = "50px";
    divCroixDessin.style.height = divCroixDessin.style.width;
    divCroixDessin.style.clipPath = "polygon(10% 0, 50% 40%, 90% 0, 100% 10%, 60% 50%, 100% 90%, 90% 100%, 50% 60%, 10% 100%, 0 90%, 40% 50%, 0 10%)";

    divCroix.style.left = "calc(calc(95vw - "+divCroixDessin.style.width+") - 5px)";

    divCroix.appendChild(divCroixDessin);
```
