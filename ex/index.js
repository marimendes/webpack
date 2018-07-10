class Pessoa {
  constructor(nome) {
  this.nome = nome
  }
  toString() {
  return `Pessoa: ${this.nome}`
  }
}
const pessoa = new Pessoa('Mariana')
console.log(pessoa.toString())