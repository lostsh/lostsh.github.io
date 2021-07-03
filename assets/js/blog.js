function main(nbRequiredPosts) {
    var baseUrl = "../../blog/";
    var postContainerAnchor = document.querySelector('#blogPostContainer');

    var posts = getBlogPosts(baseUrl+'postsIndex.json');
    posts.forEach(function(p){
        var anchor = createHtmlPost(postContainerAnchor);
        console.log(p.url);
        p.show(anchor);
    });
}

function createHtmlPost(baseAnchor){
    const blogPostDiv = document.createElement('div');
    blogPostDiv.className = "blogpost";
    var h2 = document.createElement("h2");
    blogPostDiv.appendChild(h2);
    var span = document.createElement("span");
    blogPostDiv.appendChild(span);
    var img = document.createElement("img");
    blogPostDiv.appendChild(img);
    var p = document.createElement("p");
    blogPostDiv.appendChild(p);

    //add div to the blog post container
    baseAnchor.appendChild(blogPostDiv);
    return blogPostDiv;
}

/**
 * Get an array of all blog posts of the file.
 * @param {*} JsonFile 
 * @returns Array of BlogPost
 */
function getBlogPosts(JsonFile){
    const JsonData = JSON.parse(reader(JsonFile));
    const posts = Array();
    JsonData.articles.forEach( article => 
        posts.push(
            new BlogPost(
                article.title, 
                article.url,
                article.datetime_post,
                article.datetime_update,
                article.description,
                article.thumbnail
            )
        )
    );
    return posts;
}

/**
 * Read file return his content
 * @apram file path
 * @return row content of the file
 */
 function reader(fileUrl) {
    var request = new XMLHttpRequest();
    var content;
    request.open("GET", fileUrl, false);
    request.send(null);
    if (request.readyState === 4) {
        content = request.responseText;
    }
    return content;
}