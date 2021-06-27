const DEBUG = false;
var snippets = Array();

/* var snippets = {
 *      'java': [Snippet, Snippet, Snippet],
 *      'exalgo': [Snippet, Snippet]
 * }
 */

function main(file = ""){
    const codesFile = (file==""?"assets/img/snippets.json":file);
    snippets = getSnippets(codesFile);
    if(DEBUG) console.log(snippets);
}


/* 
    ╔════════════════════════════╗ 
    ║    Load functionalities    ║
    ╚════════════════════════════╝
*/
/**
 * Get an Array of Picture objects
 * containing all the pics of the given file.
 * @param {*} JsonFile json file contains pictures.
 */
 function getSnippets(JsonFile){
    // JSON object containing all the pictures from the file
    const JsonData = JSON.parse(reader(JsonFile));
    const snippets = Array();
    Object.keys(JsonData).forEach(function(lang){
        snippets[lang] = Array();
        JsonData[lang].forEach(snip => 
            snippets[lang].push(
                new Snippet(snip.title, snip.description, snip.url, lang)
            )
        );
    });
    // foreach java snippet
    /*
    snippets['java'] = Array();
    JsonData.java.forEach(
        snip => 
            snippets['java'].push(
                new Snippet(snip.title, snip.description, snip.url, "java")
            )
        );
    snippets['exalgo'] = Array();
    JsonData.exalgo.forEach(
        snip => 
            snippets['exalgo'].push(
                new Snippet(snip.title, snip.description, snip.url, "exalgo")
            )
        );*/
    if(DEBUG) console.log("getSnippets[_sout_] >");
    if(DEBUG) console.log(snippets);
    return snippets;
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