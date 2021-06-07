import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'

export default class ProjectController {
  public async index({}: HttpContextContract) {
    return Project.query().preload('tasks')
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = request.only(['title', 'description'])
    return await Project.create({
      ...data,
      userId: auth.user?.id
    })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
