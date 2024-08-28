const trash = document.querySelector(".trash");
const popup = document.querySelector(".popup");
const btnFooter = document.querySelectorAll(".footer .btn");
const back = document.querySelector(".back");

//função para abrir
trash.addEventListener("click", function () {
  popup.style.bottom = "0px";
  back.style.display = "block";
});

//funções para fechar

//botão cancelar
btnFooter[0].addEventListener("click", function () {
  popup.style.bottom = "-300px";
  back.style.display = "none";
});

//botão exluir
btnFooter[1].addEventListener("click", function () {
  popup.style.bottom = "-300px";
  back.style.display = "none";
});
