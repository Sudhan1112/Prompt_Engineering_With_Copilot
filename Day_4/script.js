
// Add a click event listener to the button with id "styleMe" that shows an alert saying "Button clicked!"
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('styleMe');
  if (btn) {
    btn.addEventListener('click', function() {
      alert('Button clicked!');
      document.body.style.backgroundColor = 'blue';
    });
  }
});
