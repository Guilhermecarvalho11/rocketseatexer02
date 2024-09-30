// Cria uma lista de estudantes
const estudantes = [
  { nome: "Alice", nota1: 8, nota2: 7 },
  { nome: "Bruno", nota1: 6, nota2: 5 },
  { nome: "Carlos", nota1: 9, nota2: 8 },
  { nome: "Diana", nota1: 4, nota2: 5 },
];

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

estudantes.forEach((estudante) => {
  const media = calcularMedia(estudante.nota1, estudante.nota2);
  if (media >= 7) {
    console.log(
      `${estudante.nome} obteve sucesso no concurso com média ${media.toFixed(
        2
      )}.`
    );
  } else {
    console.log(
      `${
        estudante.nome
      } não obteve sucesso no concurso com média ${media.toFixed(2)}.`
    );
  }
});
