
function replyButton(right, next, gameOver) {

    while (replyButton != 1 || replyButton != 2 ) {

      var replyButton = prompt('Insira o número da opção correta.');
  
      if (replyButton == right) {
        window.location.href = next
        break
      }
      else if (replyButton == 1 || replyButton == 2) {
        window.location.href = gameOver
        break
      }
      else {
        alert(`Opção inválida`);
      }
    }
  }