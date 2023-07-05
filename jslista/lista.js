function inserir() 
{
    let itemusuario= document.getElementById('entradausuario').value;

    let textnode= document.createTextNode(itemusuario);

    let elementofilholi = document.createElement('li');
    // elementofilholi.style.listStyle = 'number'; 
    elementofilholi.appendChild(textnode);

    let elementopaiol = document.getElementById('lista');
    elementopaiol.appendChild(elementofilholi);
}



function apagarultimo()
{
    let elementopaiol = document.getElementById('lista');
    let itemremover = elementopaiol.lastElementChild;
    elementopaiol.removeChild(itemremover);
}

function apagarprimeiro()
{
    let elementopaiol = document.getElementById('lista');
    let itemremover = elementopaiol.firstElementChild;
    elementopaiol.removeChild(itemremover);
}

function apagarespecifico()
{
    let elementopaiol = document.getElementById('lista');
    let itemremover = document.getElementById('campoNumRemover').value;

    let item = elementopaiol.childNodes[itemremover];
    elementopaiol.removeChild(item);
}



    

