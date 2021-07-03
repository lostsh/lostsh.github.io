class BlogPost{
    /**
     * Blog ticket
     * @param {*} title article title
     * @param {*} url url of the article ticket
     * @param {*} dt_post datetime post
     * @param {*} dt_update datetime update
     * @param {*} desc description
     * @param {*} thumbnail url of the thumbnail picture
     */
    constructor(title, url, dt_post, dt_update, desc, thumbnail){
        this.title = title;
        this.url = url;
        this.datetime_post = dt_post;
        this.datetime_update = dt_update;
        this.description = desc;
        this.thumbnail = thumbnail;
    }
    
    /**
     * 
     * @param {*} anchor DOM element of the <div>
     */
    show(anchor){
        const viewerDom = anchor.children;
        if(viewerDom.length != 4) return 1;
        //set the div clickable
        const url = this.url;//smol ugly thick to use anonymous func with event listener of a scoped var
        anchor.addEventListener('click', function(){window.location = url});
        //Title
        viewerDom[0].textContent = this.title;
        //datime
        viewerDom[1].textContent = this.datetime_post + "_" + this.datetime_update;
        //Picture
        viewerDom[2].src = this.thumbnail;
        viewerDom[2].alt = this.title;
        //Description
        viewerDom[3].textContent = this.description;
        //everythig goes right
        return 0;
    }
}