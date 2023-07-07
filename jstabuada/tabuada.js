let num= document.getElementById('numero').value;

function tabuada()
{
    for(loop=9; loop<10; loop++)
        {
            let operacao = num * loop;

            console.log(operacao);
            // const message = `${num} x ${loop} = ${resultado} `;
        }
}