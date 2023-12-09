document.addEventListener('DOMContentLoaded', function () {
    // Ajoutez un écouteur d'événements au formulaire
    document.getElementById('qcm-form').addEventListener('submit', function (event) {
      event.preventDefault(); // Empêche l'envoi du formulaire

      // Sélectionnez toutes les questions
      var questions = document.querySelectorAll('.question-item');

      // Parcourez chaque question pour vérifier la réponse
      questions.forEach(function (question) {
        // Sélectionnez la réponse correcte pour la question
        var correctAnswer = question.querySelector('.answer[value="true"]');
        
        // Sélectionnez la réponse de l'utilisateur pour la question
        var userAnswer = question.querySelector('.answer:checked');

        // Vérifiez si la réponse de l'utilisateur est correcte
        if (userAnswer === correctAnswer) {
          question.classList.add('correct'); // Appliquez la classe 'correct' pour la couleur verte
          question.classList.remove('incorrect'); // Assurez-vous que la classe 'incorrect' est supprimée
        } else {
          question.classList.add('incorrect'); // Appliquez la classe 'incorrect' pour la couleur rouge
          question.classList.remove('correct'); // Assurez-vous que la classe 'correct' est supprimée
        }
      });

      // Vérifiez si toutes les questions ont la classe 'correct'
      var allCorrect = Array.from(questions).every(function(question) {
        return question.classList.contains('correct');
      });

      // Affichez le message de félicitations si toutes les réponses sont correctes
      var alertElement = document.getElementById('alert');
      if (allCorrect) {
        alertElement.innerHTML = '<div class="alert-title">Bravo! Félicitations à vous!</div>';
      } else {
        // Réinitialisez le message s'il y a des réponses incorrectes
        alertElement.innerHTML = '<div class="alert-title">Réessayez!</div>';
      }
    });
  });
