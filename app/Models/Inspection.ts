import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Tube from 'App/Models/Tube'

export default class Inspection extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public wall: string
  @column()
  public location: string
  @column()
  public nominal_tube_dimensions: string
  @column()
  public boiler: string
  @column()
  public minimun_wall: number

  @hasMany(() => Tube)
  public tubes: HasMany<typeof Tube>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
