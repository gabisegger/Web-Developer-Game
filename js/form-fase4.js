var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Para finalizar nosso formulário, precisamos de um botão para enviar nosso formulário. Qual o type correto? \n \n 1 - button \n 2 - submit");

        if (question == 1) 
        {
            location.replace("./gameover-form.html");
            break;
            
        }
        else if (question == 2)
        {
            location.replace("./congratulations-form.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}