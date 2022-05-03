var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("O ::first-... é o pseudo-elemento que seleciona a primeira letra da primeira linha de um bloco. Estamos falando de qual pseudo-elemento? \n \n 1 - ::first-element \n 2 - ::first-letter");

        if (question == 1) 
        {
            location.replace("./gameover-pseudo-element.html");
            break;
        }
        else if (question == 2)
        {
            location.replace("./congratulations-pseudo-element.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}