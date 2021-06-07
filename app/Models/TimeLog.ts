import { DateTime, Duration } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Task from 'App/Models/Task'

export default class TimeLog extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public taskId: number

  @hasOne(() => Task)
  public task: HasOne<typeof Task>

  @column()
  public description: string

  @column.date()
  public date: DateTime

  @column()
  public working_hours: Duration

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
