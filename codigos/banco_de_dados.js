function writeFile(){
    var content = [{login: "Gabriel", CPF: "10608541478"}]
            
    window.localStorage.setItem("key", JSON.stringify(content));
}

function readFile(){
    var entrada = window.localStorage.getItem("key");
    var content = JSON.parse(entrada);

    console.log(entrada);

    return content;
}