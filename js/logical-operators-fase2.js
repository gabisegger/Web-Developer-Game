var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Retorna verdadeiro caso ambas condições sejam verdadeiras; caso contrário, retorna falso. Estamos falando de qual operador lógico? \n \n 1 - && \n 2 - ||");

        if (question == 1) 
        {
            location.replace("./logical-operators-fase3.html");
            break;
        }
        else if (question == 2)
        {
            location.replace("./gameover-logical-operators.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}