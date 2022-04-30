var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Qual a opção correta? \n \n 1 - ::first-element \n 2 - ::first-letter");

        if (question == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=``;
            break;
        }
        else if (question == 2)
        {
            location.replace(".html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}