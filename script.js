function asociacion(valor, modo){

    let tipoModo = modo;
    let contenido = valor.value;
    let tamanho_variable = contenido.length;
    let salida = [];

    for(let i = 0; i < tamanho_variable; i++){

        switch(contenido[i]){

            case 'a':
                if(tipoModo == "encryptMode"){
                    salida[i] = 'ai';
                }else if(tipoModo == "decryptMode"){
                    if(contenido[i] == 'a' && contenido[i+1] == 'i'){ salida[i] = 'a'};
                    i = i + 1;
                }
                break;

            case 'e':
                if(tipoModo == "encryptMode"){
                    salida[i] = 'enter';
                }else if(tipoModo == "decryptMode"){
                    if(contenido[i] == 'e' && contenido[i+1] == 'n' && contenido[i+2] == 't' && contenido[i+3] == 'e' && contenido[i+4] == 'r'){ salida[i] = 'e'};
                    i = i + 4;
                }
                break;

            case 'i':
                if(tipoModo == "encryptMode"){
                    salida[i] = 'imes';
                }else if(tipoModo == "decryptMode"){
                    if(contenido[i] == 'i' && contenido[i+1] == 'm' && contenido[i+2] == 'e' && contenido[i+3] == 's'){ salida[i] = 'i'};
                    i = i + 3;
                }
                break;

            case 'o':
                if(tipoModo == "encryptMode"){
                    salida[i] = 'ober';
                }else if(tipoModo == "decryptMode"){
                    if(contenido[i] == 'o' && contenido[i+1] == 'b' && contenido[i+2] == 'e' && contenido[i+3] == 'r'){ salida[i] = 'o'};
                    i = i + 3;
                }
                break;

            case 'u':
                if(tipoModo == "encryptMode"){
                    salida[i] = 'ufat';
                }else if(tipoModo == "decryptMode"){
                    if(contenido[i] == 'u' && contenido[i+1] == 'f' && contenido[i+2] == 'a' && contenido[i+3] == 't'){ salida[i] = 'u'};
                    i = i + 3;
                }
                break;

            default:
                salida[i] = contenido[i];

        }

    }

    return salida;

}


function LowercaseDetector(Box){

    var lowercase;

    if (Box == "encryptBox"){
        var encrypt_content = document.querySelector(".encrypt_textarea").value;
    } else if (Box == "decryptBox"){
        var encrypt_content = document.querySelector(".decrypt_textarea").value;
    }

    for (let i = 0; i < encrypt_content.length; i++ ){
        if ((encrypt_content.charCodeAt(i) >= 97 && encrypt_content.charCodeAt(i) <= 122 ) || (encrypt_content[i] == " ")){
            lowercase = true;
        } else{
            alert("No estan permitidas las mayusculas ni acentuaciones");
            lowercase = false;
            break;
        }
    }
    
    return lowercase;

}


function Encrypt(){
    isOnly_lowercase = LowercaseDetector("encryptBox");

    if(isOnly_lowercase){
        var encryptMessage = document.getElementById("encryptMsg")
        var encriptado = asociacion(encryptMessage, "encryptMode");
        document.getElementById("decryptMsg").value = encriptado.join("");
        document.getElementById("encryptMsg").value = "";
    }
}


function Decrypt(){
    isOnly_lowercase = LowercaseDetector("decryptBox");

    if(isOnly_lowercase){
        var decryptMessage = document.getElementById("decryptMsg");
        var desencriptado = asociacion(decryptMessage, "decryptMode");
        document.getElementById("encryptMsg").value = desencriptado.join("");
        document.getElementById("decryptMsg").value = "";
    }
}


function Copy(){

    var encryptCaja = document.querySelector(".encrypt_textarea").value;
    var decryptCaja = document.querySelector(".decrypt_textarea").value;
    
    if((encryptCaja == "") && (decryptCaja != "")){
        navigator.clipboard.writeText(decryptCaja);
    }else if((encryptCaja != "") && (decryptCaja == "")){
        navigator.clipboard.writeText(encryptCaja);
    }
}


var encryptBtn = document.getElementById("encryptBtn");
var decryptBtn = document.getElementById("decryptBtn");
var copyBtn = document.getElementById("copy_button");

encryptBtn.onclick = Encrypt;
decryptBtn.onclick = Decrypt;
copyBtn.onclick = Copy;