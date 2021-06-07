import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Inspections extends BaseSchema {
  protected tableName = 'inspections'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('wall')
      table.string('location')
      table.string('nominal_tube_dimensions')
      table.string('boiler')
      table.float('minimun_wall')
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
