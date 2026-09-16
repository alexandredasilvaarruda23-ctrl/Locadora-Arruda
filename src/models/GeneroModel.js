const connection = require("../database/connection")

const GeneroModel = {
    async fidall() {
        const result = await connection.raw("SELECT * FROM genero")
        return result
    },

    async create(data) {
        const { nome } = data

        const result = await connection.raw(
            "INSERT INTO generos (nome) VALUES (?)",
            [ nome]
        )
    }
}

module.exports = GeneroModel