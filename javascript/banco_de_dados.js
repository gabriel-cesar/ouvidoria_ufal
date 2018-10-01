function writeFile(key, value){
    //var content = [{login: "Gabriel", CPF: "10608541478"}]
    window.localStorage.setItem(key, JSON.stringify(value));
}

function readFile(key){
    var entrada = window.localStorage.getItem(key);
    var content = JSON.parse(entrada);

    return content;
}