function calcula()
        { 
            let num=parseInt(document.getElementById('numero').value);
            let quadrado;
            quadrado= num**2;
            document.getElementById('resultado').value=quadrado;
        }

        function dobro()
        { 
            let num=parseInt(document.getElementById('numero').value);
            let dobro;
            dobro= num*2;
            document.getElementById('resultadodobro').value=dobro;
        }

        function parimpar()
        {
            let num=parseInt(document.getElementById('numero').value);
            if(num % 2 == 0)
            {
                document.getElementById('resultadoparimpar').value=('Par');
            }
            else
            {
                document.getElementById('resultadoparimpar').value=('impar');
            }

        }