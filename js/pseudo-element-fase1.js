var question;

//primeira fase 
        function replyButton() {

        while(question != 1 || question != 2) {

            question = prompt("Para começarmos, o pseudo-elemento é... \n \n 1 - uma palavra-chave adicionada a um seletor que permite que você estilize uma parte específica do elemento selecionado. \n 2 - utilizado para estilizar um elemento baseado em seu estado.");

        if (question == 1) 
        {
            location.replace("./pseudo-element-fase2.html");
            break;
        }
        else if (question == 2)
        {
            location.replace("./gameover-pseudo-element.html");
            break;
        }
        else 
        {
            alert(`Digite 1 ou 2`);
            break;
        }
    }

}