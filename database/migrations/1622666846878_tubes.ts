import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Tubes extends BaseSchema {
  protected tableName = 'tubes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tube')
      table.float('left')
      table.float('center')
      table.float('right')
      table
        .integer('inspection_id')
        .unsigned()
        .references('id')
        .inTable('inspections')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
