var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Qual a opção correta? \n \n 1 - insert \n 2 - content");

        if (question == 1) 
        {
            location.replace("./gameover-pseudo-element.html");
            break;
        }
        else if (question == 2)
        {
            location.replace("./pseudo-element-fase3.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}