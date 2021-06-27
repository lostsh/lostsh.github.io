/* 
    ╔════════════════════════════╗ 
    ║   Thumbnails functions     ║
    ╚════════════════════════════╝
*/

/**
 * Show all the snippets,
 * by duplicating dom elemets
 * to create a gallery.
 */
/*
    <div class="snippet">
        <h2>Title</h2>
        <span>Java</Span>
        <img alt="Image"/>
        <p>Description</p>
    </div>
*/
function showSnippets(){
    const mainTag = document.querySelector("main");

    Object.keys(snippets).forEach(function(lang){
        if (DEBUG) console.log(lang);

        const section = document.createElement("section");
        const sectionTitle = document.createElement("h1");
        sectionTitle.textContent = lang;
        section.appendChild(sectionTitle);
        const divSnippetContainer = document.createElement("div");
        divSnippetContainer.className = "snippetContainer";
        section.appendChild(divSnippetContainer);

        // each snippet of thie language
        snippets[lang].forEach(function(snippet){
            if (DEBUG) console.log(snippet);
            const divSnippet = document.createElement("div");
            divSnippet.className = "snippet";
            divSnippet.onclick = showSnippetFullScreen;
            //Create div childs : (<h2>, <span>, <img>, <p>)
            const title = document.createElement("h2");
            title.textContent = snippet.title;
            const span = document.createElement("span");
            span.className = "code"; // ----------------------> Only a test this class is yolo
            span.textContent = snippet.lang;
            const img = document.createElement("img");
            img.src = snippet.url;
            img.alt = snippet.title;
            const desc = document.createElement("p");
            desc.textContent = snippet.desc;
            //adding tags to the div class="snippet"
            divSnippet.appendChild(title);
            divSnippet.appendChild(span);
            divSnippet.appendChild(img);
            divSnippet.appendChild(desc);
            // add the divSnippet to the section
            divSnippetContainer.appendChild(divSnippet);
        });
        mainTag.appendChild(section);
    });
}

/**
 * Display the clicked snippet
 * into full screen mode.
 * @param {*} clickedDom The clicked node
 */
 function showSnippetFullScreen(clickedDom) {
    var snippetDom = clickedDom.srcElement;
    //if the selected node is not the div
    if (clickedDom.srcElement.className != "snippet") {
        snippetDom = clickedDom.srcElement.parentNode;
    }
    if (DEBUG) console.log(snippetDom);

    //get the Snippet object
    var snippet = new Snippet(
        snippetDom.children[0].textContent,
        snippetDom.children[3].textContent,
        snippetDom.children[2].src,
        snippetDom.children[1].textContent);

    if (DEBUG) console.log(snippet);

    //Show the Snippet into full screen
    const mainTag = document.querySelector("main");
    /* <div id="fullScreen" onclick="closeSnippetFullScreen">
     *   <h2>Title</h2>
     *   <span>Lang</span>
     *   <img src="url" />
     *   <p>Description</p>
     * </div>
     */
    const divFull = document.createElement("div");
    divFull.id = "fullScreen";
    //Set the div height same as the main tag height !
    divFull.style.height = mainTag.clientHeight+"px";
    divFull.onclick = closeSnippetFullScreen;
    const h2 = document.createElement("h2");
    h2.textContent = snippet.title;
    divFull.appendChild(h2);
    const span = document.createElement("span");
    span.className = "code";//TTTTTTTTTTTTTTTTTTTTTTTTTTEEEEEEEEEEEEEEESSSSSSSSSSSSSSSTTTTTTTT
    span.textContent = snippet.lang;
    divFull.appendChild(span);
    const img = document.createElement("img");
    img.src = snippet.url;
    img.alt = snippet.title;
    divFull.appendChild(img);
    const p = document.createElement("p");
    p.textContent = snippet.desc;
    divFull.appendChild(p);

    mainTag.appendChild(divFull);
    //Display the snippet
    snippet.show(divFull);
}

/**
 * Remove all tags with fullScreen IDs.
 */
function closeSnippetFullScreen(){
    const mainTag = document.querySelector("main");
    //To be sure to remove all the tags, we use a list
    //even if theorically there is only one fullscreen
    const fullScreenTags = document.querySelectorAll("#fullScreen");
    fullScreenTags.forEach(tag => mainTag.removeChild(tag));
}