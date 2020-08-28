function main(){
  var blogPath = "../blog/";
  var posts = readFile(blogPath+"postsIndex.txt").split('\n');

  var str = "";
  for(var i in posts){
    var articleBlogPath = blogPath+posts[i];
    str+="Post : "+articleBlogPath+"<br>\n";
    articleGenerator(articleBlogPath, getTitle(articleBlogPath), "28/08/20", "Quick description");
  }
  console.log(str);
  //document.write(str);
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

function articleGenerator(link, title, dateTime, description){
  var a = document.createElement("a");
  a.href = link;
  var article = document.createElement("article");
  var h3 = document.createElement("h3");
  h3.textContent = title;
  var timeTag = document.createElement("time");
  timeTag.dateTime = dateTime;
  timeTag.textContent = dateTime;
  var p = document.createElement("p");
  p.textContent = description;

  article.appendChild(h3);
  article.appendChild(timeTag);
  article.appendChild(p);
  a.appendChild(article);

  const mainElement = document.querySelector("#articleContainer");
  mainElement.appendChild(a);
}

function getTitle(fille){
  var article = readFile(fille);
  var indexOpentH3 = article.indexOf("<h3>");
  var indexCloseH3 = article.indexOf("</h3>");
  return article.substring(indexOpentH3+4, indexCloseH3);
}