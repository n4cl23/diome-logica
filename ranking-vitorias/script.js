const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const vitorias = Number(document.getElementById("vitorias").value);
  const derrotas = Number(document.getElementById("derrotas").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
    resultado.innerText = "Preencha os dados corretamente.";
    return;
  }

  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = definirRanking(vitorias);

  resultado.innerText =
    `O Herói tem saldo de ${saldo} e está no ranking ${nivel}.`;
});

function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function definirRanking(vitorias) {

  if (vitorias < 10) {
    return "Não Rankeado";
  }

  if (vitorias <= 20) return "Bronze";
  if (vitorias <= 50) return "Prata";
  if (vitorias <= 80) return "Ouro";
  if (vitorias <= 90) return "Diamante";
  if (vitorias <= 100) return "Lendário";

  return "Imortal";
}