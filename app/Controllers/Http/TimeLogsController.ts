import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TimeLog from 'App/Models/TimeLog'
import Task from 'App/Models/Task'

export default class TimeLogsController {
  public async index({}: HttpContextContract) {
    return Task.query()
  }

  public async store({ request, params }: HttpContextContract) {
    const data = request.only(['description', 'date', 'working_hours'])
    return await TimeLog.create({
      ...data,
      taskId: params.task_id
    })
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
