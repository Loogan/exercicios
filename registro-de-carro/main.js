const MARCA = document.getElementById("marca");
const MODELO = document.getElementById("modelo");
const ANO = document.getElementById("ano");
const KM = document.getElementById("quilometragem");
const LIMPAR = document.getElementById("limpar");
const REGISTRAR = document.getElementById("registrar");
const REGISTRADOS = document.getElementById("registrados");
const RODADOS = document.getElementById("rodados");
const ALERTA = document.getElementById("alerta");
const TABELA = document.getElementById("tabela");

let carros = [];
let contador = 0;

REGISTRAR.addEventListener("click", () => {
    
    //validação de campos
    if (MARCA.value == "" && MODELO.value == "" && ANO.value == "" && KM.value == ""){
        alert("Preencha todos os campos!")
        return;
    }
    
    //validação de Ano
    if(ANO.value < 0 || ANO.value > 2024){
        alert("Ano inválido!")
        return;
    }

    //validação de KM
    if(KM.value < 0){
        alert("A quilometragem não pode ser negativa!")
        return;
    }

    //media de km/ano
    let mediaKmAno = 0;
    if (KM.value !== 0) {
        mediaKmAno = (KM.value / (2024 - ANO.value)).toFixed(2);
    } else {
        mediaKmAno = 0
    }

    //criando objeto carro
    let carro = {
        marca: MARCA.value,
        modelo: MODELO.value,
        ano: ANO.value,
        quilometragem: KM.value,
        media: mediaKmAno 
    };
    //adicionando carro no array
    carros.push(carro);
    console.log(carros);

    //atualizando quantidade de carros registrados
    REGISTRADOS.innerHTML = carros.length

    // verificando carro com mais de 100.000 km rodados
    if (KM.value > 100000){
        contador++
        RODADOS.innerHTML = contador
        
    }
    
    // Atualizar a tabela com o novo carro registrado
    adicionarCarroTabela(carro);

})

LIMPAR.addEventListener("click", () => {
    MARCA.value = ""
    MODELO.value = ""
    ANO.value = ""
    KM.value = ""
})

function adicionarCarroTabela(carro) {
    let novaLinha = TABELA.insertRow();

    let celulaMarca = novaLinha.insertCell(0);
    let celulaModelo = novaLinha.insertCell(1); 
    let celulaAno = novaLinha.insertCell(2);
    let celulaQuilometragem = novaLinha.insertCell(3);
    let celulaMedia = novaLinha.insertCell(4);

    celulaMarca.innerHTML = carro.marca;
    celulaModelo.innerHTML = carro.modelo;
    celulaAno.innerHTML = carro.ano;
    celulaQuilometragem.innerHTML = carro.quilometragem;
    celulaMedia.innerHTML = carro.media;
}


// km/2024-ano

