
// Ligando ao site que esta fazendo 
const urlViaCep = "https://viacep.com.br/ws/[[cep]]/json";

function LimparCep(){
    document.getElementsByClassName("inputCEP")[0].value = "";
    document.getElementsByClassName("inputLogradouro")[0].value = "";
    document.getElementsByClassName("inputComplemento")[0].value = "";
    document.getElementsByClassName("inputNumero")[0].value = "";
    document.getElementsByClassName("inputBairro")[0].value = "";
    document.getElementsByClassName("inputLocalidade")[0].value = "";
    document.getElementsByClassName("inputUF")[0].value = "";

    document.getElementsByClassName("inputCEP")[0].focus();
}

// Forma atravez do FETCH

function BuscarCepFetch(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    let cep = document.getElementsByClassName("inputCEP")[0].value;

    let url = urlViaCep.replace("[[cep]]",cep);

    fetch(url, requestOptions)
        .then((response) =>{
            if(response.ok){
                return response.json(); // convertendo a resposta em JSON
            }

            throw new Error(`ERRO: HTTP ${response.status}`); //exibe o erro no console
        })
        .then((result) => {
            document.getElementsByClassName("inputLogradouro")[0].value = result.logradouro || "";
            document.getElementsByClassName("inputComplemento")[0].value = result.complemento || "";
            document.getElementsByClassName("inputBairro")[0].value = result.bairro || "";
            document.getElementsByClassName("inputLocalidade")[0].value = result.localidade || "";
            document.getElementsByClassName("inputUF")[0].value = result.uf || "";


            document.getElementsByClassName("inputLogradouro")[0].disabled = true;
            document.getElementsByClassName("inputComplemento")[0].disabled = true;
            document.getElementsByClassName("inputBairro")[0].disabled = true;
            document.getElementsByClassName("inputLocalidade")[0].disabled = true;
            document.getElementsByClassName("inputUF")[0].disabled = true;

            document.getElementsByClassName("inputNumero")[0].focus();
        }) 
        .catch((erro) => {
            alert(`Erro ao buscar o CEP\n${erro}`)
        });
}

// Fim da forma FETCH

// Forma usando o XHR

function BuscarCep(){
    let cep = document.getElementsByClassName("inputCEP")[0].value;
    let url = urlViaCep.replace("[[cep]]", cep);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 || xhr.status === 200){
            const result = JSON.parse(xhr.responseText); //converter em JSON

            document.getElementsByClassName("inputLogradouro")[0].value = result.logradouro || "";
            document.getElementsByClassName("inputComplemento")[0].value = result.complemento || "";
            document.getElementsByClassName("inputBairro")[0].value = result.bairro || "";
            document.getElementsByClassName("inputLocalidade")[0].value = result.localidade || "";
            document.getElementsByClassName("inputUF")[0].value = result.uf || "";


            // document.getElementsByClassName("inputLogradouro")[0].disabled = true;
            // document.getElementsByClassName("inputComplemento")[0].disabled = true;
            // document.getElementsByClassName("inputBairro")[0].disabled = true;
            // document.getElementsByClassName("inputLocalidade")[0].disabled = true;
            // document.getElementsByClassName("inputUF")[0].disabled = true;

            const inputs = ["inputLogradouro", "inputComplemento", "inputBairro", "inputLocalidade", "inputUF"];

            inputs.forEach((inputClass) => {
                document.getElementsByClassName(inputClass)[0].disabled = true;
            });

            document.getElementsByClassName("inputNumero")[0].focus();
        } else {
            alert("Erro ao buscar CEP. status HTTP:", xhr.status);
        }
    }

    xhr.onerror = function(){
        alert("Erro ao buscar CEP");
    }
    xhr.send();
}

// Fim da forma XHR

document.getElementsByClassName("inputCEP")[0].addEventListener('change', function(){
    
    document.getElementById("loading").style.display = "block"; //apareceu a margarida
    
    BuscarCepFetch();

    setTimeout(function(){
        document.getElementById("loading").style.display = "none"; //desapareceu a margarida
    }, 500)
    
});

function hideOrShowLoading(tipo){
    if(tipo == "hide")
    document.getElementById("loading").style.display = "none";
    else
    document.getElementById("loading").style.display = "block";
}