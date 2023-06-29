function inserir() 
{
    let itemusuario= document.getElementById('entradausuario').value;

    let textnode= document.createTextNode(itemusuario);

    let elementofilholi = document.createElement('li');
    elementofilholi.appendChild(textnode);

    let elementopaiul = document.getElementById('lista');
    elementopaiul.appendChild(elementofilholi);
}

