import Route from '@ioc:Adonis/Core/Route'

Route.resource('inspections', 'InspectionsController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
Route.resource('inspection.tube', 'TubesController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
