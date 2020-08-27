function main(){
    var posts = readFile("../blog/posts.index");
    document.createElement("p").textContent = posts;
}

function readFile(fille){
    var baseFile = new XMLHttpRequest();
    var content;
    baseFile.open("GET", fille, false);
    baseFile.send(null);
    if(baseFile.readyState === 4){
      content = baseFile.responseText;
    }
    return content;
}