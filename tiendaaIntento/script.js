
  function CambiarModo() {
    var body = document.getElementById ("bod");
    if (body.classList.contains ("ModoNoche")) {
        body.classList.remove ("ModoNoche");
      } else {
        body.classList.add ("ModoNoche"); 

        }
    }
    