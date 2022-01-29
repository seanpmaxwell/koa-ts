import { Knex } from "knex";


/**
 * Create users.
 * 
 * @param knex 
 * @returns 
 */
export async function up(knex: Knex): Promise<void> {
    if (await knex.schema.hasTable('users')) {
        return;
    }
    // Create database schema. You should use knex migration files
    // to do this. We create it here for simplicity.
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('email', 255).unique();
        table.string('name', 25);
        table.timestamp('date').notNullable().defaultTo(knex.fn.now());
    });
}


/**
 * Drop users.
 * 
 * @param knex 
 * @returns 
 */
export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTableIfExists('users');
}

