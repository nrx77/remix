import { Composer } from '../composer'
import { __ } from '../i18n'

const composer = new Composer()

export default composer

composer.command(['cache', 'caches'], ctx => {
  ctx.session.admins = []
  ctx.session.search = undefined
  ctx.session.loop = false
  return ctx.reply(__('caches_deleted'))
})
