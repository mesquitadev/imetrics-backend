import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Inspection from 'App/Models/Inspection'

export default class InspectionsController {
  public async index({}: HttpContextContract) {
    return Inspection.query().preload('tubes')
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only([
      'wall',
      'location',
      'nominal_tube_dimensions',
      'boiler',
      'minimun_wall'
    ])
    return await Inspection.create(data)
  }

  public async show({ params }: HttpContextContract) {
    return await Inspection.findOrFail(params.id)
  }

  public async update({ request, params }: HttpContextContract) {
    const inspection = await Inspection.findOrFail(params.id)
    const data = request.only([
      'wall',
      'location',
      'nominal_tube_dimensions',
      'boiler',
      'minimun_wall'
    ])
    inspection.merge(data)
    await inspection.save()
  }

  public async destroy({ params }: HttpContextContract) {
    const inspection = await Inspection.findOrFail(params.id)
    await inspection.delete()
  }
}
