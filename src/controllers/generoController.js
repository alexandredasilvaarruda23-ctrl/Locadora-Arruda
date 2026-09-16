const GeneroModel = require("../models/GeneroModel")

const GeneroController = {
    async getAllGeneros(req, res) {
        const generos = await GeneroModel.fidAll()

        return res.json(generos)
    }
}

module.exports = GeneroController