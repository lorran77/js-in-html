function media()
{
    let num1=parseInt(document.getElementById('nota1').value);
    let num2=parseInt(document.getElementById('nota2').value);
    let num3=parseInt(document.getElementById('nota3').value);

    let contamedia;
    contamedia= (num1 + num2 + num3) / 3;
    document.getElementById('resultado').value=contamedia;


    if(contamedia >= 6 )
    {
        document.getElementById('situacao').value=('Aprovado!!!');
        document.getElementById('situacao').style.color= "green";
    }
    else
    {
        document.getElementById('situacao').value=('Reprovado.');
        document.getElementById('situacao').style.color= "red";
    }
}
