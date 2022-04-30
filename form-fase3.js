var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Qual a opção correta? \n \n 1 - text \n 2 - textarea");

        if (question == 1) 
        {
            document.getElementsByClassName('content')[0].innerHTML=``;
            break;
            
        }
        else if (question == 2)
        {
            location.replace("./form-fase4.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}