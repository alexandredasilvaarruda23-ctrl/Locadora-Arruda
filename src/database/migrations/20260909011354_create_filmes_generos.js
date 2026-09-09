/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("filmes_generos", (table) => {
        table.increments("id").primary()

        // relações
        table.integer("filme_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("filmes")
            .onDelete()

        table.integer("genero_id")
            .unsigned()
            .references("id")
            .inTable("filmes")

        table.date("alugado_em").notNullable()
        table.date("devolvido_em")

        table.timestamps(true,true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
