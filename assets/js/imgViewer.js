console.log("[*] Image viewer start\n");

function fullScreen(imgPath){
    console.log("[+] Puts {"+imgPath+"} on full screen\n");
    const body = document.querySelector("body");

    var divImgViewer = document.createElement("div");
    divImgViewer.id = "imgViewerDiv";
    divImgViewer.style.position = "fixed";
    divImgViewer.style.display = "flex";
    divImgViewer.style.justifyContent = "space-evenly";
    divImgViewer.style.alignItems = "center";
    divImgViewer.style.width = "90vw";
    divImgViewer.style.height = "70vh";
    divImgViewer.style.top = "15vh";
    divImgViewer.style.left = "5vw";
    divImgViewer.style.borderRadius = "7px";
    divImgViewer.style.backgroundColor = "#1e1e1e";


    var divCroix = document.createElement("div");
    divCroix.style.position = "fixed";
    divCroix.style.cursor = "pointer";
    divCroix.style.top = "calc(15vh + 5px)";
    divCroix.style.border = "1px solid #ff3333";
    divCroix.onclick = function(){exit();};
    var divCroixDessin = document.createElement("div");
    divCroixDessin.style.backgroundColor = "#ff3333";
    divCroixDessin.style.width = "1em";
    divCroixDessin.style.height = divCroixDessin.style.width;
    divCroixDessin.style.clipPath = "polygon(10% 0, 50% 40%, 90% 0, 100% 10%, 60% 50%, 100% 90%, 90% 100%, 50% 60%, 10% 100%, 0 90%, 40% 50%, 0 10%)";
    divCroix.style.left = "calc(calc(95vw - "+divCroixDessin.style.width+") - 5px)";
    divCroix.appendChild(divCroixDessin);

    var divBackground = document.createElement("div");
    divBackground.id = "backgroundDiv";
    divBackground.style.position = "fixed";
    divBackground.style.zIndex = divImgViewer.zIndex-1;
    divBackground.style.width = "100vw";
    divBackground.style.height = "100vh";
    divBackground.style.right = "0";
    divBackground.style.top = "0";
    divBackground.style.backgroundColor = "black";
    divBackground.style.opacity = "0.8";

    var divLeftArrow = document.createElement("div");
    divLeftArrow.style.width = "0.9em";
    divLeftArrow.style.height = divLeftArrow.style.width;
    divLeftArrow.style.backgroundColor = "black";
    divLeftArrow.style.clipPath = "polygon(100% 0, 50% 50%, 100% 100%, 100% 80%, 70% 50%, 100% 20%)";
    var divRightArrow = document.createElement("div");
    divRightArrow.style.width = divLeftArrow.style.width;
    divRightArrow.style.height = divRightArrow.style.width;
    divRightArrow.style.backgroundColor = "black";
    divRightArrow.style.clipPath = "polygon(0 0, 50% 50%, 0 100%, 0 80%, 30% 50%, 0 20%)";
    var img = document.createElement("img");
    img.style.maxWidth = "90%";
    img.style.maxHeight = "100%";
    img.style.backgroundColor = "blue";
    img.src = imgPath;


    divImgViewer.appendChild(divCroix);
    divImgViewer.appendChild(divLeftArrow);
    divImgViewer.appendChild(img);
    divImgViewer.appendChild(divRightArrow);

    body.appendChild(divBackground);
    body.appendChild(divImgViewer);
    body.style.overflow = "hidden";
}

function exit(){
    //document.querySelectorAll('.backgroundDiv').forEach(d => d.style.display = "none");
    //document.querySelectorAll('.imgViewerDiv').forEach(d => d.style.display = "none");
    document.querySelector('#backgroundDiv').remove();
    document.querySelector('#imgViewerDiv').remove();
    document.querySelector("body").style.overflow = "auto";
    console.log("[-] Closing\n");
}