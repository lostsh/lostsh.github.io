/**
 * This main function use an index file, and then generate a article for eatch blog post in the index file, in reverse order
 **/
function main(){
  var blogPath = "../blog/";
  var posts = readFile(blogPath+"postsIndex.txt").split('\n');

  var str = "";
  var nbPosts = posts.length-1;
  for(var i in posts){
    var currentPost = nbPosts-i;
    if(!posts[currentPost]==""){
      var articleBlogPath = blogPath+posts[currentPost];
      str+="Post : "+articleBlogPath+"<br>\n";
      articleGenerator(articleBlogPath, getTitle(articleBlogPath), getDateFromPath(posts[currentPost]), getSummary(posts[currentPost]));
    }
  }
  console.log(str);
}

/**
 * Read file return his content
 * @apram file path
 * @return row content of the file
 */
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

/**
 * Generate the HTML article and add it into the node with id="articleContainer"
 * 
 * Generate an article flowing this template :
 * <a href="../blog/YYYY-MM-DD/article-title.html">
 *  <article>
 *    <h3>Article title</h3>
 *    <time datetime="2020-08-19">2020-08-19</time>
 *    <p>Quick description</p>
 *  </article>
 * </a>
 * @param {*} link Path to the article.html file (used for href)
 * @param {*} title Title of the article
 * @param {*} dateTime Publication date of the article
 * @param {*} description Sumary of the article content
 */
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

/**
 * Get the title of an article reading the article.html file
 * @param {*} fille path of the article file
 * @return text between <h3></h3> tag
 */
function getTitle(fille){
  var article = readFile(fille);
  var indexOpentH3 = article.indexOf("<h3>");
  var indexCloseH3 = article.indexOf("</h3>");
  return article.substring(indexOpentH3+4, indexCloseH3);
}

/**
 * Get the date of an article with the name of the folder
 * @param {*} strPath path to the article.html file
 * @return date of the article YYYY-MM-DD
 */
function getDateFromPath(strPath){
  return strPath.substring(0, strPath.indexOf("/"));
}

function getSummary(fille){
  var summary = "";
  var article = readFile(fille);
  var indexOfFisrtPTagOpen = article.indexOf("<p>");
  var indexOfFirstPTagClose = article.indexOf("</p>");
  var firstPTagContent = article.substring(indexOfFisrtPTagOpen+3, indexOfFirstPTagClose);

  var nbOfWorld = firstPTagContent.split(" ").length;
  summary = firstPTagContent;
  if(nbOfWorld > 7 && nbOfWorld < 25){
    summary = summary.substring(0, indexOfStr(summary, " ", 13));
    nbOfWorld = summary.split(" ").length;
  }else if(nbOfWorld >= 25){
    summary = summary.substring(0, indexOfStr(summary, " ", 20));
  }
  return summary;
}

function indexOfStr(str, sertchedStr, nbOfRepetion){
  var index = 0;
  for(var i=0;i<nbOfRepetion;i++){
    index = str.indexOf(sertchedStr, index+1);
  }
  return index;
}