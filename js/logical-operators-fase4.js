var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Agora que você já está craque em Operadores Lógicos, veja a seguinte var:\n var o2 = false || true;\n O que essa var nos retorna? \n \n 1 - False \n 2 - True");

        if (question == 1) 
        {
            location.replace("./gameover-logical-operators.html");
            break;
            
        }
        else if (question == 2)
        {
            location.replace("./congratulations-logical-operators.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}