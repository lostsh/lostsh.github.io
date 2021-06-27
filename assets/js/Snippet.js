/**
 * Object contain a picture 
 * with a title and a description.
 * 
 * @param {*} title title of the pic.
 * @param {*} desc description.
 * @param {*} url path of the img file.
 * @param {*} lang programming languange.
 */
 function Snippet(title, desc, url, lang){
    this.title = title;
    this.desc = desc;
    this.url = url;
    this.lang = lang;

    /**
     * <div class/id="??">
     *      <h2>Title</h2>
     *      <span>Lang</span>
     *      <img alt="Image" />
     *      <p>Description</p>
     * </div>
     * @param {*} anchor DOM element of the <div>
     */
    this.show = function(anchor){
        const viewerDom = anchor.children;
        //Title
        viewerDom[0].textContent = title;
        //Lang
        viewerDom[1].textContent = lang;
        //Picture
        viewerDom[2].src = url;
        viewerDom[2].alt = title;
        //Description
        viewerDom[3].textContent = desc;
    }
}