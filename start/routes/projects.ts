import Route from '@ioc:Adonis/Core/Route'

Route.resource('projects', 'ProjectController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
Route.resource('projects.tasks', 'TaskController')
  .apiOnly()
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
Route.resource('task.timelog', 'TimeLogsController')
  .middleware({
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })
  .apiOnly()
