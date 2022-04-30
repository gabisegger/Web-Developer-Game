var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Qual a opção correta? \n \n 1 - date \n 2 - number");

        if (question == 1) 
        {
            location.replace("./form-fase3.html");
            break;
        }
        else if (question == 2)
        {
            document.getElementsByClassName('content')[0].innerHTML=``;
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}