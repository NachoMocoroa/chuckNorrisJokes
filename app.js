var chuckNorrisJokes = (function() {
  
    var module = {
  
      getJokes: function(e) {
        const number = document.querySelector('input[type="number"]').value;
        const xhr = new XMLHttpRequest();
      
        xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
        xhr.onload = function() {
          if(this.status === 200) {
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type === 'success') {
              response.value.forEach(function(joke){
                output += `<li>${joke.joke}</li>`;
              });
            } else {
              output += '<li>Something went wrong</li>';
            }
            document.querySelector('.jokes').innerHTML = output;
          }
        }
        xhr.send();
        e.preventDefault();
      },
  
      addListeners: function() {
        document.querySelector('.get-jokes').addEventListener('click', module.getJokes);
      },
  
      init: function() {
        module.addListeners();
        console.log('- chuckNorrisJokes initialized');
      }
    };
  
    return {
      init: module.init
    };
  
  })();
  
  document.addEventListener('DOMContentLoaded', chuckNorrisJokes.init());
  