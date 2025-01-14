var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
    }
    text.innerHTML = spaned;
  }
  
  
  var headline = document.querySelector("h1");
  
  spanText(headline);

  // =================================================================
   setTimeout(() => {
    const img = document.getElementById('heroImage');
    img.style.display = 'none'; // Hides the image after 2 seconds
  }, 2000); // 2000ms = 2 seconds