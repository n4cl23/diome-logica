const botao = document.getElementById("btnClassificar");

botao.addEventListener("click", function () {
  const nome = document.getElementById("nome").value.trim();
  const xp = Number(document.getElementById("xp").value);
  const resultado = document.getElementById("resultado");

  if (!nome || isNaN(xp) || xp < 0) {
    resultado.innerText = "Preencha os dados corretamente.";
    return;
  }

  let nivel = "";

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  resultado.innerText = `O Herói ${nome} está no nível ${nivel}.`;
});