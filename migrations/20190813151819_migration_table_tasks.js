exports.up = function (knex, Promise) {
    return knex.schema.createTable('tasks', table => {
        table.increments('id').primary()
        table.string('desc').notNull()
        table.datetime('estimateAt')
        table.datetime('doneAt')
        table.Integer('userId').notNull()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('tasks')
};
