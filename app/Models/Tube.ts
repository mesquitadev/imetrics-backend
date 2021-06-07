import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

import Inspection from 'App/Models/Inspection'
export default class Tube extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column({ serializeAs: null })
  public inspectionId: number
  @column()
  public tube: string
  @column()
  public left: number
  @column()
  public center: number
  @column()
  public right: number

  @belongsTo(() => Inspection, { foreignKey: 'inspectionId' })
  public inspection: BelongsTo<typeof Inspection>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
