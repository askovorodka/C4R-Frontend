/* eslint-disable global-require */

// The top-level (parent) route
import { BoxPage } from './Box'
import { HomePage } from './Home'
import { InventoryPage } from './Inventory'
import { UserPage } from './User'
import { ProfileSettingsPage } from './ProfileSettings'
import { UserConfigPage } from './UserConfig'
import { TradeUrlPage } from './TradeUrl'
import { ProfileRatingsPage } from './ProfileRatings'
import { ProfileVipClubPage } from './ProfileVipClub'
import { ProfileMessagesPage } from './ProfileMessages'
import { ProfileInvitePage } from './ProfileInvite'
import { ProfileQuestsPage } from './ProfileQuests'
import { NotFoundPage } from './NotFound'
import { Profile } from './Profile/index'
import { EmailToken } from './EmailToken'
import { AuthToken } from './AuthToken'
import { Referral } from './Referral'
import { About } from './About'
import { Monster } from './Monster/index'

const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/auth/:token',
      action: (context) => ({component: <AuthToken params={context.params} />})
    },
    {
      path: '/email/:token',
      action: (context) => ({component: <EmailToken params={context.params} />})
    },
    {
      path: '/',
      action: () => ({
        chunks: ['home'],
        title: 'Cases4Real',
        component: <HomePage />
      })
    },
    {
      path: '/about',
      action: () => ({component: <About />})
    },
    {
      path: '/box/:id',
      action: (context) => ({component: <BoxPage params={context.params} />})
    },
    {
      path: '/profiles/:id',
      action: (context) => ({component: <Profile params={context.params} />})
    },
    {
      path: '/profile/inventory',
      action: () => ({component: <InventoryPage />})
    },
    {
      path: '/user/:id',
      action: (context) => ({component: <UserPage params={context.params} />})
    },
    {
      path: '/profile/settings',
      action: () => ({component: <ProfileSettingsPage />})
    },
    {
      path: '/profile/configs',
      action: () => ({component: <UserConfigPage />})
    },
    {
      path: '/profile/tradeurl',
      action: () => ({component: <TradeUrlPage />})
    },
    {
      path: '/profile/rating',
      action: () => ({component: <ProfileRatingsPage />})
    },
    {
      path: '/profile/vip-club',
      action: () => ({component: <ProfileVipClubPage />})
    },
    {
      path: '/profile/messages',
      action: () => ({component: <ProfileMessagesPage />})
    },
    {
      path: '/profile/invite',
      action: () => ({component: <ProfileInvitePage />})
    },
    {
      path: '/profile/quests',
      action: () => ({component: <ProfileQuestsPage />})
    },
    {
      path: '/profile/referral',
      action: () => ({component: <Referral />})
    },
    {
      path: '/monster/box/:type',
      action: (context) => ({component: <Monster type={context.params.type} />})
    },
    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      action: () => ({component: <NotFoundPage />})
    }
  ]

  // async action ({next}) {
  //   // Execute each child route until one of them return the result
  //   const route = await next()
  //
  //   // Provide default values for title, description etc.
  //   route.title = `${route.title || 'Cases4Real'}`
  //   route.description = route.description || ''
  //
  //   return route
  // }
}

// The error page is available by permanent url for development mode
// if (__DEV__) {
//   routes.children.unshift({
//     path: '/error',
//     action: require('./error').default
//   })
// }

export default routes
