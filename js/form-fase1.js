var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("No campo Nome de um formulário, no input usamos qual type? \n \n 1 - text \n 2 - name");

        if (question == 1) 
        {
            location.replace("./form-fase2.html");
            break;
        }
        else if (question == 2)
        {
            location.replace("./gameover-form.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}