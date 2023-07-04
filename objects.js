// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) 
{
  const perimetro = 2 * (retangulo.largura + retangulo.altura);
  const area = retangulo.largura * retangulo.altura;
  return { perimetro, area };
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) 
{
    return pessoa.idade >= 18;
}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) 
{
    return Object.values(obj).join("");
}

module.exports = { calcularRetangulo, ehAdulto, concatenaValores };
