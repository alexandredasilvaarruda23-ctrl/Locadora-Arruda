const FilmeModel = require("../models/FilmeModels")

const FilmeController = {
    async getAllFilmes(req, res) {
        const filmes = await FilmeModel.getAllFilmes()

        return res.json(filmes)
    },

    async createFlme(params) {
        const {
            titulo,
            directorId,
            genero
        } = req.body

        const filme = {
            titulo,
            directorId
        }

        const filmeId = await FilmeModel.create(filme, genero)
    
        return res.status(201).jason({ id: filmeId})
    }

}

module.exports = FilmeController