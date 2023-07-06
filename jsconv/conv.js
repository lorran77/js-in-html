// selecionando os objets atraves de seus ID  //
const inputElement = document.querySelector('#input');

const fromElement = document.querySelector('#from');
const toElement = document.querySelector('#to');

const outputElement = document.querySelector('#output');


const messageElement = document.querySelector('#message');


function Convert()
{
    // selecionar apenas valor DE e PARA //
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    // Poderia ser colocado embaixo da criação das consts acima //



    // se a unidade de entrada for igual a de saida //
    if(fromValue == toValue)
    {
        outputElement.value= inputElement.value;
        messageElement.textContent= '';
        return //finaliza a função
    }



    // Passo 1: converter o valor de entrada para metros e gravar na variavel METERS
    let meters;

    switch(fromValue)
    {
        case 'm': meters = inputElement.value;
        break;

        case 'km': meters = inputElement.value * 1000;
        break;

        case 'cm': meters = inputElement.value / 100;
        break;

        case 'mm': meters = inputElement.value / 1000;
        break;
    }


    // Passo 2: converter o valor em metros para o valor de saida e salvar na variavel RESULT
    let result;

    switch(toValue)
    {
        case 'm': result = meters;
        break;

        case 'km': result = meters * 1000;
        break;

        case 'cm': result = meters / 100;
        break;

        case 'mm': result = meters / 1000;
        break;
    }


    

}
