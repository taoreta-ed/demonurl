/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('urls', (table) => {
        table.increments('id');
        table.text("original_url").notNullable();
        table.string("slug").unique().notNullable();
        table.integer("visits").defaultTo(0);
        table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("urls");
};
