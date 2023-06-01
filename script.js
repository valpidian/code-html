// Funcția pentru deschiderea pop-up-urilor la click pe elementul cu clasa 'format-titlu'
document.querySelectorAll('.format-titlu').forEach(function(element) {
  element.addEventListener('click', function() {
    var popupId = this.getAttribute('data-popup');
    var popup = document.getElementById(popupId);
    
    // Verificăm dacă popup-ul este deja deschis
    var isPopupOpen = popup.style.display === 'block';
    
    // Închidem toate pop-up-urile deschise
    var openPopups = document.getElementsByClassName('popup');
    Array.from(openPopups).forEach(function(openPopup) {
      openPopup.style.display = 'none';
    });
    
    // Dacă popup-ul nu era deja deschis, îl deschidem
    if (!isPopupOpen) {
      popup.style.display = 'block';
    }
  });
});

// Funcția pentru închiderea pop-up-urilor la click în afara acestora
document.addEventListener('click', function(event) {
  var popups = document.getElementsByClassName('popup');
  Array.from(popups).forEach(function(popup) {
    if (!popup.contains(event.target) && !event.target.matches('.format-titlu')) {
      popup.style.display = 'none';
    }
  });
});
