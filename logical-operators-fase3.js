var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Qual a opção correta? \n \n 1 - ! \n 2 - ||");

        if (question == 1) 
        {
            location.replace("./gameover-logical-operators.html");
            break;
        }
        else if (question == 2)
        {
            location.replace("./logical-operators-fase4.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}