import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'

export default class TaskController {
  public async index({}: HttpContextContract) {}

  public async store({ request, auth, params }: HttpContextContract) {
    const data = request.only(['title', 'description'])
    return await Task.create({
      ...data,
      projectId: params.project_id,
      userId: auth.user?.id
    })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
