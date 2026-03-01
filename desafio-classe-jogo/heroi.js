class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo.toLowerCase()
    }

    atacar() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }

        const ataque = ataques[this.tipo] || "ataque desconhecido"

        return `O ${this.tipo} atacou usando ${ataque}`
    }
}