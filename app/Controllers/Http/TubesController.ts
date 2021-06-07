import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tube from 'App/Models/Tube'

export default class TubesController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ request, params }: HttpContextContract) {
    const data = request.only(['tube', 'left', 'center', 'right'])
    return Tube.create({
      ...data,
      inspectionId: params.inspection_id
    })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
