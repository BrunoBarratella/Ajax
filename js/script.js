const nome = document.querySelector("#names");
const comentario = document.querySelector("#comments");
const formulario = document.querySelector("#form");
const btnSend = document.querySelector("#btnSend");
const btnShow = document.querySelector("#btnShow");
const saida = document.querySelector("#saida");

btnSend.addEventListener("click", () => {

  adicionaDados();
});

btnShow.addEventListener("click", () => {

  lerDados();
})


function adicionaDados() {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const VNomes = nome.value
    const VComentario = comentario.value

    let fd = new FormData();

    fd.append("names", VNomes);
    fd.append("comments", VComentario);

    fetch('recebe.php', {
      method: 'POST',
      body: fd
    }).then((request) => request.json())
      .then((response) => {
        console.log(response);
        nome.value = '';
        comentario.value = '';
      }).catch((error) => {
        console.log("Ocorreu um erro: " + error);
      });
  });
}

function lerDados() {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    fetch('recebe.php')
      .then((request) => request.json())
      .then((response) => {
        response.forEach(element => {

          let item = document.createElement("h2");

          item.innerHTML = "<hr><p>" + element.names + "</p> <p>" + element.comments + "</p>";
          saida.appendChild(item);
        });
      }).catch((error) => {
        console.log(`Whoops, ocorreu um erro: ${error}`);
      });
  })

}
