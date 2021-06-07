import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Project from 'App/Models/Project'
import User from 'App/Models/User'
import TimeLog from 'App/Models/TimeLog'

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public projectId: number

  @belongsTo(() => Project)
  public project: BelongsTo<typeof Project>

  @column({ serializeAs: null })
  public timeLogId: number

  @belongsTo(() => TimeLog)
  public timeLogs: BelongsTo<typeof TimeLog>

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column()
  public title: string

  @column()
  public description: string

  @column.dateTime()
  public due_date: DateTime

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
