/*
to enter the passwords:
- remove the capital letters, (everything is in lowercase)
- remove the accent
- the password contains two spaces
*/

console.log(
    "Hello, white rabbit.\n"+
    "You have to find the password.\n"+
    "When you think you've found it, type :\n"+
    "pass(\"[Your password]\")\n"
    );
instructions();

function pass(passwd){
    clue(passwd)
}

function clue(passwd){
    if(atbo(passwd)=="bGEgY2hhaW5lIHJveWFsZQ=="){
        console.log(toba("Y29uZ3JhdHVsYXRpb25zLCB5b3UgZm91bmQgdGhlIGNvZGUuClRvIGdvIHRvIHRoZSBuZXh0IHN0ZXAsIGtub3cgdGhhdCB5b3Ugd2lsbCBmaW5kIGluIHRoZSAnLmtyYScgZmlsZSB0aGF0IHlvdSByZWNlaXZlZCwgdGhlIHBhc3N3b3JkIGZvciBhIG1haWxib3gu"));
    }else{
        no();
        instructions();
    }
}
function no(){
    console.error("[*] Wrong pass. Try again !");
}
function instructions(){
    console.log(
        "To enter the password:\n"+
        "- all lowercase\n"+
        "- without accents\n"+
        "- the password you are looking for contains two spaces"
        );
}

function boat(str){
    return abto(str);
}
function toba(str){
    return bato(str);
}
function atbo(str){
    return obat(str);
}
function bato(str){
    return boat(str);
}
function otab(str){
    return atob(str);
}
function abto(str){
    return otab(str);
}
function obat(str){
    return btoa(str);
}