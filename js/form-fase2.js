var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Para que seja informado a data de nascimento no formulário, queremos um campo que o usuário informe o ano, mês e dia de nascimento. Nesse caso podemos usar qual type? \n \n 1 - date \n 2 - number");

        if (question == 1) 
        {
            location.replace("./form-fase3.html");
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